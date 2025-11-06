import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaPaperPlane, FaCheckCircle, FaTimes } from 'react-icons/fa';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
    
    // Show custom success modal
    setShowSuccess(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  };

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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'your.email@example.com',
      link: 'mailto:your.email@example.com',
    },
    {
      icon: FaPhone,
      title: 'Phone',
      value: '+91 XXXXX XXXXX',
      link: 'tel:+91XXXXXXXXXX',
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      value: 'India',
      link: '#',
    },
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
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
            Get In <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient bg-300%">Touch</span>
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-center text-gray-400 text-lg mb-4">
            Let's create something amazing together
          </motion.p>
          
          <motion.div 
            variants={itemVariants} 
            className="w-24 h-1.5 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mx-auto mb-16 rounded-full pulse-glow"
          ></motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Enhanced Contact Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="glass-strong p-6 rounded-2xl border-2 border-blue-500/20">
                <h3 className="text-3xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Let's Connect</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  I'm always interested in hearing about new projects and opportunities. 
                  Whether you have a question or just want to say hi, feel free to reach out!
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    whileHover={{ scale: 1.03, x: 10 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-4 glass-strong p-5 rounded-2xl hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 group border-2 border-transparent hover:border-blue-500/30"
                  >
                    <motion.div 
                      className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 via-purple-600 to-pink-600 flex items-center justify-center shadow-lg animate-gradient bg-300%"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <info.icon className="text-white text-xl" />
                    </motion.div>
                    <div>
                      <p className="text-gray-400 text-sm font-medium">{info.title}</p>
                      <p className="text-white font-semibold text-lg group-hover:text-blue-400 transition-colors">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="flex gap-4">
                {[
                  { icon: FaLinkedin, href: "https://linkedin.com/in/yourusername", gradient: "from-blue-500 to-blue-700" },
                  { icon: FaGithub, href: "https://github.com/yourusername", gradient: "from-gray-600 to-gray-900" },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${social.gradient} flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300`}
                  >
                    <social.icon className="text-white text-xl" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Enhanced Contact Form */}
            <motion.div variants={itemVariants}>
              <form onSubmit={handleSubmit} className="glass-strong p-8 rounded-3xl space-y-6 border-2 border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 relative overflow-hidden group">
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <label htmlFor="name" className="block text-sm font-semibold text-blue-400 mb-2">
                    Your Name
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3 bg-slate-800/50 border-2 border-gray-700 rounded-xl focus:outline-none focus:border-blue-500 focus:shadow-lg focus:shadow-blue-500/20 text-white transition-all duration-300 placeholder-gray-500"
                    placeholder="John Doe"
                  />
                </div>

                <div className="relative z-10">
                  <label htmlFor="email" className="block text-sm font-semibold text-blue-400 mb-2">
                    Your Email
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3 bg-slate-800/50 border-2 border-gray-700 rounded-xl focus:outline-none focus:border-blue-500 focus:shadow-lg focus:shadow-blue-500/20 text-white transition-all duration-300 placeholder-gray-500"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="relative z-10">
                  <label htmlFor="subject" className="block text-sm font-semibold text-blue-400 mb-2">
                    Subject
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3 bg-slate-800/50 border-2 border-gray-700 rounded-xl focus:outline-none focus:border-blue-500 focus:shadow-lg focus:shadow-blue-500/20 text-white transition-all duration-300 placeholder-gray-500"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div className="relative z-10">
                  <label htmlFor="message" className="block text-sm font-semibold text-blue-400 mb-2">
                    Message
                  </label>
                  <motion.textarea
                    whileFocus={{ scale: 1.01 }}
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-5 py-3 bg-slate-800/50 border-2 border-gray-700 rounded-xl focus:outline-none focus:border-blue-500 focus:shadow-lg focus:shadow-blue-500/20 text-white transition-all duration-300 resize-none placeholder-gray-500"
                    placeholder="Your message here..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="relative w-full px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 text-white rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 overflow-hidden group/btn animate-gradient bg-300%"
                  animate={{
                    boxShadow: [
                      '0 10px 40px rgba(139, 92, 246, 0.3)',
                      '0 15px 60px rgba(236, 72, 153, 0.5)',
                      '0 10px 40px rgba(59, 130, 246, 0.3)',
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  {/* Shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{
                      x: ['-200%', '200%'],
                    }}
                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                  />
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <FaPaperPlane className="relative z-10" />
                  </motion.div>
                  <span className="relative z-10">Send Message</span>
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Custom Success Modal */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
            onClick={() => setShowSuccess(false)}
          >
            {/* Backdrop with blur */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
            
            {/* Success Card */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative glass-strong border-2 border-green-500/30 rounded-3xl p-8 max-w-md w-full shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setShowSuccess(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              >
                <FaTimes size={20} />
              </button>

              {/* Animated success icon */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/50"
              >
                <FaCheckCircle className="text-4xl text-white" />
              </motion.div>

              {/* Success message */}
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-3xl font-bold text-center mb-4 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent"
              >
                Message Sent!
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-gray-300 text-center mb-6 leading-relaxed"
              >
                Thank you for reaching out! I'll get back to you as soon as possible.
              </motion.p>

              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-green-500/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl"></div>

              {/* Auto-close indicator */}
              <div className="absolute bottom-0 left-0 right-0 h-1 overflow-hidden rounded-b-3xl">
                <motion.div
                  initial={{ width: "100%" }}
                  animate={{ width: "0%" }}
                  transition={{ duration: 5, ease: "linear" }}
                  className="h-full bg-gradient-to-r from-green-400 to-emerald-500"
                ></motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;
