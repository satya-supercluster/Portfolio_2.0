import React from 'react'
import image from '../assets/me21.png'
import {TypeAnimation} from 'react-type-animation';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CodeIcon from '@mui/icons-material/BarChart';
import {fadeIn} from '../motion'
import {motion} from 'framer-motion';
const Banner = () => {
  return (
    <section className='min-h-screen flex items-center' id='home' >
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:gap-x-12'>
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1 
            className='text-[35px] font-bold leading-[0.6] lg:text-[90px]'
            variants={fadeIn('up',0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{
              once:false,
              amount:0.7
            }}
            >
              <span className='text-rose-500'>HI, </span>
              I'm Satyam
              </motion.h1>
            <motion.div 
            variants={fadeIn('up',0.4)}
            initial="hidden"
            whileInView={'show'}
            viewport={{
              once:false,
              amount:0.7
            }}
            className='mt-3 mb-3 text-[25px] lg:text-[55px] font-secondary font-semibold uppercase leading-[1] '>
            <span className='mr-4'>I am a</span>
            <TypeAnimation
            preRenderFirstString={true}
              sequence={[
                'Web Developer',
                1000,
                'Competitive Programmer',
                1000,
                'App Developer',
                1000,
              ]}
              speed={50}
              omitDeletionAnimation={true}
              className='text-accent'
              wrapper='span'
              repeat={Infinity}
            />
            </motion.div>
              <motion.p 
              variants={fadeIn('up',0.5)}
              initial="hidden"
              whileInView={'show'}
              viewport={{
                once:false,
                amount:0.7
              }}
              className='mb-8 max-w-lg mx-auto lg:mx-0 sm:text-lg'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A nisi tenetur ipsam facere placeat quod esse, saepe repellat. Est, accusamus, unde laudantium saepe recusandae dolore eveniet non minus obcaecati doloribus nihil distinctio!
              </motion.p>
              <motion.div
              variants={fadeIn('up',0.6)}
              initial="hidden"
              whileInView={'show'}
              viewport={{
                once:false,
                amount:0.7
              }} 
              className='flex mx-w-max gap-x-6 justify-center items-center mb-5 mx-auto lg:justify-start'>
                <button className='btn btn-lg'>LinkedIn</button>
                <a href="#" className='text-gradient btn-link'>
                  My Portfolio
                </a>
              </motion.div>
              <motion.div
              variants={fadeIn('up',0.6)}
              initial="hidden"
              whileInView={'show'}
              viewport={{
                once:false,
                amount:0.7
              }}
              className='flex font-extrabold text-[50px] gap-x-6 max-w-max mx-auto lg:mx-0'>
                <a href="">
                  <GitHubIcon></GitHubIcon>
                </a>
                <a href="">
                <LinkedInIcon></LinkedInIcon>
                </a>
                <a href="">
                  <CodeIcon></CodeIcon>
                </a>
              </motion.div>
          </div>
          <motion.div
          variants={fadeIn('down',0.4)}
          initial="hidden"
          whileInView={'show'}
          className='hidden lg:flex mx-w-[320px] lg:max-w-[482px] rounded-full overflow-hidden'>
            <img src={image} height={300} width={300} alt="me" />
          </motion.div>
        </div>
        </div>
    </section>
  )
}

export default Banner
