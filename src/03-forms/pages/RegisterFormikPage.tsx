import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup'
import '../styles/styles.css';


export const RegisterFormikPage = () => {

  return (
    <div>
        <h1>Register Formik Page</h1>
        <hr />
        <Formik 
        initialValues={{
            name: "",
            email: "",
            password1: "",
            password2: "",
        }}
        onSubmit={ values => console.log(values)}
        validationSchema={
            Yup.object({
                name: Yup.string().required('Please enter your name').min( 2, 'Name with at least 2 characters' ),
                email: Yup.string().email().required('Please enter your email'),
                password1: Yup.string()
                    .required( 'Please type a password' )
                    .min( 6, 'Your password must have at least 6 characters' ),
                password2: Yup.string()
                    .required( 'Please retype your password' )
                    .oneOf( [Yup.ref('password1')], 'Both passwords must match' ),
            })
        }
        >
            {
                ( { handleReset } ) => (
                    <Form noValidate>
                        <Field name="name" type="text" placeholder="Name"/>
                        <ErrorMessage  name="name" component="span"/>

                        <Field name="email" type="email" placeholder="Email"/>
                        <ErrorMessage  name="email" component="span"/>

                        <Field name="password1" type="password" placeholder="Password"/>
                        <ErrorMessage  name="password1" component="span"/>

                        <Field name="password2" type="password" placeholder="Repeat password"/>
                        <ErrorMessage  name="password2" component="span"/>

                        <button type="submit">Register</button>
                        <button onClick={ handleReset }>Reset</button>
                    </Form>
                )
            }
        </Formik>
    </div>
  )
}
