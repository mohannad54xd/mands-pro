import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const { scrollYProgress } = useScroll();
  
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(166,164,152,0.03) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Geometric Accents */}
        <motion.div
          className="absolute -left-20 top-1/4 w-60 h-60 border border-[#A6A498]/10"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Main Content */}
      <motion.div 
        style={{
          opacity: useTransform(scrollYProgress, [0, 0.5], [1, 0]),
          scale: useTransform(scrollYProgress, [0, 0.5], [1, 0.95]),
        }}
        className="relative z-10"
      >
        <motion.header className="relative w-full py-24 md:py-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-12 md:gap-20">
              
              {/* Profile Image */}
              <motion.div 
                className="relative flex-shrink-0 group"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className="absolute -inset-4 rounded-full opacity-75"
                  style={{
                    background: 'linear-gradient(45deg, rgba(166,164,152,0.1), rgba(115,114,110,0.1))',
                    filter: 'blur(15px)',
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <motion.img
                  src="profile-pic.jpg"
                  alt="Profile Picture"
                  className="relative w-[220px] h-[220px] md:w-[280px] md:h-[280px] rounded-full 
                    border-4 border-[#A6A498]/10 shadow-2xl object-cover"
                  whileHover={{ scale: 1.1 }}
                />
              </motion.div>

              {/* Text Content */}
              <motion.div 
                className="text-center md:text-left z-10 max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <motion.p 
                  className="text-[#73726E] text-xl mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  Hi there, I'm
                </motion.p>
                
                <motion.h1 
                  className="text-5xl md:text-7xl font-bold tracking-tight"
                  style={{
                    background: 'linear-gradient(45deg, #A6A498, #73726E)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Mohannad Abd El Naby
                </motion.h1>
                
                <motion.p 
                  className="text-xl md:text-2xl text-[#73726E] mt-6 font-light"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  Software Engineer & UI/UX Designer
                </motion.p>
                
                <motion.div 
                  className="mt-8 flex gap-4 justify-center md:justify-start"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <motion.button
                    className="px-6 py-3 bg-[#A6A498]/10 text-[#A6A498] rounded-lg 
                      border border-[#A6A498]/20 hover:bg-[#A6A498]/20 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Projects
                  </motion.button>
                  <motion.button
                    className="px-6 py-3 text-[#73726E] rounded-lg hover:text-[#A6A498] 
                      transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Contact Me
                  </motion.button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.header>
      </motion.div>
    </section>
  );
};

export default Hero;
