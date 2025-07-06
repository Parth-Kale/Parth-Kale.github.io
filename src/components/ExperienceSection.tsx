'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, ExternalLink } from 'lucide-react'

const experiences = [
  {
    id: 1,
    title: 'Freelance Developer',
    company: 'Self-Employed',
    location: 'Wroclaw, Poland',
    period: '2023 - Present',
    description: 'Building cross-platform applications using Electron, TypeScript, and modern web technologies. Specializing in P2P applications and creative solutions.',
    technologies: ['Electron', 'TypeScript', 'Node.js', 'React'],
    link: null,
    current: true
  },
  {
    id: 2,
    title: 'Game Developer',
    company: 'Independent',
    location: 'Remote',
    period: '2023 - Present',
    description: 'Developing 2D platformer games using Unity and C#. Learning game design principles and asset creation.',
    technologies: ['Unity', 'C#', 'GIMP', 'Game Design'],
    link: null,
    current: true
  },
  {
    id: 3,
    title: 'Web Developer',
    company: 'Personal Projects',
    location: 'Remote',
    period: '2022 - Present',
    description: 'Creating responsive web applications and portfolios using modern frameworks and best practices.',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    link: 'https://github.com/Parth-Kale',
    current: false
  }
]

export default function ExperienceSection() {
  return (
    <section className="py-20 px-4 bg-background-secondary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 w-40 h-40 border border-primary rounded-full"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 border border-secondary rounded-full"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            My journey in software development and creative projects.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background-secondary hidden md:block">
                  {experience.current && (
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 bg-primary rounded-full opacity-50"
                    />
                  )}
                </div>

                <div className="md:ml-16">
                  <div className="glass-effect p-6 rounded-xl card-hover">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-primary mb-1">
                          {experience.title}
                        </h3>
                        <p className="text-text-secondary font-medium">
                          {experience.company}
                        </p>
                      </div>
                      
                      {/* Current Badge */}
                      {experience.current && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.5 }}
                          className="inline-block bg-gradient-to-r from-accent to-secondary text-white px-3 py-1 rounded-full text-sm font-medium mt-2 md:mt-0"
                        >
                          Current
                        </motion.div>
                      )}
                    </div>

                    {/* Meta Info */}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-text-muted mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{experience.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{experience.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-text-secondary mb-4 leading-relaxed">
                      {experience.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {experience.technologies.map((tech) => (
                        <motion.span
                          key={tech}
                          whileHover={{ scale: 1.05 }}
                          className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full border border-primary/30 hover:bg-primary/30 transition-colors"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    {/* Link */}
                    {experience.link && (
                      <motion.a
                        href={experience.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 text-primary hover:text-primary-light transition-colors font-medium"
                      >
                        View Work
                        <ExternalLink className="w-4 h-4" />
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 