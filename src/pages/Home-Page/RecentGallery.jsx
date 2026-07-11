import React from 'react'
import vectorImg from '../../assets/Icons/Vector 1053.svg'
import mapIcon from '../../assets/Icons/Map 3.svg'

const RecentGallery = () => {
    return (
        <div className='h-[1050px] mt-25 mb-12'>
            <div className='relative min-h-[50rem] w-full overflow-hidden'>

                {/* Background vector */}
                <img
                    src={vectorImg}
                    alt=""
                    className='absolute top-0 left-0 w-full h-full object-cover pointer-events-none select-none'
                />

                {/* Header Content Start */}
                <div className='relative px-12 py-12 z-10'>
                    <div className='relative flex justify-center items-start text-[#143F4A]'>

                        {/* Centered text block */}
                        <div className='text-center'>
                            <p className="text-[26px] text-center font-semibold">
                                Best Memorable Places
                            </p>
                            <h1 className="text-[48px] font-bold text-center">
                                Recent Gallery
                            </h1>
                        </div>

                        {/* Map icon — absolutely positioned to the right */}
                        <div className='mt-2 absolute right-[5%] top-4'>
                            <img
                                className='h-[75px] w-[75px]'
                                src={mapIcon}
                                alt=""
                            />
                        </div>
                    </div>

                    {/* Header Content End */}

                    {/* Gallery Section Start */}

                    <div className='px-12 py-12 flex justify-between'>

                        {/* Section 1 */}
                        <div className='h-[700px] w-[250px]'>
                            <img className='mt-26 mb-28' src="src/assets/Images/unsplash_REtFqYNq7h8.svg" alt="" />
                            <img className='h-[75px] w-[75px]' src="src/assets/Icons/Travel 3.svg" alt="" />
                        </div>
                        {/* Section 2 */}
                        <div className='flex flex-col justify-between h-[700px] w-[350px]'>
                            <img src="src/assets/Images/unsplash_kwYnnIkcpRk.svg" alt="" />
                            <img src="src/assets/Images/unsplash_T7K4aEPoGGk.svg" alt="" />
                        </div>
                        {/* Section 3 */}
                        <div className='flex flex-col justify-between h-[700px] w-[350px]'>
                            <img src="src/assets/Images/unsplash_Yizrl9N_eDA.svg" alt="" />
                            <img src="src/assets/Images/unsplash_h0AnGGgseio.svg" alt="" />
                        </div>
                        {/* Section 4 */}
                        <div className='h-[700px] w-[250px]'>
                            <img className='mt-65 mb-25' src="src/assets/Images/unsplash_BKLHxgbYFDI.svg" alt="" />
                            <img className='ml-4 h-[75px] w-[75px]' src="src/assets/Icons/Airplane 3.svg" alt="" />
                        </div>

                    </div>

                    {/* Gallery Section End */}

                    <div className='flex justify-center'>
                        <a
                            href="#"
                            className="bg-[#143F4A] text-white py-4 px-5 text-xl rounded-full"
                        >
                            View All Gallery →
                        </a>

                    </div>
                </div>





            </div>
        </div>
    )
}

export default RecentGallery