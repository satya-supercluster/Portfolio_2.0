import React from 'react'
import {motion} from 'framer-motion';
import {fadeIn} from '../motion';
import image from '../assets/tech.png'
import rt from '../assets/react.svg'
import nd from '../assets/node.svg'
import tw from '../assets/tailwind.svg'
import fb from '../assets/firebase.svg'
import gt from '../assets/git.svg'
import js from '../assets/javascript.svg'
import mg from '../assets/mongo.svg'
import rd from '../assets/redux.svg'
import ts from '../assets/typescript.svg'
import ft from '../assets/flutter.svg'
const TechStack = () => {
  return (
    <div className='section lg:h-screen' id='techstack' >
      <div className='container mx-auto max-[960px]:mt-10'>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
          <div className='flex flex-col justify-center items-center'>
            <div className='text-center lg:text-left'>
              <motion.h2 
              variants={fadeIn('up',0.3)}
              initial="hidden"
              whileInView={'show'}
              viewport={{
                once:false,
                amount:0.7
              }}
              className='h2 text-accent font-extrabold'>Tech Stack</motion.h2>
              <motion.p 
              variants={fadeIn('up',0.3)}
              initial="hidden"
              whileInView={'show'}
              viewport={{
                once:false,
                amount:0.7
              }}
              className='max-w-lg leading-[1.3] font-tertiary font-semibold mb-10'>
                As a Developer, I'm well-versed in a variety of web technologies that enables me to create stunning and interactive web experiences.
                My proficiency in it empowers me to bring your web design vision to life, blending creativity with functionality.
              </motion.p>
              <motion.div 
              variants={fadeIn('up',0.4)}
              initial="hidden"
              whileInView={'show'}
              viewport={{
                once:false,
                amount:0.7
              }}
              className='grid grid-cols-4'>
                  <div className='flex flex-col justify-center items-center'>
                    <div>
                      <img src={rt}
                      className='h-[60px]'
                      alt="react" />
                    </div>
                    <p className='text-sm'>REACTJS</p>
                  </div>
                  
                  <div className='flex flex-col justify-center items-center'>
                    <div>
                      <img src={nd}
                      className='h-[60px]'
                      alt="nodejs" />
                    </div>
                    <p className='text-sm'>NODEJS</p>
                  </div>
                  <div className='flex flex-col justify-center items-center'>
                    <div>
                      <img src={mg}
                      className='h-[60px]'
                      alt="mg" />
                    </div>
                    <p className='text-sm'>MONGODB</p>
                  </div>
                  <div className='flex flex-col justify-center items-center'>
                    <div>
                      <img src={tw}
                      className='h-[60px]'
                      alt="tw" />
                    </div>
                    <p className='text-sm'>TAILWIND</p>
                  </div>
                  <div className='flex flex-col justify-center items-center'>
                    <div>
                      <img src={ts}
                      className='h-[60px]'
                      alt="ts" />
                    </div>
                    <p className='text-sm'>TYPESCRIPT</p>
                  </div>
                <div className='flex flex-col justify-center items-center'>
                    <div>
                      <img src={fb}
                      className='h-[60px]'
                      alt="fb" />
                    </div>
                    <p className='text-sm'>FIREBASE</p>
                  </div>
                <div className='flex flex-col justify-center items-center'>
                    <div>
                      <img src={rd}
                      className='h-[60px]'
                      alt="rd" />
                    </div>
                    <p className='text-sm'>REDUXJS</p>
                  </div>
                  
                  <div className='flex flex-col justify-center items-center'>
                    <div>
                      <img src={gt}
                      className='h-[60px]'
                      alt="gt" />
                    </div>
                    <p className='text-sm'>GITHUB</p>
                  </div>
                  <div className='flex flex-col justify-center items-center'>
                    <div>
                      <img src={js}
                      className='h-[60px]'
                      alt="js" />
                    </div>
                    <p className='text-sm'>JAVASCRIPT</p>
                  </div>
                  <div className='flex flex-col justify-center items-center'>
                    <div>
                      <img src={ft}
                      className='h-[60px]'
                      alt="ft" />
                    </div>
                    <p className='text-sm'>FLUTTER</p>
                  </div>
              </motion.div>
            </div>
          </div>
          <motion.div 
          variants={fadeIn('left',0.3)}
          initial="hidden"
          whileInView={'show'}
          viewport={{
            once:false,
            amount:0.7
          }}
          className='flex-1  mix-blend-lighten hidden lg:flex justify-center'>
            <img src={image} className=" lg:h-[400px]"  alt="tech" />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default TechStack