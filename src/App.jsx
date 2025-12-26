import React from 'react'
import Home from './components/Home'
import SignIn from './components/SignIn'
import Create from './components/Create'
import Profile from './components/Profile'
import { RouterProvider,createBrowserRouter } from "react-router-dom";

const App = () => {
  const router =createBrowserRouter([{
    path:'/',
    element:<Home/>
  },
  {
    path:'/sign',
    element:<SignIn/>
  },
  {
    path:'/createAccount',
    element:<Create/>
  },
  {
    path:'/profile',
    element:<Profile/>
  }
])
  return (
    <RouterProvider router={router}/>
  )
}

export default App