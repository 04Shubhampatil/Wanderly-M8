import React from 'react'
import destBgImg from '../../assets/Image/what-about-ha-long-bay-1 1.png'

const Destination = () => {
  return (
    
    <div className='mb-10'>
      <div>Header</div>
      <div className='w-full h-[285px] bg-cover bg-center text-white text-center flex items-center flex-col justify-center'
      style={{backgroundImage : `url(${destBgImg})`}}>
        <h1 className='text-[55px]'> Destination </h1>
        <p className='text-[20px]'> Home/ <span className='text-[#1CA8CB]'> Destination </span></p>
      </div>
    </div>
  )
}
export default Destination
