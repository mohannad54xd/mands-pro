import { HiPhotograph } from 'react-icons/hi';  // Add HiPhotograph, remove HiDeviceMobile
import { IoIosPlanet } from 'react-icons/io';
import { motion, useScroll,} from 'framer-motion';
import { useRef } from 'react';

const projects = [
  {
    icon: <IoIosPlanet className="text-4xl" />,
    title: "NASA Space Apps",
    description: "A solution for NASA's Space Apps Challenge, focusing on space exploration visualization.",
    color: "from-[#A6A498] to-[#73726E]",
    link: "solartrek.com",
    image: "/solartrek.jpg"  // Add your NASA project image
  },
  {
    icon: <HiPhotograph className="text-4xl" />,  // Changed from HiDeviceMobile to HiPhotograph
    title: "Thumbnail",
    description: "Thumbnail for youtube videos",
    color: "from-[#73726E] to-[#404040]",
    link: "/",
    image: "/lcoy.jpg"  // Add your CV Maker image
  },
  
];

const Portfolio = () => {
  const containerRef = useRef(null);
  useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section id="projects" ref={containerRef} className="py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <motion.div 
        className="absolute top-20 right-0 w-96 h-96 rounded-full opacity-10"
        style={{
          background: 'radial-gradient(circle, rgba(166,164,152,0.08) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div className="relative mb-20">
          <motion.div
            className="absolute -top-8 left-1/2 -translate-x-1/2 text-[120px] font-bold opacity-[0.05] text-[#A6A498] whitespace-nowrap"
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
          >
            PROJECTS
          </motion.div>
          <motion.h2 
            className="text-5xl md:text-6xl font-bold text-center relative"
            style={{
              background: 'linear-gradient(45deg, #A6A498 30%, #A6A498 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 30px rgba(166,164,152,0.1)',
            }}
          >
            My Projects
          </motion.h2>
        </motion.div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              {/* Hover Glow Effect */}
              <motion.div 
                className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-[#A6A498]/10 via-[#73726E]/10 to-[#404040]/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"
                whileHover={{ scale: 1.1 }}
              />
              
              {/* Card Content */}
              <motion.div
                className="relative rounded-xl bg-[#262626]/30 backdrop-blur-sm border border-[#A6A498]/10 hover:border-[#A6A498]/20 transition-all h-full overflow-hidden"
                whileHover={{ y: -5 }}
              >
                {/* Project Image */}
                <div className="relative w-full h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090A0D]/90 to-transparent" />
                </div>

                <div className="p-6">
                  <div className={`p-3 w-fit rounded-lg bg-gradient-to-r ${project.color} opacity-80 mb-4`}>
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-[#A6A498] mb-4" style={{ textShadow: '0 0 20px rgba(166,164,152,0.1)' }}>
                    {project.title}
                  </h3>
                  <p className="text-[#73726E] leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
