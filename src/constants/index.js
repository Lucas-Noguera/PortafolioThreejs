import { layoutConfigs } from '../config'

export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
]

export const certifications = [
  {
    id: 1,
    title: 'Back End Development and APIs',
    link: 'https://www.freecodecamp.org/certification/LucasNoguera/back-end-development-and-apis',
  },
  {
    id: 2,
    title: 'Front End Development Libraries',
    link: 'https://www.freecodecamp.org/certification/LucasNoguera/front-end-development-libraries',
  },
  {
    id: 3,
    title: 'Responsive Web Design',
    link: 'https://www.freecodecamp.org/certification/LucasNoguera/responsive-web-design',
  },
  {
    id: 4,
    title: 'JavaScript Algorithms and Data Structures',
    link: 'https://www.freecodecamp.org/certification/LucasNoguera/javascript-algorithms-and-data-structures-v8',
  },
]

export const myProjects = [
  {
    title: 'ShopEasy - React Shopping Cart',
    desc: 'ShopEasy is a dynamic e-commerce interface built with React. It fetches products from an external API, allowing users to add items to their cart, adjust quantities, and view real-time updates to the total price.',
    subdesc:
      'Utilizing React Context API for state management and PropTypes for type checking, ShopEasy delivers a seamless shopping experience with responsive design and intuitive controls.',
    href: 'https://shoppingcart26.netlify.app/',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/ShoppingCart.webp',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.webp',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
        link: 'https://react.dev/',
      },
      {
        id: 2,
        name: 'Vite.js',
        path: 'assets/Vite.js.svg',
        link: 'https://vite.dev/',
      },
    ],
  },
  {
    title: 'Translate - Google Translate Clone',
    desc: 'Translatr mimics the core features of Google Translate, leveraging the Google Translate API to provide instant translations between any supported languages.',
    subdesc:
      'Built with React and styled-components, Translatr includes language detection, text input swapping, and clipboard integration for a streamlined translation workflow.',

    href: 'https://googletranslate26.netlify.app/',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/Translate.svg',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.webp',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
        link: 'https://react.dev/',
      },
      {
        id: 2,
        name: 'ReactBootstrap',
        path: 'assets/React-Bootstrap.svg',
        link: 'https://react-bootstrap.github.io/',

      },
      {
        id: 3,
        name: 'Bootstrap',
        path: '/assets/Bootstrap.svg',
        link: 'https://getbootstrap.com/',
      },
    ],
  },
  {
    title: 'CineFinder - Movie Search App',
    desc: 'CineFinder connects to The Movie Database API to let users search for films by title, displaying posters, ratings, and overviews in a clean, card-based layout.',
    subdesc:
      'Developed with React Hooks and Axios for data fetching, CineFinder features debounced search input and lazy-loading images to enhance performance.',
    href: 'https://buscadordepeliculas26.netlify.app/',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/movies.webp',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.webp',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
        link: 'https://react.dev/',
      },
      {
        id: 2,
        name: 'Vite.js',
        path: 'assets/Vite.js.svg',
        link: 'https://vite.dev/',
      },
      {
        id: 3,
        name: 'Eslint',
        path: '/assets/ESLint.svg',
        link: 'https://eslint.org/',
      },
    ],
  },
  {
    title: 'UserHub - Random Users Directory',
    desc: 'UserHub fetches random user profiles from an external API, presenting them in a searchable and paginated grid, ideal for demonstrating user listing and filtering capabilities.',
    subdesc:
      'Implemented with React and React Paginate, UserHub showcases pagination controls, real-time search, and responsive styling using Tailwind CSS.',
    href: 'https://randomusers26.netlify.app/',
    texture: '/textures/project/project4.mp4',
    logo: '/assets/UserHub.webp',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.webp',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
        link: 'https://react.dev/',
      },
      {
        id: 2,
        name: 'Tanstack Query',
        path: 'assets/react-query-seeklogo.svg',
        link: 'https://tanstack.com/query/v4',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.webp',
        link: 'https://www.typescriptlang.org/',
      },
      {
        id: 2,
        name: 'Vite.js',
        path: 'assets/Vite.js.svg',
        link: 'https://vite.dev/',
      },
    ],
  },
  {
    title: 'CRUDMaster - React & Redux Task Manager',
    desc: 'CRUDMaster is a task management application built with React and Redux. It allows users to create, read, update, and delete tasks with a persistent state managed by Redux Toolkit.',
    subdesc: 'Built with React, Redux Toolkit, Redux Thunk for async operations, React Router for navigation, and styled using Tailwind CSS, CRUDMaster delivers a seamless and responsive user experience.',

    href: 'https://github.com/Lucas-Noguera/ProyectosReact/tree/main/projects/crud-react-redux',
    texture: '/textures/project/project5.mp4',
    logo: '/assets/crud.webp',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.webp',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
        link: 'https://react.dev/',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.webp',
        link: 'https://tailwindcss.com/',
      },
      {
        id: 3,
        name: 'Redux Toolkit',
        path: '/assets/Redux.svg',
        link: 'https://redux-toolkit.js.org/',
      },
      {
        id: 4,
        name: 'Vite.js',
        path: 'assets/Vite.js.svg',
        link: 'https://vite.dev/',
      },
    ],
  },
  {
  title: 'NodeHub - Node.js Projects Collection',
  desc: 'NodeHub is a compilation that brings together all Node.js-based projects from the ProyectosNode repository by Lucas Noguera.',
  subdesc: 'This collection includes various educational and functional projects, ranging from an authentication API using JWT and bcrypt, basic Node.js and module exercises, an HTTP server with Express and advanced routing, to a template-based application using EJS and database integration for complex routes.',

    href: 'https://github.com/Lucas-Noguera/ProyectosNode',
    texture: '/textures/project/project6.mp4',
    logo: '/assets/nodeLogo.webp',
    logoStyle: {
      backgroundColor: '#001E3C',
      border: '0.2px solid #002D5A',
      boxShadow: '0px 0px 60px 0px #007AC14D',
    },
    spotlight: '/assets/spotlight3.webp',
    tags: [
      {
        id: 1,
        name: 'Node.js',
        path: '/assets/node-icon.svg',
        link: 'https://nodejs.org/en/',
      },
      {
        id: 2,
        name: 'Express',
        path: '/assets/express.svg',
        link: 'https://expressjs.com/',
      },
      {
        id: 3,
        name: 'EJS',
        path: '/assets/ejs.svg',
        link: 'https://ejs.co/',
      },
      {
        id: 4,
        name: 'MongoDB',
        path: '/assets/mongodb.svg',
        link: 'https://www.mongodb.com/',
      },
    ],
  },

]

export const calculateSizes = (isSmall, isMobile, isTablet, isIpadVertical, isWideLow) => {
  const isSpecialTablet = isIpadVertical
  const isNestLike = isWideLow

  return {
    deskScale: isSmall
      ? 0.04
      : isMobile
      ? 0.06
      : isNestLike
      ? 0.035
      : isSpecialTablet
      ? 0.048
      : isTablet
      ? 0.042
      : 0.05,

    deskPosition: isSmall
      ? [0.3, -3.6, 0]
      : isMobile
      ? [0.4, -3.5, 0]
      : isNestLike
      ? [0.2, -3.7, 0]
      : isSpecialTablet
      ? [0.2, -4.3, 0]
      : isTablet
      ? [0.25, -4, 0]
      : [0.25, -4, 0],

    cubePosition: isSmall
      ? [2, -6.5, 0]
      : isMobile
      ? [5, -5, 0]
      : isNestLike
      ? [8, -6.6, 0]
      : isSpecialTablet
      ? [5, -7, 0]
      : isTablet
      ? [4, -7, 0]
      : [9, -5.5, 0],

    reactLogoPosition: isSmall
      ? [2, 3, 0]
      : isMobile
      ? [5, 4, 0]
      : isNestLike
      ? [9, 5, 0]
      : isSpecialTablet
      ? [5, 2, 0]
      : isTablet
      ? [5, 0, 0]
      : [12, 3, 0],

    ringPosition: isSmall
      ? [-4, 6, 0]
      : isMobile
      ? [-11, 6, 0]
      : isNestLike
      ? [-19, 12, 0]
      : isSpecialTablet
      ? [-10, 5, 0]
      : isTablet
      ? [-10, 0, 0]
      : [-24, 10, 0],

    targetPosition: isSmall
      ? [-4, -11, -10]
      : isMobile
      ? [-9, -10, -10]
      : isNestLike
      ? [-12, -12, -10]
      : isSpecialTablet
      ? [-7, -13, -10]
      : isTablet
      ? [-7, -12, -10]
      : [-13, -13, -10],
  }
}

export const workExperiences = [
  {
    id: 1,
    name: 'Grupo Vierci',
    pos: 'Software Development & Customer Support Intern',
    duration: '2023 – 2025',
    title:
      'As an intern at Grupo Vierci, I rotated between software development—focusing on programming languages and building internal tools—and hands-on customer support in e-commerce. I managed in-person inquiries and ensured a positive user experience across both channels.',
    icon: '/assets/AJVierci-Logo.webp',
    animation: 'salute',
  },
  {
    id: 2,
    name: 'PY Comunicaciones',
    pos: 'ABAP & SQL Development Intern',
    duration: 'Feb 2023 – May 2023',
    title:
      'At PY Comunicaciones, I worked on ABAP and SQL projects, contributing to custom SAP modules and database queries. I collaborated with senior developers to optimize business processes and streamline data workflows.',
    icon: '/assets/py_comunicaciones.png',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'La Química Farmacéutica SA (LQF Grupo Harrison)',
    pos: 'Software Development Intern',
    duration: '2021 – 2022',
    title:
      'During my internship at LQF Grupo Harrison, I supported the IT team by developing small-scale applications and automations. I gained first-hand experience in pharmaceutical software requirements and quality-driven development practices.',
    icon: '/assets/LQF.webp',
    animation: 'victory',
  },
]

export const getLayoutConfig = ({
  isSmall,
  isMobile,
  isTablet,
  isIpadVertical,
  isWideLow,
  isDesktopLow,
}) => {
  if (isSmall) return layoutConfigs.small
  if (isMobile) return layoutConfigs.mobile
  if (isWideLow) return layoutConfigs.nestLike
  if (isIpadVertical) return layoutConfigs.specialTablet
  if (isTablet) return layoutConfigs.tablet
  if (isDesktopLow) return layoutConfigs.desktopLow
  return layoutConfigs.desktop
}
