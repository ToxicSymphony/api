import Listado from "./components/productos/Listado"
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/productos',
    element: <Listado />,
    errorElement: <h1>Erro404</h1>
  },
  {
    path: '/',
    element: <h1>Home</h1>
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
