'use client'

import { motion } from 'framer-motion'

const skills = [
  {
    category: 'Embedded Systems & IoT',
    description: 'ESP32-based systems, sensor integration, wireless communication',
    technologies: ['ESP32', 'C++', 'IoT', 'Wi-Fi Alerts'],
    progress: 90
  },
  {
    category: 'FPGA Design & Digital Logic',
    description: 'VHDL programming, FSMs, simulation and synthesis',
    technologies: ['VHDL', 'Vivado', 'Nexys A7', 'Digital Logic'],
    progress: 85
  },
  {
    category: 'Full-Stack Development',
    description: 'TypeScript, Python, React, REST APIs',
    technologies: ['TypeScript', 'Python', 'React', 'REST APIs'],
    progress: 80
  },
  {
    category: 'AI & Computer Vision',
    description: 'OpenCV, MediaPipe, TensorFlow, real-time gesture recognition',
    technologies: ['OpenCV', 'MediaPipe', 'TensorFlow', 'Real-Time AI'],
    progress: 75
  },
  {
    category: 'Game Development',
    description: 'Unity 2D/3D, C#, physics, pathfinding',
    technologies: ['Unity', 'C#', 'Blender', 'Game Loops'],
    progress: 70
  },
  {
    category: 'Tools & Frameworks',
    description: 'Version control, simulation, design tools',
    technologies: ['Git', 'Docker', 'MATLAB', 'AutoCAD'],
    progress: 80
  }
]

export default function SkillsSection() {
  return (
    <section className="py-20 px-4 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-primary rounded-full"></div>
        <div className="absolute top-20 right-20 w-24 h-24 border border-secondary rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 border border-accent rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Technologies and tools I work with across multiple domains of development and engineering.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="glass-effect p-8 rounded-xl card-hover"
            >
              <div className="skill-icon mb-4 text-accent">
                {skill.category.includes('Embedded') && (
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
                    <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                )}
                {skill.category.includes('FPGA') && (
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
                    <path d="M12 2L2 12L12 22L22 12L12 2Z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                )}
                {skill.category.includes('Full-Stack') && (
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
                    <path d="M4 4H20V20H4V4Z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                )}
                {skill.category.includes('AI') && (
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
                    <path d="M3 12L12 3L21 12L12 21L3 12Z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                )}
                {skill.category.includes('Game') && (
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                )}
                {skill.category.includes('Tools') && (
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
                    <path d="M12 6V12L15 15" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                )}
              </div>
              
              <h3 className="text-xl font-semibold mb-4 text-primary">
                {skill.category}
              </h3>
              <p className="text-text-secondary mb-6 leading-relaxed">
                {skill.description}
              </p>
              
              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-text-secondary">Proficiency</span>
                  <span className="text-primary font-medium">{skill.progress}%</span>
                </div>
                <div className="w-full bg-background-tertiary rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.progress}%` }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-primary to-primary-light h-2 rounded-full"
                  ></motion.div>
                </div>
              </div>

              {/* Technology Tags */}
              <div className="flex flex-wrap gap-2">
                {skill.technologies.map((tech) => (
                  <motion.span
                    key={tech}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full border border-primary/30 hover:bg-primary/30 transition-colors"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            Additional <span className="gradient-text">Skills</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'Python', 'C++', 'C#', 'ROS', 
              'Linux', 'PCB Design', '3D Modeling', 'Robotics'
            ].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-background-card border border-secondary/20 rounded-lg p-4 text-center hover:border-secondary/40 transition-colors"
              >
                <span className="text-text-secondary font-medium">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}