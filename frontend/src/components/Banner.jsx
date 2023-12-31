import React from 'react'
import image from '../assets/me21.png'
import {TypeAnimation} from 'react-type-animation';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CodeIcon from '@mui/icons-material/Code';
const Banner = () => {
  return (
    <section className='section' id='home' >
      <div className='container mx-auto'>
        <div>
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <h1 className='text-[35px] font-bold leading-[0.6] lg:text-[80px]'><span className='text-rose-500'>HI, </span>I'm Satyam</h1>
            <div className='mt-3 mb-3 text-[25px] lg:text-[50px] font-secondary font-semibold uppercase leading-[1] '>
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
            </div>
              <p className='mb-8 max-w-lg mx-auto lg:mx-0'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A nisi tenetur ipsam facere placeat quod esse, saepe repellat. Est, accusamus, unde laudantium saepe recusandae dolore eveniet non minus obcaecati doloribus nihil distinctio!
              </p>
              <div className='flex mx-w-max gap-x-6 justify-center items-center mb-5 mx-auto lg:justify-start'>
                <button className='btn btn-lg'>LinkedIn</button>
                <a href="#" className='text-gradient btn-link'>
                  My Portfolio
                </a>
              </div>
              <div className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0 '>
                <a href="">
                  <GitHubIcon></GitHubIcon>
                </a>
                <a href="">
                <LinkedInIcon></LinkedInIcon>
                </a>
                <a href="">
                  <CodeIcon></CodeIcon>
                </a>
              </div>
          </div>
          <div>
            {/* <img src={image} height={200} width={200} alt="me" /> */}
          </div>
        </div>
        </div>
    </section>
  )
}

export default Banner
