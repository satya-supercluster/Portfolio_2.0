import React from 'react'
import {motion} from 'framer-motion';
import {fadeIn} from '../motion';
import image from '../assets/tech.png'
const TechStack = () => {
  return (
    <div className='section' id='techstack' >
      <div className='container mx-auto'>
        <div>
          <div>
            <div>
              <h2 className='h2 text-accent font-bold'>Web Technologies</h2>
              
            </div>
          </div>
          <div className='flex-1  mix-blend-lighten flex justify-center'>
            <img src={image} className=" lg:h-[400px]"  alt="tech" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TechStack