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
    <section id="projects"  className="h-full pb-20 pt-[22vh]">
      <div className="relative flex justify-center">
        <div className="absolute h-[100vh] w-[3px] bg-white/20"></div>
        <div className="flex flex-col justify-between h-[90vh] py-20">
          {/* First timeline item */}
          <motion.div 
            ref={projectRefs[0]}
            initial="hiddenLeft"
            animate={projectsInView[0] ? "visible" : "hiddenLeft"}
            variants={slideVariants}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative flex items-center"
          >
            <div className="absolute left-10 w-[500px]">
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
            <div className="w-6 h-6 rounded-full bg-green-900"></div>
            <div className="absolute right-10 items-center flex justify-center h-80 w-[500px]">
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
            className="relative flex items-center"
          >
            <div className="absolute left-10 items-center flex justify-center h-80 w-[500px]">
              <img 
                src={kashbuddy} 
                alt="Kashbuddy Project"
                className="w-full h-full object-contain rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                onClick={() => onImageClick(kashbuddy)}
              />
            </div>
            <div className="w-6 h-6 rounded-full bg-white"></div>
            <div className="absolute right-10 w-[500px] text-right">
              <a href="https://kashbuddy.vercel.app/" className="text-4xl font-semibold text-[#7b9cea]">
                Kashbuddy
              </a>
              <p className="text-lg text-gray-400 mt-2">
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
            className="relative flex items-center"
          >
            <div className="absolute left-10 w-[500px]">
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
            <div className="w-6 h-6 rounded-full bg-white"></div>
            <div className="absolute right-10 items-center flex justify-center h-80 w-[500px]">
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
