import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaCode, FaRocket, FaLaptopCode, FaBrain, FaTrophy, FaFire } from 'react-icons/fa';

const Hero = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      }
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900/10 to-slate-900">
      {/* Enhanced Animated background with more blobs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-3000"></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-10"
      >
        <div className="text-center">
          {/* Badge */}
          <motion.div variants={item} className="mb-8 flex justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full backdrop-blur-sm">
              <FaRocket className="text-blue-400 animate-pulse" />
              <span className="text-sm font-medium bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Available for Opportunities
              </span>
            </div>
          </motion.div>

          <motion.div variants={item} className="mb-6">
            <span className="text-blue-400 text-xl font-medium tracking-wide">Hello, I'm</span>
          </motion.div>

          <motion.h1 variants={item} className="text-6xl md:text-8xl font-extrabold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
              Yagnik Vora
            </span>
          </motion.h1>

          <motion.div variants={item} className="text-3xl md:text-5xl font-bold text-gray-200 mb-10 h-24">
            <div className="flex items-center justify-center gap-4">
              <TypeAnimation
                sequence={[
                  'Full Stack Developer',
                  2000,
                  'MERN Stack Expert',
                  2000,
                  'Problem Solver',
                  2000,
                  'Rising Talent',
                  2000,
                  'Tech Enthusiast',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <FaCode className="text-blue-400 text-4xl md:text-5xl" />
              </motion.div>
            </div>
          </motion.div>

          <motion.p variants={item} className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed flex flex-wrap items-center justify-center gap-2">
            <FaRocket className="text-blue-400 text-2xl" />
            <span>Software Developer at <span className="text-blue-400 font-bold">Kevit.io</span></span>
            <span className="text-gray-500">|</span>
            <FaTrophy className="text-yellow-400 text-2xl animate-pulse" />
            <span><span className="text-yellow-400 font-bold">Rising Talent Award Winner</span></span>
            <span className="text-gray-500">|</span>
            <FaFire className="text-orange-400 text-2xl" />
            <span>Passionate about building scalable web applications</span>
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap justify-center gap-6 mb-14">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group px-10 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold text-lg shadow-xl shadow-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/70 transition-all duration-300 relative overflow-hidden"
            >
              <span className="relative z-10">Get In Touch</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.a>
            <motion.a
              href="/Yagnik_Vora_Resume (2).pdf"
              download="Yagnik_Vora_Resume.pdf"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group px-10 py-4 border-2 border-blue-500 text-blue-400 rounded-full font-semibold text-lg hover:bg-blue-500 hover:text-white transition-all duration-300 flex items-center gap-3 backdrop-blur-sm bg-blue-500/5"
            >
              <FaDownload className="group-hover:animate-bounce" /> Download Resume
            </motion.a>
          </motion.div>

          <motion.div variants={item} className="flex justify-center gap-8">
            {[
              { icon: FaGithub, href: "https://github.com/yourusername", color: "hover:text-white hover:bg-gray-800" },
              { icon: FaLinkedin, href: "https://linkedin.com/in/yourusername", color: "hover:text-white hover:bg-blue-600" },
              { icon: FaEnvelope, href: "mailto:your.email@example.com", color: "hover:text-white hover:bg-purple-600" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`w-14 h-14 rounded-full bg-slate-800/50 backdrop-blur-sm border border-gray-700 flex items-center justify-center text-gray-400 transition-all duration-300 ${social.color}`}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
