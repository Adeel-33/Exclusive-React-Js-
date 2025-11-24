
import white_star_icon from "../../assets/ProductsImages/white_star_icon.png"
import icon_delivery from "../../assets/ProductsImages/icon_delivery.svg"
import icon_return from "../../assets/ProductsImages/icon_return.svg"

import star_icon from "../../assets/ProductsImages/star_icon.svg";
import heart_icon from "../../assets/ProductsImages/heart_icon.svg";
import { useParams } from "react-router-dom"
import {cards} from "../../data/products.js"
import { useState } from "react"
const ProductDetails = () => {
  const stars = [1, 2, 3, 4, 5];
  const {id}=useParams()
  const product=cards.find(p=>p.id===Number(id))
  const [mainImg,setMainImg]=useState(product.images[0])
  
  
  return (
    <div className="max-w-[1200px] mx-auto px-4 py-10">

      <div className="grid grid-cols-1 md:grid-cols-7 gap-6">

        {/* Thumbnail Images */}
        <div className="flex md:flex-col justify-between md:justify-start gap-8 ">
          {product.images.map((img, i) => (
           
           <div key={i} className="rounded-lg bg-gray-100 p-2">
            <img onClick={()=>(
              setMainImg(img)
            )}
              src={img}
              className="w-[121px] h-[114px] md:w-[134px] md:h-[94px] object-contain   cursor-pointer transition"
            />
            </div>

          ))}
        </div>

        {/* Main Image */}
        <div className="md:col-span-3 flex justify-center items-center bg-gray-100 rounded-lg p-4">
          <img
            src={mainImg}
            className="w-[280px] h-[220px] md:w-[446px] md:h-[315px] object-contain"
          />
        </div>

        {/* Content */}
        <div className="md:col-span-3 p-4 rounded-lg text-[#1a1a1a] font-sans">

          {/* Title */}
          <h2 className="text-xl md:text-2xl font-bold">
           {product.imgName}
          </h2>

          {/* rating */}
                  <div className="flex gap-3 items-center">
                    <div className="flex gap-1">
                      {stars.map((star, index) => (
                        star<=product.rating?
                        <img key={index} className="w-4 h-4 " src={star_icon} alt="star" />:
                        <img key={index} className="w-4 h-4 " src={white_star_icon} alt="star" />
                      ))}
                    </div>
                    <h1 className="text-gray-600 text-sm">({product.reviews})</h1>
                  </div>

          {/* Price */}
          <p className="text-3xl font-semibold mt-4">${product.discountPrice}</p>

          {/* Description */}
          <p className="text-gray-700 text-sm mt-3 leading-6">
            PlayStation 5 Controller Skin High quality vinyl with air
            channel adhesive for easy bubble free install & mess
            free removal. Pressure sensitive.
          </p>

          <hr className="my-4" />

          {/* Colours */}
          <div className="flex items-center gap-3">
            <h3 className="text-sm font-semibold">Colours:</h3>
            <div className="flex gap-3">
              <span className="w-5 h-5 rounded-full bg-black border cursor-pointer" />
              <span className="w-5 h-5 rounded-full bg-red-400 border cursor-pointer" />
            </div>
          </div>

          {/* Size */}
          <div className="mt-4">
            <h3 className="text-sm font-semibold mb-2">Size:</h3>
            <div className="flex gap-2 flex-wrap">
              {["XS", "S", "M", "L", "XL"].map((s) => (
                <button
                  key={s}
                  className={`px-3 py-1 border text-sm rounded-md ${
                    s === "M"
                      ? "bg-red-500 text-white border-red-500"
                      : "border-gray-300 hover:border-red-500"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Counter + Buy + Heart */}
          <div className="mt-6 flex items-center gap-3">
            <div className="flex items-center border rounded-md overflow-hidden">
              <button className="px-3 py-1 text-lg border-r">-</button>
              <span className="px-4 py-1">2</span>
              <button className="px-3 py-1 text-lg border-l">+</button>
            </div>

            <button className="flex-1 bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition">
              Buy Now
            </button>

            <button className="border p-2 rounded-md hover:bg-gray-100 transition">
              <img src={heart_icon} className="w-5 h-5" />
            </button>
          </div>

          {/* Delivery Boxes */}
          <div className="mt-6 border rounded-lg overflow-hidden">

            {/* Free Delivery */}
            <div className="p-4 flex items-center gap-3 border-b">
              <img src={icon_delivery} className="w-6" />
              <div>
                <p className="font-semibold">Free Delivery</p>
                <p className="text-sm text-gray-700">
                  Enter your postal code for Delivery Availability
                </p>
              </div>
            </div>

            {/* Return Delivery */}
            <div className="p-4 flex items-center gap-3">
              <img src={icon_return} className="w-6" />
              <div>
                <p className="font-semibold">Return Delivery</p>
                <p className="text-sm text-gray-600">
                  Free 30 Days Delivery Returns.{" "}
                  <span className="underline cursor-pointer">Details</span>
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductDetails;
