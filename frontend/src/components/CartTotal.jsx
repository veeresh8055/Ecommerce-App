import React from 'react'
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from './Title';


const CartTotal = () => {
    const {currency , delivary_fee ,getCartAmount} = useContext(ShopContext);
  return (
    <div className='w-full'>
        <div className='text-2xl'>
            <Title text1={"CART"} text2={"TOTAL"}/>
        </div>
        <div className='flex flex-col gap-2 mt-2  text-sm'> 
            <div className='flex justify-between'>
                <p>Subtotal</p>
                <p>{currency}{getCartAmount().toFixed(2)}</p>
            </div>
            <hr />
            <div className='flex justify-between'>
                <p>Delivery Fee</p>
                <p>{currency}{delivary_fee.toFixed(2)}</p>
            </div>
            <hr />
            <div className='flex justify-between font-bold text-lg'>
                <p>Total</p>
                <p>{currency}{getCartAmount() === 0 ? 0 : (getCartAmount() + delivary_fee).toFixed(2)}</p>
            </div>
            
        </div>

    </div>
  )
}

export default CartTotal