import React from 'react'
import {Link} from 'react-scroll'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import LocalFloristOutlinedIcon from '@mui/icons-material/LocalFloristOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
const BottomNavbar = () => {
  return (
    <nav className='fixed bottom-3 lg:bottom-4 w-full overflow-hidden z-50'>
      <div className='container mx-auto'>
        <div className='w-full bg-black/15 h-[60px] sm:h-[60px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-1 flex justify-between items-center text-2xl text-white/45 '>
          <Link to='home' 
          activeClass='active'
          smooth={true}
          spy={true}
          offset={-200}
          className='cursor-pointer w-[50px] h-[50px] flex items-center justify-center' >
            <HomeOutlinedIcon></HomeOutlinedIcon>
          </Link>
          <Link to='about' 
          activeClass='active'
          smooth={true}
          spy={true}
          className='cursor-pointer w-[50px] h-[50px] flex items-center justify-center' >
            <PersonOutlineOutlinedIcon></PersonOutlineOutlinedIcon>
          </Link>
          <Link to='education'
          activeClass='active'
          smooth={true}
          spy={true}
          className='cursor-pointer w-[50px] h-[50px] flex items-center justify-center' >
            <SchoolOutlinedIcon></SchoolOutlinedIcon>
          </Link>
          <Link to='techstack'
          activeClass='active'
          smooth={true}
          spy={true}
          className='cursor-pointer w-[50px] h-[50px] flex items-center justify-center' >
            <LocalFloristOutlinedIcon></LocalFloristOutlinedIcon>
          </Link>
          <Link to='contacts' 
          activeClass='active'
          smooth={true}
          spy={true}
          className='cursor-pointer w-[50px] h-[50px] flex items-center justify-center' >
            <BusinessCenterOutlinedIcon></BusinessCenterOutlinedIcon>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default BottomNavbar