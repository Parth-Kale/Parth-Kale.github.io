'use client'

import { motion } from 'framer-motion'

export default function GradientMeshBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: -1 }}>
      {/* Primary gradient mesh */}
      <motion.div
        animate={{
          background: [
            'radial-gradient(circle at 20% 80%, rgba(45, 80, 22, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 20%, rgba(45, 80, 22, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 40% 40%, rgba(45, 80, 22, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 80%, rgba(45, 80, 22, 0.1) 0%, transparent 50%)'
          ]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0"
      />

      {/* Secondary accent gradients */}
      <motion.div
        animate={{
          background: [
            'radial-gradient(circle at 60% 30%, rgba(212, 165, 116, 0.05) 0%, transparent 40%)',
            'radial-gradient(circle at 30% 70%, rgba(212, 165, 116, 0.05) 0%, transparent 40%)',
            'radial-gradient(circle at 70% 60%, rgba(212, 165, 116, 0.05) 0%, transparent 40%)',
            'radial-gradient(circle at 60% 30%, rgba(212, 165, 116, 0.05) 0%, transparent 40%)'
          ]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5
        }}
        className="absolute inset-0"
      />

      {/* Subtle moving orbs */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0]
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/20 rounded-full blur-xl"
      />

      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0]
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 10
        }}
        className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-secondary/20 rounded-full blur-xl"
      />

      <motion.div
        animate={{
          x: [0, 60, 0],
          y: [0, -40, 0]
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 15
        }}
        className="absolute top-1/2 left-1/2 w-20 h-20 bg-accent/20 rounded-full blur-xl"
      />
    </div>
  )
} 