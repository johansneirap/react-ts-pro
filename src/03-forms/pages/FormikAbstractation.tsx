import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { MyCheckbox, MySelect, MyTextInput } from '../components';

export const FormikAbstractation = () => {

    return (
        <div>
            <h1>Formik Abstractation</h1>
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
                                <MyTextInput label="First Name" name="firstName" type="text"/>

                                <MyTextInput label="Last Name" name="lastName" type="text"/>

                                <MyTextInput label="Email" name="email" type="email"/>

                                <MyCheckbox label="Terms and conditions" name="terms" />

                                <MySelect name="jobType" label="Job Type">
                                    <option value="">Pick one</option>
                                    <option value="Developer">Developer</option>
                                    <option value="Designer">Designer</option>
                                    <option value="Manager">Manager</option>
                                </MySelect>

                                <button type="submit">Submit</button>
                            </Form>
                        )
                    }

            </Formik>
        </div>
    )
}
