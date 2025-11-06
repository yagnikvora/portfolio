import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  FaReact, FaNodeJs, FaDatabase, FaPython, FaGitAlt, FaDocker,
  FaHtml5, FaCss3Alt, FaJs
} from 'react-icons/fa';
import { 
  SiMongodb, SiExpress, SiTailwindcss, SiRedux, SiPostgresql, 
  SiTypescript, SiNextdotjs, SiMysql
} from 'react-icons/si';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React.js', icon: FaReact, color: 'text-cyan-400' },
        { name: 'Next.js', icon: SiNextdotjs, color: 'text-white' },
        { name: 'JavaScript', icon: FaJs, color: 'text-yellow-400' },
        { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-500' },
        { name: 'HTML5', icon: FaHtml5, color: 'text-orange-500' },
        { name: 'CSS3', icon: FaCss3Alt, color: 'text-blue-400' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-400' },
        { name: 'Redux', icon: SiRedux, color: 'text-purple-500' },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500' },
        { name: 'Express.js', icon: SiExpress, color: 'text-gray-400' },
        { name: 'Python', icon: FaPython, color: 'text-yellow-400' },
        { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500' },
        { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-400' },
        { name: 'MySQL', icon: SiMysql, color: 'text-blue-500' },
      ],
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', icon: FaGitAlt, color: 'text-orange-500' },
        { name: 'Docker', icon: FaDocker, color: 'text-blue-400' },
        { name: 'Database', icon: FaDatabase, color: 'text-gray-400' },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            My <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">Skills</span>
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-center text-gray-400 text-lg mb-4">
            Technologies I work with
          </motion.p>
          
          <motion.div variants={itemVariants} className="w-24 h-1.5 bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 mx-auto mb-16 rounded-full"></motion.div>

          <div className="grid md:grid-cols-3 gap-10">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="glass p-8 rounded-3xl hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-500 border-2 border-purple-500/20 hover:border-purple-500/50 relative overflow-hidden group"
              >
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <h3 className="text-3xl font-bold text-white mb-8 text-center relative z-10">
                  <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    {category.title}
                  </span>
                </h3>
                <div className="grid grid-cols-2 gap-6 relative z-10">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      whileHover={{ scale: 1.15, rotate: [0, -5, 5, 0] }}
                      whileTap={{ scale: 0.95 }}
                      className="flex flex-col items-center p-5 bg-slate-800/50 backdrop-blur-sm rounded-2xl cursor-pointer border-2 border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30"
                    >
                      <motion.div
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: skillIndex * 0.2 }}
                      >
                        <skill.icon className={`text-5xl ${skill.color} mb-3 drop-shadow-lg`} />
                      </motion.div>
                      <span className="text-sm text-gray-300 text-center font-medium">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="mt-16 text-center glass p-8 rounded-3xl border-2 border-blue-500/30 max-w-3xl mx-auto">
            <p className="text-gray-300 text-lg mb-4">
              💡 <span className="font-semibold text-blue-400">Always learning</span> and exploring new technologies to stay ahead in the ever-evolving tech landscape.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              {['TypeScript', 'GraphQL', 'AWS', 'CI/CD', 'Testing'].map((tech, i) => (
                <span key={i} className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
