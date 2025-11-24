import App from "./App.jsx"
import ProductDetails from "./Pages/ProductPages/ProductDetails.jsx"

import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import Carts from "./Pages/ProductPages/Carts.jsx"
import { Routes,Route } from "react-router-dom"
const Layout=()=>{
  return(<>
  <Navbar/>
   <Routes>
        <Route path="/" element={<App/>}></Route>
        <Route path="/product/:id" element={<ProductDetails/>}></Route>
        <Route path="/cart" element={<Carts/>}></Route>
    </Routes>
    <Footer/>
  </>)
    
}
export default Layout