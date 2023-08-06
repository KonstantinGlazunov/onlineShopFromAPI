import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'

export default function Layout():JSX.Element {
  return (
    <>
    <div>Layout</div>
    <NavBar />
    <Outlet />    
    </>


  )
}
