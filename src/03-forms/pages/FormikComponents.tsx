import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export const FormikComponents = () => {

    return (
        <div>
            <h1>Formik Components</h1>
            <Formik
                initialValues={ {
                    firstName: "",
                    lastName: "",
                    email: "",
                    terms: false,
                    jobType: "",
                } }
                onSubmit={ ( values ) => console.log(values) }
                validationSchema={
                    Yup.object({
                        firstName: Yup.string()
                            .max(15, 'Must be 15 or less characters')
                            .required('Required'),
                        lastName: Yup.string()
                            .max(15, 'Must be 15 or less characters')
                            .required('Required'),
                        email: Yup.string().email().required('Required'),
                        terms: Yup.boolean().oneOf([true], 'Must accept terms and conditions'),
                        jobType: Yup.string().notOneOf(['', 'Pick something pls']).required('Required')
                    })
                }
                >
                    {
                        ( formik ) => (
                            <Form noValidate>
                                <label htmlFor="firstName">First Name</label>
                                <Field name="firstName" type="text"/>
                                <ErrorMessage name="firstName" component="span"/>

                                <label htmlFor="lastName">Last Name</label>
                                <Field name="lastName" type="text"/>
                                <ErrorMessage name="lastName" component="span"/>

                                <label htmlFor="email">Email</label>
                                <Field name="email" type="email"/>
                                <ErrorMessage name="email" component="span"/>

                                <label>
                                    <Field name="terms" type="checkbox"/>
                                    Terms and conditions
                                </label>
                                <ErrorMessage name="terms" component="span"/>

                                <label htmlFor="jobType">Job Type</label>
                                <Field name="jobType" as="select">
                                    <option value="">Pick one</option>
                                    <option value="Developer">Developer</option>
                                    <option value="Designer">Designer</option>
                                    <option value="Manager">Manager</option>
                                </Field>
                                <ErrorMessage name="jobType" component="span"/>

                                <button type="submit">Submit</button>
                            </Form>
                        )
                    }

            </Formik>
        </div>
    )
}
