import React from 'react'
import { useParams } from 'react-router-dom'
import { useContext , useEffect , useState } from "react";
import { ShopContext } from "../context/ShopContext";

const Product = () => {
  const { productId } = useParams()
 const { products } = useContext(ShopContext);
 const [productData, setProductData] = useState(false);

 const fetchProductdata = async () => {
    products.map((item)=>{
      if(item._id === productId){
        setProductData(item);
        return null ; // to avoid warning of array map function that expects return value 
       }
    } )
 }

 useEffect(()=>{
  
    fetchProductdata();
  
  },[ productId])

  return (
    <div>

    </div>
  )
}

export default Product