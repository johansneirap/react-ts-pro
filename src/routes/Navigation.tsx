import { Suspense } from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    NavLink,
    Navigate
} from "react-router-dom";
import { ShoppingPage } from "../02-component-patterns/pages/ShoppingPage";
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
                                    to={'/home'}
                                    className={({ isActive }) => isActive ? 'nav-active' : ''}
                                >Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={'/about'}
                                    className={({ isActive }) => isActive ? 'nav-active' : ''}
                                >About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={'/users'}
                                    className={({ isActive }) => isActive ? 'nav-active' : ''}
                                >Users
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                    <Routes>
                        <Route path={'/home'} element={<ShoppingPage/>} />
                        <Route path={'/about'} element={<h1>About page</h1>} />
                        <Route path={'/users'} element={<h1>Users page</h1>} />
                        <Route path="/*" element={<Navigate to={'/home'} replace />} />
                    </Routes>

                </div>
            </BrowserRouter>
        </Suspense>
    )
}
