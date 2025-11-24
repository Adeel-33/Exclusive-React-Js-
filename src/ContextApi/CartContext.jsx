import { createContext, useState } from "react";

export const CartContext=createContext();

export const ContextProvider=({children})=>{
    const [carts,setCarts]=useState();
    return(<>
      <CartContext value={{carts,setCarts}}>
        {children}
      </CartContext>
    </>)
}