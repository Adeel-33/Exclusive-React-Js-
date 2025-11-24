import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Cart from "../assets/NavbarImages/Cart.svg";
import close from "../assets/NavbarImages/close.png";
import menu from "../assets/NavbarImages/menu.png";
import { CartContext } from "../ContextApi/CartContext";
import {motion,AnimatePresence} from "framer-motion"

const Navbar = () => {

  const navItems = [
  { name: "Home", hash: "hero" },
  { name: "Sales", hash: "sales" },
  { name: "Products", hash: "products" },
];

  const [toggleMenu, setToggleMenu] = useState(false);
  const {carts}=useContext(CartContext)
  const cartLength=carts?.length || 0;
  

  const handleMenu = () => {
    setToggleMenu((prev) => !prev);
  };

  return (
    <>
      <nav className="flex justify-between items-center px-4 py-4 shadow-md relative">

        {/* Logo */}
        <h1 className="text-[24px] font-bold text-black">Exclusive</h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8">
          {navItems.map((item, index) => (
            <Link to={`/#${item.hash}`}

              className="text-[16px] text-black/70 font-semibold cursor-pointer hover:text-black"
              key={index}
            >
              {item.name}
            </Link>
          ))}
        </ul>

        {/* Icons (Cart) */}
        <div className="flex items-center gap-4">
          <Link to="/cart" className="relative">
          <img className="w-8 h-8 cursor-pointer" src={Cart} alt="cart" />
          <div className="absolute top-0 left-5 bg-red-600 text-white  w-4 h-4 rounded-full  text-sm flex items-center justify-center">
           <h1 className="font-semibold">{cartLength}</h1>
          </div>
          </Link>

          {/* Menu Icon (Mobile) */}
          <img
            src={!toggleMenu ? menu : close}
            onClick={handleMenu}
            className="w-6 h-6 md:hidden cursor-pointer"
            alt="menu button"
          />
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
        {toggleMenu && (
      
          <motion.div 
            initial={{opacity: 0,y: -20}}
            animate={{opacity: 1,y: 0}}
            exit={{opacity: 0,y: -20}}
            transition={{duration:0.4}}
             
          className={`md:hidden absolute top-[68px] left-0 w-full bg-white shadow-lg py-4 z-50 `}>
            <ul className={`flex flex-col gap-6 items-center `}>
              {navItems.map((item, index) => (
                <Link to={`/#${item.hash}`}
                  onClick={()=>(
                    setToggleMenu(false)
                  )}
                  className="text-[18px] text-black font-semibold cursor-pointer"
                  key={index}
                >
                  {item.name}
                </Link>
              ))}
            </ul>
          </motion.div>
      
        )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
