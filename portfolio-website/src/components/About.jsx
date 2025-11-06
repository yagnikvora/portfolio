import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaCode, FaHeart, FaLightbulb, FaRocket, FaCoffee, FaBrain } from 'react-icons/fa';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
      }
    },
  };

  const stats = [
    { number: '6+', label: 'Months Experience', icon: FaRocket },
    { number: '10+', label: 'Projects Completed', icon: FaCode },
    { number: '100%', label: 'Dedication', icon: FaHeart },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-slate-900 via-blue-900/10 to-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
      </div>

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
            About <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent">Me</span>
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-center text-gray-400 text-lg mb-4">
            Get to know me better
          </motion.p>
          
          <motion.div variants={itemVariants} className="w-24 h-1.5 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-16 rounded-full"></motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Left side - Enhanced Image */}
            <motion.div variants={itemVariants} className="relative">
              <div className="relative w-full max-w-md mx-auto">
                {/* Animated rings */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl transform rotate-6 blur-sm opacity-30"
                ></motion.div>
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-600 rounded-3xl transform -rotate-6 blur-sm opacity-30"
                ></motion.div>
                
                {/* Main card */}
                <div className="relative glass p-8 rounded-3xl border-2 border-blue-500/30 shadow-2xl shadow-blue-500/20">
                  <div className="relative w-full h-96 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-8xl font-black text-white overflow-hidden group">
                    {/* Animated background pattern */}
                    <motion.div
                      className="absolute inset-0 opacity-20"
                      animate={{
                        backgroundPosition: ['0% 0%', '100% 100%'],
                      }}
                      transition={{
                        duration: 10,
                        repeat: Infinity,
                        repeatType: 'reverse',
                      }}
                      style={{
                        backgroundImage: 'linear-gradient(45deg, transparent 25%, rgba(255,255,255,.2) 25%, rgba(255,255,255,.2) 50%, transparent 50%, transparent 75%, rgba(255,255,255,.2) 75%, rgba(255,255,255,.2))',
                        backgroundSize: '20px 20px',
                      }}
                    />
                    <span className="relative z-10 drop-shadow-2xl">YV</span>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
                  
                  {/* Floating badges */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute -top-6 -right-6 px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full shadow-xl"
                  >
                    <span className="font-bold text-white text-sm">🏆 Award Winner</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Right side - Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-4xl font-bold text-white mb-6">
                Full Stack <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Developer</span>
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                I'm a passionate <span className="text-blue-400 font-semibold">Full Stack Developer</span> with expertise in building modern, scalable web applications. 
                Currently working at <span className="text-purple-400 font-bold">Kevit.io</span> for the past 6 months, 
                where I've been contributing to innovative projects and delivering high-quality solutions.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                I specialize in the <span className="text-cyan-400 font-semibold">MERN stack</span> (MongoDB, Express.js, React.js, Node.js) and have a strong 
                foundation in both frontend and backend development. I'm dedicated to writing clean, 
                maintainable code and staying updated with the latest technologies.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                Recently honored with the <span className="text-yellow-400 font-bold">Rising Talent Award</span> at Kevit.io's 
                Annual Growth Meet 2025, which motivates me to continue pushing boundaries and delivering excellence.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="glass p-4 rounded-2xl text-center border-2 border-blue-500/20 hover:border-blue-500/50 transition-all duration-300"
                  >
                    <stat.icon className="text-blue-400 text-3xl mx-auto mb-2" />
                    <h4 className="font-bold text-2xl text-white mb-1">{stat.number}</h4>
                    <p className="text-gray-400 text-xs">{stat.label}</p>
                  </motion.div>
                ))}
              </div>

              {/* Skills highlight */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6">
                {[
                  { icon: FaCode, text: 'Clean Code', color: 'text-blue-400' },
                  { icon: FaLightbulb, text: 'Innovation', color: 'text-purple-400' },
                  { icon: FaHeart, text: 'Passion', color: 'text-pink-400' },
                  { icon: FaRocket, text: 'Fast Delivery', color: 'text-cyan-400' },
                  { icon: FaCoffee, text: 'Hard Work', color: 'text-orange-400' },
                  { icon: FaBrain, text: 'Problem Solving', color: 'text-green-400' },
                ].map((skill, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="glass p-4 rounded-xl text-center transform transition-all duration-300 border border-gray-700 hover:border-blue-500/50"
                  >
                    <skill.icon className={`${skill.color} text-3xl mx-auto mb-2`} />
                    <p className="text-gray-300 text-sm font-medium">{skill.text}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
