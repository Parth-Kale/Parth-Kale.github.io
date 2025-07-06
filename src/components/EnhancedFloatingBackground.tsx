'use client'

import { motion } from 'framer-motion'

export default function EnhancedFloatingBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: -1 }}>
      {/* Large background elements */}
      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-10 left-10 w-40 h-40 bg-primary/5 rounded-full blur-2xl"
      />

      <motion.div
        animate={{
          x: [0, -25, 0],
          y: [0, 15, 0],
          rotate: [0, -3, 0]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5
        }}
        className="absolute top-20 right-20 w-32 h-32 bg-secondary/5 rounded-full blur-2xl"
      />

      {/* Medium elements */}
      <motion.div
        animate={{
          x: [0, 20, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-40 left-20 w-24 h-24 bg-accent/5 rounded-full blur-xl"
      />

      <motion.div
        animate={{
          x: [0, -15, 0],
          y: [0, 25, 0],
          scale: [1, 0.9, 1]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 8
        }}
        className="absolute bottom-20 right-10 w-20 h-20 bg-primary/5 rounded-full blur-xl"
      />

      {/* Small accent elements */}
      <motion.div
        animate={{
          x: [0, 10, 0],
          y: [0, -10, 0],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute top-1/3 left-1/3 w-16 h-16 bg-secondary/5 rounded-full blur-lg"
      />

      <motion.div
        animate={{
          x: [0, -8, 0],
          y: [0, 12, 0],
          opacity: [0.4, 0.7, 0.4]
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 6
        }}
        className="absolute top-2/3 right-1/3 w-12 h-12 bg-accent/5 rounded-full blur-lg"
      />

      {/* Geometric shapes for variety */}
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-1/4 right-1/4 w-8 h-8 bg-primary/10 rounded-sm blur-md"
      />

      <motion.div
        animate={{
          rotate: [360, 0],
          scale: [1, 0.8, 1]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
          delay: 10
        }}
        className="absolute bottom-1/4 left-1/3 w-6 h-6 bg-secondary/10 rounded-sm blur-md"
      />

      {/* Subtle grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(45, 80, 22, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(45, 80, 22, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />
    </div>
  )
} 