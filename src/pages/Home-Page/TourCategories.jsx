import React from 'react'
import vectorImg from '../../assets/Icons/Vector 1052.svg'
import notebookImg from '../../assets/Icons/Notebook.svg'

const TourCategories = () => {
  return (
    <div className='relative min-h-[50rem] w-full overflow-hidden'>

      {/* Background vector as absolute img — fixes SVG not showing as bg-image */}
      <img
        src={vectorImg}
        alt=""
        className='absolute top-0 left-0 w-full h-full object-cover pointer-events-none select-none'
      />

      <div className='relative z-10'>

        {/* Header Start*/}
        <div className='text-[#143F4A] flex justify-center items-start pt-16 mb-20'>

          <div className='mr-7'>
            <p className="text-[26px] text-center font-semibold">
              Wonderful Place For You
            </p>
            <h1 className="text-[48px] font-bold text-center">Tour Categories</h1>
          </div>

          <div className='h-[100px] w-auto pt-7'>
            <img className='h-[60px] w-[60px]' src={notebookImg} alt="notebook img" />
          </div>

        </div>

        {/* Header End*/}

        {/* Categories Read More Section Start */}

        <div className='px-15 w-full h-[500px] border border-black flex'>

          {/* Img and Read More Section Start */}

          <div className="w-full flex justify-between border border-black text-[#143F4A]">

            {/* Cruise Section Start */}

            <div className="w-[230px] h-[340px]  border border-black">

              <img className='w-[230px] h-[] mb-4'
                src="src/assets/Images/cruiseImg.svg" alt="Bird Img" />

              <p className='text-[24px] text-center font-bold mb-2'>Airbirds</p>

              <div className='flex justify-center'>
                <a href="#" className='text-[18px] border border-[#143F4A80]/50 rounded-4xl px-7 py-2'>Read More →</a>
              </div>

            </div>

            {/* Cruise Section End */}

             {/* Hiking Section Start */}

            <div className="w-[230px] h-[340px]  border border-black">

              <img className='w-[230px] h-[] mb-4'
                src="src/assets/Images/hikingImg.svg" alt="Bird Img" />

              <p className='text-[24px] text-center font-bold mb-2'>Airbirds</p>

              <div className='flex justify-center'>
                <a href="#" className='text-[18px] border border-[#143F4A80]/50 rounded-4xl px-7 py-2'>Read More →</a>
              </div>

            </div>

            {/* Hiking Section End */}

            {/* Bird Section Start */}

            <div className="w-[230px] h-[340px]  border border-black">

              <img className='w-[230px] h-[] mb-4'
                src="src/assets/Images/birdImg.svg" alt="Bird Img" />

              <p className='text-[24px] text-center font-bold mb-2'>Airbirds</p>

              <div className='flex justify-center'>
                <a href="#" className='text-[18px] border border-[#143F4A80]/50 rounded-4xl px-7 py-2'>Read More →</a>
              </div>

            </div>

            {/* Bird Section End */}

             {/* Wild Life Section Start */}

            <div className="w-[230px] h-[340px]  border border-black">

              <img className='w-[230px] h-[] mb-4'
                src="src/assets/Images/wildLifeImg.svg" alt="Bird Img" />

              <p className='text-[24px] text-center font-bold mb-2'>Airbirds</p>

              <div className='flex justify-center'>
                <a href="#" className='text-[18px] border border-[#143F4A80]/50 rounded-4xl px-7 py-2'>Read More →</a>
              </div>

            </div>

            {/* Wild Life Section End */}

             {/* Walking Section Start */}

            <div className="w-[230px] h-[340px]  border border-black">

              <img className='w-[230px] h-[] mb-4'
                src="src/assets/Images/walkingImg.svg" alt="Bird Img" />

              <p className='text-[24px] text-center font-bold mb-2'>Airbirds</p>

              <div className='flex justify-center'>
                <a href="#" className='text-[18px] border border-[#143F4A80]/50 rounded-4xl px-7 py-2'>Read More →</a>
              </div>

            </div>

            {/* Walking Section End */}

          </div>

          {/* Img and Read More Section End */}

        </div>

        {/* Categories Read More Section End */}

      </div>
    </div>
  )
}

export default TourCategories