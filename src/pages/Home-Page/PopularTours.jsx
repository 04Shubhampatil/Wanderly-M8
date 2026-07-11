import React from 'react'
import popularTourBgImg from '../../assets/Images/about_bg_1.svg'


const PopularTours = () => {
  return (
    <div className='h-[800px] w-full'>
      <div className='h-[80%] w-full bg-cover bg-center flex flex-col justify-between  px-12 py-12'
        style={{ backgroundImage: `url(${popularTourBgImg})` }}>

        {/* Header Content Start */}
        <div className='flex justify-between mb-20'>

          <div className='mr-7 text-[#143F4A] text-left'>
            <div className=''>
              <div className='flex items-center'>
                <p className="text-[26px] text-center font-semibold mr-7">
                  Our Packages
                </p>
                <img className='h-[60px] w-[60px]' src="src/assets/Icons/Travel.svg" alt="" />
              </div>
              <h1 className="text-[48px] font-bold">Our Most <br /> Popular Tours</h1>
            </div>
          </div>

          <div className='h-[180px] w-auto pt-7 flex items-center'>

            <a href="#"
              className="bg-[#143F4A] text-white py-4 px-5 text-xl rounded-full"
            >
              View All Packages →
            </a>
          </div>

        </div>

        {/* Header Content End */}

      </div>


      {/* Trip Booking Section Start */}

      <div className='w-full h-[600px] -mt-75 flex box-border justify-evenly px-12 py-12'>

        {/* Card 1 */}
        <div className='w-[31.5%] h-[500px] border-1 border-[#1CA8CB33]/30 bg-white rounded-3xl shadow-2xs p-3'>
          <img className='w-full h-[55%] rounded-2xl object-cover mb-6' src="src/assets/Images/Hero-hiking-patagonia-adventure 1.svg" alt="" />
          <div className='flex justify-between'>
            <p className='text-[24px] font-semibold mb-2'>Patagonia  Trek</p>
            <div className='flex items-center'>
              <img className='h-[30px] w-[30px] mr-2' src="src/assets/Icons/hugeicons_star 4.svg" alt="" />
              <p className='text-[18px]'>4.8</p>
            </div>
          </div>
          <p className='text-[24px] font-semibold mb-12'>$890.00 <span className='text-[#7E7E7E] text-[20px]'>/Person</span></p>
          <div className='flex justify-between'>
            <div className='flex items-center'>
              <img className='h-[20px] w-[20px] mr-2' src="src/assets/Icons/hugeicons_clock-01 4.svg" alt="" />
              <p className='text-[#143F4A] text-[20px]'>7 Days</p>
            </div>
            <a href="#" className='text-[18px] bg-[#143F4A] text-white font-semibold rounded-4xl px-7 py-2'>Book A Trip →</a>
          </div>
        </div>

        {/* Card 2 */}
        <div className='w-[31.5%] h-[500px] border-1 border-[#1CA8CB33]/30 bg-white rounded-3xl shadow-2xs p-3'>
          <img className='w-full h-[55%] rounded-2xl object-cover mb-6' src="src/assets/Images/yznay3ejdh5dr1g9fa2n 1.svg" alt="" />
          <div className='flex justify-between'>
            <p className='text-[24px] font-semibold mb-2'>Dubai Luxury Escape</p>
            <div className='flex items-center'>
              <img className='h-[30px] w-[30px] mr-2' src="src/assets/Icons/hugeicons_star 4.svg" alt="" />
              <p className='text-[18px]'>4.9</p>
            </div>
          </div>
          <p className='text-[24px] font-semibold mb-12'>$870.00 <span className='text-[#7E7E7E] text-[20px]'>/Person</span></p>
          <div className='flex justify-between'>
            <div className='flex items-center'>
              <img className='h-[20px] w-[20px] mr-2' src="src/assets/Icons/hugeicons_clock-01 4.svg" alt="" />
              <p className='text-[#143F4A] text-[20px]'>7 Days</p>
            </div>
            <a href="#" className='text-[18px] bg-[#143F4A] text-white font-semibold rounded-4xl px-7 py-2'>Book A Trip →</a>
          </div>
        </div>

        {/* Card 3 */}
        <div className='w-[31.5%] h-[500px] border-1 border-[#1CA8CB33]/30 bg-white rounded-3xl shadow-2xs p-3'>
        <img className='w-full h-[55%] rounded-2xl object-cover mb-6' src="src/assets/Images/59a4bc60-f23c-11eb-bf75-c38993010fb7 1.svg" alt="" />
          <div className='flex justify-between'>
            <p className='text-[24px] font-semibold mb-2'>Tokyo Journey</p>
            <div className='flex items-center'>
              <img className='h-[30px] w-[30px] mr-2' src="src/assets/Icons/hugeicons_star 4.svg" alt="" />
              <p className='text-[18px]'>4.9</p>
            </div>
          </div>
          <p className='text-[24px] font-semibold mb-12'>$1100.00 <span className='text-[#7E7E7E] text-[20px]'>/Person</span></p>
          <div className='flex justify-between'>
            <div className='flex items-center'>
              <img className='h-[20px] w-[20px] mr-2' src="src/assets/Icons/hugeicons_clock-01 4.svg" alt="" />
              <p className='text-[#143F4A] text-[20px]'>6 Days</p>
            </div>
            <a href="#" className='text-[18px] bg-[#143F4A] text-white font-semibold rounded-4xl px-7 py-2'>Book A Trip →</a>
          </div>
        </div>

      </div>

      {/* Trip Booking Section End */}


    </div>
  )
}

export default PopularTours