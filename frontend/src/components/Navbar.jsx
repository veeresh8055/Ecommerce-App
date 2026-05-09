import React from 'react'
import {assets } from '../assets/assets.js'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-5 font-medium '>
       <img src={assets.logo} className="w-36" alt="" />
       <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
      
         <NavLink className="flex flex-col items-center gap-1" to="/">
           <p>HOME</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
         </NavLink>

          <NavLink className="flex flex-col items-center gap-1" to="/collection">
           <p>COLLECTION</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
         </NavLink>

          <NavLink className="flex flex-col items-center gap-1" to="/about">
           <p>ABOUT</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
         </NavLink>

          <NavLink className="flex flex-col items-center gap-1" to="/contact">
           <p>CONTACT</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
         </NavLink>
       
       </ul>
    </div>
  )
}

export default Navbar