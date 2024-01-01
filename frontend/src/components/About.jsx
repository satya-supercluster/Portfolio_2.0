import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../motion";
const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <div className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row">
          <div className="flex-1 bg-about h-[500px] mix-blend-lighten">
            {/* image */}
          </div>
          <div className="flex-1">
            {/* text */}
            <h2 className="h2 font-extrabold text-accent">About Me.</h2>
            <h3 className="h3 mb-3 leading-[1.2]">
              I'm a Full Stack Developer with no experience and also a
              Competitive Programmer
            </h3>
            <p className="leading-[1] mb-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi
              atque fugiat id dolorum, corporis, laborum voluptatibus,
              voluptates velit numquam sit alias consectetur tempora possimus
              eligendi ipsum amet ex? Doloremque aliquid illo saepe?
            </p>
            <div className="flex gap-x-7 lg:gap-x-10 mb-8 text-center ">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={5} duration={1} /> : null}
                  +
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projects on <br />
                  GitHub
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={1600} duration={2} /> : null}
                  +
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Rating on <br />
                  Codechef
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={1200} duration={2} /> : null}
                  +
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Rating on <br />
                  Codeforces
                </div>
              </div>
            </div>
            <div>
              <button className="btn btn-lg">Contact Me</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
