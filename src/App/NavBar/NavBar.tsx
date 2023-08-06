import React from 'react'
import { NavLink } from 'react-router-dom'
import  Products  from "../Products/Products";

export default function NavBar() {
 
   // products.forEach(element => {
        
  //  });
 
    return (
    <nav >
    <NavLink className='styles.link' to="/p/5">product 5 </NavLink>
 \
        </nav>
  )
}
