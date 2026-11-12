// ─────────────────────────────────────────────────────────────
// All personal content lives here. Edit this file to update the
// site — no need to touch the components.
// Search for "TODO" to find anything that still needs real info.
// ─────────────────────────────────────────────────────────────

export const personal = {
  name: 'Haziq Ali',
  initials: 'HA',
  title: 'Full-Stack Engineer',
  stack: 'React, Next.js, Node.js',
  focus: 'AI-Powered Development',
  tagline: 'Building web, mobile and AI-powered products, from first prototype to production.',
  location: 'Lahore, Pakistan',
  availability: 'Open to remote and on-site roles',
  photo: '/profile.webp', // set to '' to show the "HA" initials avatar instead
  resume: '/resume.pdf',
  resumeFileName: 'Haziq-Ali-Resume.pdf',
  email: 'haziqali86@gmail.com',
  // TODO: create a free form at https://formspree.io and paste its ID (e.g. "xyzabcd").
  // While empty, the contact form opens the visitor's email app instead.
  formspreeId: '',
}

export const socials = {
  github: 'https://github.com/HaziqAli86',
  linkedin: 'https://www.linkedin.com/in/haziq-ali-bb147a261/',
  email: `mailto:${personal.email}`,
}

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

export const about = [
  'Experienced full-stack engineer with a Computer Science degree from FAST-NUCES, building web and mobile applications from first prototype to production. Most recently, I worked as an Associate Software Engineer at Devsinc. I work across the stack with React, Next.js, React Native, Node.js, MongoDB and Firebase, with a strong focus on performance, security and user experience.',
  'As an AI Engineer at Remotebase, I worked on AI-driven systems, including applied model fine-tuning for real-world use cases, and worked one-on-one with clients to turn their requirements into working solutions. I also have practical experience with AWS and a background in information security.',
  'I enjoy turning complex problems into simple, high-impact solutions. Currently open to roles in any stack, and I use AI agents to work faster and smarter. Always curious, always building.',
]

// Quick facts shown beside the About text
export const highlights = [
  { value: 'Fintech app', label: 'Shipped to production in KSA' },
  { value: 'AWS Serverless', label: 'Lambda · Step Functions · EventBridge' },
  { value: 'AI & RAG', label: 'Fine-tuning · LLaMA · Qwen' },
]

// `icon` keys map to icons in components/Skills.jsx
export const skillGroups = [
  {
    title: 'Frontend',
    icon: 'frontend',
    items: ['React', 'Next.js', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Tailwind CSS', 'Micro-Frontends', 'Framer Motion'],
  },
  { title: 'Mobile', icon: 'mobile', items: ['React Native', 'Android (Java)'] },
  {
    title: 'Backend',
    icon: 'backend',
    items: ['Node.js', 'Express', 'FastAPI', 'C# .NET', 'REST APIs', 'Authentication', 'Microservices'],
  },
  {
    title: 'Databases',
    icon: 'database',
    items: ['MongoDB', 'Firebase', 'SQL', 'Prisma', 'Redis'],
  },
  {
    title: 'Cloud & DevOps',
    icon: 'cloud',
    items: ['AWS Lambda', 'Step Functions', 'EventBridge', 'EC2', 'S3', 'Jenkins', 'Docker', 'Git', 'GitHub', 'Vercel'],
  },
  {
    title: 'AI',
    icon: 'ai',
    items: ['LLM integration', 'RAG', 'Model fine-tuning', 'LLaMA 3.1', 'Qwen 2.5', 'Flan-T5', 'Hugging Face', 'AI agents for development'],
  },
  {
    title: 'Security & Tools',
    icon: 'security',
    items: ['Information security', 'Snyk', 'OSINT', 'Jira', 'Postman'],
  },
  {
    title: 'Languages',
    icon: 'languages',
    items: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C/C++', 'C#'],
  },
]

export const experience = [
  {
    role: 'Associate Software Engineer',
    company: 'Devsinc',
    type: 'Full-time',
    mode: 'On-site, Lahore',
    period: 'Feb 2026 – Oct 2026',
    points: [
      'Built a production-grade trading fintech app for the Saudi market in React Native and TypeScript, including Nafath identity verification and bank account integrations, and took it through to production release.',
      'Engineered AWS serverless workflows with Lambda, Step Functions and EventBridge to automate media processing (e.g. video aspect-ratio transforms), while maintaining legacy SWF across Production, QA and Dev.',
      'Delivered features in an enterprise React micro-frontend architecture backed by BFF layers and C# .NET microservices in a monorepo; verified builds in Jenkins and fixed security issues flagged by Snyk.',
    ],
    tech: ['React Native', 'TypeScript', 'AWS Lambda', 'Step Functions', 'React MFEs', 'C# .NET', 'Jenkins', 'Snyk'],
  },
  {
    role: 'AI Engineer',
    company: 'Remotebase',
    type: 'Part-time',
    mode: 'Remote',
    period: 'Dec 2025 – Feb 2026',
    points: [
      'Worked on AI-driven systems, including applied model fine-tuning for real-world use cases.',
      'Worked one-on-one with clients to turn their requirements into working solutions, supporting users of SnapDev, an AI-powered full-stack app builder, with React, Next.js and FastAPI.',
      'Debugged AI-generated code and cloud deployments, and fed recurring issues back to the product team to improve developer experience.',
      'QA for a B2B AI and web platform, validating backend workflows built on Redis and Celery workers.',
      'Engineering Mentor for the Ember AI Build Bootcamp: helped non-technical builders debug, understand the stack and deploy their prototypes.',
    ],
    tech: ['React', 'Next.js', 'FastAPI', 'Redis', 'Celery', 'QA', 'Mentoring'],
  },
  // To add more roles, copy one of the blocks above.
]

export const projectFilters = ['All', 'Web', 'Mobile', 'AI', 'Desktop', 'Security']

// Screenshots live in public/projects/<folder>/. The first image is the card cover;
// clicking a card's image opens all of them in a gallery.
// `device: 'mobile'` shows phone screenshots side by side instead of cropping them.
// A gradient placeholder shows automatically if a project has no images.
export const projects = [
  {
    title: 'CaseMate',
    description:
      "AI legal assistant for Pakistan's laws that gives pre-litigation guidance and case insights. Uses RAG with OpenAI models and LLaMA 3.1 8B, plus a document analyzer and ready-made legal templates. Final-year project.",
    tech: ['Next.js', 'FastAPI', 'Python', 'RAG', 'LLaMA 3.1', 'MongoDB', 'Firebase'],
    images: ['/projects/casemate/1.jpg', '/projects/casemate/2.jpg'],
    live: '',
    github: 'https://github.com/HaziqAli86/Casemate',
    categories: ['AI', 'Web'],
  },
  {
    title: 'SneakerHub',
    description:
      'Production-ready sneaker store (live as "MyPlug") with size and category filters, cart with multiple delivery options, secure sign-in, Stripe payments, order-confirmation emails and admin controls.',
    tech: ['Next.js', 'TypeScript', 'Prisma', 'MongoDB', 'Stripe', 'Clerk', 'Resend'],
    images: [
      '/projects/sneakerhub/1.jpg',
      '/projects/sneakerhub/2.jpg',
      '/projects/sneakerhub/3.jpg',
      '/projects/sneakerhub/4.jpg',
      '/projects/sneakerhub/5.jpg',
    ],
    live: '', // TODO: live link if deployed
    github: '', // TODO: repo link if public
    categories: ['Web'],
  },
  {
    title: 'LexiBot',
    description:
      'General-purpose AI chatbot running Llama 3.1 8B with real-time document analysis and a smooth animated UI, deployed across AWS EC2, Cloudflare and Vercel.',
    tech: ['Next.js', 'FastAPI', 'Llama 3.1', 'Framer Motion', 'AWS EC2', 'Hugging Face', 'MongoDB'],
    images: ['/projects/lexibot/1.jpg', '/projects/lexibot/2.jpg'],
    live: 'https://lexi-bot-navy.vercel.app',
    github: 'https://github.com/HaziqAli86/LexiBot',
    categories: ['AI', 'Web'],
  },
  {
    title: 'CareHub',
    description:
      'Android app connecting doctors and patients: appointment requests with doctor approval, real-time chat, availability management and scheduling filters.',
    tech: ['Java', 'Android', 'Firebase Auth', 'Firestore', 'Cloudinary'],
    images: [
      '/projects/carehub/1.jpg',
      '/projects/carehub/2.jpg',
      '/projects/carehub/3.jpg',
      '/projects/carehub/4.jpg',
      '/projects/carehub/5.jpg',
    ],
    device: 'mobile',
    live: '',
    github: '', // TODO: repo link if public
    categories: ['Mobile'],
  },
  {
    title: 'SAS Invoice System',
    description:
      'Desktop invoicing app built for SAS Crop Sciences. Smart fields that remember new customers, products and batches, auto-calculated totals, and a print-ready sale invoice / delivery challan with the amount in words.',
    tech: ['Desktop app', 'Invoicing', 'Print layout'], // TODO: real tech stack
    images: ['/projects/sas-invoice/1.jpg', '/projects/sas-invoice/2.jpg'],
    live: '',
    github: '',
    categories: ['Desktop'],
  },
  {
    title: 'OSINT & Vulnerability Scanner',
    description:
      'Automated security assessment tool that combines Nmap port scanning, live CVE lookups from the NVD API and OSINT gathering with theHarvester into one report.',
    tech: ['Python', 'Nmap', 'NVD API', 'theHarvester'],
    images: [],
    live: '',
    github: 'https://github.com/HaziqAli86/OSINT-and-Vulnerability-Assessment-Tool',
    categories: ['Security'],
  },
]

export const education = [
  {
    degree: 'BS Computer Science',
    school: 'National University of Computer and Emerging Sciences (FAST-NUCES), Lahore',
    period: 'Sep 2021 – Dec 2025',
  },
  {
    degree: 'A Levels, Pre-Engineering',
    school: 'The City School, Sahiwal Campus',
    period: 'Aug 2019 – Aug 2021',
  },
]

export const testimonials = [
  {
    quote: 'You are a skilled engineer, teacher and cheerleader.',
    name: 'Christine Rimer',
    role: 'Founder at Rimer Leadership Advisory',
    context: 'Ember AI Build Bootcamp (Remotebase)',
  },
]

export const contact = {
  heading: "Let's work together",
  line: "Have a project or role in mind? Let's talk.",
}
