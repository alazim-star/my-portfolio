import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Mainlayout from './Mainlayout/Mainlayout';
import Home from './Page/Home';
import Details1 from './Page/Details1';
import Details2 from './Page/Details2';
import Details3 from './Page/Details3';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />, 
    children: [
      {
        path:"/", 
        element: <Home />,
      },
   
     
    ],
  },
  {
    path: "/details1", 
    element: <Details1/>,
   
  },
  {
    path: "/details2", 
    element: <Details2/>,
   
  },
  {
    path: "/details3", 
    element: <Details3/>,
   
  },

]);




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
