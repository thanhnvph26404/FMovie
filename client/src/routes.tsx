import {createBrowserRouter} from "react-router-dom";
import LayoutAdmin from "./layout/admin/LayoutAdmin";
import LayoutWebsite from "./layout/website/LayoutWebsite";
import { CinemaPage, Dashboard, HomePage, MoviePage, PageNotFound, SchedulePage } from "./pages";


import Login from "./pages/auth/login/Login";
import Register from "./pages/auth/register/Register";


export const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <LayoutWebsite/>
        ),
        children: [
            {index: true, element: <HomePage/>},
            {path: "/login", element: <Login/>},
            {path: "/register", element: <Register/>}
        ],
    },
    {
        path: "/movie",
        element: (
            <LayoutWebsite/>
        ),
        children: [
            { index: true, element: <MoviePage /> },
            
        ],
    },
    {
        path: "/cinema",
        element: (
            <LayoutWebsite/>
        ),
        children: [
            { index: true, element: <CinemaPage /> },
            
        ],
    },
    {
        path: "/schedule",
        element: (
            <LayoutWebsite/>
        ),
        children: [
            { index: true, element: <SchedulePage /> },
            
        ],
    },
    {
        path: "/admin",
        children: [
            {
                element: <LayoutAdmin/>,
                children: [
                    {index: true, element: <Dashboard/>},

                ],
            },
        ],
    },
    {path: "*", element: <PageNotFound/>},
]);