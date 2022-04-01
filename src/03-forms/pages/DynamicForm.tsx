import formJson from '../data/custom-form.json';
import * as Yup from 'yup'
import { Formik, Form } from 'formik';
import { MySelect, MyTextInput } from '../components';

const initialValues: { [key: string]: any} = {};
const requiredFields: { [key: string]: any} = {};

for (const input of formJson) {
    initialValues[ input.name ]= input.value;

    if (!input.validations) continue;

    let schema = Yup.string()
    for (const { type, value } of input.validations) {
        if (type === 'required') {
            schema = schema.required('Required field');
        }
        if (type === 'minLength') {
            schema = schema.min((value as any), `At least ${value} characters`);
        }
        if (type === 'email') {
            schema = schema.email();
        }
    }
    requiredFields[ input.name ] = schema;
}

const validationSchema = Yup.object({ ...requiredFields })


export const DynamicForm = () => {
  return (
    <div>
        <h1>Dynamic Form</h1>
        <Formik 
            initialValues={ initialValues }
            onSubmit={ values => console.log(values)}
            validationSchema={validationSchema}
        >
            {
                formik => (
                    <Form noValidate>
                        {
                            formJson.map( ({ name, type, placeholder, label, options }) => {
                                if (type === 'text' || type === 'password'|| type === 'email')
                                    return (
                                        <MyTextInput 
                                            key={ name }
                                            type={ type as any } 
                                            name={ name } 
                                            label={ label }
                                        />
                                    )
                                else if (type=== 'select') 
                                    return (
                                        <MySelect
                                            key={ name }
                                            label={ label }
                                            name={ name }
                                        >
                                            <option value="">Select an option</option>
                                            {
                                                options?.map( option => <option key={option.id} value={option.id}>{ option.label }</option> )
                                            }
                                        </MySelect>
                                    )
                                else throw new Error("Type not supported, check again the array with inputs");
                                
                            })
                        }
                        <button type="submit">Submit</button>
                    </Form>
                )
            }
            
        </Formik>
    </div>
  )
}
