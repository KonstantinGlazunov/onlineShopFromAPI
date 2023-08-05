import React from 'react'
import { Outlet } from 'react-router-dom'
import Products from '../Products/Products'

export default function Layout():JSX.Element {
  return (
    <>
    <div>Layout</div>

    <Outlet />    
    </>


  )
}
