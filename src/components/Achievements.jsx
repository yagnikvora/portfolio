import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaTrophy, FaStar, FaAward, FaMedal, FaCertificate } from 'react-icons/fa';

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const achievements = [
    {
      title: 'Rising Talent Award 🌟',
      organization: 'Kevit.io',
      event: 'Annual Growth Meet 2025',
      date: 'January 2025',
      description: 'Recognized for exceptional performance, innovation, dedication, and outstanding contribution to team success during the first 6 months at Kevit.io.',
      icon: FaTrophy,
      color: 'from-yellow-400 via-orange-500 to-red-500',
      borderColor: 'border-yellow-500/50',
      glowColor: 'shadow-yellow-500/50',
    },
    {
      title: 'Full Stack Development',
      organization: 'Professional Certification',
      event: 'MERN Stack Specialization',
      date: '2024',
      description: 'Completed comprehensive training in MongoDB, Express.js, React.js, and Node.js with hands-on projects.',
      icon: FaCertificate,
      color: 'from-blue-400 to-cyan-500',
      borderColor: 'border-blue-500/50',
      glowColor: 'shadow-blue-500/50',
    },
    {
      title: 'Top Performer',
      organization: 'Kevit.io',
      event: 'Q3 2024 Performance Review',
      date: 'September 2024',
      description: 'Achieved highest performance rating for code quality, project delivery, and technical excellence.',
      icon: FaStar,
      color: 'from-purple-400 to-pink-500',
      borderColor: 'border-purple-500/50',
      glowColor: 'shadow-purple-500/50',
    },
  ];

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
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      }
    },
  };

  return (
    <section id="achievements" className="py-20 relative overflow-hidden">
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
            Achievements & <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent animate-gradient bg-300%">Awards</span>
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-center text-gray-400 text-lg mb-4">
            Recognition for excellence and dedication
          </motion.p>
          
          <motion.div 
            variants={itemVariants} 
            className="w-24 h-1.5 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 mx-auto mb-16 rounded-full pulse-glow"
          ></motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.08, y: -15, rotateY: 5 }}
                className={`glass-strong p-8 rounded-3xl hover:shadow-2xl ${achievement.glowColor} transition-all duration-500 border-2 ${achievement.borderColor} hover:border-opacity-100 relative overflow-hidden group perspective-card`}
              >
                {/* Enhanced Animated background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 animate-gradient bg-300%`}></div>
                
                {/* Animated sparkles */}
                <div className="absolute inset-0 overflow-hidden">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-white rounded-full"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        scale: [0, 1, 0],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.4,
                      }}
                    />
                  ))}
                </div>
                
                {/* Enhanced Icon with multi-layer animation */}
                <motion.div 
                  className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${achievement.color} flex items-center justify-center mb-6 mx-auto relative z-10 shadow-2xl animate-gradient bg-300%`}
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  animate={{
                    boxShadow: [
                      '0 0 20px rgba(234, 179, 8, 0.3)',
                      '0 0 40px rgba(234, 179, 8, 0.6)',
                      '0 0 20px rgba(234, 179, 8, 0.3)',
                    ],
                  }}
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <achievement.icon className="text-5xl text-white drop-shadow-2xl" />
                  </motion.div>
                  {/* Rotating ring */}
                  <motion.div
                    className="absolute inset-0 border-4 border-white/30 rounded-2xl"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  />
                </motion.div>

                {/* Enhanced Content */}
                <h3 className="text-2xl font-bold text-white text-center mb-3 relative z-10 group-hover:scale-105 transition-transform">
                  {achievement.title}
                </h3>
                <div className="text-center mb-4 relative z-10">
                  <p className={`bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent font-bold text-lg animate-gradient bg-300%`}>
                    {achievement.organization}
                  </p>
                  <p className="text-gray-400 text-sm mt-1 font-medium">{achievement.event}</p>
                  <motion.p 
                    className="text-gray-500 text-sm font-semibold mt-1"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    📅 {achievement.date}
                  </motion.p>
                </div>
                <p className="text-gray-300 text-sm text-center leading-relaxed relative z-10 group-hover:text-white transition-colors">
                  {achievement.description}
                </p>
                
                {/* Corner accent */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${achievement.color} opacity-20 rounded-bl-full blur-xl group-hover:opacity-40 transition-opacity`}></div>
              </motion.div>
            ))}
          </div>

          {/* Award Photos Section with your actual images */}
          <motion.div
            variants={itemVariants}
            className="mt-16"
          >
            <div className="glass-strong p-10 rounded-3xl border-2 border-yellow-500/30 hover:border-yellow-500/60 shadow-2xl shadow-yellow-500/20 hover:shadow-yellow-500/40 transition-all duration-500 relative overflow-hidden group">
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="text-center mb-10 relative z-10">
                <motion.div
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                  className="inline-block"
                >
                  <FaTrophy className="text-7xl text-yellow-400 mb-4 drop-shadow-2xl" />
                </motion.div>
                <h3 className="text-4xl font-bold text-white mb-3">
                  Rising Talent Award 2025
                </h3>
                <p className="text-xl text-yellow-400 font-semibold mb-2">Annual Growth Meet | Kevit.io</p>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  Honored to receive the Rising Talent Award for exceptional performance, innovation, and dedication during my journey at Kevit.io. 
                  This recognition motivates me to continue delivering excellence.
                </p>
              </div>

              {/* Photo Gallery with actual images */}
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { src: '/images/IMG_9676.JPG', alt: 'Award Ceremony Moment 1' },
                  { src: '/images/IMG_9691.JPG', alt: 'Award Ceremony Moment 2' },
                  { src: '/images/IMG_9707.JPG', alt: 'Award Ceremony Moment 3' },
                ].map((photo, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: index * 0.2 }}
                    whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
                    className="relative group overflow-hidden rounded-2xl shadow-2xl"
                  >
                    <div className="relative h-80 bg-gradient-to-br from-yellow-400/20 to-orange-500/20">
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/400x500/667eea/ffffff?text=Award+Photo';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <p className="font-semibold text-center">{photo.alt}</p>
                      </div>
                    </div>
                    
                    {/* Award badge overlay */}
                    <div className="absolute top-4 right-4 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <FaMedal className="text-yellow-900 text-2xl" />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Additional info */}
              <div className="mt-10 text-center">
                <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-full">
                  <FaStar className="text-yellow-400 animate-pulse" />
                  <span className="text-gray-300 font-medium">January 2025 | Kevit.io Annual Growth Meet</span>
                  <FaStar className="text-yellow-400 animate-pulse" />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
