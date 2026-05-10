import React from "react";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProduct from "../components/RelatedProduct";

const Product = () => {
  const { productId } = useParams();
  const { products, currency ,addToCart} = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProductdata = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        // setSize(item.sizes[0]); // Set the first available size as default
      } else {
        return null; // to avoid warning of array map function that expects return value
      }
    });
  };

  useEffect(() => {
    fetchProductdata();
  }, [productId]);

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row ">
        {/* Product Image */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row ">
          {" "}
          <div className=" flex sm:flex-col overflow-x-auto sm:overflow-y-scroll  justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => {
              return (
                <img
                  onClick={() => setImage(item)}
                  key={index}
                  src={item}
                  alt="product"
                  className="w-[24%]rounded sm:w-full sm:mb-3 shrink-0 cursor-pointer"
                />
              );
            })}
          </div>
          <div className="w-full sm:w-[80%]">
            <img className="w-full rounded h-auto" src={image} alt="" />
          </div>
        </div>

        {/* Product Details */}
        <div className="flex-1 ">
          <h1 className="text-2xl font-medium mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img className="w-4 h-4" src={assets.star_icon} alt="" />
            <img className="w-4 h-4" src={assets.star_icon} alt="" />
            <img className="w-4 h-4" src={assets.star_icon} alt="" />
            <img className="w-4 h-4" src={assets.star_icon} alt="" />
            <img className="w-4 h-4" src={assets.star_dull_icon} alt="" />
            <p className="pl-2">122</p>
          </div>
          <p className="text-3xl font-medium mt-5">
            {currency}
            {productData.price}
          </p>
          <p className="text-gray-600 mt-4 md:w-4/5">
            {productData.description}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>

            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button 
                  className={`border rounded py-2 px-4 bg-gray-100 cursor-pointer ${size === item ? 'border-orange-500 text-orange-500' : ''}`}
                  key={index}
                  onClick={() => setSize(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button 
            className="bg-black text-white py-3 px-8 text-sm rounded active:bg-gray-500  ease-in"
            onClick={() => addToCart(productData._id, size)}
          >
            ADD TO CART
          </button>
          <hr className="mt-8 sm:w-4/5"/>
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
             <p>100% Original product</p>
             <p>Free delivery on orders over $50</p>
             <p>30-day return policy</p>
          </div>

        </div>
      </div>
      {/* Description */}
      <div className="mt-20 ">
        <div className="flex">
          <b className="border px-5 py-3 text-sm ">Description</b>
          <b className="border px-5 py-3 text-sm ">Reviews(122)</b>

        </div>
         <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p>An Ecommerce website is an online platform where businesses can sell products or services directly to consumers.</p>
          <p>Ecommerce website typical features include a user-friendly interface, secure payment processing, and a wide range of products.</p>

         </div>
      </div>

      {/* display related products */}
      <RelatedProduct category={productData.category} subCategory={productData.subCategory} />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
