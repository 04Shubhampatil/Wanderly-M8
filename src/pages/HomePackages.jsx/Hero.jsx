import React from "react";

import bg from "../../assets/AvailabilityDateSection/Images/backgroundimg.svg";



const Hero = () => {
  return (
    <div className="w-full flex justify-center mt-30">
      
      <div className="relative w-full h-100">
        
        <img
          src={bg}
          alt="Dubai"
          className="w-full h-full object-cover "
        />

  
        <div className="absolute inset-0 bg-[#143F4A]/5"></div>

     
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
          
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2">
            Dubai Luxury Escape
          </h1>

          <p className="text-sm md:text-lg">
            Home /{" "}
            <span className="text-blue-400">
            Packages
             
            </span>
          </p>

        </div>  
        

      </div>
    

    </div>
    
  );
};

export default Hero;