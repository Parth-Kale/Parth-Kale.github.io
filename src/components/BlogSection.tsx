'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Calendar, Clock } from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    title: 'Unity Game Development: From Concept to Reality',
    excerpt: 'My journey in creating 2D platformer games and the challenges of indie game development.',
    readTime: '10 min read',
    date: '2025-01-05',
    tags: ['Unity', 'Game Dev', 'C#'],
    link: 'https://medium.com/@parth.kale2005',
    featured: true
  }
]

export default function BlogSection() {
  return (
    <section className="py-20 px-4 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-primary rounded-full"></div>
        <div className="absolute top-20 right-20 w-24 h-24 border border-secondary rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 border border-accent rounded-full"></div>
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
            Latest <span className="gradient-text">Article</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Sharing my thoughts on technology, development, and creative projects.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="relative group overflow-hidden rounded-xl"
            >
              <div className="glass-effect p-8 card-hover">
                {/* Featured Badge */}
                {post.featured && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 }}
                    className="absolute top-4 right-4 bg-gradient-to-r from-accent to-secondary text-white px-3 py-1 rounded-full text-sm font-medium z-10"
                  >
                    Featured
                  </motion.div>
                )}

                {/* Post Info */}
                <div className="mb-6">
                  <div className="flex items-center gap-4 text-sm text-text-muted mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-semibold mb-4 text-primary group-hover:text-primary-light transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-text-secondary mb-6 leading-relaxed text-lg">
                    {post.excerpt}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.map((tag) => (
                    <motion.span
                      key={tag}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full border border-primary/30 hover:bg-primary/30 transition-colors"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                {/* Read More Link */}
                <motion.a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 text-primary hover:text-primary-light transition-colors font-medium text-lg"
                >
                  Read Article
                  <ExternalLink className="w-5 h-5" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Articles Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://medium.com/@parth.kale2005"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-primary to-primary-light hover:from-primary-light hover:to-primary text-white px-8 py-4 rounded-full transition-all duration-300 font-semibold text-lg glow-hover inline-flex items-center gap-2"
          >
            <ExternalLink className="w-5 h-5" />
            View All Articles
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
} 