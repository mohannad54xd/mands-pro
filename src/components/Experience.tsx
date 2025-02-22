import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import { HiAcademicCap, HiBadgeCheck, HiSparkles } from 'react-icons/hi';  // Add HiSparkles

const certificates = [
  {
    title: "Front End Web Development Professional",
    issuer: "HTML Academy",
    date: "December 2023",
    link: "your-html-academy-certificate-url", // Replace with actual certificate URL
    icon: <HiBadgeCheck className="text-2xl" />,
    image: "/html.jpg", // Add your certificate image
    skills: ["HTML", "CSS", "JavaScript", "React", "Web Development"]
  },
  {
    title: "NASA Space Apps Challenge",
    issuer: "NASA",
    date: "2023",
    link: "your-nasa-certificate-url", // Replace with actual certificate URL
    icon: <HiAcademicCap className="text-2xl" />,
    image: "/nasa.jpg", // Add your certificate image
    skills: ["Innovation", "Space Technology", "Problem Solving", "Teamwork"]
  },
  {
    title: "Resala Charity Organization",
    issuer: "Resala",
    date: "2023",
    link: "Your Resala link ", // Replace with actual certificate URL
    icon: <HiAcademicCap className="text-2xl" />,
    image: "/resala.jpg", // Add your certificate image
    skills: ["volunteering", "Social Skills", "Teamworking", "Problem Solving"]
  },
  {
    title: "German Language Course",
    issuer: "Goethe Institute",
    date: "2023",
    link: "Your Course link ", // Replace with actual certificate URL
    icon: <HiAcademicCap className="text-2xl" />,
    image: "/german.jpg", // Add your certificate image
    skills: ["Language", "Social Skills", "Teamworking", "Problem Solving"]
  },
  {
    title: "ISEF Science Fair",
    issuer: "ISEF",
    date: "2023",
    link: "your-isef-certificate-url", // Replace with actual certificate URL
    icon: <HiSparkles className="text-2xl" />,
    image: "/isef.jpg", // Add your certificate image
    skills: ["Research", "Scientific Method", "Innovation", "Project Presentation"]
  }
];

const experiences = [
    {
        title: "High School Student",
        company: "Muhamed Fawzy High School",
        description: "Academic studies",
        skills: ["HTML", "Social Skills", "Teamworking", "Presentation Skills", "Problem Solving"],
        period: "Oct 2013 - Present"
    },
    // ...you can add more experiences here as needed
];

const Experience = () => {
  const containerRef = useRef(null);
  useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section ref={containerRef} id="experience" className="py-20 px-4 relative overflow-hidden">
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
            EXPERIENCE
          </motion.div>
          <h2 
            className="text-5xl md:text-6xl font-bold text-center relative"
            style={{
              background: 'linear-gradient(45deg, #A6A498 30%, #A6A498 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 30px rgba(166,164,152,0.1)',
            }}
          >
            Certificates & Experience
          </h2>
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {certificates.map((cert, index) => (
            <motion.a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              key={cert.title}
              className="group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="bg-[#262626]/30 backdrop-blur-sm border border-[#A6A498]/10 rounded-xl p-6 hover:border-[#A6A498]/30 transition-all duration-300">
                {cert.image && (
                  <div className="relative w-full h-40 mb-4 overflow-hidden rounded-lg">
                    <motion.img
                      src={cert.image}
                      alt={`${cert.title} Certificate`}
                      className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#090A0D]/50 to-transparent" />
                  </div>
                )}
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 text-[#A6A498] mb-3">
                      {cert.icon}
                      <span className="text-sm font-medium">{cert.issuer}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-[#A6A498] mb-2">
                      {cert.title}
                    </h3>
                    <p className="text-[#73726E] text-sm mb-4">{cert.date}</p>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill) => (
                        <span 
                          key={skill}
                          className="text-xs font-medium px-2.5 py-1 rounded-full bg-[#A6A498]/10 text-[#A6A498] border border-[#A6A498]/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
        
        {/* Experience Timeline */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative p-8 rounded-xl bg-[#262626]/30 backdrop-blur-sm border border-[#A6A498]/10 hover:border-[#A6A498]/20 transition-all group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              {/* Hover Glow Effect */}
              <motion.div 
                className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-[#A6A498]/10 via-[#73726E]/10 to-[#404040]/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity"
              />
              
              <div className="flex flex-col md:flex-row gap-6 md:items-center justify-between relative z-10">
                <div className="flex-1">
                  <motion.h3 
                    className="text-2xl font-semibold text-[#A6A498] group-hover:text-[#A6A498] transition-colors"
                    whileHover={{ x: 10 }}
                  >
                    {exp.title}
                  </motion.h3>
                  <p className="text-[#A6A498]/80 text-lg">{exp.company}</p>
                  <p className="text-[#73726E] mt-3">{exp.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.skills.map((skill, i) => (
                      <motion.span 
                        key={i}
                        className="px-3 py-1 text-sm rounded-full bg-[#262626]/50 text-[#73726E] hover:text-[#A6A498] transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
                <div className="text-[#73726E] font-mono text-lg whitespace-nowrap">
                  {exp.period}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
