import { motion } from 'framer-motion';
import { HiLightningBolt, HiCode, HiPuzzle, HiTranslate } from 'react-icons/hi';

const features = [
  {
    icon: <HiLightningBolt className="text-3xl" />,
    title: "Fast Learner",
    description: "Quickly adapting to new technologies and methodologies"
  },
  {
    icon: <HiCode className="text-3xl" />,
    title: "Clean Code",
    description: "Writing maintainable and scalable solutions"
  },
  {
    icon: <HiPuzzle className="text-3xl" />,
    title: "Problem Solver",
    description: "Finding creative solutions to complex challenges"
  }
];

const languages = [
  {
    language: "Arabic",
    level: "Native",
    color: "from-[#A6A498] to-[#73726E]"
  },
  {
    language: "English",
    level: "Fluent",
    color: "from-[#73726E] to-[#404040]"
  },
  {
    language: "German",
    level: "Beginner",
    color: "from-[#404040] to-[#262626]"
  }
];

const About = () => {
  return (
    <section id="about" className="py-20 px-4 relative">
      {/* Decorative elements */}
      <motion.div 
        className="absolute top-20 right-0 w-72 h-72 rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(166,164,152,0.08) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
      <motion.div 
        className="absolute bottom-20 left-0 w-96 h-96 rounded-full opacity-10"
        style={{
          background: 'radial-gradient(circle, rgba(166,164,152,0.1) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Section Title with improved visibility */}
        <motion.div 
          className="relative mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="absolute -top-8 left-1/2 -translate-x-1/2 text-[120px] font-bold opacity-[0.05] text-[#A6A498] whitespace-nowrap"
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
          >
            ABOUT ME
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
            About Me
          </h2>
        </motion.div>

        {/* Introduction Text with improved contrast */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            className="space-y-6 text-[#A6A498] text-lg"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="leading-relaxed">
              I'm a 17-year-old passionate web developer based in Giza, Egypt. Despite my young age, 
              I'm deeply committed to creating beautiful and functional web experiences that make a difference.
            </p>
            <p className="leading-relaxed">
              Being part of the next generation of developers, I bring fresh perspectives and innovative ideas
              to every project I work on, combining modern technologies with creative solutions.
            </p>
          </motion.div>

          {/* Skills Grid with improved visibility */}
          <motion.div
            className="grid grid-cols-3 gap-3"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {["TypeScript", "React", "Node.js", "Next.js", "TailwindCSS", "Git", "Three.js", "Python", "SQL"].map((skill, i) => (
              <motion.div
                key={skill}
                className="aspect-square flex items-center justify-center bg-[#262626]/50 rounded-xl border border-[#A6A498]/10 p-4 group hover:bg-[#262626]/80 transition-all duration-300"
                whileHover={{ scale: 1.05, rotate: 5 }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <p className="text-[#A6A498] group-hover:text-[#A6A498] text-sm text-center font-medium transition-colors">
                  {skill}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Languages Section with enhanced contrast */}
        <div className="mb-20">
          <motion.h3 
            className="text-2xl font-semibold text-[#A6A498] mb-12 text-center flex items-center justify-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textShadow: '0 0 20px rgba(166,164,152,0.1)' }}
          >
            <HiTranslate className="text-[#A6A498]" />
            Language Proficiency
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {languages.map((lang, i) => (
              <motion.div
                key={lang.language}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-[#A6A498]/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="bg-[#262626]/50 backdrop-blur-sm border border-[#A6A498]/10 p-6 rounded-xl relative z-10">
                  <div className={`h-1.5 rounded-full bg-gradient-to-r ${lang.color} mb-4 opacity-90`} />
                  <h4 className="text-xl font-medium text-[#A6A498] mb-2">{lang.language}</h4>
                  <p className="text-[#A6A498]/80">{lang.level}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Features with enhanced visibility */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              className="group relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-[#A6A498]/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="bg-[#262626]/50 backdrop-blur-sm border border-[#A6A498]/10 p-8 rounded-xl relative z-10">
                <div className="text-[#A6A498] mb-6 flex justify-center text-4xl group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#A6A498] mb-4" style={{ textShadow: '0 0 20px rgba(166,164,152,0.1)' }}>
                  {feature.title}
                </h3>
                <p className="text-[#A6A498]/90 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
