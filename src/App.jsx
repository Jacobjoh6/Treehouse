import { useState } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'

import Home from './views/home/home'
import Checkout from './views/Rooms/Rooms'
import Video from './views/video/Video'

const router =  createBrowserRouter([
  {
    path:'/',
    element: <Home />
  },
  {
    path:'/rooms',
    element: <Checkout />
  },
  {
    path:'/video',
    element: <Video />
  }
])

function App() {

  return (

      <div>
        <RouterProvider router= { router } />
      </div>
  )
}

export default App
