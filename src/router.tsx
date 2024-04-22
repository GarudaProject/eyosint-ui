import { createBrowserRouter } from 'react-router-dom'

import Login from './pages/auth/login'
import Signup from './pages/auth/signup'
import Home from './pages/home'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Signup />,
  },
])
