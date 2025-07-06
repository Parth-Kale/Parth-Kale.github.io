import Navigation from '@/components/Navigation'
import PhotoGrid from '@/components/PhotoGrid'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import ThemeToggle from '@/components/ThemeToggle'

export const metadata = {
  title: 'Photography Gallery - Parth Kale',
  description: 'Explore my photography collection featuring landscapes, portraits, street photography, and more.',
}

export default function PhotographyPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <ThemeToggle />
      <PhotoGrid />
      <Footer />
      <ScrollToTop />
    </main>
  )
} 