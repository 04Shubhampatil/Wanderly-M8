import React from "react";
import Dubai_Luxury_Escape_2 from "./Dubai_Luxury_Escape_2";   
import About_This_Tour from "./About_This_Tour";
import Day_Wise from "./Day_Wise";
import About from "./About";


const Dubai_Luxury_Escape = () => {
  return (
    <div className="w-full h-[328px] flex justify-center mt-[149px] " >
      
      <div className="relative w-full">
        
        <img
          src="src\assets\Images\bc2f05aa3722b4a779d037b6225ca68576e3e51a.jpg"
          alt="Dubai"
          className="w-full h-full object-cover "
        />

  
        <div className="absolute inset-0 bg-[#143F4A]/80"></div>

     
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
          
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2">
            Dubai Luxury Escape
          </h1>

          <p className="text-sm md:text-lg">
            Home / Packages /{" "}
            <span className="text-blue-400">
              Dubai Luxury Escape
            </span>
          </p>
 
        </div> <Dubai_Luxury_Escape_2/>
              < About_This_Tour />
              <Day_Wise />
              < About />
             


              
      </div>
    

    </div>
    
  );
};

export default Dubai_Luxury_Escape;