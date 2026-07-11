import React from 'react'
import morphBgImg from '../../assets/Images/3D Morph Lines 6.svg'

const YourGateway = () => {
  return (
    <div className="w-full">
      <div
        className="h-[55rem] w-full bg-cover bg-center flex justify-between text-white px-12 py-12"
        style={{ backgroundImage: `url(${morphBgImg})` }}
      >
        {/* Left Side Container Start*/}
        <div className='w-[500px] h-[700px] flex flex-col justify-between'>

          {/* upper images container */}
          <div className='flex justify-around pt-5'>

            {/* left side image container */}

            <div className='w-auto h-auto rounded-tl-[106px] rounded-bl-[142px] rounded-tr-[106px]'>
              <img className='h-[480px] w-[215px]' src="src/assets/Images/gatewayBgImg3.svg" alt="YourGateway BgImg" />
            </div>

            {/* right side image container */}

            <div className='w-auto h-auto flex flex-col justify-between'>

              <div className='w-auto h-auto 3rounded-tl-[104px] rounded-tr-[103px] rounded-br-[123px]'>
                <img className='h-[230px] w-[215px]' src="src/assets/Images/gatewayBgImg2.svg" alt="YourGateway BgImg" />
              </div>

              <div className='w-auto border h-auto rounded-bl-[106px] rounded-br-[106px] rounded-tl-[116px]'>
                <img className='h-[230px] w-[215px]' src="src/assets/Images/gatewayBgImg1.svg" alt="YourGateway BgImg" />
              </div>

            </div>

          </div>

          {/* lower image container */}

          <div className='w-auto h-auto rounded-b-[84px] rounded-t-[84px] mx-4'>
            <img className='w-full h-[170px]' src="src/assets/Images/gatewayBgImg4.svg" alt="YourGateway BgImg" />
          </div>

        </div>

        {/* Left Side Container End*/}

        {/* Right Side Container Start*/}
        
        <div className='w-[750px] h-[700px] text-[#143F4A] '>
          <p className="text-[30px]">About Us</p>
          <h1 className="text-[53px]">Your Gateway to <br /> amazing experiences</h1>
          <p className='text-[18px] text-[#7E7E7E] mb-12'>A travel agency is a gateway to unforgettable journeys, offering expert <br /> guidance, personalized itineraries hassle.</p>

          {/* Travel And Mission Section Strat */}

          <div className='w-full h-[190px] flex flex-col justify-between mb-4'>
            {/* Trusted Travel Guide Section */}

            <div className='w-full h-[90px] flex'>

              {/* Icon Container */}

              <div className='h-[60px] w-[60px] pt-[4px]'>
                <img className='h-[47px] w-[47px]' src="src/assets/Icons/trustedGuide.svg" alt="trustedGuide icon" />
              </div>

              {/* Information Container */}

              <div>
                <p className='text-[18px] mb-1'>Trusted travel Guided</p>
                <span className='text-[18px] text-[#7E7E7E]'>A travel agency is a gateway to unforgettable journeys, offering <br /> expert guidance, personalized itineraries hassle.</span>
              </div>

            </div>

            {/* Mission And Vision Section */}

            <div className='w-full h-[90px] flex'>

              {/* Icon Container */}

              <div className='h-[60px] w-[60px] pt-[4px]'>
                <img className='h-[47px] w-[47px]' src="src/assets/Icons/missionAndVision.svg" alt="mission icon" />
              </div>

              {/* Information Container */}

              <div>
                <p className='text-[18px] mb-1'>Mission & Vision</p>
                <span className='text-[18px] text-[#7E7E7E]'>A travel agency is a gateway to unforgettable journeys, offering <br /> expert guidance, personalized itineraries hassle.</span>
              </div>

            </div>
          </div>

          {/* Travel And Mission Section End */}

          {/* Destination’s Covered/ Happy Travelers/ Satisfaction Rate Section Start */}

          <div className='w-full h-[100px] mb-10 flex justify-between'>

            {/* 15K+ Section */}

            <div className='h-full w-auto'>
              <p className='text-[45px] font-semibold text-center'>15K+</p>
              <p className='text-[18px]'>Destination's Covered</p>
            </div>

            {/* 7K+ Section */}

            <div className='h-full w-auto'>
              <p className='text-[45px] font-semibold text-center'>7K+</p>
              <p className='text-[18px]'>Happy Travelers</p>
            </div>

            {/* 95% Section */}

            <div className='h-full w-auto'>
              <p className='text-[45px] font-semibold text-center'>95%</p>
              <p className='text-[18px]'>Satisfaction Rate</p>
            </div>

          </div>

          {/* Destination’s Covered/ Happy Travelers/ Satisfaction Rate Section End */}

          <a
            href="#"
            className="bg-[#143F4A] text-white py-4 px-5 text-xl rounded-full"
          >
            Discover More →
          </a>

        </div>

        {/* Right Side Container End*/}
      </div>

    </div>
  )
}

export default YourGateway