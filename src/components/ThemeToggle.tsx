'use client'

import { motion } from 'framer-motion'
import { Palette } from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className="fixed bottom-7 left-4 z-50 w-12 h-12 bg-background-glass backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center hover:border-primary/50 transition-all duration-300 shadow-lg"
      title={`Switch to ${theme === 'green' ? 'Light' : 'Green'} theme`}
    >
      <motion.div
        animate={{ rotate: theme === 'light' ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <Palette className="w-5 h-5 text-primary" />
      </motion.div>
      
      {/* Theme indicator */}
      <motion.div
        initial={false}
        animate={{
          backgroundColor: theme === 'green' ? '#2d5016' : '#e74c3c'
        }}
        transition={{ duration: 0.3 }}
        className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-background-primary"
      />
    </motion.button>
  )
} 