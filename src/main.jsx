import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
 
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
 
import Layout from './comp/layout/Layout';
import Hero from './comp/hero/Hero';
import Card from './comp/card/Card';
import About from './comp/about/About';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Hero></Hero>
      },
      {
        path: "card",
        element: <Card></Card>
      },
      {
        path: "about",
        element: <About></About>
      }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
