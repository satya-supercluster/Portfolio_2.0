import React from "react";
import CountUp from "react-countup";
import {Link} from 'react-scroll'
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../motion";
import image from '../assets/img_about.png'
const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <div className="section" id="about" ref={ref}>
      <div className="container mx-auto max-[960px]:mt-10">
        <div className="flex flex-col gap-y-5 justify-center lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 lg:h-screen">
          <motion.div
          variants={fadeIn('right',0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false, amount: 0.3}}
          className="flex-1  mix-blend-lighten flex justify-center">
            {/* image */}
            <img src={image} className=" h-[300px] sm:h-[350px] lg:h-[400px] xl:h-[500px]" alt="About" />
          </motion.div>
          <motion.div 
          variants={fadeIn('left',0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false, amount: 0.3}}
          className="flex-1 text-center lg:text-left">
            {/* text */}
            <h2 className="h2 font-extrabold text-accent">About Me.</h2>
            <h3 className="h3 mb-3 font-bold leading-[1.2]">
              I'm a Developer with brief knowledge of both frontend and Backend and also a
              Competitive Programmer
            </h3>
            <p className="leading-[1.3] font-quarternary mb-5">
            I'm an enthusiastic developer from Lucknow, the capital of state Uttar Pradesh, I always find ways to learn new things related to the tech and development. I'm very passionate about improving my coding skills & developing applications and websites.Working for myself to improve my coding skills.
            <br />Love to code!!!
            </p>
            <div className="flex gap-x-4 lg:gap-x-7 mb-8 text-center max-[960px]:justify-center ">
              <div>
                <div className="text-[40px] max-[500px]:text-[25px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={5} duration={1} /> : 0}
                  +
                </div>
                <div className="font-primary text-sm max-[500px]:text-[10px] font-bold  tracking-[2px]">
                  Projects on <br />
                  GitHub
                </div>
              </div>
              <div>
                <div className="text-[40px] max-[500px]:text-[25px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={1600} duration={2} /> : 0}
                  +
                </div>
                <div className="font-primary text-sm max-[500px]:text-[10px] font-bold  tracking-[2px]">
                  Rating on <br />
                  Codechef
                </div>
              </div>
              <div>
                <div className="text-[40px] max-[500px]:text-[25px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={1200} duration={2} /> : 0}
                  +
                </div>
                <div className="font-primary text-sm max-[500px]:text-[10px] font-bold tracking-[2px]">
                  Rating on <br />
                  Codeforces
                </div>
              </div>
            </div>
            <div>
              <Link to='contacts' 
                activeClass='active'
                smooth={true}
                spy={true}
              className="btn py-4 btn-lg cursor-pointer">Contact Me</Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
