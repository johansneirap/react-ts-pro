import { useFormik } from 'formik';
import * as Yup from 'yup';

export const FormikYupPage = () => {

    const { handleSubmit, errors, touched, getFieldProps } = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: ""
        },
        onSubmit: values => console.log(values),
        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(15, 'Must be 15 or less characters')
                .required('Required'),
            lastName: Yup.string()
                .max(15, 'Must be 15 or less characters')
                .required('Required'),
            email: Yup.string().email().required('Required')
        })
    });

    return (
        <div>
            <h1>Formik YUP</h1>

            <form noValidate onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name</label>
                <input type="text" { ...getFieldProps('firstName') }/>
                {touched.firstName && errors.firstName && <span>{errors.firstName}</span>}

                <label htmlFor="lastName">Last Name</label>
                <input type="text" { ...getFieldProps('lastName') }/>
                {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

                <label htmlFor="email">Email</label>
                <input type="email" { ...getFieldProps('email') }/>
                {touched.email && errors.email && <span>{errors.email}</span>}

                <button type="submit">Submit</button>

            </form>
        </div>
    )
}
