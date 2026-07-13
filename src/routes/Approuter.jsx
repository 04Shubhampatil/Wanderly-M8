
import  { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/Home-Page/HomePage'
import Dubai_Luxury_Escape from '../pages/Pakages_Dubai/Dubai_Luxury_Escape'
import AboutUs from '../pages/about/AboutUs'
import Blogs from '../pages/blogs/Blogs'
import ContactUs from '../pages/contact/ContactUs'

const Approuter = () => {
   
  return (
    <div>
        
        <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/about' element={<AboutUs/>} />
            <Route path='/blog' element={<Blogs/>} />
            <Route path='/contact' element={<ContactUs/>} />
            <Route path='/dubai' element={<Dubai_Luxury_Escape/>}/>
        </Routes>
    </div>
  )
}

export default Approuter