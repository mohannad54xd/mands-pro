import { useState, useEffect } from 'react';
import { motion, useScroll, AnimatePresence } from 'framer-motion';

const menuItems = ['Home', 'About', 'Projects', 'Experience', 'Contact'];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const [activeItem, setActiveItem] = useState('');
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map(item => ({
        id: item.toLowerCase(),
        element: document.getElementById(item.toLowerCase())
      }));

      // Find the current active section
      let current = '';
      for (const section of sections) {
        if (!section.element) continue;
        
        const rect = section.element.getBoundingClientRect();
        const offset = window.innerHeight * 0.3; // 30% of viewport height

        if (rect.top <= offset && rect.bottom >= offset) {
          current = section.id;
          break;
        }
      }

      setActiveSection(current);
    };

    // Initial check
    handleScroll();

    // Add scroll listener with throttling
    let timeoutId: NodeJS.Timeout;
    const throttledScroll = () => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(handleScroll, 100);
    };

    window.addEventListener('scroll', throttledScroll);
    return () => {
      window.removeEventListener('scroll', throttledScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className={`z-50 fixed top-6 left-1/2 -translate-x-1/2 
        w-[90%] sm:w-[85%] max-w-6xl font-space
        bg-gradient-to-r from-[#090A0D]/80 via-[#262626]/20 to-[#090A0D]/80
        shadow-xl shadow-[#A6A498]/5 backdrop-blur-md border border-[#A6A498]/10
        transition-all duration-300 p-3 sm:p-4 overflow-hidden
        ${isOpen ? 'rounded-2xl' : 'rounded-full'}`}
    >
      
      {/* Animated Progress Bar */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#A6A498]/30 via-[#A6A498]/50 to-[#A6A498]/30"
        style={{ 
          scaleX: scrollYProgress,
          transformOrigin: "0%",
        }}
      />

      {/* Pulsing Background Effect */}
      <motion.div
        className="absolute inset-0 bg-[#A6A498]/5 rounded-full"
        animate={{
          scale: [1, 1.02, 1],
          opacity: [0, 0.2, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="flex items-center justify-between px-3 sm:px-6 relative">
        <motion.h1 
          className="text-2xl font-bold text-[#A6A498] display-text tracking-tight"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Mohannad Abd El Naby
        </motion.h1>
        
        {/* Desktop Menu with Hover Effects */}
        <ul className="hidden md:flex justify-center gap-8 font-space text-lg">
          {menuItems.map((item) => (
            <motion.li 
              key={item}
              onHoverStart={() => setActiveItem(item)}
              onHoverEnd={() => setActiveItem('')}
            >
              <a 
                href={`#${item.toLowerCase()}`}
                onClick={(e) => handleClick(e, item.toLowerCase())}
                className={`px-4 py-2 relative transition-all duration-300 ${
                  activeSection === item.toLowerCase() 
                    ? 'text-[#A6A498] font-medium'
                    : 'text-[#73726E] hover:text-[#A6A498]'
                }`}
              >
                {item}
                {(activeSection === item.toLowerCase() || activeItem === item) && (
                  <motion.div
                    layoutId="navbar-underline"
                    className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#A6A498]/40"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                )}
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <motion.button 
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="md:hidden text-[#73726E] hover:text-[#A6A498]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden mt-4 flex flex-col items-center gap-4 pb-4
              border-t border-[#A6A498]/10 mx-2 sm:mx-4 pt-4 w-[95%] font-space"
          >
            {menuItems.map((item) => (
              <li key={item} className="w-full">
                <a href={`#${item.toLowerCase()}`}
                  onClick={(e) => handleClick(e, item.toLowerCase())}
                  className="px-4 py-2 text-[#73726E] hover:text-[#A6A498]
                  hover:bg-[#A6A498]/5 rounded-lg transition-all duration-300 block text-center">
                  {item}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar;
