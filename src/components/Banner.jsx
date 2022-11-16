import React from 'react'

// Import Components
import Users from './Users'

// Import Image
import Img from '../assets/img/banner-img.png'

const Banner = () => {
  return (
    <section className='min-h-[600px] pt-24 pb-12 text-center relative lg:pt-48 lg:pb-0 lg:text-left lg:mb-10'>
        <div className="container mx-auto">
            <div className='flex flex-col lg:flex-row'>
                {/* Text */}
                <div>
                    <h1 data-aos="fade-down" data-aos-delay="500" className='text-3xl font-bold mb-8 lg:text-5xl lg:leading-snug'>Let's Explore <br />Three-Dimensional Visually.</h1>
                    <p data-aos="fade-down" data-aos-delay="600"  className='font-secondary mb-12 max-w-[440px] mx-auto lg:mx-0'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis sint, autem officia repellat corporis illum!</p>
                    {/* Button */}
                    <div data-aos="fade-down" data-aos-delay="700" className='flex items-center justify-around space-x-4 max-w-[320px] mx-auto mb-12 lg:space-x-8 lg:mx-0 lg:max-w-none lg:justify-start'>
                        <button className='btn'>Get it now</button>
                        <a className='border-b-2 border-transparent hover:border-white transition ease-out' href="#">Explore Device</a>
                    </div>
                    <Users/>
                </div>

                {/* Image */}
                <div data-aos="fade-up" data-aos-delay="800" >
                    <img src={Img} alt="" />
                </div>

            </div>
        </div>
    </section>
  )
}

export default Banner