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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-10"
      >
        <div className="text-center">
          {/* Ultra Enhanced Badge with neon glow effect */}
          <motion.div variants={item} className="mb-8 flex justify-center">
            <motion.div 
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 border border-blue-500/40 rounded-full backdrop-blur-sm neon-box relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              animate={{
                boxShadow: [
                  '0 0 20px rgba(59, 130, 246, 0.3)',
                  '0 0 40px rgba(139, 92, 246, 0.5)',
                  '0 0 20px rgba(59, 130, 246, 0.3)',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <FaRocket className="text-blue-400" />
              </motion.div>
              <span className="text-sm font-semibold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient bg-300%">
                Available for Opportunities
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
          </motion.div>

          <motion.div variants={item} className="mb-6">
            <motion.span 
              className="text-blue-400 text-xl font-medium tracking-wide"
              animate={{
                textShadow: [
                  '0 0 10px rgba(59, 130, 246, 0.5)',
                  '0 0 20px rgba(59, 130, 246, 0.8)',
                  '0 0 10px rgba(59, 130, 246, 0.5)',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Hello, I'm
            </motion.span>
          </motion.div>

          <motion.h1 variants={item} className="text-6xl md:text-8xl font-extrabold mb-6 leading-tight relative">
            <motion.span 
              className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient bg-300% inline-block"
              whileHover={{ scale: 1.05 }}
              animate={{
                textShadow: [
                  '0 0 20px rgba(59, 130, 246, 0.3)',
                  '0 0 40px rgba(139, 92, 246, 0.5)',
                  '0 0 20px rgba(236, 72, 153, 0.3)',
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Yagnik Vora
            </motion.span>
            {/* Decorative elements */}
            <motion.div
              className="absolute -top-4 -left-4 w-20 h-20 border-t-4 border-l-4 border-blue-500 rounded-tl-3xl opacity-50"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute -bottom-4 -right-4 w-20 h-20 border-b-4 border-r-4 border-purple-500 rounded-br-3xl opacity-50"
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
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
              whileHover={{ scale: 1.08, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-12 py-5 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 text-white rounded-full font-bold text-lg shadow-2xl overflow-hidden bg-300% animate-gradient"
              animate={{
                boxShadow: [
                  '0 20px 60px rgba(139, 92, 246, 0.4)',
                  '0 25px 80px rgba(236, 72, 153, 0.6)',
                  '0 20px 60px rgba(59, 130, 246, 0.4)',
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              {/* Ripple effect */}
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ scale: 0, opacity: 0.5 }}
                whileHover={{ scale: 2, opacity: 0 }}
                transition={{ duration: 0.6 }}
              />
              <span className="relative z-10 flex items-center gap-2">
                Get In Touch
                <motion.span
                  animate={{ x: [0, 8, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
              {/* Shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{
                  x: ['-200%', '200%'],
                }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
              />
            </motion.a>
            <motion.a
              href="/Yagnik_Vora_Resume (2).pdf"
              download="Yagnik_Vora_Resume.pdf"
              whileHover={{ scale: 1.08, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-12 py-5 border-2 border-blue-500 text-blue-400 rounded-full font-bold text-lg hover:bg-blue-500 hover:text-white transition-all duration-300 flex items-center gap-3 backdrop-blur-sm bg-blue-500/5 hover:border-blue-400 overflow-hidden"
            >
              {/* Animated background on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-blue-500/0"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <FaDownload className="relative z-10" />
              </motion.div>
              <span className="relative z-10">Download Resume</span>
            </motion.a>
          </motion.div>

          <motion.div variants={item} className="flex justify-center gap-8">
            {[
              { icon: FaGithub, href: "https://github.com/yourusername", color: "hover:text-white hover:bg-gray-800", gradient: "from-gray-600 to-gray-900" },
              { icon: FaLinkedin, href: "https://linkedin.com/in/yourusername", color: "hover:text-white hover:bg-blue-600", gradient: "from-blue-400 to-blue-700" },
              { icon: FaEnvelope, href: "mailto:your.email@example.com", color: "hover:text-white hover:bg-purple-600", gradient: "from-purple-400 to-purple-700" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -8, scale: 1.2, rotate: [0, -10, 10, 0] }}
                whileTap={{ scale: 0.9 }}
                className={`relative w-16 h-16 rounded-full glass-strong border-2 border-gray-700 flex items-center justify-center text-gray-400 transition-all duration-300 ${social.color} overflow-hidden group`}
                animate={{
                  boxShadow: [
                    '0 0 0 0 rgba(59, 130, 246, 0)',
                    '0 0 0 4px rgba(59, 130, 246, 0.1)',
                    '0 0 0 0 rgba(59, 130, 246, 0)',
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
              >
                {/* Radial gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${social.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="relative z-10"
                >
                  <social.icon size={26} />
                </motion.div>
                {/* Pulse ring effect */}
                <motion.div
                  className="absolute inset-0 border-2 border-blue-400 rounded-full"
                  initial={{ scale: 1, opacity: 0 }}
                  whileHover={{ scale: 1.5, opacity: [0, 0.5, 0] }}
                  transition={{ duration: 0.6 }}
                />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
