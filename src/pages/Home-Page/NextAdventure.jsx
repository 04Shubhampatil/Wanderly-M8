
import airplaneImg2 from '../../assets/Icons/Airplane2.svg'
import mapImg2 from '../../assets/Icons/Map2.svg'
import homeData from '../../json/home.json' // Import your JSON data

// Import adventure images
import adventureBgImg1 from '../../assets/Images/adventureBgImg1.svg'
import adventureBgImg2 from '../../assets/Images/adventureBgImg2.svg'
import adventureBgImg3 from '../../assets/Images/adventureBgImg3.svg'
import adventureBgImg4 from '../../assets/Images/adventureBgImg4.svg'
import adventureBgImg5 from '../../assets/Images/adventureBgImg5.svg'

// ✅ Gradient only on bottom ~45% of card (matches Figma)
const bottomGradient = {
    background: 'linear-gradient(to bottom, transparent 40%, #111111 100%)'
}

// ✅ Full dark overlay for the promo card (card 3)
const darkOverlay = {
    background: 'rgba(0,0,0,0.45)'
}

const NextAdventure = () => {
    // Reference shortcuts for readability
    const adventures = homeData.Next_Adventure;

    return (
        <div className='w-full flex flex-col justify-between px-12 py-12'>

            {/* Header Content Start */}
            <div className='flex justify-between mb-20 relative'>
                <div className='mr-7 text-[#143F4A] text-left'>
                    <div className='flex items-center'>
                        <p className="text-[26px] text-center font-semibold mr-7">
                            Unique Destinations
                        </p>
                    </div>
                    <div className='flex relative'>
                        <h1 className="text-[48px] font-bold leading-tight">Unlock Your <br /> Next Adventure</h1>
                        <div className='absolute left-[45%] bottom-2'>
                            <img className='h-[60px] w-[60px]' src={airplaneImg2} alt="airplane" />
                        </div>
                    </div>
                </div>

                <div className='absolute right-[22%] top-12'>
                    <img className='h-[75px] w-[75px]' src={mapImg2} alt="map" />
                </div>

                <div className='h-[180px] w-auto pt-7 flex items-center'>
                    <a href="#" className="bg-[#143F4A] text-white py-4 px-6 text-xl rounded-full transition-all hover:bg-[#12363f]">
                        View All Packages →
                    </a>
                </div>
            </div>
            {/* Header Content End */}

            {/* Adventure Section Start */}
            <div className='flex w-full -mt-2 h-[1000px] gap-4'>

                {/* Left Column */}
                <div className='w-[67%] h-full flex flex-col justify-between gap-4'>

                    {/* Top Two Cards */}
                    <div className='flex h-[44%] gap-4'>

                        {/* Card 1 - Egypt (Index 0) */}
                        {adventures[0] && (
                            <div className='relative w-[50%] h-full rounded-[22px] bg-cover bg-center overflow-hidden'
                                 style={{ backgroundImage: `url(${adventureBgImg1})` }}>
                                <div className='absolute inset-0' style={bottomGradient}></div>
                                <div className='absolute bottom-6 left-6 text-white z-10'>
                                    <h3 className='text-[26px] font-bold'>{adventures[0].Country}</h3>
                                    <p className='text-[15px] font-medium opacity-90'>{adventures[0].Travelers}</p>
                                </div>
                            </div>
                        )}

                        {/* Card 2 - Greece (Index 1) */}
                        {adventures[1] && (
                            <div className='relative w-[50%] h-full rounded-[22px] bg-cover bg-center overflow-hidden'
                                 style={{ backgroundImage: `url(${adventureBgImg2})` }}>
                                <div className='absolute inset-0' style={bottomGradient}></div>
                                <div className='absolute bottom-6 left-6 text-white z-10'>
                                    <h3 className='text-[26px] font-bold'>{adventures[1].Country}</h3>
                                    <p className='text-[15px] font-medium opacity-90'>{adventures[1].Travelers}</p>
                                </div>
                            </div>
                        )}

                    </div>

                    {/* Bottom Large Card - United Kingdom (Index 2) */}
                    {adventures[2] && (
                        <div className='relative h-[54%] w-[100%] rounded-[22px] bg-cover bg-center overflow-hidden'
                             style={{ backgroundImage: `url(${adventureBgImg4})` }}>
                            <div className='absolute inset-0' style={bottomGradient}></div>
                            <div className='absolute bottom-6 left-6 text-white z-10'>
                                <h3 className='text-[30px] font-bold'>{adventures[2].Country}</h3>
                                <p className='text-[15px] font-medium opacity-90'>{adventures[2].Travelers}</p>
                            </div>
                        </div>
                    )}

                </div>

                {/* Right Column */}
                <div className='flex flex-col justify-between items-end w-[33%] h-full gap-4'>

                    {/* Card 3 - Static Promo Card (Adventure Tour) */}
                    <div className='relative w-full h-[63%] rounded-[22px] bg-cover bg-center overflow-hidden'
                         style={{ backgroundImage: `url(${adventureBgImg3})` }}>
                        <div className='absolute inset-0 rounded-[22px]' style={darkOverlay}></div>

                        {/* 40% Discount Banner */}
                        <div className='absolute top-5 left-1/2 -translate-x-1/2'>
                            <div className='bg-white text-[#143F4A] font-bold text-[15px] px-6 py-2 rounded-full whitespace-nowrap'>
                                40% Discount
                            </div>
                        </div>

                        {/* Center Text */}
                        <div className='absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6'>
                            <h2 className='text-[28px] font-bold leading-snug mt-6'>
                                All Kinds Of <br /> Adventure <br /> Tour
                            </h2>
                        </div>

                        {/* View Details Button */}
                        <div className='absolute bottom-7 left-1/2 -translate-x-1/2'>
                            <a href="#"
                               className='bg-white text-[#143F4A] font-semibold text-[16px] px-8 py-3 rounded-full whitespace-nowrap transition-all hover:bg-gray-100'>
                                 View Details →
                            </a>
                        </div>
                    </div>

                    {/* Card 5 - France (Index 3) */}
                    {adventures[3] && (
                        <div className='relative w-full h-[34%] rounded-[22px] bg-cover bg-center overflow-hidden'
                             style={{ backgroundImage: `url(${adventureBgImg5})` }}>
                            <div className='absolute inset-0' style={bottomGradient}></div>
                            <div className='absolute bottom-6 left-6 text-white z-10'>
                                <h3 className='text-[26px] font-bold'>{adventures[3].Country}</h3>
                                <p className='text-[15px] font-medium opacity-90'>{adventures[3].Travelers}</p>
                            </div>
                        </div>
                    )}

                </div>

                {/* Adventure Section End */}
            </div>
        </div>
    );
};

export default NextAdventure;