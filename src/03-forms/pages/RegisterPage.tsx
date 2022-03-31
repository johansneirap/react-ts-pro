import React, { useState } from 'react';
import { useForm } from '../hooks/useForm';
import '../styles/styles.css';

const initialFormData = {
    name: '',
    email: '',
    password1: '',
    password2: '',
};

export const RegisterPage = () => {

    const { 
        formData, 
        onChange,
        name, 
        email, 
        password1, 
        password2,
        resetForm,
        isValidEmail,
    } = useForm(initialFormData);

    const onSubmit = (event: React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        // alert( JSON.stringify( registerData ));
    };

  return (
    <div>
        <h1>RegisterPage</h1>
        <hr />
        <form onSubmit={ onSubmit } noValidate>
            <input 
                type="text" 
                placeholder="Name" 
                name='name'
                value={ name }
                onChange={ onChange }
                className={ `${ name.trim().length<=0 && 'has-error'}` }
            />
            { name.trim().length<=0 && <span>This field is required</span> }

            <input 
                type="email" 
                placeholder="Email" 
                name='email'
                value={ email }
                onChange={ onChange }
                className={ `${ !isValidEmail(email) && 'has-error'}` }
            />
            { !isValidEmail(email) && <span>This must be a valid email</span> }

            <input 
                type="password" 
                placeholder="Password" 
                name='password1'
                value={ password1 }
                onChange={ onChange }
            />
            { password1.trim().length<=0 && <span>This field is required</span> }
            { password1.trim().length > 0 && password1.trim().length < 6 && <span>Password must contain 6 or more characters</span> }

            <input 
                type="password" 
                placeholder="Repeat Password" 
                name='password2'
                value={ password2 }
                onChange={ onChange }
            />
            { password2.trim().length<=0 && <span>This field is required</span> }
            { password2.trim().length > 0 && password2.trim().length < 6 && <span>Password must contain 6 or more characters</span> }

            <button type="submit">Register</button>
            <button onClick={ resetForm }>Reset</button>
        </form>
    </div>
  )
}
