import { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import SkillsSection from '@/components/SkillsSection'
import ProjectsSection from '@/components/ProjectsSection'
import ExperienceSection from '@/components/ExperienceSection'
import BlogSection from '@/components/BlogSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import ThemeToggle from '@/components/ThemeToggle'

// Metadata for SEO
export const metadata: Metadata = {
  title: 'Parth Kale - Full-Stack Developer & Photographer',
  description: 'Portfolio of Parth Kale, a full-stack developer and photographer based in India. Specializing in React, Next.js, and modern web technologies.',
  keywords: ['Parth Kale', 'Full-Stack Developer', 'Photographer', 'React', 'Next.js', 'Portfolio'],
  authors: [{ name: 'Parth Kale' }],
  creator: 'Parth Kale',
  openGraph: {
    title: 'Parth Kale - Full-Stack Developer & Photographer',
    description: 'Portfolio showcasing web development projects and photography work.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <ThemeToggle />
      
      <section id="home">
        <HeroSection />
      </section>
      
      <section id="skills">
        <SkillsSection />
      </section>
      
      <section id="experience">
        <ExperienceSection />
      </section>
      
      <section id="projects">
        <ProjectsSection />
      </section>
      
      <section id="blog">
        <BlogSection />
      </section>
      
      <section id="contact">
        <ContactSection />
      </section>
      
      <Footer />
      <ScrollToTop />
    </main>
  )
} 