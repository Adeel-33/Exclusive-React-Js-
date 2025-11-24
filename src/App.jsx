import "./App.css"
import HeroSection from "./Pages/HomePage/HeroSection"
import SalesProduct from "./Pages/ProductPages/SalesProduct"
import AllProducts from "./Pages/ProductPages/AllProducts"

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const App=()=>{
  const {hash}=useLocation();
   useEffect(()=>{
     if(hash){
        const element=document.querySelector(hash)
        if(element){
            element.scrollIntoView({behavior:"smooth"})
        }
     }
   },[hash]) 

    return(<>
       
       <div id="hero">
           <HeroSection/>
       </div>
       
       <div id="sales">
           <SalesProduct/>
       </div>
       
       <div id="products">
            <AllProducts/>
       </div>
      
      
       
    
       
    </>)
}
export default App