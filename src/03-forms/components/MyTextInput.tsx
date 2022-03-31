import { ErrorMessage, Field, useField } from "formik";

interface Props {
    label: string;
    name: string;
    type?: 'text' | 'email' | 'password';
    placeholder?: string;
    [x: string]: any;
}

export const MyTextInput = ( { label, ...props }: Props ) => {
    // const [ field, meta ] = useField( props );
  return (
    <>
        {/* <label htmlFor={ props.id || props.name}>{ label }</label>
        <input { ...field } { ...props }/>
        {
            meta.touched && meta.error && ( <span className="error">{ meta.error }</span> )
        } */}
        <label htmlFor={ props.id || props.name}>{ label }</label>
        <Field name={ props.name } type={ props.type || "text" }/>
        <ErrorMessage name={ props.name } component="span"/>
    </>
  )
}
