import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

import synqcity from '../assets/sinqcity.svg'
import kashbuddy from '../assets/kashbuddy.svg'
import bau from '../assets/bau.svg'

interface ProjectsProps {
  onImageClick: (imageSrc: string) => void;
}

export default function Projects({ onImageClick }: ProjectsProps) {
  const projectRefs = [useRef(null), useRef(null), useRef(null)];
  const projectsInView = projectRefs.map(ref => useInView(ref, { once: false }));

  const slideVariants = {
    hiddenLeft: { x: -100, opacity: 0 },
    hiddenRight: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="h-full pb-20 pt-[15vh] md:pt-[22vh] px-5 md:px-0">
      <div className="relative flex justify-center gap-5">
        <div className="absolute h-[100vh] w-[3px] bg-transparent lg:bg-white/20"></div>
        <div className="flex flex-col justify-between h-full md:h-[90vh] py-10 md:py-20">
          {/* First timeline item */}
          <motion.div 
            ref={projectRefs[0]}
            initial="hiddenLeft"
            animate={projectsInView[0] ? "visible" : "hiddenLeft"}
            variants={slideVariants}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative flex flex-col md:flex-row items-center mb-16 md:mb-[35vh]"
          >
            <div className="text-center md:text-left md:px-0 md:absolute md:left-10 w-full md:w-[300px] lg:w-[500px] order-2 md:order-none mt-4 md:mt-0">
              <h1 className="text-4xl font-semibold text-[#7b9cea]">BAU</h1>
              <p className="animate-pulse text-green-200">(in production)</p>
              <p className="text-lg text-gray-400 mt-2">
                I'm currently developing a social media platform
                designed to give underground artists more visibility.
                It will be a space where they can showcase their work,
                share events, sell their art and products, and even offer
                tickets for their own events.
              </p>
            </div>
            <div className="w-6 h-6 rounded-full bg-green-900 hidden md:block"></div>
            <div className="px-4 md:px-0 md:absolute md:right-10 items-center flex justify-center h-60 md:h-80 w-full md:w-[300px] lg:w-[500px] order-1 md:order-none">
              <img 
                src={bau} 
                alt="BAU Project"
                className="w-full h-full object-contain rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                onClick={() => onImageClick(bau)}
              />
            </div>
          </motion.div>

          {/* Second timeline item */}
          <motion.div 
            ref={projectRefs[1]}
            initial="hiddenRight"
            animate={projectsInView[1] ? "visible" : "hiddenRight"}
            variants={slideVariants}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative flex flex-col md:flex-row items-center py-10 md:mb-[35vh]"
          >
            <div className="px-4 md:px-0 md:absolute md:left-10 items-center flex justify-center h-60 md:h-80 w-full md:w-[300px] lg:w-[500px] order-1 md:order-none">
              <img 
                src={kashbuddy} 
                alt="Kashbuddy Project"
                className="w-full h-full object-contain rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                onClick={() => onImageClick(kashbuddy)}
              />
            </div>
            <div className="w-6 h-6 rounded-full bg-white hidden md:block"></div>
            <div className="px-4 md:px-0 md:absolute md:right-10 w-full md:w-[300px] lg:w-[500px] order-2 md:order-none mt-4 md:mt-0">
              <a href="https://kashbuddy.vercel.app/" className="text-4xl font-semibold text-[#7b9cea] md:text-right">
                Kashbuddy
              </a>
              <p className="text-lg text-gray-400 mt-2 md:text-right">
                I wanted a better way to keep track of my finances,
                so I built KashBuddy. It helps me monitor my income
                and expenses, categorize transactions, and manage
                finances across multiple bank accounts—all without
                paying for ad-free features and with a UI that suits
                my style.
              </p>
            </div>
          </motion.div>

          {/* Third timeline item */}
          <motion.div 
            ref={projectRefs[2]}
            initial="hiddenLeft"
            animate={projectsInView[2] ? "visible" : "hiddenLeft"}
            variants={slideVariants}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative flex flex-col md:flex-row items-center"
          >
            <div className="px-4 md:px-0 md:absolute md:left-10 w-full md:w-[300px] lg:w-[500px] order-2 md:order-none mt-4 md:mt-0">
              <a href="https://multisynq-hackathon-frontend.vercel.app/" className="text-4xl font-semibold text-[#7b9cea]">
                Synced City
              </a>
              <p className="text-lg text-gray-400 mt-2">
                For my first hackathon, HackTogether, I teamed
                up with my partner, André Santos, to create SynqCity
                —a social app designed to connect people. Our goal was
                to encourage users to step out of their comfort zones
                and explore underground events, new restaurants,
                trending hotspots, and social gatherings happening nearby.
              </p>
            </div>
            <div className="w-6 h-6 rounded-full bg-white hidden md:block"></div>
            <div className="px-4 md:px-0 md:absolute md:right-10 items-center flex justify-center h-60 md:h-80 w-full md:w-[300px] lg:w-[500px] order-1 md:order-none">
              <img 
                src={synqcity} 
                alt="Synced City Project"
                className="w-full h-full object-contain rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                onClick={() => onImageClick(synqcity)}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
