# Yagnikkumar Nimavat - Portfolio Website

A modern, professional portfolio website built with React, Vite, Tailwind CSS, and Framer Motion.

## 🚀 Features

- ✨ Modern and responsive design
- 🎨 Smooth animations with Framer Motion
- 📱 Mobile-friendly
- 🎯 SEO optimized
- ⚡ Fast performance with Vite
- 🎨 Beautiful UI with Tailwind CSS
- 📧 Contact form
- 🏆 Achievements section with award highlights

## 🛠️ Technologies Used

- **React** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library
- **React Type Animation** - Typing animation
- **React Scroll** - Smooth scrolling

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🎨 Customization

### Personal Information

Update your personal information in the following components:

1. **Hero Section** (`src/components/Hero.jsx`):
   - Update your name, titles, and social media links
   - Replace the download CV link

2. **About Section** (`src/components/About.jsx`):
   - Update your bio and description

3. **Skills Section** (`src/components/Skills.jsx`):
   - Add or remove skills based on your expertise

4. **Experience Section** (`src/components/Experience.jsx`):
   - Add your work experiences

5. **Projects Section** (`src/components/Projects.jsx`):
   - Add your projects with images, descriptions, and links

6. **Achievements Section** (`src/components/Achievements.jsx`):
   - Update with your awards and achievements
   - Replace placeholder images with your actual award photos

7. **Contact Section** (`src/components/Contact.jsx`):
   - Update your email, phone, and location
   - Update social media links

### Adding Real Images

1. Place your images in the `public` folder or `src/assets` folder
2. Update image references in components:
   - Profile photo in About section
   - Award ceremony photos in Achievements section
   - Project screenshots in Projects section

### Colors and Styling

Update colors in `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: '#3B82F6',    // Change primary color
      secondary: '#8B5CF6',  // Change secondary color
      dark: '#0F172A',       // Change dark color
      light: '#F8FAFC',      // Change light color
    },
  },
}
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

For production deployment:
```bash
vercel --prod
```

**Or use Vercel Dashboard:**

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Vercel will auto-detect Vite and configure everything
5. Click "Deploy"

### Deploy to Netlify

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Login to Netlify:
```bash
netlify login
```

3. Initialize and deploy:
```bash
netlify init
```

**Or use Netlify Dashboard:**

1. Go to [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect to your Git repository
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click "Deploy site"

### Deploy to GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
{
  "homepage": "https://yourusername.github.io/portfolio",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Update `vite.config.js`:
```javascript
export default defineConfig({
  base: '/portfolio/', // Replace with your repo name
  plugins: [react()],
})
```

4. Deploy:
```bash
npm run deploy
```

## 📝 Build for Production

```bash
npm run build
```

The build output will be in the `dist` folder.

## 🔧 Environment Variables

Create a `.env` file in the root directory for any environment variables:

```env
VITE_EMAIL_SERVICE_ID=your_service_id
VITE_EMAIL_TEMPLATE_ID=your_template_id
VITE_EMAIL_PUBLIC_KEY=your_public_key
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Yagnikkumar Nimavat**
- Software Developer at Kevit.io
- Rising Talent Award Winner - Annual Growth Meet 2025

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- Icons from React Icons
- Animations powered by Framer Motion

---

Made with ❤️ by Yagnikkumar Nimavat

