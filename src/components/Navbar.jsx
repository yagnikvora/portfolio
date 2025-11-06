import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Experience', to: 'experience' },
    { name: 'Projects', to: 'projects' },
    { name: 'Achievements', to: 'achievements' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-2xl shadow-blue-500/10 border-b border-blue-500/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative"
          >
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/50">
                  <span className="text-white font-black text-xl">YV</span>
                </div>
                <span className="text-2xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent hidden sm:block">
                  Yagnik Vora
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="cursor-pointer px-4 py-2 text-gray-300 hover:text-white transition-colors duration-300 relative group font-medium"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-300 rounded-full"></span>
              </Link>
            ))}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-4 px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-medium shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/50 transition-all duration-300"
            >
              Hire Me
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 text-white focus:outline-none shadow-lg shadow-blue-500/30 flex items-center justify-center"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        className="md:hidden overflow-hidden bg-slate-900/98 backdrop-blur-md border-t border-blue-500/20"
      >
        <div className="px-4 pt-4 pb-6 space-y-2">
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ x: -50, opacity: 0 }}
              animate={isOpen ? { x: 0, opacity: 1 } : {}}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={item.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => setIsOpen(false)}
                className="block px-5 py-3 text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10 rounded-xl cursor-pointer transition-all duration-300 font-medium border border-transparent hover:border-blue-500/30"
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
          <motion.a
            href="#contact"
            initial={{ x: -50, opacity: 0 }}
            animate={isOpen ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: navItems.length * 0.1 }}
            className="block px-5 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center rounded-xl font-semibold shadow-lg shadow-purple-500/30 mt-4"
          >
            Hire Me
          </motion.a>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
