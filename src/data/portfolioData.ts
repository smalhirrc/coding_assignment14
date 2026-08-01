import { PortfolioData } from './portfolioData.types';

export const portfolioData: PortfolioData = {
  basicInformation: {
    name: 'Sukhpreet Singh Malhi',
    title: 'Full Stack Web Development Student',
    bio: `I am a Full Stack Web Development student at Red River College Polytechnic with hands-on experience building responsive web applications using React, TypeScript, Ruby on Rails, JavaScript, HTML, CSS, SQL, and Git. Throughout my program I have developed projects that demonstrate frontend development, backend integration, database management, testing, CI/CD workflows, and secure software development practices. I enjoy creating clean, user-friendly interfaces while writing maintainable, well-structured code and continuously improving my development skills.`,
  },

  work: [
    {
      title: 'Component Library & Portfolio Website',
      description:
        'Developed a reusable React component library using TypeScript, Storybook, ESLint, Prettier, Husky, and GitHub Actions. Components were documented, tested, and integrated into a responsive portfolio website.',
      imageUrl:
        'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200',
      projectLink: 'https://github.com/smalhirrc/coding_assignment14.git',
      technologies: [
        'React',
        'TypeScript',
        'Storybook',
        'Styled Components',
        'ESLint',
        'Prettier',
        'GitHub Actions',
      ],
    },
    {
      title: 'E-Commerce Store (Ruby on Rails)',
      description:
        'Built a complete online store featuring product browsing, shopping cart, checkout process, ActiveAdmin dashboard, image uploads, customer management, and secure authentication.',
      imageUrl:
        'https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=1200',
      projectLink: 'https://github.com/yourusername/rails-store',
      technologies: [
        'Ruby on Rails',
        'SQLite',
        'ActiveAdmin',
        'Bootstrap',
        'HTML',
        'CSS',
        'JavaScript',
      ],
    },
  ],

  skills: {
    description:
      'Throughout the Full Stack Web Development program I have gained practical experience designing, building, testing, and deploying modern web applications.',

    languagesFrameworks: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'TypeScript',
      'React',
      'Ruby on Rails',
      'Node.js',
      'SQL',
      'Java',
      'Python',
    ],

    tools: [
      'Git',
      'GitHub',
      'VS Code',
      'Storybook',
      'Docker',
      'GitHub Actions',
      'ESLint',
      'Prettier',
      'Husky',
      'npm',
    ],
  },

  resources: [
    {
      title: 'MDN Web Docs',
      image: '📘',
      summary:
        'Comprehensive documentation for HTML, CSS, JavaScript, APIs, accessibility, and modern web development.',
      link: 'https://developer.mozilla.org/',
    },
    {
      title: 'React Documentation',
      image: '⚛️',
      summary:
        'Official React documentation covering hooks, components, routing, performance, and best practices.',
      link: 'https://react.dev/',
    },
  ],

  developerSetup: {
    vscodeExtensions: [
      'ESLint',
      'Prettier',
      'Dev Containers',
      'Docker DX',
      'Ruby LSP',
      'Extension Pack for Java',
      'Path Intellisense',
    ],

    terminalSetup: ['Zsh', 'Node.js', 'Git'],

    preferredEditorFont: 'monospace font',
  },
};

export default portfolioData;
