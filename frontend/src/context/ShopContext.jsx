import { createContext, useEffect    } from "react";
import { products } from '../assets/assets'
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();


 const ShopContextProvider = (props) => {

    const currency = "$"
    const delivary_fee = 10
    const [search, setSearch] = useState("");
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});
    const navigate = useNavigate();

    const addToCart = (itemId , size ) => {
        if(!size){
           toast.error("Please select a size before adding to cart", {
            position: "top-right",
            autoClose: 3000,    
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
        });
        return;
    }
     let cartData = structuredClone(cartItems)
     if(cartData[itemId]){
        if(cartData[itemId][size]){
          cartData[itemId][size] += 1
        }
        else{
            cartData[itemId][size] = 1
        }
     }else{
           cartData[itemId] = {}
           cartData[itemId][size] = 1
        }
        setCartItems(cartData)
    };


   const getCartCount = () => {
    let count = 0;
    for (let item in cartItems) {
      for (let size in cartItems[item]) {
        try{
            if(cartItems[item][size]>0){
                count += cartItems[item][size];
            }

        }catch(e){
            console.error("Error occurred while calculating cart count:", e);
        }
      }
    }
    return count;
  };


  const updateQuantity = (itemId, size, quantity) => {
    let cartData = structuredClone(cartItems);
    if (cartData[itemId] && cartData[itemId][size]) {
      cartData[itemId][size] = quantity;
      setCartItems(cartData);
    }
  }

  const getCartAmount = () => {
    let amount = 0;
    for (let item in cartItems) {
      for (let size in cartItems[item]) {
        try{
            if(cartItems[item][size]>0){
                let productData = products.find((product) => product._id === item);
                if (productData) {
                  amount += cartItems[item][size] * productData.price;
                }
            } 
        }catch(e){
            console.error("Error occurred while calculating cart amount:", e);
        }
      }
    }
    return amount;
}
    const value ={
    products,
    currency,
    delivary_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    setCartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
    navigate
    }

   return (
    <ShopContext.Provider value={value}> 
        {props.children}
    </ShopContext.Provider>
   )

}

export default ShopContextProvider;
