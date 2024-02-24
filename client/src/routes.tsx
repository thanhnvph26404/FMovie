import { createBrowserRouter} from "react-router-dom";
import LayoutAdmin from "./layout/admin/LayoutAdmin";
import LayoutWebsite from "./layout/website/LayoutWebsite";
import { CinemaPage, Dashboard, HomePage, MoviePage, PageNotFound, SchedulePage } from "./pages";

export const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <LayoutWebsite/>
        ),
        children: [
            { index: true, element: <HomePage /> },
            
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
        path: "/admin",
        children: [
            {
                element: <LayoutAdmin />,
                children: [
            { index: true, element: <Dashboard /> },
                    
                ],
            },
        ],
    },
    { path: "*", element: <PageNotFound/> },
]);