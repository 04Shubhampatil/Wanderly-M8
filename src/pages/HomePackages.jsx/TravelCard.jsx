

import singapore from "../../assets/AvailabilityDateSection/Images/card-img1.svg";
import maldives from "../../assets/AvailabilityDateSection/Images/card-img2.svg";
import thailand from "../../assets/AvailabilityDateSection/Images/card-img3.svg";
import japan from "../../assets/AvailabilityDateSection/Images/card-img4.svg";
import bangkok from "../../assets/AvailabilityDateSection/Images/card-img5.svg";
import phuket from "../../assets/AvailabilityDateSection/Images/card-img6.svg";


const packagesData = [
  {
    id: 1,
    title: "Singapore Urban Tour",
    image: singapore,
    price: "$912.00",
    rating: "4.8",
    days: "4 Days",
  },
  {
    id: 2,
    title: "Maldives Luxury",
    image: maldives,
    price: "$1,89.00",
    rating: "4.9",
    days: "5 Days",
  },
  {
    id: 3,
    title: "Thailand Island Escape",
    image: thailand,
    price: "$780.00",
    rating: "4.8",
    days: "3 Days",
  },
  {
    id: 4,
    title: "Japan Cultural Tour",
    image: japan,
    price: "$820.00",
    rating: "4.9",
    days: "2 Days",
  },
  {
    id: 5,
    title: "Bangkok Culture",
    image: bangkok,
    price: "$528.00",
    rating: "4.8",
    days: "4 Days",
  },
  {
    id: 6,
    title: "Phuket Beach Getaway",
    image: phuket,
    price: "$420.00",
    rating: "4.7",
    days: "8 Days",
  },
];

export default function TravelCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-5">
      {packagesData.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-[350px] object-fill rounded-lg mr-2 mt-2 p-2"
          />

          <div className="p-4">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">
                {item.title}
              </h2>

              <span className="text-orange-400 font-semibold">
                ⭐ {item.rating}
              </span>
            </div>

            <h1 className="text-2xl font-bold mt-2">
              {item.price}
              <span className="text-sm text-gray-400 font-normal">
                /Person
              </span>
            </h1>

            <div className="flex justify-between items-center w-120px h-[30px] mt-4">
              <p className="text-gray-500 text-sm">
                🕒 {item.days}
              </p>

              <button className="bg-[#143F4A] text-white w-190px h-[40px] px-5 py-2 rounded-full hover:bg-[#16395f] transition">
                Book A Trip →
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}