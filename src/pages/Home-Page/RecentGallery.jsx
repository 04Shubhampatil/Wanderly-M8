
import vectorImg from '../../assets/Icons/Vector 1053.svg'
import mapIcon from '../../assets/Icons/Map 3.svg'

// Import Gallery Images
import galleryImg1 from '../../assets/Images/unsplash_REtFqYNq7h8.svg'
import galleryImg2 from '../../assets/Images/unsplash_kwYnnIkcpRk.svg'
import galleryImg3 from '../../assets/Images/unsplash_T7K4aEPoGGk.svg'
import galleryImg4 from '../../assets/Images/unsplash_Yizrl9N_eDA.svg'
import galleryImg5 from '../../assets/Images/unsplash_h0AnGGgseio.svg'
import galleryImg6 from '../../assets/Images/unsplash_BKLHxgbYFDI.svg'

// Import Section Decorative Icons
import travelIcon from '../../assets/Icons/Travel 3.svg'
import airplaneIcon from '../../assets/Icons/Airplane 3.svg'

const RecentGallery = () => {
    // Structural layout configuration for the 4 columns
    const gallerySections = [
        {
            id: 1,
            className: 'h-[700px] w-[250px]',
            content: (
                <>
                    <img className='mt-26 mb-28' src={galleryImg1} alt="Gallery 1" />
                    <img className='h-[75px] w-[75px]' src={travelIcon} alt="Travel icon" />
                </>
            )
        },
        {
            id: 2,
            className: 'flex flex-col justify-between h-[700px] w-[350px]',
            content: (
                <>
                    <img src={galleryImg2} alt="Gallery 2" />
                    <img src={galleryImg3} alt="Gallery 3" />
                </>
            )
        },
        {
            id: 3,
            className: 'flex flex-col justify-between h-[700px] w-[350px]',
            content: (
                <>
                    <img src={galleryImg4} alt="Gallery 4" />
                    <img src={galleryImg5} alt="Gallery 5" />
                </>
            )
        },
        {
            id: 4,
            className: 'h-[700px] w-[250px]',
            content: (
                <>
                    <img className='mt-65 mb-25' src={galleryImg6} alt="Gallery 6" />
                    <img className='ml-4 h-[75px] w-[75px]' src={airplaneIcon} alt="Airplane icon" />
                </>
            )
        }
    ];

    return (
        <div className='h-[1050px] mt-25 mb-12'>
            <div className='relative min-h-[50rem] w-full overflow-hidden'>

                {/* Background vector */}
                <img
                    src={vectorImg}
                    alt=""
                    className='absolute top-0 left-0 w-full h-full object-cover pointer-events-none select-none'
                />

                {/* Content Container */}
                <div className='relative px-12 py-12 z-10'>
                    
                    {/* Header Content Start */}
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
                                alt="Map locator"
                            />
                        </div>
                    </div>
                    {/* Header Content End */}

                    {/* Gallery Section Start */}
                    <div className='px-12 py-12 flex justify-between'>
                        {gallerySections.map((section) => (
                            <div key={section.id} className={section.className}>
                                {section.content}
                            </div>
                        ))}
                    </div>
                    {/* Gallery Section End */}

                    {/* Footer Button */}
                    <div className='flex justify-center'>
                        <a
                            href="#"
                            className="bg-[#143F4A] text-white py-4 px-5 text-xl rounded-full transition-colors hover:bg-[#11333c]"
                        >
                            View All Gallery →
                        </a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default RecentGallery;