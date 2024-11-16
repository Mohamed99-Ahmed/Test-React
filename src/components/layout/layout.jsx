import React from 'react'
import Style from './Layout.module.css'
import { Outlet } from 'react-router-dom'
import NavBar from '../navBar/navBar'
import Footer from '../footer/footer.jsx'
export default function Layout() {
  return (
    <>
    <NavBar />
    <div className=' mt-[72px]'>
      <Outlet />
    </div>
    <Footer/>
    </>
  )
}
