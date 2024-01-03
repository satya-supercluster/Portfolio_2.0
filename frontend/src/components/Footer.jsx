import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CodeIcon from '@mui/icons-material/Code';
import BarChartIcon from '@mui/icons-material/BarChart';
import TwitterIcon from '@mui/icons-material/Twitter';
const Footer = () => {
  return (
    <footer>
      <div className='relative bg-black py-1 z-10 flex flex-col'>
        <div className='flex justify-center items-center gap-x-5 py-2 text-white/80'>
        <a href="https://github.com/satya-supercluster"><GitHubIcon></GitHubIcon></a>
        <a href="https://www.linkedin.com/in/satya-supercluster/"><LinkedInIcon></LinkedInIcon></a>
        <a href="https://www.codechef.com/users/supercluster"><CodeIcon></CodeIcon></a>
        <a href="https://codeforces.com/profile/supercluster"><BarChartIcon></BarChartIcon></a>
        <a href="https://twitter.com/SUPERCLUSTER_G"><TwitterIcon></TwitterIcon></a>
        </div>
        <p className=' font-quarternary text-sm font-light text-white/60 text-center'>
          Copyright © 2024 by Satyam Gupta <br /> All right reserved. <br />
          Made in ❤️ with code
        </p>
      </div>
    </footer>
  )
}

export default Footer