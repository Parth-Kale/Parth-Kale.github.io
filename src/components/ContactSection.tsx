'use client'

import { motion } from 'framer-motion'
import { Mail, MapPin, Github, Linkedin, Download , Instagram} from 'lucide-react'

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'parth.kale2005@gmail.com',
    subtitle: 'Available for freelance work',
    link: 'mailto:parth.kale2005@gmail.com'
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'Wroclaw, Poland',
    subtitle: 'Open to remote opportunities',
    link: null
  },
  {
    icon: Github,
    title: 'Social',
    value: 'GitHub, LinkedIn',
    subtitle: "Let's connect!",
    link: 'https://github.com/parth-kale'
  }
]

export default function ContactSection() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-1/4 w-32 h-32 border border-primary rounded-full"></div>
        <div className="absolute bottom-10 right-1/4 w-24 h-24 border border-secondary rounded-full"></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 border border-accent rounded-full"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology and photography.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="glass-effect p-6 rounded-xl card-hover"
            >
              <div className="flex flex-col items-center">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4"
                >
                  <info.icon className="w-6 h-6 text-primary" />
                </motion.div>
                
                <h3 className="text-xl font-semibold mb-2 text-primary">
                  {info.title}
                </h3>
                
                {info.link ? (
                  <a
                    href={info.link}
                    className="text-text-secondary hover:text-primary transition-colors mb-2"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-text-secondary mb-2">
                    {info.value}
                  </p>
                )}
                
                <p className="text-sm text-text-muted">
                  {info.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-primary to-primary-light hover:from-primary-light hover:to-primary text-white px-8 py-4 rounded-full transition-all duration-300 font-semibold text-lg glow-hover flex items-center gap-2"
          >
            <Mail className="w-5 h-5" />
            Send Message
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-background-primary px-8 py-4 rounded-full transition-all duration-300 font-semibold text-lg flex items-center gap-2"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </motion.button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <p className="text-text-muted mb-4">Follow me on social media</p>
          <div className="flex justify-center gap-6">
            {[
              { icon: Github, href: 'https://github.com/parth-kale', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/theparthkale377', label: 'LinkedIn' },
              { icon: Instagram, href: 'https://www.instagram.com/parthkalethedude', label: 'Instagram' }
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-background-card border border-secondary/20 rounded-full flex items-center justify-center hover:border-secondary/40 hover:bg-secondary/10 transition-all duration-300"
              >
                <social.icon className="w-6 h-6 text-secondary" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 