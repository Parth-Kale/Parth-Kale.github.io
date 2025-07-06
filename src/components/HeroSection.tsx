'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import EnhancedFloatingBackground from './EnhancedFloatingBackground'
import GradientMeshBackground from './GradientMeshBackground'
import ParticleBackground from './ParticleBackground'

const typewriterTexts = [
  'a Full-Stack Developer',
  'a React & Next.js Specialist',
  'an AI Enthusiast',
  'a Robotician',
  'a Designer',
  'a Game Developer',
  'a Creative Problem Solver',
  'Passionate About Clean Code',
  'Capturing Moments Through Lens'
]

export default function HeroSection() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100 // Faster when deleting
    const pauseTime = 2000 // Pause at the end of each text
    const deleteSpeed = 50

    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false)
        setIsDeleting(true)
      }, pauseTime)
      return () => clearTimeout(pauseTimer)
    }

    if (isDeleting) {
      if (currentText === '') {
        setIsDeleting(false)
        setCurrentTextIndex((prev) => (prev + 1) % typewriterTexts.length)
        return
      }
      
      const deleteTimer = setTimeout(() => {
        setCurrentText(currentText.slice(0, -1))
      }, deleteSpeed)
      return () => clearTimeout(deleteTimer)
    }

    const currentFullText = typewriterTexts[currentTextIndex]
    
    if (currentText === currentFullText) {
      setIsPaused(true)
      return
    }

    const typeTimer = setTimeout(() => {
      setCurrentText(currentFullText.slice(0, currentText.length + 1))
    }, typeSpeed)
    
    return () => clearTimeout(typeTimer)
  }, [currentText, currentTextIndex, isDeleting, isPaused])

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Enhanced Background Animation */}
      {/* <EnhancedFloatingBackground /> */}
      <GradientMeshBackground />
      {/* <ParticleBackground /> */}

      <div className="text-center max-w-5xl mx-auto px-4 relative z-10">
        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <span className="text-lg md:text-xl text-secondary font-medium">Hello, I'm</span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
        >
          <span className="gradient-text">Parth Kale</span>
        </motion.h1>

        {/* Enhanced Typewriter Effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-8"
        >
          <div className="flex items-center justify-center">
            <h2 className="text-xl md:text-2xl lg:text-3xl text-text-secondary font-medium text-center">
              <span className="mr-2">I'm</span>
              <span className="inline-block text-center">
                {currentText}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="inline-block w-0.5 h-8 bg-primary ml-1"
                />
              </span>
            </h2>
          </div>
          
          {/* Progress Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex justify-center mt-4 gap-1"
          >
            {typewriterTexts.map((_, index) => (
              <motion.div
                key={index}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  index === currentTextIndex ? 'bg-primary' : 'bg-text-muted/30'
                }`}
                animate={index === currentTextIndex ? { scale: [1, 1.2, 1] } : {}}
                transition={{ duration: 0.5, repeat: Infinity }}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-text-muted mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          I create modern web applications and capture beautiful moments through photography. 
          Passionate about clean code, user experience, and creative expression.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-primary to-primary-light hover:from-primary-light hover:to-primary text-white px-8 py-4 rounded-full transition-all duration-300 font-semibold text-lg glow-hover"
          >
            View My Work
          </motion.a>

          <motion.a 
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-background-primary px-8 py-4 rounded-full transition-all duration-300 font-semibold text-lg"
          >
            Get In Touch
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom--3 left-1/2 transform -translate-x-1/3"
        >
          <div className="flex flex-col items-center text-text-muted">
            <span className="text-sm mb-2">Scroll Down</span>
            <div className="w-6 h-10 border-2 border-text-muted rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-text-muted rounded-full mt-2"
              ></motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Code Snippet */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute top-20 right-10 hidden lg:block"
      >
        <div className="glass-effect p-4 rounded-lg max-w-xs lg:max-w-sm xl:max-w-md">
          <div className="flex gap-2 mb-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <pre className="text-xs lg:text-xs xl:text-sm text-text-secondary whitespace-pre-wrap">
{`const developer = {
  name: "Parth Kale",
  skills: ["React", "C++", "Python"],
  passion: ["Photography", "Robotics", "Game Dev"]
};`}
          </pre>
        </div>
      </motion.div>
    </section>
  )
} 