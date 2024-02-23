
import './App.scss'
import { router } from './routes'
import { RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';


import '@fortawesome/fontawesome-free/css/all.css';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

    return (
        <>
            <div>
                <RouterProvider router={router}/>
                <ToastContainer/>
            </div>
        </>
    )
}

export default App
