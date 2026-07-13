
import vectorImg from '../../assets/Icons/Vector 1052.svg'
import notebookImg from '../../assets/Icons/Notebook.svg'
import homeData from '../../json/home.json' // Importing your JSON file

// Import your category images
import cruiseImg from '../../assets/Images/cruiseImg.svg'
import hikingImg from '../../assets/Images/hikingImg.svg'
import birdImg from '../../assets/Images/birdImg.svg'
import wildLifeImg from '../../assets/Images/wildLifeImg.svg'
import walkingImg from '../../assets/Images/walkingImg.svg'

const TourCategories = () => {
  // Map array indexes to your imported images to match the JSON order
  const categoryImages = [cruiseImg, hikingImg, birdImg, wildLifeImg, walkingImg]

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

        {/* Categories Section Start */}
        <div className='px-15 w-full flex justify-between text-[#143F4A] gap-4'>

          {/* Mapping over Tour_Category dynamically */}
          {homeData.Tour_Category.map((category, index) => (
            <div key={category.id || index} className="w-[230px] min-h-[340px] flex flex-col justify-between pb-4">
              
              <div>
                {/* Dynamically sources the image from our array using loop index */}
                <img 
                  className='w-[230px] h-auto object-cover mb-4 rounded-xl'
                  src={categoryImages[index] || cruiseImg} 
                  alt={category.title} 
                />
                {/* Dynamically displays the category name */}
                <p className='text-[24px] text-center font-bold mb-4'>{category.title}</p>
              </div>

              <div className='flex justify-center mt-auto'>
                <a href="#" className='text-[18px] border border-[#143F4A80]/50 rounded-4xl px-7 py-2 transition-all hover:bg-[#143F4A] hover:text-white'>
                  Read More →
                </a>
              </div>

            </div>
          ))}

        </div>
        {/* Categories Section End */}

      </div>
    </div>
  )
}

export default TourCategories