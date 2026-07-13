
import tourGuiderBgImg from '../../assets/Images/about_bg_1 2.svg'
import destinationIcon from '../../assets/Icons/Destination.svg'
import TourGuiderCard from './TourGuiderCard'
import homeData from '../../json/home.json' // Imported entire JSON object

import whatsapp from '../../assets/Icons/whatsapp.svg'
import twitter from '../../assets/Icons/twitter.svg'
import instagram from '../../assets/Icons/instagram.svg'

import tourGuider1 from '../../assets/Images/tourGuider1.svg'
import tourGuider2 from '../../assets/Images/tourGuider2.svg'
import tourGuider3 from '../../assets/Images/tourGuider3.svg'

const TourGuider = () => {
    // 1. Array of images matching the index order of guides
    const tourist_imgs = [tourGuider1, tourGuider2, tourGuider3, tourGuider1] // added a fallback 4th image since you have 4 guides in JSON
    
    // 2. Structured as an object so TourGuiderCard can access keys directly
    const socialIcons = { whatsapp, twitter, instagram }

    return (
        <div className='w-full flex flex-col'>

            {/* Header Content */}
            <div className='relative px-12 pt-12 mb-11 z-10'>
                <div className='relative flex justify-center items-start text-[#143F4A]'>
                    <div className='text-center'>
                        <p className="text-[26px] text-center font-semibold">
                            Meet With Guide
                        </p>
                        <h1 className="text-[48px] font-bold text-center">
                            Our Best Tour Guider
                        </h1>
                    </div>
                    <div className='absolute right-[2%] top-5'>
                        <img
                            className='h-[120px] w-[120px]'
                            src={destinationIcon}
                            alt=""
                        />
                    </div>
                </div>
            </div>

            {/* Tour Guide Cards */}
            <div className='w-full flex justify-between px-12 z-10 gap-4'>
                {/* 3. Mapping over homeData.Tour_Guider accurately */}
                {homeData.Tour_Guider.map((item, index) => (
                    <TourGuiderCard 
                        key={item.id || index} 
                        item={item} 
                        imgSrc={tourist_imgs[index] || tourGuider1} // Passes unique single image per item
                        socialIcons={socialIcons} 
                    />
                ))}
            </div>

            {/* Background image */}
            <div className='w-full h-[305px] bg-cover bg-center -mt-44'
                style={{ backgroundImage: `url(${tourGuiderBgImg})` }}>
            </div>

        </div>
    )
}

export default TourGuider;