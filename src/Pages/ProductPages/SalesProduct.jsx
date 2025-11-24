import {useNavigate} from "react-router-dom"

import star_icon from "../../assets/ProductsImages/star_icon.svg";
import heart_icon from "../../assets/ProductsImages/heart_icon.svg";
import view_icon from "../../assets/ProductsImages/view_icon.svg";
import white_star_icon from "../../assets/ProductsImages/white_star_icon.png"

import {Swiper,SwiperSlide} from "swiper/react"
import "swiper/css";

import {cards} from '../../data/products.js'
import { useContext, useState } from "react";
import { CartContext } from "../../ContextApi/CartContext.jsx";

const SalesProduct = () => {
  const stars = [1, 2, 3, 4, 5];
  const navigate=useNavigate()
  const [activeCart,setActiveCart]=useState()
  
  const {carts,setCarts}=useContext(CartContext)
  // Add to cart method
  const AddToCart = (id) => {
  if (Array.isArray(carts)) {
    // Prevent duplicate IDs
    if (!carts.includes(id)) {
      setCarts(prev => [...prev, id]);
    }
  } else {
    setCarts([id]);
  }
};

  return (
    <>
    <div className="my-8">
    <h1 className="font-bold text-4xl text-black p-4">Flash Slaes</h1>
   <Swiper
   slidesOffsetBefore={20} 
     breakpoints={{
       320: { slidesPerView: 1.2 },
       480: { slidesPerView: 1.6 },
       640: { slidesPerView: 2.2 },
       768: { slidesPerView: 2.8 },
       1024: { slidesPerView: 3.5 },
       1280: { slidesPerView: 4.2 },
       1536: { slidesPerView: 4.5 },
     }}
   spaceBetween={20}
   className="p-6 "
   >
  
    {
      cards.map(card=>(
        <SwiperSlide key={card.id}>
       <div  className="w-[270px] flex flex-col gap-4 p-4 rounded-xl shadow-md border border-gray-200 bg-white hover:shadow-lg transition-all duration-200">

      {/* discount + actions */}
      <div className="flex justify-between items-start">
        <button className="bg-red-500 text-white font-semibold text-xs px-3 py-1 rounded-md">
          {card.discount}%
        </button>

        <div className="flex flex-col gap-3">
          <img
            className="w-5 h-5 p-1 rounded-full border border-gray-300 hover:bg-gray-100 cursor-pointer transition"
            src={heart_icon}
            alt="like"
          />
          
          <img
            onClick={()=>{
              navigate(`/product/${card.id}`)
            }}
            className="w-5 h-5 p-1 rounded-full border border-gray-300 hover:bg-gray-100 cursor-pointer transition"
            src={view_icon}
            alt="view"
          />
          
        </div>
      </div>

      {/* product image */}
      
         <img 
        onClick={
          ()=>{
            setActiveCart(card.id)
          }
         }
         className="w-[190px] h-40 object-contain self-center" src={card.images[0]} alt="product" />


                
          {activeCart===card.id &&
          <button 
          onClick={()=>{
            AddToCart(card.id)
          }}
          className="text-white bg-black p-2">Add to Cart</button>
         }
    
      

      {/* details */}
      <div className="flex flex-col gap-2">

        <h1 className="font-semibold text-black text-sm hover:text-red-500 cursor-pointer">
          {card.imgName}
        </h1>

        {/* price */}
        <div className="flex gap-3 items-center">
          <h1 className="text-red-600 font-bold">${card.discountPrice}</h1>
          <h1 className="text-gray-500 line-through">{card.totalPrice}</h1>
        </div>

        {/* rating */}
        <div className="flex gap-3 items-center">
          <div className="flex gap-1">
            {stars.map((star, index) => (
              star<=card.rating?
              <img key={index} className="w-4 h-4 " src={star_icon} alt="star" />:
              <img key={index} className="w-4 h-4 " src={white_star_icon} alt="star" />
            ))}
          </div>
          <h1 className="text-gray-600 text-sm">({card.reviews})</h1>
        </div>

      </div>
       </div>
       </SwiperSlide>
      ))
    }
    
    </Swiper> 
    </div>
  </>);
};

export default SalesProduct;
