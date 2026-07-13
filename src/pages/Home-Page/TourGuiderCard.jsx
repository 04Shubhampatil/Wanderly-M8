

const TourGuiderCard = ({ item, imgSrc, socialIcons }) => {
  return (
    <div className='relative w-[23%] h-[500px] rounded-[200px] overflow-hidden'
         style={{ background: 'linear-gradient(to bottom, #5BC8E8 0%, #29ABD4 50%, #1A9BC4 100%)' }}>
         
        {/* Travel icon — absolutely positioned inside the card bounds */}
        <img
            src="src/assets/Icons/Travel.svg"
            alt=""
            className='absolute left-[10%] top-[5%] w-[45px] h-[45px] z-20'
        />

        <img className='w-full h-full object-cover object-center' src={imgSrc} alt={item.name} />
        
        <div className='absolute bottom-0 left-0 w-full h-[45%] rounded-b-[200px] flex flex-col justify-end items-center pb-12 gap-1'
            style={{ background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.6) 100%)' }}>
            <h3 className='text-white font-bold text-[20px]'>{item.name}</h3>
            <p className='text-white text-[15px] text-center px-4'>{item.duty}</p>
            <div className='flex gap-3 mt-2'>
                <img src={socialIcons.whatsapp} alt="whatsapp" className='w-5 h-5' />
                <img src={socialIcons.twitter} alt="twitter" className='w-5 h-5' />
                <img src={socialIcons.instagram} alt="instagram" className='w-5 h-5' />
            </div>
        </div>
    </div>
  );
};

export default TourGuiderCard;