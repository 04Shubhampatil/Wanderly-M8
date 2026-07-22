import React from "react";
import { Star, Clock3, ArrowRight } from "lucide-react";

// Import Tour Images
import Rome from "../../assets/Images/Rome.svg";
import Swiss from "../../assets/Images/Swiss.svg";
import Amsterdam from "../../assets/Images/Amsterdam.svg";
import Earthicon from "../../assets/Icons/Earthicon.svg"

// Tour Data
const tours = [
  {
    id: 1,
    image: Rome,
    title: "Rome Heritage Tour",
    price: "$820.00",
    rating: "4.8",
    days: "5 Days",
  },
  {
    id: 2,
    image: Swiss,
    title: "Swiss Alps Getaway",
    price: "$1,150.00",
    rating: "4.9",
    days: "7 Days",
  },
  {
    id: 3,
    image: Amsterdam,
    title: "Amsterdam City Break",
    price: "$760.00",
    rating: "4.7",
    days: "4 Days",
  },
];

const RecommendedTours = () => {
  return (
    // Main Section
    <section className="w-full py-20 bg-white">
      <div className="max-w-[1320px] mx-auto px-6">

        {/* ===================== Heading Section ===================== */}
        <div className="flex justify-between items-center mb-14">

          {/* Left Heading */}
          <div>
            <div className="flex items-center gap-2">
              <p className="font-serif italic text-[26px] text-[#143F4A]">
                Recommended
              </p>

              {/* Globe Icon */}
              <div className="w-16 h-16  border-gray-300 flex items-center justify-center pl-3">
                <img src={Earthicon} alt="" />
              </div>
            </div>

            <h2 className="text-[53px] font-serif font-semibold text-[#143F4A] leading-tight">
              You May Also Like
            </h2>
          </div>

          {/* View More Button */}
          <button className="bg-[#143F4A] text-white rounded-full px-5 py-4 text-[20px] flex items-center gap-3 hover:bg-[#0f333c] duration-300">
            View More
            <ArrowRight size={22} />
          </button>

        </div>

        {/* ===================== Tour Cards ===================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {tours.map((tour) => (
            <div
              key={tour.id}
              className="border border-[#d7e8ec] rounded-[22px] p-4 shadow-sm bg-white"
            >

              {/* Tour Image */}
              <img
                src={tour.image}
                alt={tour.title}
                className="w-full h-[260px] object-cover rounded-[18px]"
              />

              {/* Tour Name & Rating */}
              <div className="mt-5 flex justify-between items-center">

                <h3 className="text-[22px] font-serif font-semibold text-[#143F4A] leading-tight">
                  {tour.title}
                </h3>

                <div className="flex items-center gap-1">
                  <Star
                    fill="#FFB400"
                    color="#FFB400"
                    size={19}
                  />
                  <span className="text-[18px]">{tour.rating}</span>
                </div>

              </div>

              {/* Tour Price */}
              <div className="mt-2">
                <span className="text-[24px] font-bold">
                  {tour.price}
                </span>

                <span className="text-gray-500 text-[22px]">
                  /Person
                </span>
              </div>

              {/* Tour Footer */}
              <div className="mt-8 flex justify-between items-center">

                {/* Duration */}
                <div className="flex items-center gap-2 text-[#143F4A]">
                  <Clock3 size={18} />
                  <span className="text-[18px]">{tour.days}</span>
                </div>

                {/* Book Button */}
                <button className="bg-[#143F4A] text-white rounded-full px-5 py-2 flex items-center gap-2 text-[18px] hover:bg-[#0f333c] duration-300">
                  Book A Trip
                  <ArrowRight size={18} />
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default RecommendedTours;