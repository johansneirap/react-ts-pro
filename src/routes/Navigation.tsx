import { Suspense } from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    NavLink,
    Navigate
} from "react-router-dom";
import { 
    DynamicForm,
    RegisterPage, 
    RegisterFormikPage, 
    FormikBasicPage, 
    FormikYupPage, 
    FormikComponents, 
    FormikAbstractation 
} from "../03-forms/pages";

import logo from '../logo.svg';

export const Navigation = () => {
    return (
        <Suspense fallback={<span>Loading...</span>}>
            <BrowserRouter>
                <div className="main-layout">
                    <nav>
                        <img src={logo} alt="logo" />
                        <ul>
                            <li>
                                <NavLink
                                    to={'/register'}
                                    className={({ isActive }) => isActive ? 'nav-active' : ''}
                                >Register Page
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={'/register-formik'}
                                    className={({ isActive }) => isActive ? 'nav-active' : ''}
                                >Register Formik
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={'/formik-basic'}
                                    className={({ isActive }) => isActive ? 'nav-active' : ''}
                                >Formik Basic
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={'/formik-yup'}
                                    className={({ isActive }) => isActive ? 'nav-active' : ''}
                                >Formik YUP
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={'/formik-components'}
                                    className={({ isActive }) => isActive ? 'nav-active' : ''}
                                >Formik Components
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={'/formik-abstractation'}
                                    className={({ isActive }) => isActive ? 'nav-active' : ''}
                                >Formik Abstractation
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={'/dynamic-form'}
                                    className={({ isActive }) => isActive ? 'nav-active' : ''}
                                >Dynamic Form
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                    <Routes>
                        <Route path={'/register'} element={ <RegisterPage /> } />
                        <Route path={'/register-formik'} element={ <RegisterFormikPage /> } />
                        <Route path={'/formik-basic'} element={ <FormikBasicPage /> } />
                        <Route path={'/formik-yup'} element={ <FormikYupPage /> } />
                        <Route path={'/formik-components'} element={ <FormikComponents /> } />
                        <Route path={'/formik-abstractation'} element={ <FormikAbstractation /> } />
                        <Route path={'/dynamic-form'} element={ <DynamicForm /> } />
                        <Route path="/*" element={ <Navigate to={'/register'} replace /> } />
                    </Routes>

                </div>
            </BrowserRouter>
        </Suspense>
    )
}
