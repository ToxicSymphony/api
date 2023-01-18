import Listado from "./components/productos/Listado"
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Error404 from "./components/helpers/Error404"

const router = createBrowserRouter([
  {
    path: '/productos',
    element: <Listado />,
    errorElement: <Error404 />
  },
  {
    path: '/',
    element: <h1>Home</h1>,
    errorElement: <Error404 />
  }
])

function App() {
  return (
    <div className="App">
     <RouterProvider router={router} />
    </div>
  )
}

export default App
