import {createBrowserRouter} from "react-router-dom";
import LayoutAdmin from "./layout/admin/LayoutAdmin";
import LayoutWebsite from "./layout/website/LayoutWebsite";
import { CinemaPage, Dashboard, HomePage, MoviePage, PageNotFound, SchedulePage } from "./pages";


import Login from "./pages/auth/login/Login";
import Register from "./pages/auth/register/Register";
import RapPage from "./pages/rap/RapPage";
import TicketPage from "./pages/ticket/TicketPage";
import DetailMoviePage from "./pages/detailMovie/DetailMoviePage";


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
        path: "/",
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
        path: "/schedule/:id",
        element: (
            <LayoutWebsite/>
        ),
        children: [
            { index: true, element: <DetailMoviePage /> },
            
        ],
    },
    {
        path: "/ticket/:id",
        element: (
            <LayoutWebsite/>
        ),
        children: [
            { index: true, element: <TicketPage /> },
            
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
    {
        path: "/thong-tin-rap",
        element: (
            <LayoutWebsite/>
        ),
        children: [
            { index: true, element: <RapPage /> },
            
        ],
    },
    {path: "*", element: <PageNotFound/>},
]);