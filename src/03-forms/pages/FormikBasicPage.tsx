import { FormikErrors, useFormik } from 'formik'

interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
}

export const FormikBasicPage = () => {

  const validate = ( { firstName, lastName, email }: FormValues ) => {
    const errors: FormikErrors<FormValues> = {};

    if ( !firstName ) errors.firstName = 'Required';
    else if ( firstName.length > 15 ) errors.firstName = 'First name must be less than 15 characters';

    if ( !lastName ) errors.lastName = 'Required';
    else if ( lastName.length > 20 ) errors.lastName = 'First name must be less than 20 characters';

    if ( !email ) errors.email = 'Required';
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email))
    errors.email = 'Invalid email address';

    return errors;
  }

  const { handleChange, values, handleSubmit, errors, touched, handleBlur } = useFormik({
      initialValues: {
          firstName: "",
          lastName: "",
          email: ""
      },
      onSubmit: values => console.log(values),
      validate,
  });

  return (
    <div>
        <h1>Formik tutorial</h1>

        <form noValidate onSubmit={ handleSubmit }>
            <label htmlFor="firstName">First Name</label>
            <input 
                type="text" 
                name="firstName"
                onBlur={ handleBlur }
                onChange={ handleChange }
                value={ values.firstName }
            />
            { touched.firstName && <span>{ errors.firstName }</span> }

            <label htmlFor="lastName">Last Name</label>
            <input 
                type="text" 
                name="lastName"
                onBlur={ handleBlur }
                onChange={ handleChange }
                value={ values.lastName }
            />
            { touched.lastName && <span>{ errors.lastName }</span> }

            <label htmlFor="email">Email</label>
            <input 
                type="email" 
                name="email"
                onBlur={ handleBlur }
                onChange={ handleChange }
                value={ values.email }
            />
            { touched.email && errors.email && <span>{ errors.email }</span> }

            <button type="submit">Submit</button>

        </form>
    </div>
  )
}
