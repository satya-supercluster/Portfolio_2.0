import React from 'react'
import {motion} from 'framer-motion';
import {fadeIn} from '../motion';
import rdmic from '../assets/rd.jpg'
import manit from '../assets/manit1.jpg'
const Education = () => {
  return (
    <div className='section' id='education' >
      <div className='container mx-auto mt-10 md:mt-10 md:pt-5'>
        <motion.h2 
        variants={fadeIn('up',0.3)}
        initial="hidden"
        whileInView={'show'}
        viewport={{
          once:false,
          amount:0.7
        }}
        className='h2 text-accent font-extrabold text-center'>
          EDUCATION
        </motion.h2>
        <div className='flex flex-col gap-y-3'>
          <motion.div 
          variants={fadeIn('left',0.3)}
          initial="hidden"
          whileInView={'show'}
          viewport={{
            once:false,
            amount:0.7
          }}
          className='p-3 rounded-3xl bgedu grid grid-cols-1 lg:grid-cols-2 lg:gap-x-10'>
            <div className='flex-1  mix-blend-normal flex justify-center '>
              <img 
              src={manit}
              alt="manit" 
              className=' rounded-3xl border-2 border-violet-700 h-[230px] max-[500px]:h-[170px] '
              />
            </div>
            <div className='mx-auto text-center lg:mx-0 lg:text-left'>
              <h3 className=' font-primary font-semibold mb-1'>Maulana Azad National Institute Of Technology</h3>
              <h3 className='leading-[1.3]'>B.Tech in Computer Science and Engineering <br /> 2022-2026 <br /> CGPA: 9.23</h3>
            </div>
          </motion.div>
          <motion.div 
          variants={fadeIn('right',0.3)}
          initial="hidden"
          whileInView={'show'}
          viewport={{
            once:false,
            amount:0.3
          }}
          className='p-3 rounded-3xl bgedu grid grid-cols-1 lg:grid-cols-2 lg:gap-x-10'>
            <div className='flex-1  mix-blend-normal flex justify-center '>
              <img 
              src={rdmic}
              alt="rdmic" 
              className=' rounded-3xl border-2 border-violet-700 h-[230px] max-[500px]:h-[170px] '
              />
            </div>
            <div className='mx-auto text-center lg:mx-0 lg:text-left'>
              <h3 className=' font-primary font-semibold mb-1'>R. D. Memorial Inter College Lucknow</h3>
              <h3 className='leading-[1.3]'>Intermidiate<br /> 2021 <br /> Percentage: 81.4%</h3>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Education