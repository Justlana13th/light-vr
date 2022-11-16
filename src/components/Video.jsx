import React, { useState } from 'react'

// Import Modal Video
import ModalVideo from 'react-modal-video'
import '../modalVideo.scss'

// Import Icons
import {BsPlayCircleFill} from 'react-icons/bs'

const Video = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='bg-[#534686]/30 py-6'>
      <div className='container mx-auto'>
        <div className='flex flex-col justify-center text-center items-center lg:flex-row lg:justify-between'>
          <h3 data-aos="fade-right" data-aos-offset="350" className='text-2xl font-semibold mb-8 lg:mb-0'>Awesome Experiences With Virtual Reality World!</h3>
          {/* Modal Video */}
          <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="NOk_M1Ib5F0" onClose={() => setIsOpen(false)}/>
          {/* Video */}
          <div data-aos="fade-left" data-aos-offset="350" className='bg-videoBg bg-no-repeat bg-cover w-[270px] h-[180px] flex items-center justify-center'>
            <div onClick={() => setIsOpen(!isOpen)} className='cursor-pointer'>
              <BsPlayCircleFill className='text-4xl text-white/80 hover:text-white hover:scale-110 transition 0.2s'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Video