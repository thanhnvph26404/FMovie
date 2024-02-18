import './App.scss'
import { router } from './routes'
import { RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <RouterProvider router={router}/>
        <ToastContainer />
    </>
  )
}

export default App
