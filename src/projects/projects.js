import buildBazaarImg from '../assets/projects/build-bazaar.svg'
import inventoryImg from '../assets/projects/inventory-app.svg'

export const projects = [
  {
    id: 1,
    title: 'Build Bazaar',
    tagline: 'Full Stack E-Commerce Platform',
    description:
      'A sophisticated MERN stack marketplace for PC configuration featuring an AI chatbot powered by Groq API for personalized recommendations. Includes intelligent compatibility checker, real-time inventory management, and seamless checkout experience.',
    fullDescription: 'Built a complete e-commerce platform enabling users to build custom PCs with component compatibility validation. Integrated AI chatbot for 24/7 customer support and product recommendations.',
    technologies: [
      'React.js',
      'Node.js',
      'Express',
      'MongoDB',
      'Groq API',
      'Redux Toolkit',
      'Tailwind CSS',
    ],
    githubUrl: 'https://github.com/omkar2914/Build-Bazaar-Portfolio',
    liveUrl: null,
    screenshot: buildBazaarImg,
    featured: true,
  },
  {
    id: 2,
    title: 'Inventory Management System',
    tagline: 'Android App with Kotlin + Firebase',
    description:
      'A comprehensive inventory management Android application built with Kotlin and Firebase. Features real-time database sync, barcode scanning, automated stock alerts, and detailed analytics dashboard.',
    fullDescription: 'Developed a complete inventory management solution for small businesses with real-time Firebase sync, barcode scanning capabilities, automated low-stock alerts, and comprehensive reporting.',
    technologies: [
      'Kotlin',
      'Firebase',
      'Android Studio',
      'MVVM Architecture',
      'Room Database',
      'Material Design 3',
    ],
    githubUrl: 'https://github.com/omkar2914/Inventory-Management',
    liveUrl: null,
    screenshot: inventoryImg,
    featured: true,
  },
]

