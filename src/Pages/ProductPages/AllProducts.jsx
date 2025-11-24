import star_icon from "../../assets/ProductsImages/star_icon.svg";
import heart_icon from "../../assets/ProductsImages/heart_icon.svg";
import view_icon from "../../assets/ProductsImages/view_icon.svg";
import white_star_icon from "../../assets/ProductsImages/white_star_icon.png";

import { allProducts } from "../../data/products.js";
import { useContext, useState } from "react";
import Filter from "../../Components/Filter.jsx";
import { CartContext } from "../../ContextApi/CartContext.jsx"
const AllProducts = () => {
  const stars = [1, 2, 3, 4, 5];
  const [activeCart, setActiveCart] = useState();
  const [catagory, setCatagory] = useState("All");
  const {setCarts,carts}=useContext(CartContext)
  

  // Filter products
  let filterProducts;
  if (catagory !== "All") {
    filterProducts = allProducts.filter(
      (product) => product.catagory === catagory
    );
  } else {
    filterProducts = allProducts;
  }

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
      <div className="w-full bg-linear-to-r from-gray-50 to-white py-10">
        {/* Page Title */}
        <h1 className="font-bold text-4xl text-center text-black">
          Explore Our Products
        </h1>

        {/* Filter Section */}
        <div className="mt-6">
          <Filter setCatagory={setCatagory} />
        </div>

        {/* Product Cards Grid */}
        <div className="mt-10 flex flex-wrap gap-6 max-w-[1440px] mx-auto items-center justify-center px-4">
          {filterProducts.map((product) => (
            <div
              key={product.id}
              className="w-[270px] flex flex-col gap-4 p-5 rounded-2xl shadow-lg border border-gray-200 bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Discount + Like + View */}
              <div className="flex justify-between items-start">
                <span className="bg-red-500 text-white font-semibold text-xs px-3 py-1 rounded-md shadow">
                  {product.discount}%
                </span>

                <div className="flex flex-col gap-3">
                  <img
                    className="w-5 h-5 p-1 rounded-full border border-gray-300 hover:bg-gray-200 hover:scale-110 cursor-pointer transition"
                    src={heart_icon}
                    alt="like"
                  />

                  <img
                    className="w-5 h-5 p-1 rounded-full border border-gray-300 hover:bg-gray-200 hover:scale-110 cursor-pointer transition"
                    src={view_icon}
                    alt="view"
                  />
                </div>
              </div>

              {/* Product Image */}
              <div className="relative">
                <img
                  onClick={() => setActiveCart(product.id)}
                  className="w-[200px] h-44 object-contain mx-auto hover:scale-105 transition duration-300 cursor-pointer"
                  src={product.img}
                  alt={product.imgName}
                />

                {/* Add to Cart Button */}
                {activeCart === product.id && (
                  <button
                    onClick={() => AddToCart(product.id)}
                    className="mt-3 w-full bg-black text-white py-2 rounded-lg hover:opacity-90 transition"
                  >
                    Add to Cart
                  </button>
                )}
              </div>

              {/* Product Details */}
              <div className="flex flex-col gap-3">
                <h1 className="font-semibold text-black text-base hover:text-red-600 transition cursor-pointer line-clamp-1">
                  {product.imgName}
                </h1>

                {/* Price */}
                <div className="flex gap-3 items-center">
                  <span className="text-red-600 font-bold text-lg">
                    ${product.discountPrice}
                  </span>
                  <span className="text-gray-500 line-through text-sm">
                    ${product.totalPrice}
                  </span>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    {stars.map((star, i) =>
                      star <= product.rating ? (
                        <img key={i} className="w-4 h-4" src={star_icon} />
                      ) : (
                        <img
                          key={i}
                          className="w-4 h-4"
                          src={white_star_icon}
                        />
                      )
                    )}
                  </div>
                  <span className="text-gray-500 text-sm">
                    ({product.reviews})
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AllProducts;
