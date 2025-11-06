import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const experiences = [
    {
      company: 'Kevit.io',
      position: 'Software Developer',
      duration: 'June 2024 - Present',
      location: 'Remote',
      description: [
        'Developing and maintaining scalable web applications using MERN stack',
        'Collaborating with cross-functional teams to deliver high-quality solutions',
        'Implementing responsive designs and optimizing application performance',
        'Participating in code reviews and contributing to technical decisions',
        'Won Rising Talent Award at Annual Growth Meet 2025',
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'TypeScript'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          <motion.h2
            variants={itemVariants}
            className="text-5xl md:text-6xl font-extrabold text-center mb-6"
          >
            Work <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient bg-300%">Experience</span>
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-center text-gray-400 text-lg mb-4">
            My professional journey
          </motion.p>
          
          <motion.div 
            variants={itemVariants} 
            className="w-24 h-1.5 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mx-auto mb-16 rounded-full pulse-glow"
          ></motion.div>

          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative pl-10 pb-12 border-l-4 border-blue-500/30 last:pb-0"
                whileHover={{ x: 10 }}
              >
                {/* Enhanced Timeline dot with animation */}
                <motion.div 
                  className="absolute left-0 top-0 -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 shadow-lg animate-gradient bg-300%"
                  animate={{
                    boxShadow: [
                      '0 0 20px rgba(59, 130, 246, 0.5)',
                      '0 0 30px rgba(139, 92, 246, 0.7)',
                      '0 0 20px rgba(236, 72, 153, 0.5)',
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-blue-400"
                    animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>

                {/* Enhanced Content card */}
                <motion.div 
                  className="glass-strong p-8 rounded-3xl border-2 border-blue-500/20 hover:border-blue-500/50 transition-all duration-300 relative overflow-hidden group card-hover"
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Animated background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Spotlight effect */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="flex flex-wrap justify-between items-start mb-4">
                      <div>
                        <h3 className="text-3xl font-bold text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent transition-all">{exp.position}</h3>
                        <div className="flex items-center gap-2 text-blue-400 font-semibold mb-2">
                          <motion.div
                            animate={{ rotate: [0, 15, -15, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            <FaBriefcase />
                          </motion.div>
                          <span>{exp.company}</span>
                        </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 text-gray-400 text-sm mb-4">
                    <div className="flex items-center gap-2">
                      <FaCalendarAlt />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaMapMarkerAlt />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {exp.description.map((item, i) => (
                      <motion.li 
                        key={i} 
                        className="text-gray-300 flex items-start group/item"
                        whileHover={{ x: 5 }}
                      >
                        <motion.span 
                          className="text-blue-400 mr-3 text-xl"
                          animate={{ x: [0, 3, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                        >
                          ▹
                        </motion.span>
                        <span className="group-hover/item:text-white transition-colors">{item}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-3">
                    {exp.technologies.map((tech, i) => (
                      <motion.span
                        key={i}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm border-2 border-blue-500/20 hover:border-blue-400/60 hover:bg-blue-500/20 transition-all cursor-default font-medium"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;