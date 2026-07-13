
import popularTourBgImg from '../../assets/Images/about_bg_1.svg'
import homeData from '../../json/home.json' // Import your JSON data

// Import tour images
import patagoniaImg from '../../assets/Images/Hero-hiking-patagonia-adventure 1.svg'
import dubaiImg from '../../assets/Images/yznay3ejdh5dr1g9fa2n 1.svg'
import tokyoImg from '../../assets/Images/59a4bc60-f23c-11eb-bf75-c38993010fb7 1.svg'

// Import icons
import travelIcon from '../../assets/Icons/Travel.svg'
import starIcon from '../../assets/Icons/hugeicons_star 4.svg'
import clockIcon from '../../assets/Icons/hugeicons_clock-01 4.svg'

import { Link } from 'react-router-dom'

const PopularTours = () => {
  // Map array indexes to your imported images
  const tourImages = [patagoniaImg, dubaiImg, tokyoImg]
  
  // Since prices aren't in your JSON yet, we can match them by index order
  const tourPrices = ["$890.00", "$870.00", "$1100.00"]

  return (
    <div className='min-h-[800px] w-full pb-16'>
      <div className='h-[500px] w-full bg-cover bg-center flex flex-col justify-between px-12 py-12'
        style={{ backgroundImage: `url(${popularTourBgImg})` }}>

        {/* Header Content Start */}
        <div className='flex justify-between mb-20'>
          <div className='mr-7 text-[#143F4A] text-left'>
            <div>
              <div className='flex items-center mb-2'>
                <p className="text-[26px] text-center font-semibold mr-7">
                  Our Packages
                </p>
                <img className='h-[60px] w-[60px]' src={travelIcon} alt="Travel icon" />
              </div>
              <h1 className="text-[48px] font-bold leading-tight">Our Most <br /> Popular Tours</h1>
            </div>
          </div>

          <div className='pt-7 flex items-center'>
            <a href="#" className="bg-[#143F4A] text-white py-4 px-6 text-xl rounded-full transition-all hover:bg-[#12363f]">
              View All Packages →
            </a>
          </div>
        </div>
        {/* Header Content End */}

      </div>

      {/* Trip Booking Section Start */}
      <div className='w-full -mt-40 flex flex-wrap justify-center gap-6 px-12'>

        {/* Dynamic Mapping over Popular_Tours */}
        {homeData.Popular_Tours.map((tour, index) => (
          <div key={tour.id || index} className='w-[31.5%] min-w-[300px] h-[520px] border border-[#1CA8CB33]/30 bg-white rounded-3xl shadow-sm p-4 flex flex-col justify-between'>
            
            <div>
              {/* Dynamic Image */}
              <img 
                className='w-full h-[240px] rounded-2xl object-cover mb-4' 
                src={tourImages[index] || patagoniaImg} 
                alt={tour.title} 
              />
              
              <div className='flex justify-between items-start mb-2'>
                {/* Dynamic Title */}
                <p className='text-[24px] font-bold text-[#143F4A] leading-tight max-w-[75%]'>{tour.title}</p>
                {/* Dynamic Rating */}
                <div className='flex items-center bg-gray-50 px-2 py-1 rounded-lg'>
                  <img className='h-[20px] w-[20px] mr-1' src={starIcon} alt="Star rating" />
                  <p className='text-[16px] font-semibold text-gray-700'>{tour.rate}</p>
                </div>
              </div>

              {/* Dynamic Price */}
              <p className='text-[24px] font-bold text-[#143F4A] mb-4'>
                {tourPrices[index] || "$0.00"} 
                <span className='text-[#7E7E7E] text-[18px] font-normal'> /Person</span>
              </p>
            </div>

            <div className='flex justify-between items-center pt-2 border-t border-gray-100'>
              {/* Dynamic Days/Duration */}
              <div className='flex items-center'>
                <img className='h-[20px] w-[20px] mr-2' src={clockIcon} alt="Clock icon" />
                <p className='text-[#143F4A] text-[18px] font-medium capitalize'>{tour.day}</p>
              </div>
              <Link to="/dubai" className='text-[16px] bg-[#143F4A] text-white font-semibold rounded-full px-5 py-2.5 transition-all hover:bg-[#1ca8cb]'>
                Book A Trip →
              </Link>
              
            </div>

          </div>
        ))}

      </div>
      {/* Trip Booking Section End */}

    </div>
  )
}

export default PopularTours