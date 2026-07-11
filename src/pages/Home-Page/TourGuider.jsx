import React from 'react'
import tourGuiderBgImg from '../../assets/Images/about_bg_1 2.svg'
import destinationIcon from '../../assets/Icons/Destination.svg'

const TourGuider = () => {
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
            <div className='relative w-full flex justify-between px-16 z-10 overflow-visible'>

                {/* Travel icon — absolutely positioned to the left */}
                <img
                    src="src/assets/Icons/Travel.svg"
                    alt=""
                    className='absolute left-[3%] top-[-2%] w-[55px] h-[55px] z-20'
                />

                {/* Card 1 */}
                <div className='relative w-[23%] h-[500px] rounded-[200px] overflow-hidden'
                    style={{ background: 'linear-gradient(to bottom, #5BC8E8 0%, #29ABD4 50%, #1A9BC4 100%)' }}>
                    <img className='w-full h-full object-cover object-center' src="src/assets/Images/tourGuider1.svg" alt="Daniel Cruz" />
                    <div className='absolute bottom-0 left-0 w-full h-[45%] rounded-b-[200px] flex flex-col justify-end items-center pb-17 gap-1'
                        style={{ background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.6) 100%)' }}>
                        <h3 className='text-white font-bold text-[20px]'>Daniel Cruz</h3>
                        <p className='text-white text-[15px]'>Adventure & Hiking Guide</p>
                        <div className='flex gap-3 mt-2'>
                            <img src="src/assets/Icons/whatsapp.svg" alt="whatsapp" className='w-5 h-5' />
                            <img src="src/assets/Icons/twitter.svg" alt="twitter" className='w-5 h-5' />
                            <img src="src/assets/Icons/instagram.svg" alt="instagram" className='w-5 h-5' />
                        </div>
                    </div>
                </div>

                {/* Card 2 */}
                <div className='relative w-[23%] h-[500px] rounded-[200px] overflow-hidden'
                    style={{ background: 'linear-gradient(to bottom, #5BC8E8 0%, #29ABD4 50%, #1A9BC4 100%)' }}>
                    <img className='w-full h-full object-cover object-center' src="src/assets/Images/tourGuider2.svg" alt="Sara Mitchell" />
                    <div className='absolute bottom-0 left-0 w-full h-[45%] rounded-b-[200px] flex flex-col justify-end items-center pb-17 gap-1'
                        style={{ background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.6) 100%)' }}>
                        <h3 className='text-white font-bold text-[20px]'>Sara Mitchell</h3>
                        <p className='text-white text-[15px]'>Walking Tour Expert</p>
                        <div className='flex gap-3 mt-2'>
                            <img src="src/assets/Icons/whatsapp.svg" alt="whatsapp" className='w-5 h-5' />
                            <img src="src/assets/Icons/twitter.svg" alt="twitter" className='w-5 h-5' />
                            <img src="src/assets/Icons/instagram.svg" alt="instagram" className='w-5 h-5' />
                        </div>
                    </div>
                </div>

                {/* Card 3 */}
                <div className='relative w-[23%] h-[500px] rounded-[200px] overflow-hidden'
                    style={{ background: 'linear-gradient(to bottom, #5BC8E8 0%, #29ABD4 50%, #1A9BC4 100%)' }}>
                    <img className='w-full h-full object-cover object-center' src="src/assets/Images/tourGuider3.svg" alt="Ahmed Al-Farsi" />
                    <div className='absolute bottom-0 left-0 w-full h-[45%] rounded-b-[200px] flex flex-col justify-end items-center pb-17 gap-1'
                        style={{ background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.6) 100%)' }}>
                        <h3 className='text-white font-bold text-[20px]'>Ahmed Al-Farsi</h3>
                        <p className='text-white text-[15px]'>Desert & City Tour Specialist</p>
                        <div className='flex gap-3 mt-2'>
                            <img src="src/assets/Icons/whatsapp.svg" alt="whatsapp" className='w-5 h-5' />
                            <img src="src/assets/Icons/twitter.svg" alt="twitter" className='w-5 h-5' />
                            <img src="src/assets/Icons/instagram.svg" alt="instagram" className='w-5 h-5' />
                        </div>
                    </div>
                </div>

                {/* Card 4 */}
                <div className='relative w-[23%] h-[500px] rounded-[200px] overflow-hidden'
                    style={{ background: 'linear-gradient(to bottom, #5BC8E8 0%, #29ABD4 50%, #1A9BC4 100%)' }}>
                    <img className='w-full h-full object-cover object-center' src="src/assets/Images/tourGuider4.svg" alt="Aisha Khan" />
                    <div className='absolute bottom-0 left-0 w-full h-[45%] rounded-b-[200px] flex flex-col justify-end items-center pb-17 gap-1'
                        style={{ background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.6) 100%)' }}>
                        <h3 className='text-white font-bold text-[20px]'>Aisha Khan</h3>
                        <p className='text-white text-[15px]'>Cultural & Heritage Guide</p>
                        <div className='flex gap-3 mt-2'>
                            <img src="src/assets/Icons/whatsapp.svg" alt="whatsapp" className='w-5 h-5' />
                            <img src="src/assets/Icons/twitter.svg" alt="twitter" className='w-5 h-5' />
                            <img src="src/assets/Icons/instagram.svg" alt="instagram" className='w-5 h-5' />
                        </div>
                    </div>
                </div>

            </div>

            {/* Background image — overlapped by cards using negative margin */}
            <div className='w-full h-[305px] bg-cover bg-center -mt-44'
                style={{ backgroundImage: `url(${tourGuiderBgImg})` }}>
            </div>

        </div>
    )
}

export default TourGuider