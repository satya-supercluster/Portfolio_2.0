import React from 'react'
import { Link } from '@mui/material';
import {TypeAnimation} from 'react-type-animation';
const Header = () => {
  return (
    <header className='py-2 max-[500px]:text-[1rem] w-screen fixed top-0 z-10'>
      <div className='container mx-auto '>
        <div className='flex justify-between items-center backdrop-blur-2xl px-2 py-1 rounded-full bg-black/20'>
          <Link to="home">
            <TypeAnimation
            sequence={['<SATYAM/>',1000]}
            wrapper='span'
          className=' font-primary px-2  font-extrabold text-gradient'
          />
            </Link>
          <a href='https://satya-supercluster.github.io/Portfolio/' className='flex text-gradient text-xl font-bold justify-center items-center btn btn-sm'>1.O</a>
        </div>
      </div>
    </header>
  )
}

export default Header