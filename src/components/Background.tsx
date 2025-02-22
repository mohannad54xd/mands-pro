import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

const Background = ({ children }: { children: React.ReactNode }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const springConfig = { damping: 30, stiffness: 250 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const parallaxX = useTransform(cursorXSpring, [0, window.innerWidth], [-30, 30]);
  const parallaxY = useTransform(cursorYSpring, [0, window.innerHeight], [-30, 30]);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#090A0D] cursor-none overflow-hidden">
      {/* Updated gradient background */}
      <motion.div 
        className="fixed inset-0 bg-gradient-radial from-[#262626]/5 via-[#090A0D] to-[#090A0D]"
        style={{
          x: parallaxX,
          y: parallaxY,
        }}
      />
      
      {/* Enhanced cursor */}
      <motion.div
        className="fixed pointer-events-none z-50"
        style={{ x: cursorXSpring, y: cursorYSpring }}
      >
        <motion.div
          className="absolute w-20 h-20 -translate-x-1/2 -translate-y-1/2 border-2 border-[#A6A498]/10 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.1, 0.3],
            rotate: [0, 180],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute w-2 h-2 -translate-x-1/2 -translate-y-1/2 bg-[#A6A498] rounded-full"
          animate={{
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        />
      </motion.div>
      
      {/* Interactive particles */}
      <div className="fixed inset-0">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
              background: `rgba(166, 164, 152, ${Math.random() * 0.3})`,
            }}
            initial={{
              opacity: 0,
              scale: 0,
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              opacity: [0, 0.8, 0],
              scale: [0, 1, 0],
              x: mousePosition.x * window.innerWidth + Math.sin(i) * 100,
              y: mousePosition.y * window.innerHeight + Math.cos(i) * 100,
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              repeatDelay: Math.random(),
            }}
          />
        ))}
      </div>

      {/* Geometric accents */}
      <div className="fixed inset-0">
        <motion.div
          className="absolute top-[20%] right-[10%] w-32 h-32 border border-[#A6A498]/10"
          animate={{
            rotate: [0, 90],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-[15%] left-[5%] w-40 h-40 border border-[#A6A498]/5"
          animate={{
            rotate: [45, -45],
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default Background;
