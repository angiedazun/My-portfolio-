import { motion } from 'framer-motion';
import { Award, Briefcase, GraduationCap, Code2 } from 'lucide-react';
import { personalInfo, skills, experience, education, certifications } from '../data/constants';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen pt-18">
      {/* Hero Section */}
      <section className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-center">
            About <span className="gradient-text">Me</span>
          </h1>
          
          <div className="card mb-8">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              {personalInfo.bio}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 pt-8 border-t border-white/10">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-primary-400 mb-3">Professional Summary</h3>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">▸</span>
                    <span>Completed BTEC HND in Computing (Software Engineering) with Overall Merit</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">▸</span>
                    <span>Currently pursuing Bachelor of Engineering (Hons) - London Metropolitan University</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">▸</span>
                    <span>6 months professional experience at Sri Lanka Ports Authority</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">▸</span>
                    <span>Strong foundation in full-stack web development</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-primary-400 mb-3">Core Competencies</h3>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">▸</span>
                    <span>Full-Stack Web Development (PHP, JavaScript, MySQL)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">▸</span>
                    <span>RESTful API Design & Implementation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">▸</span>
                    <span>Database Design & Management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">▸</span>
                    <span>Responsive UI/UX Development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">▸</span>
                    <span>Version Control & Collaboration (Git/GitHub)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="section-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            My <span className="gradient-text">Skills</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Frontend Skills */}
            <motion.div variants={itemVariants} className="card space-y-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500">
                  <Code2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Frontend</h3>
              </div>
              {skills.frontend.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-primary-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-dark-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Backend Skills */}
            <motion.div variants={itemVariants} className="card space-y-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500">
                  <Code2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Backend</h3>
              </div>
              {skills.backend.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-primary-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-dark-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Tools & Technologies */}
            <motion.div variants={itemVariants} className="card space-y-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500">
                  <Code2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Tools</h3>
              </div>
              {skills.tools.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-primary-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-dark-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Work <span className="gradient-text">Experience</span>
          </h2>

          <div className="max-w-4xl mx-auto space-y-6">
            {experience.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-hover flex items-start space-x-4"
              >
                <div className="p-3 rounded-lg bg-gradient-to-r from-primary-500 to-primary-600 flex-shrink-0">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-semibold">{job.title}</h3>
                    <span className="text-sm text-primary-400">{job.period}</span>
                  </div>
                  <p className="text-gray-400 mb-2">{job.company}</p>
                  <p className="text-gray-500 text-sm">{job.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Education & Certifications */}
      <section className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-8">
              <GraduationCap className="inline-block w-8 h-8 mr-2 text-primary-400" />
              Education
            </h2>
            {education.map((edu, index) => (
              <div key={index} className="card space-y-3">
                <h3 className="text-xl font-semibold">{edu.degree}</h3>
                <p className="text-primary-400">{edu.institution}</p>
                <p className="text-gray-400 text-sm">{edu.period}</p>
                <p className="text-gray-500 text-sm">{edu.description}</p>
              </div>
            ))}
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-8">
              <Award className="inline-block w-8 h-8 mr-2 text-primary-400" />
              Certifications
            </h2>
            <div className="card space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start space-x-3 p-4 glass rounded-lg hover:bg-white/10 transition-colors"
                >
                  <div className="p-2 rounded-lg bg-primary-500/20 flex-shrink-0">
                    <Award className="w-5 h-5 text-primary-400" />
                  </div>
                  <p className="text-gray-300">{cert}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
