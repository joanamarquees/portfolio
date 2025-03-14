import './App.css'
import './styles/marquee.css'
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";

import Header from './components/header'

function App() {
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
      <section className="min-h-screen pt-20">
        <div className="relative flex justify-center">
          <div className="absolute h-[100vh] w-[3px] bg-white/20"></div>
          <div className="flex flex-col justify-between h-[90vh] py-20">
            {/* First timeline item */}
            <div className="relative flex items-center">
              <div className="absolute left-10 w-96">
                <a
                  href="https://multisynq-hackathon-frontend.vercel.app/"
                  className="text-2xl font-semibold text-blue-300"
                >
                  Sinq City
                </a>
                <p className="text-lg text-gray-400 mt-2">project description bla bla bla bla</p>
              </div>
              <div className="w-6 h-6 rounded-full bg-white"></div>
              <div className="absolute right-10 w-96 border-2 border-green-500">
                <img 
                  src="/projects/sinqcity.png" 
                  alt="Sinq City Project"
                  className="w-full h-48 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Second timeline item */}
            <div className="relative flex items-center">
              <div className="absolute left-10 w-96">
                <img 
                  src="/projects/kashbuddy.png" 
                  alt="Kashbuddy Project"
                  className="w-full h-48 object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="w-6 h-6 rounded-full bg-white"></div>
              <div className="absolute right-10 w-96 text-right">
                <h3 className="text-2xl font-semibold text-blue-300">Kashbuddy</h3>
                <p className="text-lg text-gray-400 mt-2">Creating intuitive and beautiful user interfaces that engage users</p>
              </div>
            </div>

            {/* Third timeline item */}
            <div className="relative flex items-center">
              <div className="absolute left-10 w-96">
                <h3 className="text-2xl font-semibold text-blue-300">BAU</h3>
                <p className="text-lg text-gray-400 mt-2">Mastering the latest development tools and staying current with tech trends</p>
              </div>
              <div className="w-6 h-6 rounded-full bg-white"></div>
              <div className="absolute right-10 w-96">
                <img 
                  src="/projects/bau.png" 
                  alt="BAU Project"
                  className="w-full h-48 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <div>
        
      </div>

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
