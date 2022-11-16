import React from 'react'

// Import Components
import Logo from './../assets/img/logo.svg';
import Nav from './Nav'

// Import React Icons
import {HiMenu} from 'react-icons/hi'

const Header = ({setNavMobile}) => {
  return (
    <div className='py-6' data-aos="fade-down" data-aos-duration="2000" data-aos-delay="900">
      <div className="container mx-auto">
        <div className='flex items-center justify-between'>
          {/* Logo */}
          <a href="#">
            <img className='h-[30px]' src={Logo} alt="" />
          </a>

          {/* Nav */}
          <Nav/>

          {/* Hamburger */}
          <HiMenu onClick={() => setNavMobile(true)} className='lg:hidden text-white text-3xl cursor-pointer'/>
        </div>
      </div>
    </div>
  )
}

export default Header