'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ExternalLink, Camera, Calendar } from 'lucide-react'

// Import all photos from the photo directory
import photo1 from '@/img/photo/1.jpg'
import photo2 from '@/img/photo/2.jpg'
import photo3 from '@/img/photo/3.jpg'
import photo4 from '@/img/photo/4.jpg'
import photo5 from '@/img/photo/5.jpg'
import photo6 from '@/img/photo/6.jpg'
import photo7 from '@/img/photo/7.jpg'
import photo8 from '@/img/photo/8.jpg'
import photo9 from '@/img/photo/9.jpg'
import photo10 from '@/img/photo/10.jpg'
import photo11 from '@/img/photo/11.jpg'
import photo12 from '@/img/photo/12.jpg'
import photo13 from '@/img/photo/13.jpg'
import photo14 from '@/img/photo/14.jpg'
import photo15 from '@/img/photo/15.jpg'
import photo16 from '@/img/photo/16.jpg'
import photo17 from '@/img/photo/17.jpg'
import photo18 from '@/img/photo/18.jpg'
import photo19 from '@/img/photo/19.jpg'
import photo20 from '@/img/photo/20.jpg'
import photo21 from '@/img/photo/21.jpg'
import photo22 from '@/img/photo/22.jpg'
import photo23 from '@/img/photo/23.jpg'
import photo24 from '@/img/photo/24.jpg'
import photo25 from '@/img/photo/25.jpg'
import photo26 from '@/img/photo/26.jpg'

const photos = [
  {
    id: 1,
    src: photo1,
    alt: 'Urban Architecture',
    title: 'Urban Architecture',
    description: 'Modern cityscape captured during golden hour',
    tags: ['Architecture', 'Urban', 'Golden Hour'],
    date: '2024-01-15'
  },
  {
    id: 2,
    src: photo2,
    alt: 'Street Photography',
    title: 'Street Life',
    description: 'Everyday moments in the city',
    tags: ['Street', 'Candid'],
    date: '2024-01-14'
  },
  {
    id: 3,
    src: photo3,
    alt: 'Nature Landscape',
    title: 'Mountain Vista',
    description: 'Breathtaking landscape at dawn',
    tags: ['Landscape', 'Nature', 'Dawn'],
    date: '2024-01-13'
  },
  {
    id: 4,
    src: photo4,
    alt: 'Portrait Photography',
    title: 'Portrait Study',
    description: 'Natural light portrait session',
    tags: ['Portrait', 'Natural Light'],
    date: '2024-01-12'
  },
  {
    id: 5,
    src: photo5,
    alt: 'Macro Photography',
    title: 'Macro Details',
    description: 'Close-up exploration of textures',
    tags: ['Macro', 'Texture'],
    date: '2024-01-11'
  },
  {
    id: 6,
    src: photo6,
    alt: 'Abstract Photography',
    title: 'Abstract Forms',
    description: 'Exploring shapes and patterns',
    tags: ['Abstract', 'Patterns', 'Shapes'],
    date: '2024-01-10'
  },
  {
    id: 7,
    src: photo7,
    alt: 'Night Photography',
    title: 'Night City',
    description: 'Long exposure city lights',
    tags: ['Night', 'Long Exposure'],
    date: '2024-01-09'
  },
  {
    id: 8,
    src: photo8,
    alt: 'Travel Photography',
    title: 'Travel Memories',
    description: 'Capturing the essence of places',
    tags: ['Travel', 'Culture'],
    date: '2024-01-08'
  },
  {
    id: 9,
    src: photo9,
    alt: 'Wildlife Photography',
    title: 'Wildlife',
    description: 'Animals in their natural habitat',
    tags: ['Wildlife', 'Nature'],
    date: '2024-01-07'
  },
  {
    id: 10,
    src: photo10,
    alt: 'Street Art',
    title: 'Street Art',
    description: 'Colorful urban expressions',
    tags: ['Street Art', 'Urban', 'Color'],
    date: '2024-01-06'
  },
  {
    id: 11,
    src: photo11,
    alt: 'Seascape',
    title: 'Ocean Waves',
    description: 'Powerful waves crashing on rocks',
    tags: ['Seascape', 'Nature', 'Waves'],
    date: '2024-01-05'
  },
  {
    id: 12,
    src: photo12,
    alt: 'Forest Path',
    title: 'Forest Path',
    description: 'Serene woodland trail',
    tags: ['Forest', 'Nature', 'Path'],
    date: '2024-01-04'
  },
  {
    id: 13,
    src: photo13,
    alt: 'Cityscape',
    title: 'Cityscape',
    description: 'Capturing the beauty of the city',
    tags: ['City', 'Landscape'],
    date: '2024-01-03'
  },
  {
    id: 14,
    src: photo14,
    alt: 'Cityscape',
    title: 'Cityscape',
    description: 'Capturing the beauty of the city',
    tags: ['City', 'Landscape'],
    date: '2024-01-02'
  },
  {
    id: 15,
    src: photo15,
    alt: 'Cityscape',
    title: 'Cityscape',
    description: 'Capturing the beauty of the city',
    tags: ['City', 'Landscape'],
    date: '2024-01-01'
  },
  {
    id: 16,
    src: photo16,
    alt: 'Cityscape',
    title: 'Cityscape',
    description: 'Capturing the beauty of the city',
    tags: ['City', 'Landscape'],
    date: '2024-01-01'
  },  
  {
    id: 17,
    src: photo17,
    alt: 'Cityscape',
    title: 'Cityscape',
    description: 'Capturing the beauty of the city',
    tags: ['City', 'Landscape'],
    date: '2024-01-01'
  },
  {
    id: 18,
    src: photo18,
    alt: 'Cityscape',
    title: 'Cityscape',
    description: 'Capturing the beauty of the city',
    tags: ['City', 'Landscape'],
    date: '2024-01-02'
  },
  {
    id: 19,
    src: photo19,
    alt: 'Cityscape',
    title: 'Cityscape',
    description: 'Capturing the beauty of the city',
    tags: ['City', 'Landscape'],
    date: '2024-01-01'
  },
  {
    id: 20,
    src: photo20,
    alt: 'Cityscape',
    title: 'Cityscape',
    description: 'Capturing the beauty of the city',
    tags: ['City', 'Landscape'],
    date: '2024-01-01'
  },  
  {
    id: 21,
    src: photo21,
    alt: 'Cityscape',
    title: 'Cityscape',
    description: 'Capturing the beauty of the city',
    tags: ['City', 'Landscape'],
    date: '2024-01-01'
  },
  {
    id: 22,
    src: photo22,
    alt: 'Cityscape',
    title: 'Cityscape',
    description: 'Capturing the beauty of the city',
    tags: ['City', 'Landscape'],
    date: '2024-01-02'
  },
  {
    id: 23,
    src: photo23,
    alt: 'Cityscape',
    title: 'Cityscape',
    description: 'Capturing the beauty of the city',
    tags: ['City', 'Landscape'],
    date: '2024-01-01'
  },
  {
    id: 24,
    src: photo24,
    alt: 'Cityscape',
    title: 'Cityscape',
    description: 'Capturing the beauty of the city',
    tags: ['City', 'Landscape'],
    date: '2024-01-01'
  },  
    {
      id: 25,
      src: photo25,
      alt: 'Cityscape',
      title: 'Cityscape',
      description: 'Capturing the beauty of the city',
      tags: ['City', 'Landscape'],
      date: '2024-01-01'
    },
    {
      id: 26,
      src: photo26,
      alt: 'Cityscape',
      title: 'Cityscape',
      description: 'Capturing the beauty of the city',
      tags: ['City', 'Landscape'],
      date: '2024-01-01'
    }
]

export default function PhotoGrid() {
  const [imageDimensions, setImageDimensions] = useState<{[key: number]: {width: number, height: number}}>({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadImageDimensions = async () => {
      const dimensions: {[key: number]: {width: number, height: number}} = {}
      
      for (const photo of photos) {
        const img = new Image()
        img.src = photo.src.src
        await new Promise((resolve) => {
          img.onload = () => {
            dimensions[photo.id] = {
              width: img.naturalWidth,
              height: img.naturalHeight
            }
            resolve(null)
          }
        })
      }
      
      setImageDimensions(dimensions)
      setIsLoading(false)
    }

    loadImageDimensions()
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-text-secondary">Loading photography gallery...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-20 px-4">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Photography <span className="gradient-text">Gallery</span>
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Capturing moments through the lens - a collection of my favorite shots from various genres and locations.
          </p>
        </motion.div>
      </div>

      {/* Photo Grid - Masonry Layout */}
      <div className="max-w-7xl mx-auto">
        <div className="columns-1 sm:columns-2 lg:columns-2 xl:columns-3 gap-8 space-y-8">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="break-inside-avoid mb-8 group"
            >
              <div className="relative overflow-hidden rounded-xl glass-effect">
                {/* Image Container with Natural Aspect Ratio */}
                <div className="relative w-full">
                  <img
                    src={photo.src.src}
                    alt={photo.alt}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                    style={{
                      aspectRatio: imageDimensions[photo.id] 
                        ? `${imageDimensions[photo.id].width} / ${imageDimensions[photo.id].height}`
                        : 'auto'
                    }}
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm opacity-80">{photo.date}</span>
                      </div>
                      
                      <h3 className="text-xl font-semibold mb-2">{photo.title}</h3>
                      <p className="text-sm opacity-90 mb-3">{photo.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {photo.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs border border-white/30"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-4 py-2 rounded-full transition-colors text-sm"
                      >
                        <Camera className="w-4 h-4" />
                        View Details
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer Info */}
      <div className="max-w-4xl mx-auto mt-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="glass-effect p-8 rounded-xl"
        >
          <h3 className="text-2xl font-semibold mb-4 text-primary">
            About My Photography
          </h3>
          <p className="text-text-secondary leading-relaxed">
            I specialize in capturing the beauty of urban landscapes, natural scenes, and candid moments. 
            Each photograph tells a story and reflects my passion for visual storytelling through the lens.
          </p>
        </motion.div>
      </div>
    </div>
  )
} 