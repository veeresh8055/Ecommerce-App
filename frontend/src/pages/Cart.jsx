import React from 'react'
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { useState } from "react";
import { useEffect } from "react";
import Title from '../components/Title';
import { assets } from '../assets/assets';
import CartTotal from '../components/CartTotal';

const Cart = () => {
  const {products , currency , cartItems , updateQuantity , navigate} = useContext(ShopContext); 
   const [cartData, setCartData] = useState([]);

   useEffect(() => {
    let tempData = [];
    for (let items in cartItems) {
      for (let item in cartItems[items]) {  
       if(cartItems[items][item]>0){
        tempData.push({
         _id: items,
          size: item,
          quantity: cartItems[items][item]
        });
       }
      }
    }
    setCartData(tempData);
  },[cartItems])
  return (
    <div className='border-t pt-14'>
      <div className='text-2xl mb-3'>
        <Title text1={"YOUR"} text2={"CART"}/>

      </div>
      <div>
        {
          cartData.length > 0 ? (
            cartData.map((item, index) => {
              let productData = products.find((product) => product._id === item._id);
              if (!productData) {
                return null;
              }
              return (
                <div key={index} className='flex items-center  gap-4 py-4 border-b'>
                  <img src={productData.image[0]} alt={productData.name} className='w-16 h-16 object-cover'/>
                  <div>
                    <h3 className='font-medium'>{productData.name}</h3>
                    <p className='text-lg font-bold'>{currency}{productData.price.toFixed(2)}</p>
                    <p className='text-sm px-2 py-1  w-fit rounded border text-gray-500'> {item.size}</p>
                  </div> 
                  <input className='border max-w-10 sm:max-w-20  px-1 sm:px-2 py-1 rounded ml-auto' type="number" min="1" value={item.quantity} onChange={(e) => {
                    e.target.value === "" || e.target.value < "0" ? null : updateQuantity(item._id , item.size , parseInt(e.target.value)) 
                  }} />
                  <img onClick={()=>updateQuantity(item._id , item.size , 0 )} className='w-4 mr-4 sm:w-5 cursor-pointer' src={assets.bin_icon} alt="" />
                </div>
              );
            })
          ) : (
            <p className='text-lg'>Your cart is empty.</p>
          )
        }
      </div>

      <div className='flex justify-end my-20'>
        <div className='w-full sm:w-112.5'>
          <CartTotal />
          <div className='w-full text-end'>
            <button className='cursor-pointer bg-black text-white text-sm px-4 py-2 mt-4 rounded' onClick={() => navigate('/placeorder')}>Proceed to Checkout</button>
          </div>


        </div>

      </div>
    </div>
  )
}

export default Cart
