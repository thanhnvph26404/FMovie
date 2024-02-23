import { createBrowserRouter} from "react-router-dom";
import LayoutAdmin from "./layout/admin/LayoutAdmin";
import LayoutWebsite from "./layout/website/LayoutWebsite";
import { Dashboard, HomePage, PageNotFound } from "./pages";
import RapPage from "./pages/rap/RapPage";
import SchedulePage from "./pages/schedule/Schedule";
import MoviePage from "./pages/movie/MoviePage";
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
        path: "/phim",
        element: (
            <LayoutWebsite/>
        ),
        children: [
            { index: true, element: <MoviePage /> },
            
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
    {
        path: "/lich-chieu",
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