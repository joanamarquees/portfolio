import myAvatar from '../assets/avatar.svg';
import avatarAnimated from '../assets/avatar-on-hover.svg';
import { useState } from 'react';

const Header = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm shadow-md py-4 px-5 md:px-10 overflow-hidden w-screen">
        <div className="flex justify-between items-center relative">
          <div 
            className="h-14 md:h-30 w-14 md:w-30"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img 
              src={isHovered ? avatarAnimated : myAvatar} 
              alt="avatar" 
              className="w-full h-full object-cover rounded-full" 
            />
          </div>

          <ul className="flex gap-3 md:gap-8 text-xl md:text-4xl lg:text-6xl">
            <li>
              <a href="#projects" className="hover:text-blue-300 transition">PROJECTS</a>
            </li> 
            <li>
              <a href="#about" className="hover:text-blue-300 transition">ABOUT</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-300 transition">CONTACT</a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}

export default Header;