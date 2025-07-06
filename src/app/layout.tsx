import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/contexts/ThemeContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Parth Kale - Full Stack Developer & Game Developer',
  description: 'Full Stack Developer specializing in Electron, TypeScript, and Unity game development. Based in Wroclaw, Poland. View my projects, experience, and photography.',
  keywords: ['Full Stack Developer', 'Electron', 'TypeScript', 'Unity', 'Game Development', 'React', 'Next.js', 'Wroclaw', 'Poland'],
  authors: [{ name: 'Parth Kale' }],
  creator: 'Parth Kale',
  publisher: 'Parth Kale',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://parth-kale.github.io'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Parth Kale - Full Stack Developer & Game Developer',
    description: 'Full Stack Developer specializing in Electron, TypeScript, and Unity game development. Based in Wroclaw, Poland.',
    url: 'https://parth-kale.github.io',
    siteName: 'Parth Kale Portfolio',
    images: [
      {
        url: '/images/portfolio1.png',
        width: 1200,
        height: 630,
        alt: 'Parth Kale Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Parth Kale - Full Stack Developer & Game Developer',
    description: 'Full Stack Developer specializing in Electron, TypeScript, and Unity game development.',
    images: ['/images/portfolio1.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Cursor follower effect
              document.addEventListener('DOMContentLoaded', function() {
                const cursor = document.getElementById('cursor-follower');
                if (!cursor) return;
                
                let mouseX = 0;
                let mouseY = 0;
                let cursorX = 0;
                let cursorY = 0;
                
                document.addEventListener('mousemove', function(e) {
                  mouseX = e.clientX;
                  mouseY = e.clientY;
                });
                
                function animateCursor() {
                  const dx = mouseX - cursorX;
                  const dy = mouseY - cursorY;
                  
                  cursorX += dx * 0.1;
                  cursorY += dy * 0.1;
                  
                  cursor.style.transform = 'translate(' + cursorX + 'px, ' + cursorY + 'px)';
                  requestAnimationFrame(animateCursor);
                }
                
                animateCursor();
                
                // Add hover effect for interactive elements
                const interactiveElements = document.querySelectorAll('a, button, .card-hover');
                interactiveElements.forEach(el => {
                  el.addEventListener('mouseenter', () => {
                    cursor.style.transform += ' scale(2)';
                    cursor.style.background = '#4a7c59';
                  });
                  
                  el.addEventListener('mouseleave', () => {
                    cursor.style.transform = cursor.style.transform.replace(' scale(2)', '');
                    cursor.style.background = '#2d5016';
                  });
                });
              });
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
} 