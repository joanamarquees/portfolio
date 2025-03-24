import './App.css'
import './styles/marquee.css'
import { motion, AnimatePresence } from 'framer-motion'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaLinkedin, FaGithub, FaGitAlt } from 'react-icons/fa'
import { useState } from 'react'

import synqcity from './assets/sinqcity.svg'
import kashbuddy from './assets/kashbuddy.svg'
import hello from './assets/hello.svg'

import Header from './components/header'
import Projects from './components/projects'
import { MdEmail } from 'react-icons/md'
import { SiFirebase, SiTailwindcss, SiTypescript } from 'react-icons/si'

function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const projectLinks: Record<string, string> = {
    [kashbuddy]: 'https://kashbuddy.vercel.app/',
    [synqcity]: 'https://multisynq-hackathon-frontend.vercel.app/',
    // BAU doesn't have a link yet since it's in production
  };

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const handleModalImageClick = (e: React.MouseEvent<HTMLImageElement>) => {
    e.stopPropagation();
    if (selectedImage && projectLinks[selectedImage]) {
      window.open(projectLinks[selectedImage], '_blank');
    }
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
          <div className="absolute bottom-[15%] md:bottom-[10%] w-screen flex flex-col text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight">
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
            className="absolute bottom-[50%] right-5 md:right-10 lg:right-20 w-auto max-w-md"
          >
            <p className="text-right text-md md:text-lg leading-relaxed tracking-wide text-white/90">      
              Hey there, I'm <span className="text-[#7b9cea] font-semibold">Joana</span>.
              <br /><br />
              I make websites look good and work well.
              <br />
              When I'm not coding, I'm either designing,
              crocheting something unnecessary, or convincing
              my bunnies that my cables are not chew toys. 
            </p>
          </motion.div>

          {/* Decorative elements */}
          <div className="absolute top-40 left-20 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-40 right-40 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl" />
        </div>
      </div>

      {/* Projects Section */}
      <Projects onImageClick={handleImageClick} />

      {/* Image Modal */}
      <AnimatePresence mode="wait">
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 cursor-pointer"
          >
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1], // custom bezier curve for a smooth feel
                opacity: { duration: 0.2 }
              }}
              src={selectedImage}
              alt="Project Preview"
              className={`max-w-[90vw] max-h-[90vh] object-contain rounded-lg ${projectLinks[selectedImage] ? 'cursor-pointer' : ''}`}
              onClick={handleModalImageClick}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <section
        id="about"
        className="flex flex-col md:flex-row w-screen h-screen mt-[14vh] text-gray-300"
      >
        <div className="w-full md:w-[20%] h-[20%] md:h-full flex items-end md:items-center justify-center">
          <div className="transform md:-rotate-90">
            <h2 className="h-full lg:h-[10%] w-full text-7xl md:text-8xl lg:text-[10rem] font-bold animate-wave bg-gradient-to-r from-[#dae5ff] via-[#3f5ca2] to-[#dae5ff] text-transparent bg-clip-text bg-[length:200%_100%]">
              ABOUT
            </h2>
          </div>
        </div>

        <div className="w-full md:w-[80%] h-[80%] md:h-full flex items-center">  
          <div className="w-full flex flex-col gap-10">
        <div className="flex flex-col lg:flex-row lg:justify-between items-center font-light p-10 lg:pr-20 lg:pt-20">
          <div className="flex flex-col gap-6">
            <p className="max-w-[40rem] text-xl md:text-xl lg:text-3xl">
          Hey, I'm Joana! A frontend developer and web designer who
          creates intuitive and visually appealing apps. I work from
          concept to code, using mostly Figma, React & Tailwind.
            </p>
            <p className="max-w-[50rem] text-xl md:text-xl lg:text-3xl">
          I often say I'm from the world. Though I was born in Portugal, my
          life has been split between Angola, Cape Verde, and France. This has
          given me a natural ability to adapt and a deep love for traveling and
          exploring new cultures. When I'm not pulling my hair out over code,
          you'll find me crocheting and creating interior design projects for
          houses that don't even exist.
            </p>
            <div className="lg:hidden grid grid-cols-4 lg:grid-cols-2 gap-2 lg:gap-x-10 max-w-[20rem] mx-auto">
          {[
            FaHtml5,
            FaJs,
            SiTypescript,
            FaReact,
            SiFirebase,
            FaCss3Alt,
            SiTailwindcss,
            FaGitAlt
          ].map((Icon, index) => (
            <div key={index} className="w-8 h-8 md:w-16 md:h-16 bg-gray-800/50 rounded-lg flex items-center justify-center hover:bg-gray-700/50 transition-colors">
              <Icon className="text-2xl md:text-3xl text-[#7b9cea]" />
            </div> 
          ))}
            </div>
          </div>
          <div className="hidden lg:grid grid-cols-2 gap-2 max-w-[28rem] lg:ml-40">
            {[
          FaHtml5,
          FaJs,
          SiTypescript,
          FaReact,
          SiFirebase,
          FaCss3Alt,
          SiTailwindcss,
          FaGitAlt
            ].map((Icon, index) => (
          <div key={index} className="w-10 md:w-20 h-10 md:h-20 bg-gray-800/50 rounded-lg flex items-center justify-center hover:bg-gray-700/50 transition-colors">
            <Icon className="text-4xl text-[#7b9cea]" />
          </div> 
            ))}
          </div>
        </div>
        {/* Goal */}
        <p className="text-xl md:text-2xl lg:text-3xl font-bold text-center p-2 lg:p-0">
          my goal? creating seamless, engaging, and user-friendly digital experiences.
        </p>
          </div>
        </div>
      </section>

      {/* Footer/Contact Section */}
      <section id="contact" className="flex h-screen w-screen min-h-[70vh] text-gray-300 relative py-10">
        <img 
          src={hello} 
          alt="Hello illustration" 
          className="absolute right-0 md:right-20 scale-x-[-1] bottom-0 w-48 md:w-72 lg:w-96 opacity-50 md:opacity-100"
        />
        <div className="w-full h-full flex items-center">
          <div className="w-full flex flex-col gap-8 md:gap-16 items-center">
        <p className="text-3xl md:text-4xl lg:text-6xl font-light text-center max-w-7xl px-4 leading-relaxed">
          Got a question or proposal, or just want to say <span className="text-[#7b9cea] font-normal">hello</span>? Go ahead.
        </p>
        
        <div className="flex flex-col md:flex-row gap-6 md:gap-12">
          <a 
            href="https://www.linkedin.com/in/joana-marques-33a170220/"
            className="flex items-center gap-3 text-xl md:text-2xl hover:text-[#7b9cea] transition-colors"
          >
            <FaLinkedin className="text-3xl md:text-4xl" />
            LinkedIn
          </a>
          <a 
            href="https://github.com/joanamarquees"
            className="flex items-center gap-3 text-xl md:text-2xl hover:text-[#7b9cea] transition-colors"
          >
            <FaGithub className="text-3xl md:text-4xl" />
            GitHub
          </a>
          <a 
            href="mailto:joanacfmarques@ulisboa.tecnico.pt"
            className="flex items-center gap-3 text-xl md:text-2xl hover:text-[#7b9cea] transition-colors"
          >
            <MdEmail className="text-3xl md:text-4xl" />
            Email
          </a>
        </div>

        <p className="text-base md:text-lg mt-8 md:mt-12 text-gray-500">
          &copy; 2025 ~ Made with ♡ by Joana M
        </p>
          </div>
        </div>
      </section>
    </div>    
  )
}

export default App
