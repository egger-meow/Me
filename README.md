# Interactive CV/Resume Portfolio

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-blue?style=for-the-badge&logo=github)](https://egger-meow.github.io/Me/)

A modern, interactive digital CV/resume built with React, featuring smooth animations, theme switching, multilingual support, and a beautiful galaxy background effect.

## 🌟 Features

- **🌐 Bilingual Support**: Seamless switching between Chinese (繁體中文) and English
- **🌓 Theme Modes**: Light and dark mode with smooth transitions and animated galaxy background
- **📱 Responsive Design**: Fully responsive layout optimized for all devices
- **✨ Smooth Animations**: Scroll-triggered animations using Intersection Observer API
- **🖼️ Image Gallery Modal**: Certificate/document viewer with multiple image support and navigation
- **📄 PDF Export**: One-click export to PDF with proper formatting
- **🎨 Modern UI**: Built with TailwindCSS for a clean, professional appearance
- **⚡ Fast Performance**: Powered by Vite for lightning-fast builds and hot module replacement

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: TailwindCSS
- **Icons**: Lucide React
- **PDF Generation**: jsPDF + html2canvas
- **3D Effects**: Custom Galaxy component with particle system
- **Deployment**: GitHub Pages

## 📂 Project Structure

```
Me/
├── src/
│   ├── components/
│   │   ├── Galaxy.jsx          # Animated particle galaxy background
│   │   └── ImageModal.jsx      # Certificate/image gallery modal
│   ├── data/
│   │   └── cvData.js          # Centralized CV content (bilingual)
│   ├── hooks/
│   │   └── useScrollAnimation.js  # Custom scroll animation hook
│   ├── App.jsx                # Main application component
│   └── main.jsx               # Application entry point
├── public/
│   └── imgs/                  # Images and certificates
└── dist/                      # Production build output
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/egger-meow/Me.git
cd Me
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📦 Build & Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### Deploy to GitHub Pages

To update the live deployment:

```bash
npm run deploy
```

Or run both commands sequentially:

```bash
npm run build
npm run deploy
```

This will:
1. Build the production version
2. Deploy to GitHub Pages using the `gh-pages` branch

The site will be available at: `https://egger-meow.github.io/Me/`

> **🌐 Live Demo**: Visit the deployed site at [https://egger-meow.github.io/Me/](https://egger-meow.github.io/Me/)

## 🎨 Customization

### Updating CV Content

All CV content is centralized in `src/data/cvData.js`. Edit this file to update:
- Personal information
- Work experience
- Education
- Projects
- Skills
- Languages
- Personal traits

### Adding Images/Certificates

1. Place images in the `public/imgs/` folder
2. Reference them in `cvData.js` using the path: `/Me/imgs/your-image.jpg`
3. For multiple certificates per experience, use an array: `images: ["/Me/imgs/cert1.jpg", "/Me/imgs/cert2.jpg"]`

### Styling

- Global styles: `src/index.css`
- Theme colors and effects: Modify TailwindCSS classes in `App.jsx`
- Galaxy effect parameters: Adjust props in the `<Galaxy />` component

## 💡 Key Components

### ImageModal
- Supports multiple images with prev/next navigation
- Blur background effect
- Responsive and mobile-friendly
- Error handling for missing images

### Galaxy Background
- Interactive particle system
- Mouse repulsion effects
- Customizable density, colors, and animation speed
- Only visible in dark mode for performance

### ScrollAnimation Hook
- Intersection Observer-based
- Configurable threshold and delay
- Smooth reveal animations for sections

## 📄 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run deploy` - Deploy to GitHub Pages
- `npm run lint` - Run ESLint

## 🌍 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 License

This project is open source and available under the MIT License.

## 👤 Author

**Chun-Ting Hou (侯均頲)**
- GitHub: [@egger-meow](https://github.com/egger-meow)
- LinkedIn: [JJ Mow](https://www.linkedin.com/in/jj-mow-8b903b295)
- Email: inpire.mg09@nycu.edu.tw

## 🙏 Acknowledgments

- Built with modern web technologies
- Designed for showcasing professional experience in interviews
- Inspired by interactive portfolio trends
