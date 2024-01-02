import React from 'react'
import {motion} from 'framer-motion';
import {fadeIn} from '../motion'
const Contacts = () => {
  return (
    <section className='py-16 ' id='contacts' >
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2 lg:h-[80vh]'>
          <div className='flex flex-col justify-center items-left'>
            <motion.h4 
            variants={fadeIn('up',0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{
              once:false,
              amount:0.7
            }}
            className='text-3xl uppercase text-accent mb-2 tracking-wide font-extrabold'
            >Get In Touch
            </motion.h4>
            <motion.h2
            variants={fadeIn('up',0.5)}
            initial="hidden"
            whileInView={'show'}
            viewport={{
              once:false,
              amount:0.7
            }}
            className='text-[45px] lg:text-[90px] leading-none lg:mb-12'>Let's work <br /> together!</motion.h2>
          </div>
          <motion.form 
          variants={fadeIn('up',0.4)}
          initial="hidden"
          whileInView={'show'}
          viewport={{
            once:false,
            amount:0.7
          }}
          className='flex-1 flex flex-col justify-center items-left'>
            <input 
            className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
            placeholder='Your Name'
            type="text" 
            />
            <input 
            className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
            placeholder='Your Email'
            type="email" 
            />
            <textarea className='resize-none bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all mb-12'
            placeholder='Your Message'
            rows="2"></textarea>
            <button className='btn btn-lg'>Send Message</button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contacts