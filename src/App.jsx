import { useState } from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './components/about/about.jsx'
import Home from './components/home/home.jsx'
import Portfolio from './components/portfolio/portfolio.jsx'
import Contact from './components/contact/contact.jsx'
import Nfp from './components/Nfp/Nfp.jsx'
import Layout from './components/layout/layout.jsx'


function App() {
  console.log(<Home/>)
  const router = createBrowserRouter([
    {
      path: '',
      element: <Layout />, // Main layout component
      children: [
        { index: true, element: <Home /> }, // Default route
        { path: 'about', element: <About /> },
        { path: 'portfolio', element: <Portfolio /> },
        { path: 'contact', element: <Contact /> },
        { path: '*', element: <Nfp /> } // Catch-all for 404 pages
      ],
    },
  ]);
  return (
    <>
   <RouterProvider  router={router} />
    </>
  )
}

export default App
