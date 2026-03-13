import type { ProfileData } from '../types';

export const profileData: ProfileData = {
  name: 'Kevin Moran',
  username: '@kevinmoran',
  headline: '(BS) in Computer Science, QA Engineer, Aspiring Software Engineer',
  bio: '😀💻',
  location: '📌 USA',
  websiteLabel: 'linkedin.com/kevinmoran',
  websiteUrl: 'https://www.linkedin.com/in/kevin-moran-950823232',
  about:
    '(BS) in Computer Science, QA Engineer, Aspiring Software Engineer',
  avatarImageUrl: '/profile_pic.jpeg',
  avatarFallback: 'KM',
  resumeUrl: '/KevinMoran_Resume.pdf',
  stats: [
    { label: 'Projects', value: '3' },
    { label: 'Years', value: '2' },
    { label: 'Skills', value: '12' },
  ],
  highlights: [
    { id: 'about', label: 'About', emoji: '💫', summary: '' },
    { id: 'resume', label: 'Resume', emoji: '📰', summary: '' },
    { id: 'work', label: 'Work', emoji: '👨🏽‍💻', summary: '' },
    { id: 'projects', label: 'Projects', emoji: '📰', summary: '' },
    { id: 'skills', label: 'Skills', emoji: '🤓', summary: '' },
    { id: 'contact', label: 'Contact', emoji: '📨', summary: '' },
  ],
  projects: [
    {
      id: 'signal',
      title: '???',
      category: 'In Progress',
      summary: 'Dealership Portal',
      description:
        'In the process of creating a web app for used car dealerships and their clients',
      impact: 'Clients are able to see details about their loan with dealerships, and make simple and easy payments.',
      tags: ['NodeJS', 'CSS', 'Product Design'],
      accent: 'from-[#f7d0c6] via-[#f6ece4] to-[#f9f5f2]',
      linkLabel: 'Test Site',
      linkUrl: 'https://dealership-portal-nine.vercel.app',
    },
    {
      id: 'meridian',
      title: 'NBA News Web App',
      category: 'School Project',
      summary: 'Built a Web App for users to get quick and easy access to NBA news and statistics,',
      description:
        'Implemented various APIs to bring NBA news and statistics to users.',
      impact: 'Created user-friendly interface with HTML & CSS for simple and effective use.',
      tags: ['HTML', 'CSS', 'APIs'],
      accent: 'from-[#dce8f7] via-[#edf4fb] to-[#f6f8fc]',
    },
    {
      id: 'atlas',
      title: 'Autonomous Vehicle Uber',
      category: 'School Project',
      summary: 'Web App for users to call autonomous vehicles, and get rides',
      description:
        'Designed a web app for users to be able to call autonomous vehicles and get rides from them.',
      impact: 'Collaborated with a scrum team to develop solutions to improve autonomous vehicle simulation.',
      tags: ['Product Design', 'Prototyping'],
      accent: 'from-[#d8efe2] via-[#eef8f2] to-[#f8fbf9]',
    },

  ],
  experience: [
    {
      company: 'Datalogic Software Inc',
      role: 'Software QA Analyst',
      period: '2024 - Present',
      details: [
        'Collaborated with Software Developers to ensure functionality, performance, and security, identifying bugs and ensuring quality standards.',
        'Developed and maintained automation scripts using Python to streamline testing and reduce testing time.',
        'Performed manual testing for new features, updates, and patches to ensure comprehensive test coverage.',
        'Participated in weekly meetings as part of an Agile development environment to ensure testing aligned with development cycles.',
        'Contributed to the continuous improvement of testing practices and tools within the QA team, enhancing the testing process.',
        'Performed testing on APIs using Postman.',
        'Wrote and executed SQL queries to verify database integrity, validate data flows, and ensure accuracy across different stages of testing.',
      ],
    },
    {
      company: 'Freelance',
      role: 'Web Development',
      period: '2022 - 2023',
      details: [
        'Designed and created premium website using HTML & JavaScript',
        'Implemented APIs to connect forms, and send messages',
        'Devised structure of the website for easy navigation and user experience.',
        'Programmed various design features using CSS',
        'Facilitated updates by focusing on maintainable software.',
      ],
    },
  ],
  skills: [
    'Python',
    'Java',
    'HTML',
    'CSS',
    'JavaScript',
    'Swift',
    'SQL',
    'Scrum',
    'Microsoft Office',
    'Wireframing',
    'UI/UX Design',
    'Postman API Testing',
  ],
  education: [
    {
      school: 'St. Edwards University',
      degree: 'BS, Computer Science',
      period: '2019 - 2023',
      notes: 'Various courses and projects completed to gain this degree',
    },
  ],
  contact: [
    { label: 'Email', value: 'kevinm9900@gmail.com', href: 'mailto:kevinm9900@gmail.com' },
    { label: 'LinkedIn', value: 'linkedin.com/kevinmoran', href: 'https://www.linkedin.com/in/kevin-moran-950823232' },
    { label: 'GitHub', value: 'github.com/kevinm9900', href: 'https://github.com/kevinm9900' },
  ],
};
