import './App.css'
import { router } from './routes'
import { RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {

  return (
    <>
      <div>
      <RouterProvider router={router}/>
      </div>
    </>
  )
}

export default App
