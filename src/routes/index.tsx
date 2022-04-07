import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';

const Login = lazy(() => import('../pages/Login'));
const HomePage = lazy(() => import('../pages/HomePage'));

const Router = (logged: boolean, token: string): RouteObject[] => [
  {
    path: '/',
    element: logged || token ? <HomePage /> : <Navigate to="login" />,
    children: [],
  },
  { path: 'login', element: <Login /> },
  { path: '*', element: <Navigate to="/" /> },
];

export default Router;
