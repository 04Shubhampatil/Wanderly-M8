import React from 'react'
import egyptImg from '../../assets/Image/Egypt.svg'
import greeceImg from '../../assets/Image/Greece.svg'
import ukImg from '../../assets/Image/UK.svg'
import franceImg from '../../assets/Image/France.svg'
import bangladeshImg from '../../assets/Image/Bangladesh.svg'
import japanImg from '../../assets/Image/Japan.svg'
import spainImg from '../../assets/Image/Spain.svg'
import swithzerlandImg from '../../assets/Image/Swithzerland.svg'
import thailandImg from '../../assets/Image/Thailand.svg'
import maldivesImg from '../../assets/Image/Maldives.svg'
import dubaiImg from '../../assets/Image/Dubai.svg'

const Cards = () => {
  return (
    <div className='w-full border border-black mb-10 px-12 py-5'>
      <div className='flex justify-between h-[920px]'>
        <div className='flex flex-col justify-between border border-black h-[920px] w-[69%]'>
          <div className='w-full flex justify-between'>


            {/* Egypt */}
            <div className='h-[400px] w-[420px] bg-cover bg-center rounded-2xl relative'
              style={{ backgroundImage: `url(${egyptImg})` }}>
              {/* TEXT */}
              <div className='absolute bottom-5 left-5 text-white'>
                <h1 className='text-3xl font-semibold'>Egypt</h1>
                <p className='text-sm'>174,688 Travelers</p>
              </div>
            </div>

            {/* Greece */}
            <div className='h-[400px] w-[420px] bg-cover bg-center rounded-2xl'
              style={{ backgroundImage: `url(${greeceImg})` }}>
              <div className='absolute bottom-5 left-125 text-white'>
                <h1 className='text-3xl font-semibold'>Greece</h1>
                <p className='text-sm'>174,688 Travelers</p>
              </div>

            </div>

          </div>

          <div>
            {/* UK */}
            <div className='h-[500px] w-full bg-cover bg-center rounded-2xl'
              style={{ backgroundImage: `url(${ukImg})` }}>
            </div>
          </div>

        </div>

        {/* France */}

        <div className='flex flex-col justify-between border border-black h-full w-[29.5%]'>
          <div className='h-[70%] w-full bg-cover bg-cover bg-center rounded-2xl'
            style={{ backgroundImage: `url(${franceImg})` }}>

          </div>

          {/* Bangladesh */}

          <div className='h-[28%] w-full bg-cover bg-cover bg-center rounded-2xl'
            style={{ backgroundImage: `url(${bangladeshImg})` }}>

          </div>
        </div>
      </div>

      {/* SECOND SECTION */}
      <div className='flex justify-between w-full h-[635px] mt-5 border border-black'>

        {/* Japan */}
        <div
          className='w-[28%] h-full rounded-2xl bg-cover bg-center'
          style={{ backgroundImage: `url(${japanImg})` }}
        >
        </div>

        {/* RIGHT SIDE */}
        <div className='w-[70%] h-full flex flex-col justify-between'>

          {/* TOP */}
          <div className='flex justify-between h-[48%]'>

            {/* Spain */}
            <div
              className='w-[32%] rounded-2xl bg-cover bg-center'
              style={{ backgroundImage: `url(${spainImg})` }}
            >
            </div>

            {/* Switzerland */}
            <div
              className='w-[32%] rounded-2xl bg-cover bg-center'
              style={{ backgroundImage: `url(${swithzerlandImg})` }}
            >
            </div>

            {/* Thailand */}
            <div
              className='w-[32%] rounded-2xl bg-cover bg-center'
              style={{ backgroundImage: `url(${thailandImg})` }}
            >
            </div>

          </div>

          {/* BOTTOM */}
          <div className='flex justify-between h-[48%]'>

            {/* Maldives */}
            <div
              className='w-[49%] rounded-2xl bg-cover bg-center'
              style={{ backgroundImage: `url(${maldivesImg})` }}
            >
            </div>

            {/* Dubai */}
            <div
              className='w-[49%] rounded-2xl bg-cover bg-center'
              style={{ backgroundImage: `url(${dubaiImg})` }}
            >
            </div>

          </div>

        </div>

      </div>


    </div>



  )
}


export default Cards