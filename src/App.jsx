import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
      {/* Global Animated Background - Same as Hero Section */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Main animated blobs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob morph"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000 morph"></div>
        <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000 morph"></div>
        <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-3000"></div>
        <div className="absolute bottom-40 right-1/4 w-80 h-80 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-2000"></div>
        
        {/* Additional aurora effects */}
        <div className="absolute top-0 left-1/2 w-full h-full bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-3xl aurora"></div>
        
        {/* Enhanced Floating particles with varied colors */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(40)].map((_, i) => {
            const colors = ['bg-blue-400', 'bg-purple-400', 'bg-pink-400', 'bg-cyan-400', 'bg-emerald-400'];
            const sizes = ['w-1 h-1', 'w-2 h-2', 'w-3 h-3'];
            return (
              <motion.div
                key={i}
                className={`absolute ${colors[i % colors.length]} ${sizes[i % sizes.length]} rounded-full`}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  filter: 'blur(1px)',
                }}
                animate={{
                  y: [0, -40, 0],
                  x: [0, Math.random() * 20 - 10, 0],
                  opacity: [0.2, 0.8, 0.2],
                  scale: [1, 1.8, 1],
                }}
                transition={{
                  duration: 4 + Math.random() * 3,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeInOut",
                }}
              />
            );
          })}
        </div>

        {/* Animated light rays */}
        <div className="absolute inset-0">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`ray-${i}`}
              className="absolute h-full w-1 bg-gradient-to-b from-transparent via-blue-400/20 to-transparent"
              style={{
                left: `${20 * i + 10}%`,
              }}
              animate={{
                opacity: [0, 0.5, 0],
                scaleY: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Enhanced Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]"></div>
      </div>

      {/* Content with relative positioning */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;


