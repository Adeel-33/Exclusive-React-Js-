import { useState } from "react";
const Filter=({setCatagory})=>{

 
    const catagories=["All","Electronics","Woods","Clothes","Shoes"]

    

     return(<>

        {/* CATEGORY FILTER UI (ONLY UI, NO LOGIC) */}
       <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between px-4 md:px-20 my-6">

         {/* Title */}
         <h2 className="text-2xl font-semibold text-black">Filter Products</h2>

         {/* Category Filter Options */}
         <div className="flex flex-wrap gap-3 mt-4 md:mt-0">
          
           {
              catagories.map((catagory,index)=>(
              <button 
              onClick={()=>(
                setCatagory(catagory)
              )}
              key={index} className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-black hover:text-white transition">
              {catagory}
              </button>
           ))
           }
    
  
   
        </div>

      </div>

  </>)
}
export default  Filter