# Portfolio Next.js Migration Guide

This is a professional Next.js version of your portfolio website with modern React components, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Responsive Design** for all devices
- **SEO Optimized** with metadata
- **Performance Optimized** with Next.js features

## 📁 Project Structure

```
portfolio-nextjs/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles
│   │   ├── layout.tsx           # Root layout
│   │   ├── page.tsx             # Home page
│   │   └── photography/
│   │       └── page.tsx         # Photography page
│   ├── components/
│   │   ├── Navigation.tsx       # Navigation component
│   │   ├── PhotoGrid.tsx        # Photography grid
│   │   ├── HeroSection.tsx      # Hero section
│   │   ├── SkillsSection.tsx    # Skills section
│   │   ├── ProjectsSection.tsx  # Projects section
│   │   └── ContactSection.tsx   # Contact section
│   ├── lib/                     # Utility functions
│   └── types/                   # TypeScript types
├── public/
│   └── images/                  # Static images
├── package.json
├── tailwind.config.ts
├── next.config.js
└── tsconfig.json
```

## 🛠️ Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Copy Images
Copy your existing images from `src/img/` to `public/images/`:
```bash
cp -r ../src/img/* public/images/
```

### 3. Run Development Server
```bash
npm run dev
```

### 4. Build for Production
```bash
npm run build
npm start
```

## 🎨 Customization

### Colors
Edit `tailwind.config.ts` to customize the color scheme:
```typescript
colors: {
  primary: {
    DEFAULT: '#2d5016',
    light: '#4a7c59',
    dark: '#1a2f0e',
  },
  // ... more colors
}
```

### Components
Each section is a separate component in `src/components/`:
- `HeroSection.tsx` - Main hero section
- `SkillsSection.tsx` - Skills and technologies
- `ProjectsSection.tsx` - Project showcase
- `ContactSection.tsx` - Contact information
- `PhotoGrid.tsx` - Photography gallery

### Styling
- Global styles in `src/app/globals.css`
- Component-specific styles using Tailwind classes
- Custom CSS classes in the `@layer` directives

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Performance Features

- **Image Optimization** with Next.js Image component
- **Code Splitting** automatic with Next.js
- **Static Generation** for better SEO
- **Lazy Loading** for images and components
- **Optimized Fonts** with Next.js font optimization

## 🔧 Development

### Adding New Pages
1. Create a new folder in `src/app/`
2. Add a `page.tsx` file
3. Export the page component as default

### Adding New Components
1. Create a new `.tsx` file in `src/components/`
2. Import and use in your pages

### Styling
- Use Tailwind CSS classes
- Add custom styles in `globals.css`
- Use CSS modules for component-specific styles

## 📦 Deployment

### GitHub Pages (Recommended for this project)

#### Option 1: Automated Deployment (Recommended)
1. **Push your code to GitHub**
2. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages" section
   - Select "GitHub Actions" as source
3. **The GitHub Actions workflow will automatically deploy** when you push to the main branch

#### Option 2: Manual Deployment
```bash
# Build the project for static export
npm run build

# The static files will be in the 'out' directory
# Copy these files to your GitHub Pages branch
```

#### Option 3: Using Deployment Scripts
```bash
# For Windows PowerShell
.\deploy.ps1

# For Linux/Mac
chmod +x deploy.sh
./deploy.sh
```

### Vercel (Alternative)
1. Push to GitHub
2. Connect to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Deploy the `out` folder

## 🎯 Next Steps

1. **Complete Components**: Create the remaining section components
2. **Add Content**: Update with your actual content
3. **Add Animations**: Implement Framer Motion animations
4. **Add Blog**: Consider adding a blog section
5. **Add CMS**: Integrate with a headless CMS like Sanity or Contentful
6. **Add Analytics**: Add Google Analytics or Vercel Analytics
7. **Add Contact Form**: Implement a working contact form
8. **Add SEO**: Optimize meta tags and structured data

## 🔗 Useful Links

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).