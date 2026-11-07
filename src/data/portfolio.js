// ─────────────────────────────────────────────────────────────
// All personal content lives here. Edit this file to update the
// site — no need to touch the components.
// Search for "TODO" to find everything that still needs real info.
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
  resume: '/resume.pdf', // TODO: add resume.pdf to the public/ folder
  email: 'haziq@example.com', // TODO: real email
  // TODO: create a free form at https://formspree.io and paste its ID (e.g. "xyzabcd").
  // While empty, the contact form opens the visitor's email app instead.
  formspreeId: '',
}

export const socials = {
  github: 'https://github.com/your-username', // TODO: real GitHub URL
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
  { value: 'BS CS', label: 'FAST-NUCES' },
  { value: 'Web + Mobile', label: 'Full-stack delivery' },
  { value: 'AI', label: 'Fine-tuning & agents' },
]

// `icon` keys map to icons in components/Skills.jsx
export const skillGroups = [
  {
    title: 'Frontend',
    icon: 'frontend',
    items: ['React', 'Next.js', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Tailwind CSS'],
  },
  { title: 'Mobile', icon: 'mobile', items: ['React Native'] },
  {
    title: 'Backend',
    icon: 'backend',
    items: ['Node.js', 'Express', 'REST APIs', 'Authentication'],
  },
  { title: 'Databases', icon: 'database', items: ['MongoDB', 'Firebase'] },
  {
    title: 'Cloud & DevOps',
    icon: 'cloud',
    items: ['AWS', 'Git', 'GitHub', 'Docker', 'Vercel'],
  },
  {
    title: 'AI',
    icon: 'ai',
    items: ['LLM integration', 'Model fine-tuning', 'AI agents for development'],
  },
  {
    title: 'Other',
    icon: 'security',
    items: ['Information security', 'Client communication', 'Mentoring'],
  },
]

export const experience = [
  {
    role: 'Associate Software Engineer',
    company: 'Devsinc',
    type: 'Full-time',
    mode: 'On-site, Lahore',
    period: 'Feb 2026 – Present', // TODO: set the real end month
    points: [
      // TODO: replace with real achievements
      'Built and shipped features across React/Next.js frontends and Node.js APIs for client products.',
      'Improved page performance and code quality through reviews, refactoring and reusable components.',
      'Collaborated with designers, QA and project managers in an agile team to deliver on schedule.',
    ],
  },
  {
    role: 'AI Engineer',
    company: 'Remotebase',
    type: 'Part-time',
    mode: 'Remote',
    period: 'Dec 2025 – Feb 2026',
    points: [
      'Worked on AI-driven systems, including applied model fine-tuning for real-world use cases.',
      'Worked one-on-one with clients to turn their requirements into working solutions.',
    ],
  },
  {
    role: 'Engineering Mentor',
    company: 'Ember AI Build Bootcamp',
    type: 'Mentorship',
    mode: 'Remote',
    period: '2025', // TODO: exact dates
    points: [
      'Helped non-technical builders debug, understand the stack and deploy their prototypes.',
    ],
  },
]

export const projectFilters = ['All', 'Web', 'Mobile', 'AI']

// TODO: replace these sample projects with real ones.
// Put screenshots in public/projects/ (a gradient placeholder shows if missing).
export const projects = [
  {
    title: 'AI Support Assistant',
    description:
      'A chat assistant fine-tuned on company docs that answers customer questions and hands off to a human when unsure.',
    tech: ['Next.js', 'Node.js', 'OpenAI API', 'MongoDB'],
    image: '/projects/ai-assistant.png',
    live: '',
    github: '',
    category: 'AI',
  },
  {
    title: 'Task Manager Web App',
    description:
      'A full-stack productivity app with authentication, real-time updates and a clean, responsive dashboard.',
    tech: ['React', 'Express', 'MongoDB', 'Tailwind CSS'],
    image: '/projects/task-manager.png',
    live: '',
    github: '',
    category: 'Web',
  },
  {
    title: 'Fitness Tracker App',
    description:
      'A cross-platform mobile app to log workouts, track progress with charts and sync data across devices.',
    tech: ['React Native', 'Firebase', 'Expo'],
    image: '/projects/fitness-tracker.png',
    live: '',
    github: '',
    category: 'Mobile',
  },
]

export const education = [
  {
    degree: 'BS Computer Science',
    school: 'National University of Computer and Emerging Sciences (FAST-NUCES)',
    period: 'Sep 2021 – Dec 2025',
  },
  {
    degree: 'A Levels, Pre-Engineering',
    school: 'The City School',
    period: 'Aug 2019 – Aug 2021',
  },
]

export const testimonials = [
  {
    quote: 'You are a skilled engineer, teacher and cheerleader.',
    name: 'Christine Rimer',
    role: 'Founder at Rimer Leadership Advisory',
    context: 'Ember AI Build Bootcamp',
  },
]

export const contact = {
  heading: "Let's work together",
  line: "Have a project or role in mind? Let's talk.",
}
