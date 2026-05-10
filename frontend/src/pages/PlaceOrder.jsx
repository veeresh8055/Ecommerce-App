import React from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { useState } from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'

const PlaceOrder = () => {
  
  const [method , setMethod] = useState("cod")
  
  return (
    <div className='flex flex-col sm:flex-row justify-between gap4 pt-5 sm:pt-14 min-h-[80vh]'>
       {/* Left Side */}
       <div className='flex flex-col gap-4 w-full sm:max-w-120 '>
          <div className='text-xl sm:text-2xl my-3'>
            <Title text1={"DELIVERY"} text2={"INFORMATION"}/>
          </div>
          <div className='flex gap-3 '>
            <input type="text" placeholder='First Name' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
            <input type="text" placeholder='Last Name' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />

          </div>
            <input type="email" placeholder='Email Address' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
            <input type="text" placeholder='Street Address' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
          <div className='flex gap-3 '>
            <input type="text" placeholder='City' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
            <input type="text" placeholder='State' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />

          </div>
          <div className='flex gap-3 '>
            <input type="text" placeholder='Zip Code' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
            <input type="text" placeholder='Country' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />

          </div>
            <input type="number" placeholder='Phone Number' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />

       </div>

       {/* Right Side  */}
       <div className='mt-8'>
        <div className='mt-8 min-w-80'>
          <CartTotal />

        </div>
        <div className='mt-12'>
          <Title text1={"PAYMENT"} text2={"METHOD"}/>
          {/* Payment Options */}
          <div className='flex flex-col gap-3 lg:flex-row'>
             <div onClick={()=>setMethod("stripe")} className='flex rounded items-center gap-3 border p-2 px-3 cursor-pointer '>
              <p className={`min-w-3 h-3 border rounded-full ${method === "stripe" ? "bg-emerald-500" : ""}`}></p>
              <img className='h-5 mx-4' src={assets.stripe_logo} alt="" />
             </div>

             <div onClick={()=>setMethod("razorpay")} className='flex rounded items-center gap-3 border p-2 px-3 cursor-pointer '>
              <p className={`min-w-3 h-3 border rounded-full ${method === "razorpay" ? "bg-emerald-500" : ""}`}></p>
              <img className='h-5 mx-4' src={assets.razorpay_logo} alt="" />
             </div>

             <div onClick={()=>setMethod("cod")} className='flex rounded items-center gap-3 border p-2 px-3 cursor-pointer '>
              <p className={`min-w-3 h-3 border rounded-full ${method === "cod" ? "bg-emerald-500" : ""}`}></p>
               <p className='text-gray-500 text-sm font-medium mx-4'>CASH ON DELIVERY</p>
             </div>
          </div>

        </div>

       </div>
    </div>
  )
}

export default PlaceOrder