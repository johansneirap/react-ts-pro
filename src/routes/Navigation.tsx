import { Suspense } from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    NavLink,
    Navigate
} from "react-router-dom";
import { LazyPage1 } from "../01-lazyload/pages/LazyPage1";
import { LazyPage2 } from "../01-lazyload/pages/LazyPage2";
import { LazyPage3 } from "../01-lazyload/pages/LazyPage3";
import logo from '../logo.svg'

import { routes } from './routes';

export const Navigation = () => {
    return (
        <Suspense fallback={ <span>Loading...</span> }>
            <BrowserRouter>
                <div className="main-layout">
                    <nav>
                        <img src={logo} alt="logo" />
                        <ul>
                            {
                                routes.map(route => <li key={route.to}>
                                    <NavLink
                                        to={route.to}
                                        className={({ isActive }) => isActive ? 'nav-active' : ''}
                                    >{route.name}
                                    </NavLink>
                                </li>
                                )
                            }
                        </ul>
                    </nav>
                    <Routes>
                        {
                            routes.map(({ path, Component }) =>
                                <Route key={path} path={path} element={<Component />} />)
                        }
                        <Route path="/*" element={<Navigate to="/lazy1" replace />} />
                    </Routes>

                </div>
            </BrowserRouter>
        </Suspense>

    )
}
