import React from 'react'

const TravelAndTour = () => {
  return (
    <div className='w-full text-[#143F4A] px-12 py-12'>
      {/* Header */}
      <p className="text-[26px] text-center font-semibold italic">
        Discounts & Offers
      </p>
      <h1 className="text-[48px] font-bold text-center mb-15">Special Travel Deals</h1>

      {/* Cards */}
      <div className='w-full flex gap-4'>

        {/* ── CARD 1: Family Travel Tour ── */}
        <div className='relative flex-1 min-h-[270px] rounded-2xl overflow-hidden flex items-center'
          style={{ background: 'linear-gradient(135deg, #87DDDD 0%, #4CC5C5 40%, #2aafc2 100%)' }}>

          {/* White bordered inner box — FIX: was missing before */}
          <div className='absolute left-5 top-1/2 -translate-y-1/2 z-10 rounded-xl p-5'
            style={{ background: 'rgba(255,255,255,0.18)', border: '2px solid rgba(255,255,255,0.6)' }}>
            <p className='text-white text-base italic font-bold'>Save</p>
            <p className='text-white text-4xl font-black leading-tight'>40% OFF</p>
            <p className='text-white text-xs mt-1 mb-3'>Family Travel Tour</p>
            <button className='flex items-center gap-2 bg-[#143F4A] text-white px-5 py-2 rounded-full text-xs font-semibold'>
              Apply Now →
            </button>
          </div>

          <img
            src="src/assets/Images/packageAndSaleBgImg1.svg"
            alt="Family"
            className='absolute right-0 bottom-0 h-full object-cover z-[2]'
          />
        </div>

        {/* ── CARD 2: Bali Escape ── */}
        <div className='relative flex-1 min-h-[270px] rounded-2xl overflow-hidden flex items-center'
          style={{ background: 'linear-gradient(135deg, #f5a623 0%, #e8850a 100%)' }}>

          <div className='relative z-10 p-6'>
            <p className='text-white text-3xl font-black leading-tight mb-4'>Bali<br />Escape</p>

            {/* White bordered price box — FIX: was missing before */}
            <div className='rounded-xl p-3'
              style={{ border: '1.5px solid rgba(255,255,255,0.6)', background: 'rgba(255,255,255,0.12)' }}>
              <p className='text-white text-xs flex items-center gap-1'>→ Total Price</p>
              <p className='text-[#f7e01a] text-2xl font-black my-1'>$299.00</p>
              <p className='text-white text-xs flex items-center gap-1'>→ Per Person Only</p>
            </div>
          </div>

          {/* 04 Days Blob Badge */}
          {/* 04 Days Blob Badge */}
          <div className='absolute z-20'
            style={{ left: '44%', top: '46%', transform: 'translate(-50%, -50%)', width: '90px', height: '90px' }}>
            <svg viewBox="0 0 100 100" className='absolute inset-0 w-full h-full' xmlns="http://www.w3.org/2000/svg">
              <path d="M54,8 C65,6 80,14 87,26 C94,38 93,55 86,67 C79,79 65,88 52,89 C39,90 24,83 17,71 C10,59 10,42 17,30 C24,18 43,10 54,8 Z" fill="#f7e01a" />
            </svg>
            <div className='absolute inset-0 flex flex-col items-center justify-center leading-none'>
              <span className='text-[28px] font-black text-gray-800'>04</span>
              <span className='text-[12px] font-semibold text-gray-700'>Days</span>
            </div>
          </div>

          <img
            src="src/assets/Images/packageAndSaleBgImg2.svg"
            alt="Bali Traveler"
            className='absolute right-0 bottom-0 h-full w-[48%] object-cover z-[2]'
          />
        </div>

        {/* ── CARD 3: Travel Around the World ── */}
        {/* FIX: Split into left (teal) + right (yellow) halves, 30% badge centered between them, no text overlay */}
        <div className='relative flex-1 min-h-[270px] rounded-2xl overflow-hidden flex'>

          {/* Left half — teal bg + landmarks image */}
          <div className='relative w-1/2 h-full' style={{ background: '#1dc8e8' }}>
            <img
              src="src/assets/Images/packageAndSaleBgImg3.svg"
              alt="World Landmarks"
              className='absolute inset-0 w-full h-full object-cover'
            />
          </div>

          {/* Right half — yellow bg + person image */}
          <div className='relative w-1/2 h-full' style={{ background: '#f5c100' }}>
            <img
              src="src/assets/Images/packageAndSaleBgImg4.svg"
              alt="Traveler"
              className='absolute inset-0 w-full h-full object-cover'
            />
          </div>

          {/* 30% OFF badge — FIX: centered in the middle of the card (between the two halves) */}
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10
                          w-14 h-14 rounded-full flex flex-col items-center justify-center
                          text-white font-black text-base leading-none'
            style={{ background: '#1dc8e8', border: '2px solid rgba(255,255,255,0.5)' }}>
            30%
            <span className='text-[9px] font-bold'>OFF</span>
          </div>

        </div>

      </div>

      {/* Dots */}
      <div className='flex justify-center gap-2 mt-5'>
        <div className='w-6 h-2.5 rounded-full bg-[#143F4A]'></div>
        <div className='w-2.5 h-2.5 rounded-full bg-gray-300'></div>
        <div className='w-2.5 h-2.5 rounded-full bg-gray-300'></div>
      </div>
    </div>
  )
}

export default TravelAndTour