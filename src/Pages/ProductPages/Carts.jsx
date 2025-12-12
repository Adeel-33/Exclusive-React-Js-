import {  useState ,useContext, useEffect} from "react";
import { allProducts } from "../../data/products.js";
import {CartContext} from "../../ContextApi/CartContext.jsx"

const Cart = () => {

 const {carts,setCarts}=useContext(CartContext)
  
 const CartProducts=allProducts.filter(product=>carts?.includes(product.id))

 const [cartItems,setCartItems]=useState([])
 const [totalPrice,setTotalPrice]=useState()

 useEffect(()=>{
    setCartItems(CartProducts)
 },[carts])

  //REMOVE ITEM 
  const removeItem = (id) => {
       setCartItems(prev=>(
        prev.filter(product=>product.id!==id)
       ))
       setCarts(prev => prev.filter(cartId => cartId !== id));
  };

  

  //Subtotal
  useEffect(() => {
  const total = cartItems.reduce((acc, item) => acc + Number(item.discountPrice), 0);
  setTotalPrice(total);
}, [cartItems]);



  return (
    <>
      {carts?.length === 0 ? (
        <div className="text-center h-96 flex justify-center items-center text-xl font-semibold">
          Your Cart is Empty
        </div>
      ) : (
        <div className="flex-1 flex flex-col gap-6">
          {/* Headings */}
          <div className="hidden md:grid grid-cols-[3fr_1fr_1fr] text-center py-3 bg-gray-100 rounded-xl">
            <h1 className="text-black font-semibold">Product</h1>
            <h1 className="text-black font-semibold">Price</h1>
            <h1 className="text-black font-semibold">Action</h1>
          </div>

          {/* Product Rows */}
          
          {cartItems.map((product) => (
            <div
              key={product.id}
              className="grid grid-cols-1 md:grid-cols-[3fr_1fr_1fr] items-center text-center gap-6 py-5 bg-gray-50 rounded-xl shadow-sm relative"
            >
              {/* PRODUCT NAME + IMAGE */}
              <div className="flex items-center gap-4 justify-center md:justify-start">
                <img
                  className="w-[60px] h-[50px] object-contain"
                  src={product.img}
                  alt="product image"
                />
                <h1 className="text-gray-800 font-semibold text-sm">
                  {product.imgName}
                </h1>
              </div>

              {/* PRICE */}
              <h1 className="text-gray-700 font-semibold">
                ${product.discountPrice}
              </h1>
              
              {/* DELETE BUTTON */}
              <div className="flex justify-center">
                <button
                  onClick={() => removeItem(product.id)}
                  className="text-red-500 hover:text-white hover:bg-red-500 border border-red-500 px-3 py-1 rounded-md transition"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}

          {/* CART TOTAl */}


           
           <div className="flex flex-col md:flex-row gap-5 my-8">
             <div className="w-full md:w-[350px] bg-white rounded-xl shadow-md p-6 flex flex-col gap-4 border">
               <h2 className="text-lg font-semibold text-gray-900">Cart Total</h2>

               <div className="flex justify-between text-sm text-gray-700">
                 <span>Subtotal:</span>
                 <span>${totalPrice}</span>
               </div>

               <div className="flex justify-between text-sm text-gray-700 border-t pt-3">
                 <span>Shipping:</span>
                 <span className="text-green-600 font-medium">Free</span>
               </div>

               <div className="flex justify-between text-base font-semibold text-gray-900 border-t pt-3">
                 <span>Total:</span>
                 <span>${totalPrice}</span>
               </div>


            </div>
          </div>

        </div>
      )}
    </>
  );
};

export default Cart;


