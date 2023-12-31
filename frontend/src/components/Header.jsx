import React from 'react'
import MoveDownIcon from '@mui/icons-material/MoveDown';
import { Link } from '@mui/material';
import {TypeAnimation} from 'react-type-animation';
const Header = () => {
  return (
    <header className='py-2 max-[500px]:text-[1rem] sticky top-0'>
      <div className='container mx-auto '>
        <div className='flex justify-between items-center backdrop-blur-2xl px-2 py-1 rounded-full bg-black/20'>
          <Link to="home">
            <TypeAnimation
            sequence={['<SATYAM/>',1000]}
            wrapper='span'
          className=' font-primary px-2  font-extrabold text-gradient'
          />
            </Link>
          <button className='btn btn-sm'>work</button>
        </div>
      </div>
    </header>
  )
}

export default Header