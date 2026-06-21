import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './pages/Home'
import Job from './pages/Job'
import LoginSignUp from './pages/LoginSignUp'
import PageNotFound from './pages/PageNotFound'

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/job', element: <Job /> },
  { path: '/auth', element: <LoginSignUp /> },
  { path: '*', element: <PageNotFound /> },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
