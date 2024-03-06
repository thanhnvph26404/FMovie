import {createBrowserRouter} from "react-router-dom";
import LayoutAdmin from "./layout/admin/LayoutAdmin";
import LayoutWebsite from "./layout/website/LayoutWebsite";
import { CinemaPage, Dashboard, HomePage, MoviePage, MovieTypeAddPage, MovieTypeEditPage, MovieTypeListPage, PageNotFound, SchedulePage,CinemaPageAdmin, CinemaAddPage, CinemaEditPage, VoucherPageAdmin, VoucherAddPage, VoucherEditPage } from "./pages";


import Login from "./pages/auth/login/Login";
import Register from "./pages/auth/register/Register";
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
            {path: "login", element: <Login/>},
            { path: "register", element: <Register /> },
            { path: "movie", element: <MoviePage /> },
            { path: "movie/:id", element: <DetailMoviePage /> },
            { path: "schedule", element: <SchedulePage /> },
            { path: "cinema", element: <CinemaPage /> },
            { path: "ticket/:id", element: <TicketPage/>}
        ],
    },
    {
        path: "/admin",
        children: [
            {
                element: <LayoutAdmin/>,
                children: [
                    { index: true, element: <Dashboard /> },
                    { path: "movie-type", element: <MovieTypeListPage/>},
                    { path: "movie-type/add", element: <MovieTypeAddPage /> },
                    { path: "movie-type/edit/:id", element: <MovieTypeEditPage/>},
                    { path: "cinema", element: <CinemaPageAdmin />},
                    { path: "cinema/add", element: <CinemaAddPage />},
                    { path: "cinema/edit/:id", element: <CinemaEditPage />},
                    { path: "voucher", element: <VoucherPageAdmin />},
                    { path: "voucher/add", element: <VoucherAddPage />},
                    { path: "voucher/edit/:id", element: <VoucherEditPage />},
                ],
            },
        ],
    },
    {path: "*", element: <PageNotFound/>},
]);