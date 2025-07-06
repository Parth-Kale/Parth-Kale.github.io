'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

// Import images from src/img directory
import ChatApp1 from '@/img/ChatApp1.png'
import portfolio1 from '@/img/portfolio1.png'
import budget1 from '@/img/budget1.png'
import Game1 from '@/img/Game1.jpeg'

const projects = [
  {
    id: 1,
    title: 'Chat App',
    description: 'A modern P2P Chat App built using Typescript and Electron library, capable of sending messages, photos and other file types in real time',
    image: ChatApp1,
    technologies: ['TypeScript', 'Node.js', 'Electron', 'SQLite'],
    featured: true,
    githubLink: 'https://github.com/Parth-Kale/AChatApp',
    demoLink: '#'
  },
  {
    id: 2,
    title: 'Creative Portfolio',
    description: 'A stunning portfolio template with smooth animations and interactive elements for creative professionals.',
    image: portfolio1,
    technologies: ['JavaScript', 'HTML', 'CSS'],
    featured: false,
    githubLink: 'https://github.com/Parth-Kale/Parth-Kale.github.io',
    demoLink: '#'
  },
  {
    id: 3,
    title: 'Budget Management System',
    description: 'Multiplatform app to Track Spendings and Income (Currently Work in Progress)',
    image: budget1,
    technologies: ['React', 'TypeScript', 'Vite'],
    featured: false,
    githubLink: '#',
    demoLink: '#'
  },
  {
    id: 4,
    title: '[Redacted]',
    description: 'A work in progress 2D platformer being made in Unity.',
    image: Game1,
    technologies: ['C#', 'Unity', 'GIMP'],
    featured: true,
    githubLink: '#',
    demoLink: '#'
  }
]

export default function ProjectsSection() {
  return (
    <section className="py-20 px-4 bg-background-secondary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 w-40 h-40 border border-primary rounded-full"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 border border-secondary rounded-full"></div>
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
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            A showcase of my recent work, demonstrating my skills in web development and design.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className={`relative group overflow-hidden rounded-xl ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
            >
              {/* Project Card */}
              <div className="glass-effect p-6 h-full card-hover">
                {/* Project Image */}
                <div className="relative h-48 mb-6 overflow-hidden rounded-lg">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Overlay with Links */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-4">
                      <motion.a
                        href={project.demoLink}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-primary hover:bg-primary-light text-white px-4 py-2 rounded-full transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Project
                      </motion.a>
                      <motion.a
                        href={project.githubLink}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-secondary hover:bg-secondary/80 text-background-primary px-4 py-2 rounded-full transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Source Code
                      </motion.a>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">
                    {project.title}
                  </h3>
                  <p className="text-text-secondary mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <motion.span
                        key={tech}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full border border-primary/30 hover:bg-primary/30 transition-colors"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5 }}
                      className="inline-block bg-gradient-to-r from-accent to-secondary text-white px-3 py-1 rounded-full text-sm font-medium"
                    >
                      Featured Project
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-primary to-primary-light hover:from-primary-light hover:to-primary text-white px-8 py-4 rounded-full transition-all duration-300 font-semibold text-lg glow-hover"
          >
            Additional Experience
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}