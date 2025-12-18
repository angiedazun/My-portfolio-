import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Github, Linkedin } from 'lucide-react';
import { personalInfo } from '../data/constants.js';

const Home = () => {
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
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const socialLinks = [
    { icon: Github, url: personalInfo.social.github, label: 'GitHub' },
    { icon: Linkedin, url: personalInfo.social.linkedin, label: 'LinkedIn' },
  ];

  return (
    <div className="min-h-screen pt-18">
      {/* Hero Section */}
      <section className="section-container min-h-[calc(100vh-5rem)] flex items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <motion.div variants={itemVariants} className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="inline-block"
                >
                  <span className="px-4 py-2 glass rounded-full text-sm font-medium text-primary-400">
                    👋 Welcome to my portfolio
                  </span>
                </motion.div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  Hi, I'm{' '}
                  <span className="gradient-text">
                    {personalInfo.name}
                  </span>
                </h1>

                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-300">
                  {personalInfo.title}
                </h2>

                <p className="text-lg text-gray-400 leading-relaxed max-w-xl">
                  {personalInfo.tagline}
                </p>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-4"
              >
                <Link to="/projects" className="btn-primary group">
                  View My Work
                  <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href={personalInfo.resume}
                  download
                  className="btn-secondary group"
                >
                  <Download className="inline-block mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                  Download CV
                </a>
              </motion.div>

              {/* Social Links */}
              <motion.div
                variants={itemVariants}
                className="flex items-center space-x-4"
              >
                <span className="text-gray-400">Connect with me:</span>
                {socialLinks.map(({ icon: Icon, url, label }) => (
                  <a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 glass rounded-lg hover:bg-white/10 transition-all duration-300 group hover:scale-110"
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5 text-gray-400 group-hover:text-primary-400 transition-colors" />
                  </a>
                ))}
              </motion.div>
            </div>

            {/* Right Content - Animated Hero Image */}
            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <div className="relative z-10">
                {/* Animated Gradient Orbs */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  className="absolute top-1/4 -left-12 w-72 h-72 bg-gradient-to-r from-primary-500/30 to-purple-500/30 rounded-full blur-3xl"
                />
                <motion.div
                  animate={{
                    scale: [1.2, 1, 1.2],
                    rotate: [360, 180, 0],
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  className="absolute bottom-1/4 -right-12 w-72 h-72 bg-gradient-to-r from-pink-500/30 to-orange-500/30 rounded-full blur-3xl"
                />

                {/* Code Window Mockup */}
                <div className="relative glass-strong rounded-2xl p-6 overflow-hidden">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="space-y-3 font-mono text-sm">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="overflow-hidden"
                    >
                      <span className="text-purple-400">const</span>
                      <span className="text-blue-400"> developer</span>
                      <span className="text-white"> = {'{'}</span>
                    </motion.div>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 1, delay: 0.7 }}
                      className="overflow-hidden pl-4"
                    >
                      <span className="text-blue-400">name</span>
                      <span className="text-white">: </span>
                      <span className="text-green-400">'{personalInfo.name}'</span>
                      <span className="text-white">,</span>
                    </motion.div>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 1, delay: 0.9 }}
                      className="overflow-hidden pl-4"
                    >
                      <span className="text-blue-400">skills</span>
                      <span className="text-white">: [</span>
                      <span className="text-green-400">'React', 'Node.js', 'MongoDB'</span>
                      <span className="text-white">],</span>
                    </motion.div>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 1, delay: 1.1 }}
                      className="overflow-hidden pl-4"
                    >
                      <span className="text-blue-400">hireable</span>
                      <span className="text-white">: </span>
                      <span className="text-orange-400">true</span>
                    </motion.div>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 1, delay: 1.3 }}
                      className="overflow-hidden"
                    >
                      <span className="text-white">{'}'};</span>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Quick Stats Section */}
      <section className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: '3+', label: 'Projects Completed' },
            { value: '6+', label: 'Months Experience' },
            { value: '2+', label: 'Happy Clients' },
            { value: '100%', label: 'Dedication' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card text-center"
            >
              <h3 className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.value}
              </h3>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-strong rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-purple-500/10"></div>
          <div className="relative z-10 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Let's Build Something <span className="gradient-text">Amazing</span> Together
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              I'm always interested in hearing about new projects and opportunities.
            </p>
            <Link to="/contact" className="btn-primary inline-flex items-center">
              Get In Touch
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
