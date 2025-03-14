import myAvatar from '../assets/avatar.svg'
import avatarAnimated from '../assets/avatar-on-hover.svg'
import { useState, useRef, useEffect } from 'react'

const Header = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const avatarRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent) => {
    if (!avatarRef.current) return;
    
    const rect = avatarRef.current.getBoundingClientRect();
    const avatarCenterX = rect.left + rect.width / 2;
    const avatarCenterY = rect.top + rect.height / 2;
    
    const relativeX = (e.clientX - avatarCenterX) / (window.innerWidth / 2);
    const relativeY = (e.clientY - avatarCenterY) / (window.innerHeight / 2);
    
    // Increased to 90 degrees for more dramatic rotation
    const rotateY = Math.min(Math.max(relativeX * 45, -45), 45);
    const rotateX = Math.min(Math.max(-relativeY * 45, -45), 45);
    
    setRotation({ x: rotateX, y: rotateY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm shadow-md py-4 px-5 md:px-10 overflow-hidden w-screen">
        <div className="flex justify-between items-center relative">
          <div 
            ref={avatarRef}
            className="h-14 md:h-30 w-14 md:w-30"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img 
              src={isHovered ? avatarAnimated : myAvatar} 
              alt="avatar" 
              className="w-full h-full object-cover rounded-full transition-all duration-700 ease-out"
              style={{
                transform: `perspective(300px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                transformStyle: 'preserve-3d',
                backfaceVisibility: 'hidden'
              }}
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