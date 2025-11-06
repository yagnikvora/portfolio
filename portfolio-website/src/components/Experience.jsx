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
    <section id="experience" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-center mb-4"
          >
            Work <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Experience</span>
          </motion.h2>
          
          <motion.div variants={itemVariants} className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-12"></motion.div>

          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative pl-8 pb-12 border-l-2 border-blue-500/30 last:pb-0"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-blue-400 to-purple-500"></div>

                {/* Content card */}
                <div className="glass p-6 rounded-2xl hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300">
                  <div className="flex flex-wrap justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">{exp.position}</h3>
                      <div className="flex items-center gap-2 text-blue-400 font-semibold mb-2">
                        <FaBriefcase />
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

                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-gray-300 flex items-start">
                        <span className="text-blue-400 mr-2">▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm border border-blue-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
