import React, { lazy } from "react";
import { LazyPage1 } from "../01-lazyload/pages/LazyPage1";
import { LazyPage2 } from "../01-lazyload/pages/LazyPage2";
import { LazyPage3 } from "../01-lazyload/pages/LazyPage3";
import { NoLazy } from "../01-lazyload/pages/NoLazy";

type JSXComponent = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    Component: React.LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
}

const Lazy1 = lazy(() => import('../01-lazyload/pages/LazyPage1'));
const Lazy2 = lazy(() => import('../01-lazyload/pages/LazyPage2'));
const Lazy3 = lazy(() => import('../01-lazyload/pages/LazyPage3'));
const LazyLayout = lazy(() => import('../01-lazyload/layout/LazyLayout'));

export const routes: Route[] = [
    {
        to: '/lazyload/',
        path: '/lazyload/*',
        Component: LazyLayout,
        name: 'Lazy Layout',
    },
    {
        to: '/no-lazy',
        path: 'no-lazy',
        Component: NoLazy,
        name: 'No Lazy',
    },
]