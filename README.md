# TalentHub AI - Talent Search Website

A modern, responsive talent search website built with React, TypeScript, and Tailwind CSS. Features AI-powered resume upload and semantic search capabilities with beautiful light and dark themes.

## 🚀 Features

- **Modern UI/UX**: Clean, professional design inspired by leading talent platforms
- **Light & Dark Mode**: Seamless theme switching with smooth transitions
- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Drag & Drop Upload**: Intuitive file upload interface supporting PDF, DOCX, and DOC formats
- **Single & Batch Upload**: Toggle between single and batch upload modes
- **Live Statistics Preview**: View key metrics at a glance
- **Analytics Visualization**: Interactive charts showing candidate skills distribution
- **Smooth Animations**: Engaging animations using Framer Motion
- **Accessibility**: WCAG AA compliant with proper ARIA labels and keyboard navigation

## 🛠️ Tech Stack

- **React 18+** - Latest React with hooks and concurrent features
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Production-ready animation library
- **Lucide React** - Beautiful & consistent icon toolkit

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd advanced-resume-frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:5173
```

## 🏗️ Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.tsx          # Navigation header with theme toggle
│   │   └── Footer.tsx          # Footer with links
│   ├── hero/
│   │   └── Hero.tsx            # Main hero section with CTAs
│   ├── upload/
│   │   └── UploadSection.tsx   # Drag & drop upload area
│   └── stats/
│       └── StatsPreview.tsx     # Statistics and analytics preview
├── context/
│   └── ThemeContext.tsx         # Theme management context
├── App.tsx                     # Main app component
├── main.tsx                    # Entry point
└── index.css                   # Global styles with Tailwind directives
```

## 🎨 Components

### Header
- Responsive navigation with mobile hamburger menu
- Theme toggle button (sun/moon icons)
- Smooth scroll to sections

### Hero Section
- Eye-catching headline with gradient text
- Two CTA buttons (Upload & Search)
- Feature highlights with icons
- Fade-in animations

### Upload Section
- Single/Batch upload toggle
- Drag & drop zone with visual feedback
- File format indicators (PDF, DOCX, DOC)
- Upload progress simulation
- Success status display

### Stats Preview
- Three stat cards with trends (Total Resumes, New This Week, Match Rate)
- Analytics visualization with progress bars
- Skills distribution chart (JavaScript, Python, React, AWS)
- Hover effects and animations

### Footer
- Brand section with tagline
- Quick links navigation
- Legal links (Privacy, Terms, Contact)
- Copyright notice with dynamic year

## 🌙 Theme System

The application supports both light and dark themes:
- **Light Theme**: White backgrounds, dark text, blue accents
- **Dark Theme**: Dark slate backgrounds, light text, primary blue accents
- Theme preference is saved to localStorage
- Respects system preference on first visit
- Smooth transitions between themes

Toggle the theme using the sun/moon icon in the header.

## 🎯 Key Functionality

### File Upload (UI Only)
Currently, the upload functionality is a UI demonstration:
- Drag and drop files into the upload zone
- Click to browse files from your device
- Upload progress animation
- Success confirmation display
- No backend integration yet

### Placeholder Features
The following features are placeholders for future implementation:
- **Search Candidates**: Button disabled with "Coming Soon" tooltip
- **Full Dashboard**: Button disabled with "Dashboard coming soon" tooltip
- **Legal Pages**: Links prevent default navigation

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 🎨 Customization

### Colors
Primary colors can be customized in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#eff6ff',
    // ... more shades
    500: '#3b82f6', // Main primary color
    // ... more shades
  },
}
```

### Animations
Custom animations are defined in `tailwind.config.js`:
- `fade-in` - Fade in effect
- `slide-up` - Slide up from bottom
- `bounce-slow` - Slower bounce animation

## 🔮 Future Enhancements

- Backend API integration for resume parsing
- Real search functionality with semantic search
- Complete dashboard with advanced analytics
- User authentication system
- Resume preview and management
- Advanced filtering and sorting
- Export candidate data
- Email notifications
- Multi-language support

## 📄 License

This project is licensed under the MIT License.

## 👥 Contributing

Contributions, issues, and feature requests are welcome!

## 📞 Contact

For questions or support, please contact the development team.

---

**Note**: This is a frontend-only implementation. Backend services are not yet connected. All data displayed is mock/static for demonstration purposes.
