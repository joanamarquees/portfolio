import './App.css'
import './styles/marquee.css'
import { motion, AnimatePresence } from 'framer-motion'
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa'
import { useState } from 'react'

import synqcity from './assets/sinqcity.svg'
import kashbuddy from './assets/kashbuddy.svg'
import bau from './assets/bau.svg'

import Header from './components/header'

function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  return (
    <div className="bg-black text-white font-sans">
      {/* Landing page */}
      <div className="h-screen">
        <Header />
        <div className="relative h-full w-screen overflow-x-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-transparent pointer-events-none" />
          
          {/* Marquee text */}
          <div className="absolute bottom-[10%] w-screen flex flex-col text-9xl font-bold tracking-tight">
            <div className="flex whitespace-nowrap">
              <div className="animate-marquee-2 flex gap-[50vw] opacity-90">
                <p className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">Frontend developer</p>
                <p className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">Frontend developer</p>
                <p className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">Frontend developer</p>
              </div>
            </div>
            <div className="flex whitespace-nowrap">
              <div className="animate-marquee-1 flex gap-[100vw]">
                <p>&amp; Web Designer</p>
                <p>&amp; Web Designer</p>
                <p>&amp; Web Designer</p>
              </div>
            </div>
          </div>

          {/* Intro text */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute bottom-[50%] right-20 w-auto max-w-md"
          >
            <p className="text-right text-lg leading-relaxed tracking-wide text-white/90">      
              Hey there, I'm <span className="text-blue-300 font-semibold">Joana</span>.
              <br /><br />
              I make websites look good and work well.
              <br />
              When I'm not coding, I'm either designing,
              <br />
              crocheting something unnecessary, or convincing
              <br />
              my rabbits that my cables are not chew toys.
            </p>
          </motion.div>

          {/* Decorative elements */}
          <div className="absolute top-40 left-20 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-40 right-40 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl" />
        </div>
      </div>

      {/* Timeline Section */}
      <section className="min-h-screen py-20">
        <div className="relative flex justify-center">
          <div className="absolute h-[100vh] w-[3px] bg-white/20"></div>
          <div className="flex flex-col justify-between h-[90vh] py-20">
            {/* First timeline item */}
            <div className="relative flex items-center">
              <div className="absolute left-10 w-[500px]">
                <h1 className="text-4xl font-semibold text-blue-300">
                  BAU
                </h1>
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
                  onClick={() => handleImageClick(bau)}
                />
              </div>
            </div>

            {/* Second timeline item */}
            <div className="relative flex items-center">
              <div className="absolute left-10 items-center flex justify-center h-80 w-[500px]">
                <img 
                  src={kashbuddy} 
                  alt="Kashbuddy Project"
                  className="w-full h-full object-contain rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => handleImageClick(kashbuddy)}
                />
              </div>
              <div className="w-6 h-6 rounded-full bg-white"></div>
              <div className="absolute right-10 w-[500px] text-right">
                <a
                  href="https://kashbuddy.vercel.app/"
                  className="text-4xl font-semibold text-blue-300"
                >
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
            </div>

            {/* Third timeline item */}
            <div className="relative flex items-center">
              <div className="absolute left-10 w-[500px]">
                <a
                  href="https://multisynq-hackathon-frontend.vercel.app/"
                  className="text-4xl font-semibold text-blue-300"
                >
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
                  onClick={() => handleImageClick(synqcity)}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 cursor-pointer"
          >
            <motion.img
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.5 }}
              src={selectedImage}
              alt="Project Preview"
              className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <section className="p-20 text-center">
        <h2 className="text-3xl text-blue-300#1ABC9C] font-semibold">About Me</h2>
        <p className="mt-4 max-w-xl mx-auto text-lg text-gray-400">
          Passionate developer with expertise in modern web technologies.
        </p>
        <div className="flex justify-center gap-6 mt-6 text-3xl text-blue-300">
          <FaHtml5 />
          <FaCss3Alt />
          <FaJs />
          <FaReact />
        </div>
      </section>

      <section className="p-20 text-center items-center">
        <h2 className="text-3xl text-blue-300 font-semibold">Contact Me</h2>
        <div className="max-w-lg mx-auto mt-6">
          <input
            type="text"
            placeholder="Your Name"
            className="mb-4 p-3 rounded-md bg-gray-800 text-white w-full focus:outline-none focus:ring-2 focus:ring-[#1ABC9C]"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="mb-4 p-3 rounded-md bg-gray-800 text-white w-full focus:outline-none focus:ring-2 focus:ring-[#1ABC9C]"
          />
          <textarea
            placeholder="Your Message"
            className="mb-4 p-3 rounded-md bg-gray-800 text-white w-full h-32 focus:outline-none focus:ring-2 focus:ring-[#1ABC9C]"
          />
          <motion.button
            className="bg-[#1ABC9C] text-black px-6 py-2 rounded-full hover:bg-teal-400 transition"
            whileHover={{ scale: 1.05 }}
          >
            Send Message
          </motion.button>
        </div>
      </section>
    </div>    
  )
}

export default App
