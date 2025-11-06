# 🎨 Customization Guide

This guide will help you personalize your portfolio with your own information, images, and styling.

## 1. Personal Information

### Hero Section (`src/components/Hero.jsx`)

Update lines with your information:
```jsx
<h1>Yagnikkumar Nimavat</h1>  // Change to your name

// Update typing animation
sequence={[
  'Full Stack Developer',
  'Your Title 1',
  'Your Title 2',
  // Add more titles
]}

// Update description
<p>Your personal description here</p>

// Update social links
<a href="https://github.com/YOUR_USERNAME">
<a href="https://linkedin.com/in/YOUR_USERNAME">
<a href="mailto:YOUR_EMAIL">
```

### About Section (`src/components/About.jsx`)

```jsx
// Update initials in the placeholder
<div className="text-6xl font-bold text-white">
  YN  // Change to your initials
</div>

// Update description
<p>Your detailed bio here...</p>
```

### Contact Section (`src/components/Contact.jsx`)

```jsx
const contactInfo = [
  {
    icon: FaEnvelope,
    title: 'Email',
    value: 'your.email@example.com',  // Your email
    link: 'mailto:your.email@example.com',
  },
  {
    icon: FaPhone,
    title: 'Phone',
    value: '+91 XXXXX XXXXX',  // Your phone
    link: 'tel:+91XXXXXXXXXX',
  },
  {
    icon: FaMapMarkerAlt,
    title: 'Location',
    value: 'Your City, Country',  // Your location
    link: '#',
  },
];

// Update social links
<a href="https://linkedin.com/in/YOUR_USERNAME">
<a href="https://github.com/YOUR_USERNAME">
```

## 2. Work Experience

### Experience Section (`src/components/Experience.jsx`)

Add more experiences to the array:
```jsx
const experiences = [
  {
    company: 'Kevit.io',
    position: 'Software Developer',
    duration: 'June 2024 - Present',
    location: 'Remote',
    description: [
      'Point 1',
      'Point 2',
      'Point 3',
    ],
    technologies: ['React', 'Node.js', 'MongoDB'],
  },
  // Add more experiences here
  {
    company: 'Your Previous Company',
    position: 'Your Position',
    duration: 'Jan 2023 - May 2024',
    location: 'Location',
    description: [
      'Your achievements',
    ],
    technologies: ['Tech1', 'Tech2'],
  },
];
```

## 3. Projects

### Projects Section (`src/components/Projects.jsx`)

Replace placeholder projects with your own:
```jsx
const projects = [
  {
    title: 'Your Project Name',
    description: 'Detailed description of your project',
    image: 'https://your-image-url.com/image.jpg',  // Or '/images/project1.jpg'
    technologies: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/yourusername/project',
    live: 'https://yourproject.com',
  },
  // Add more projects
];
```

### Adding Project Images

**Option 1: Use your own images**
```bash
# Place images in public folder
public/
  images/
    project1.jpg
    project2.jpg
```

Then update image path:
```jsx
image: '/images/project1.jpg',
```

**Option 2: Use Unsplash or similar**
```jsx
image: 'https://images.unsplash.com/photo-xxxxx',
```

## 4. Skills

### Skills Section (`src/components/Skills.jsx`)

Add or remove skills:
```jsx
const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React.js', icon: FaReact, color: 'text-cyan-400' },
      // Add your skills
      { name: 'Vue.js', icon: SiVuedotjs, color: 'text-green-500' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      // Your backend skills
    ],
  },
  // Add more categories
];
```

### Available Icons

Import icons from react-icons:
```jsx
import { FaReact, FaNodeJs, FaPython } from 'react-icons/fa';
import { SiMongodb, SiTypescript, SiDocker } from 'react-icons/si';
```

Find more icons at: https://react-icons.github.io/react-icons/

## 5. Achievements

### Achievements Section (`src/components/Achievements.jsx`)

Update achievements:
```jsx
const achievements = [
  {
    title: 'Your Achievement',
    organization: 'Organization Name',
    event: 'Event Name',
    date: '2024',
    description: 'Description of your achievement',
    icon: FaTrophy,  // FaTrophy, FaStar, FaAward, FaMedal
    color: 'from-yellow-400 to-orange-500',
  },
  // Add more achievements
];
```

### Adding Award Photos

Replace placeholder images with your actual photos:

```jsx
// In the Award Image Section
<div className="relative h-64 rounded-xl overflow-hidden">
  <img 
    src="/images/award-ceremony.jpg"  // Your photo path
    alt="Award Ceremony" 
    className="w-full h-full object-cover"
  />
</div>
```

Place your images in:
```
public/
  images/
    award-ceremony.jpg
    rising-talent-award.jpg
    profile.jpg
```

## 6. Colors & Styling

### Primary Colors (`tailwind.config.js`)

```javascript
theme: {
  extend: {
    colors: {
      primary: '#3B82F6',    // Blue - change to your brand color
      secondary: '#8B5CF6',  // Purple
      dark: '#0F172A',       // Dark background
      light: '#F8FAFC',      // Light text
    },
  },
}
```

### Gradient Colors

In components, update gradient classes:
```jsx
// From blue-purple to your colors
className="bg-gradient-to-r from-blue-400 to-purple-500"
className="bg-gradient-to-r from-primary to-secondary"
```

### Background Animations

In Hero section, update blob colors:
```jsx
<div className="absolute top-20 left-10 w-72 h-72 bg-purple-500...">
// Change bg-purple-500 to your color
```

## 7. Fonts

### Change Font (`src/index.css`)

Replace Inter with your preferred font:
```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

body {
  font-family: 'Poppins', sans-serif;  /* Change to your font */
}
```

Update `tailwind.config.js`:
```javascript
fontFamily: {
  sans: ['Poppins', 'system-ui', 'sans-serif'],
},
```

## 8. Resume/CV Download

### Add Download Link (`src/components/Hero.jsx`)

1. Place your resume in `public` folder:
```
public/
  resume.pdf
```

2. Update download link:
```jsx
<a
  href="/resume.pdf"  // Your resume path
  download="Yagnikkumar-Nimavat-Resume.pdf"  // Your name
  className="px-8 py-3..."
>
  <FaDownload /> Download CV
</a>
```

## 9. Favicon & Meta Tags

### Update Favicon

1. Create a favicon (use https://realfavicongenerator.net/)
2. Replace `public/vite.svg` with your favicon
3. Update `index.html`:
```html
<link rel="icon" type="image/png" href="/favicon.png" />
```

### Update Meta Tags (`index.html`)

```html
<meta name="description" content="Your portfolio description" />
<meta name="keywords" content="Your, Keywords, Here" />
<meta name="author" content="Your Name" />
<title>Your Name | Full Stack Developer</title>
```

## 10. Contact Form Integration

### Option 1: EmailJS

1. Sign up at [emailjs.com](https://www.emailjs.com/)
2. Get your Service ID, Template ID, and Public Key
3. Install EmailJS:
```bash
npm install @emailjs/browser
```

4. Update Contact form:
```jsx
import emailjs from '@emailjs/browser';

const handleSubmit = (e) => {
  e.preventDefault();
  
  emailjs.send(
    'YOUR_SERVICE_ID',
    'YOUR_TEMPLATE_ID',
    formData,
    'YOUR_PUBLIC_KEY'
  )
  .then(() => {
    alert('Message sent successfully!');
  })
  .catch((error) => {
    alert('Failed to send message.');
  });
};
```

### Option 2: Form Backend (Formspree, etc.)

```jsx
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

## 11. Analytics

### Add Google Analytics

1. Create GA4 property at [analytics.google.com](https://analytics.google.com)
2. Get your Measurement ID (G-XXXXXXXXXX)
3. Add to `index.html`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## 12. Animation Customization

### Adjust Animation Speed

In any component with Framer Motion:
```jsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}  // Adjust duration (0.3 = faster, 1 = slower)
>
```

### Disable Animations

Remove or comment out `motion.` wrappers:
```jsx
// Before
<motion.div variants={itemVariants}>

// After (no animation)
<div>
```

## Testing Your Changes

After making changes:
```bash
# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Need Help?

- Check React Icons: https://react-icons.github.io/react-icons/
- Tailwind CSS Docs: https://tailwindcss.com/docs
- Framer Motion Docs: https://www.framer.com/motion/
- Google Fonts: https://fonts.google.com/

---

Happy Customizing! 🎨
