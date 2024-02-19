import {createBrowserRouter} from "react-router-dom";
import LayoutAdmin from "./layout/admin/LayoutAdmin";
import LayoutWebsite from "./layout/website/LayoutWebsite";
import {Dashboard, HomePage, PageNotFound} from "./pages";
import Login from "./pages/auth/login/Login";
import Register from "./pages/auth/register/Register";

import "./index.css"
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