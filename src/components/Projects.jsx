import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with user authentication, product management, shopping cart, and payment integration.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux'],
      github: '#',
      live: '#',
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, team collaboration features, and progress tracking.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800',
      technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Socket.io'],
      github: '#',
      live: '#',
    },
    {
      title: 'Social Media Dashboard',
      description: 'An analytics dashboard for social media management with data visualization, post scheduling, and engagement tracking.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
      technologies: ['React', 'Express', 'MongoDB', 'Chart.js', 'Tailwind'],
      github: '#',
      live: '#',
    },
    {
      title: 'AI Chatbot Interface',
      description: 'An intelligent chatbot interface with natural language processing, context awareness, and multi-language support.',
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800',
      technologies: ['React', 'Python', 'OpenAI API', 'Flask', 'Redis'],
      github: '#',
      live: '#',
    },
    {
      title: 'Weather Forecast App',
      description: 'A beautiful weather application with real-time data, 7-day forecasts, and location-based weather alerts.',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800',
      technologies: ['React', 'OpenWeather API', 'Tailwind CSS', 'Geolocation'],
      github: '#',
      live: '#',
    },
    {
      title: 'Portfolio CMS',
      description: 'A content management system for portfolio websites with drag-and-drop editor and real-time preview.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800',
      technologies: ['Next.js', 'Strapi', 'PostgreSQL', 'AWS S3'],
      github: '#',
      live: '#',
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
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="py-20">
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
            Featured <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">Projects</span>
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-center text-gray-400 text-lg mb-4">
            Some of my recent work
          </motion.p>
          
          <motion.div variants={itemVariants} className="w-24 h-1.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 mx-auto mb-16 rounded-full"></motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -15, scale: 1.02 }}
                className="glass rounded-3xl overflow-hidden group border-2 border-blue-500/20 hover:border-blue-500/50 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-blue-500/30"
              >
                {/* Project Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-125 group-hover:rotate-2 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
                  
                  {/* Overlay buttons */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="px-6 py-3 bg-slate-900/90 backdrop-blur-sm text-white rounded-full font-medium flex items-center gap-2 border border-gray-700 hover:border-blue-400 transition-colors"
                    >
                      <FaGithub /> Code
                    </motion.a>
                    <motion.a
                      href={project.live}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-medium flex items-center gap-2 shadow-lg"
                    >
                      <FaExternalLinkAlt /> Live
                    </motion.a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 bg-blue-500/10 text-blue-400 rounded-full text-xs font-medium border border-blue-500/30 hover:bg-blue-500/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 pt-4 border-t border-gray-700">
                    <a
                      href={project.github}
                      className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-medium"
                    >
                      <FaGithub className="text-lg" /> View Code
                    </a>
                    <a
                      href={project.live}
                      className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors text-sm font-medium"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  </div>
                </div>

                {/* Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                  Featured
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
