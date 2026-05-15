import buildBazaarImg from '../assets/projects/build-bazaar.svg'
import inventoryImg from '../assets/projects/inventory-app.svg'
import aiHcpCrmImg from '../assets/projects/ai-hcp-crm.svg'
import neuraFlowAiImg from '../assets/projects/neura-flow-ai.svg'
import cloudCartAiImg from '../assets/projects/cloudcart-ai.svg'

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
    githubUrl: 'https://github.com/omkarr-04/Build-Bazaar',
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
    githubUrl: 'https://github.com/omkarr-04/Inventory-Management',
    liveUrl: null,
    screenshot: inventoryImg,
    featured: true,
  },
  {
    id: 3,
    title: 'AI-HCP CRM',
    tagline: 'AI CRM for Medical Sales Teams',
    description:
      'A full-stack CRM for medical sales reps to log interactions with healthcare professionals using structured forms and an AI chat interface. Features conversational logging, history tracking, and LLM-powered summaries.',
    fullDescription:
      'Built a CRM experience for healthcare sales teams with AI-driven interaction logging, follow-up suggestions, and a comprehensive dashboard for relationship tracking.',
    technologies: [
      'React',
      'Redux Toolkit',
      'Tailwind CSS',
      'FastAPI',
      'PostgreSQL',
      'LangGraph',
    ],
    githubUrl: 'https://github.com/omkarr-04/ai-hcp-crm',
    liveUrl: null,
    screenshot: aiHcpCrmImg,
    featured: true,
  },
  {
    id: 4,
    title: 'Neura Flow AI',
    tagline: 'AI Workflow Automation Platform',
    description:
      'An AI-powered workflow automation platform that streamlines business processes using intelligent agents, real-time orchestration, and modern full-stack architecture.',
    fullDescription:
      'Includes AI task automation, workflow pipelines, analytics dashboards, and scalable backend services for business process orchestration.',
    technologies: [
      'React.js',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Node.js',
      'PostgreSQL',
      'OpenAI API',
      'LangChain',
    ],
    githubUrl: 'https://github.com/omkarr-04/neura-flow-ai',
    liveUrl: 'https://neura-flow-ai.onrender.com/',
    screenshot: neuraFlowAiImg,
    featured: true,
  },
  {
    id: 5,
    title: 'CloudCart AI',
    tagline: 'Cloud-Native AI E-Commerce Platform',
    description:
      'A cloud-native AI e-commerce platform focused on smart product recommendations, inventory optimization, and scalable online shopping experiences.',
    fullDescription:
      'Features AI-driven insights, modern UI/UX, secure authentication, and responsive dashboards for smarter retail operations.',
    technologies: [
      'React.js',
      'Firebase',
      'Tailwind CSS',
      'Node.js',
      'Express.js',
      'MongoDB',
      'AI APIs',
    ],
    githubUrl: 'https://github.com/omkarr-04/cloudcart-ai',
    liveUrl: null,
    screenshot: cloudCartAiImg,
    featured: true,
  },
]

