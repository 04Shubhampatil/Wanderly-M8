import React from "react";
import img from "../../assets/Images/3D Morph Lines 6.svg"
import img1 from "../../assets/Images/img(2).svg";
import img2 from "../../assets/Images/img(3).svg";
import img3 from "../../assets/Images/img(4).svg";
import mapImg from "../../assets/Images/Map.png";
import heartIcon from "../../assets/Icons/Heart.svg";
import shareIcon from "../../assets/Icons/Share.svg";
import navigateIcon from "../../assets/Icons/Navigate.svg";
import  StarIcon  from "../../assets/Icons/Star.svg";

const Dubai_Luxury_Escape_2 = () => {
    return (

        <div className="w-full min-h-screen bg-cover bg-center border border-white " 
            style={{
                backgroundImage: `url(${img})`,
            }}>

            <div className="w-1548px  mt-15  ml-20 mr-20 ">


                {/* Top Section */}
                <div className="flex justify-between items-start flex-wrap gap-4 ">

                    <div>
                        <h1 className="text-4xl md:text-5xl font-serif font-semibold text-teal-900">
                            Dubai Luxury Escape
                        </h1>

                        <div className="flex items-center gap-4 mt-3 text-gray-700">
                            <p className="text-lg font-medium">
                                $870.00 <span className="text-sm text-gray-500">/Person</span>
                            </p>

                            <div className="flex items-center gap-1">
                               <img src={StarIcon} 
                               alt=""
                               className="w-5 h-5" />
                                <span>4.9</span>
                            </div>                  </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex items-center gap-3">
                        <button className="w-12 h-12 flex items-center justify-center rounded-full bg-teal-900 text-white">
                            <img src={heartIcon} 
                            className="h-6 w-6"
                            alt="" />
                        </button>

                        <button className="flex items-center gap-2 px-5 h-12 rounded-full border border-teal-900 text-teal-900" onC>
                            Share <img src={shareIcon} 
                            className="h-5 w-5"
                            alt="" />
                        </button>
                    </div>
                </div>

                {/* image Section */}


                <div className="flex justify-start mt-10  ">
                    <div className="flex gap-4 ">

                        {/* LEFT IMAGE */}
                        <div className="w-122 h-125">
                            <img
                                src={img1}
                                alt=""
                                className="w-full h-full object-cover rounded-xl"
                            />
                        </div>

                        {/* CENTER (2 IMAGES) */}
                        <div className="flex flex-col gap-4">

                            {/* TOP */}
                            <div className="w-87 h-61">
                                <img
                                    src={img2}
                                    alt=""
                                    className="w-full h-full object-cover rounded-xl"
                                />
                            </div>

                            {/* BOTTOM */}
                            <div className="w-87 h-60 relative">
                                <img
                                    src={img3}
                                    alt=""
                                    className="w-full h-full object-cover rounded-xl"
                                />

                                <div className="absolute inset-0 bg-black/40 rounded-xl flex items-center justify-center text-white text-10">
                                    {/* ALL PHOTOS */}
                                </div>
                            </div>

                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="w-122 h-125 relative">
                            <img
                                src={mapImg}
                                alt=""
                                className="w-full h-full object-cover rounded-xl"
                            />

                            <div className="absolute inset-0 flex items-center justify-center">


                                <div className="h-40 w-40 flex items-center justify-center  rounded-full bg-[#143f4a48] ">
                                    <div className="w-20 h-20 bg-[#143F4A] text-white rounded-full flex items-center justify-center text-3xl ">

                                        <img
                                            src={navigateIcon}
                                            alt=""
                                            className="w-8 h-8 object-cover rounded-xl" />
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>

    );
};

export default Dubai_Luxury_Escape_2;