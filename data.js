// ============================================================
//  PORTFOLIO DATA — Edit this file to update your website
// ============================================================

const portfolioData = {
  // ── Navigation ─────────────────────────────────────────────
  nav: {
    brandImage: "/images/logo-.png",
    links: ["About Me", "Skills", "Experience", "Projects", "Contact Me"],
    resumeUrl:
      "https://drive.google.com/file/d/1MZDbnktlIj3fVXFCJqyIG-6R33TxwKp_/view?usp=drive_link",
  },

  // ── Hero ────────────────────────────────────────────────────
  hero: {
    greeting: "Hi I am",
    name: "Samuel Karanja.",
    title: "A Software Engineer.",
    location: "Based In Nairobi, Kenya.",
    bio: {
      paragraphs: [
        "I'm a software engineer passionate about building scalable, user-focused digital experiences that solve real-world problems. With experience spanning web applications, mobile development, AI integrations, payment systems, and event technology platforms, I enjoy creating intuitive and reliable software solutions that are used in real world applications.",
        "My experience and knowledge of programming spans across various software technologies that I utilise for my personal projects and work assignments. Beyond development, I have experience leading technical projects, coordinating system integrations, and ensuring seamless delivery of digital products from conceptualisation to deployment.",
        "I have vast experience balancing technological needs and best-practices while ensuring seamless user experience delivery. I am driven by continuous learning, clean architecture, delivering the best software products possible and continuous building and improvement to meet the ever-growing demand for newer and better user experience.",
      ],
    },
    socials: [
      {
        label: "Linkedin",
        icon: "fab fa-linkedin-in",
        url: "https://www.linkedin.com/in/samuel-karanja-937756349/",
      },
      {
        label: "Github",
        icon: "fab fa-github",
        url: "https://github.com/swafey-karanja",
      },
    ],
  },
  //   <i class="fa-brands fa-typescript"></i>

  // ── Skills ──────────────────────────────────────────────────
  skills: [
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/typescript.svg" },
    { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/angular.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/reactjs.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/nextjs.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/nodejs.svg" },
    { name: "Python(Django)", icon: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/python.svg" },
    { name: "PHP(Laravel)", icon: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/php-light.svg" },
    { name: "GoLang", icon: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/golang.svg" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/postgresql.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/mongodb.svg" },
    { name: "REST APIs", icon: "fas fa-plug" },
    { name: "GraphQL APIs", icon: "https://cdn.simpleicons.org/graphql/E10098" },
    { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/git.svg" },
    { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/selfhst/icons/svg/html5.svg" },
    { name: "WordPress", icon: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/wordpress.svg" },
    { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/redis.svg" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/docker.svg" },
    { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/linux.svg" },
    { name: "Stripe", icon: "https://cdn.jsdelivr.net/gh/selfhst/icons/svg/stripe.svg" },
  ],

  // ── Experience ──────────────────────────────────────────────
  experience: [
    {
      company: "MediaForce Communications",
      logo: "images/mfc.png",
      logoColor: "#4285F4",
      role: "Software Engineer at MediaForce Communications",
      period: "Apr 2025– Present",
      description:
        "At MediaForce Communications, I develop dynamic, improve and maintain responsive web applications using React.js, Next.js and WordPress, creating digital experiences that improve user engagement, usability, and conversion rates. As Technical Lead for the IGA Summit 2026, I managed the end-to-end development and maintenance of the event website while coordinating the integration and oversight of external software systems, ensuring a seamless and successful digital experience for attendees, exhibitors, and event stakeholders.",
    },
    {
      company: "Turnkey Africa",
      logo: "images/turnkey.png",
      logoColor: "#FF0000",
      role: "Front-end Software Developer at Turnkey Africa",
      period: "Oct 2024 – March 2025",
      description:
        "At Turnkey Africa, I served as a Software Developer, focusing on the design and implementation of clean user interfaces for Turnkey Africa's turnquest insurance platform. Working on projects that involved large-scale data manipulation and display. I spearheaded my impact here where teammates were illuminated by and excited by my activities.",
    },
    {
      company: "Vesen Computing solutions",
      logo: "images/vesen.png",
      logoColor: "#555555",
      role: "Software Developer intern at Vesen Computing solutions",
      period: "June 2024 – Oct 2024",
      description:
        "During my tenure at Vesen Computing solutions, I developed and maintained responsive web and mobile applications, creating intuitive user interfaces and collaborating with teams to deliver high-quality digital solutions. My experience includes Flutter development for both web and mobile platforms, with a focus on usability, performance, and continuous improvement.",
    },
  ],

  // ── About ───────────────────────────────────────────────────
  about: {
    paragraphs: [
      "I'm a software developer who enjoys building digital products that are both useful and enjoyable to use. My passion for technology comes from a love of problem-solving and the satisfaction of turning ideas into real applications that people can interact with and benefit from.",
      "I work across front-end, back-end, database, and API development, for both web and mobile applications building responsive user interfaces, scalable backend services, and reliable data-driven applications. I have experience designing and integrating REST and GraphQL APIs, working with relational and NoSQL databases, integrating third-party services such as payment and event platforms, and developing systems that connect different services and applications.",
      "Outside of writing code, I'm driven by curiosity and a desire to keep learning. I enjoy exploring new technologies, experimenting with personal projects, and continuously improving my skills as a developer. I believe that great software is built through a combination of technical excellence, creativity, attention to detail, and a genuine understanding of the people who use it.",
      "My goal is simple: to build impactful digital experiences that solve real problems and make technology more accessible, efficient, and engaging.",
    ],
  },

  // ──Work Projects ────────────────────────────────────────────────
  projects: [
    {
      number: "01",
      title: "iGA Summit 2026 Event Website",
      description:
        "The iGA Summit 2026 website is a dynamic, user-friendly platform designed to provide comprehensive information about the iGA Summit 2026 event. The website features an intuitive interface that allows attendees, exhibitors, and stakeholders to easily access event details, schedules, speaker information, and registration options. With a focus on seamless navigation and engaging design, the iGA Summit 2026 website serves as a central hub for all event-related information, ensuring a smooth and enjoyable experience for all users.",
      image: "images/iGA.webp",
      liveUrl: "https://igasummit.com/",
    },
    {
      number: "02",
      title: "iGA Summit 2026 Awards Website",
      description:
        "The iGA Summit 2026 Awards website is a dedicated platform to recognize and celebrate excellence within the iGaming industry. The website features an elegant design that highlights award winners, providing a seamless experience for visitors to explore the achievements and learn more about the prestigious awards.",
      image: "images/iGA Awards.webp",
      liveUrl: "https://awards.igasummit.com/",
    },
    {
      number: "03",
      title: "iGA Charity Soccer Tournament Website",
      description:
        "The iGA Charity Soccer Tournament website is a platform designed to promote and facilitate the annual charity soccer tournament organized by iGA Events Limited. The website provides information about the tournament, information about the cause and ways to support the initiative.",
      image: "images/iga-soccer.webp",
      liveUrl: "https://www.igacharitygame.com/",
    },
  ],

  // ──Personal Projects ────────────────────────────────────────────────
  personal_projects: [
    {
      number: "01",
      title: "Multi-tenant Library Management System(ongoing)",
      description:
          "A full-stack library management platform with a Django REST Framework backend and a Next.js (TypeScript) frontend, built to support multiple libraries (\"tenants\"), each with their own staff, members, catalog, and physical inventory.\n" +
          "\n" +
          "Backend — Django 6 + Django REST Framework, PostgreSQL, JWT authentication. The API is split into focused modules: libraries, staff users, members, book catalog, physical copy inventory, borrowing/returns, reservations, and notifications. Background and scheduled work — overdue reminders, reservation expiry, and transactional emails — runs asynchronously through Celery with a Redis broker, so slow operations never block the API response.\n" +
          "\n" +
          "Frontend — Next.js (App Router) in strongly-typed TypeScript, styled with Tailwind CSS and shadcn/ui, using TanStack Query and Axios for data fetching.\n" +
          "\n" +
          "Key feature I implemented — member email verification pipeline: Designed an end-to-end email confirmation flow for new members: each member is created \"inactive,\" receives a welcome email with a secure, time-limited (24-hour) confirmation link, and is automatically activated once they verify — triggering a follow-up confirmation email. Tokens are never stored in plaintext, only as SHA-256 hashes, mirroring the password-reset pattern already used elsewhere in the system. All outbound emails route through Celery task queues rather than sending inline during the request, with automatic retry-on-failure, so the same pipeline scales cleanly to bulk operations like CSV member imports.",
      image: "images/library.webp",
      gitUrl: "https://github.com/swafey-karanja/hotelmanagementapp",
    },
    {
      number: "02",
      title: "RentEase — Full-Stack Real Estate Rental Platform",
      description:
          "RentEase is a full-stack rental platform I built to serve both property managers and tenants through dedicated dashboards. Managers can list and manage properties, while tenants can search, filter, favorite, and apply for rentals — all backed by a relational data model covering properties, locations, leases, applications, and payments.\n" +
          "\n" +
          "The frontend is built with Next.js 15 and React 19, styled with Tailwind CSS and shadcn/ui (Radix UI) components, with Redux Toolkit (RTK Query) managing state and data fetching. Property search includes an interactive Mapbox GL map, image uploads run through FilePond, forms are validated with React Hook Form + Zod, and authentication is handled via AWS Amplify/Cognito.\n" +
          "\n" +
          "The backend is a Node.js/Express REST API in TypeScript, using Prisma ORM with PostgreSQL and the PostGIS extension for geospatial property search. File storage runs through AWS S3, endpoints are secured with JWT, and middleware like Helmet, CORS, and Morgan handle security and logging. Together, the app showcases end-to-end skills in modern frontend architecture, geospatial database design, cloud integration, and secure API development.",
      image: "images/real-estate.webp",
      gitUrl: "https://github.com/swafey-karanja/real-estate",
    },
    {
      number: "03",
      title: "JerseyHub — Full-Stack Sports Jersey E-Commerce Platform",
      description:
          "JerseyHub is a full-stack e-commerce platform I built for browsing and purchasing sports jerseys, consisting of three separate applications: a customer-facing storefront, an admin panel for inventory and order management, and a shared backend API. Customers can browse collections, search and filter products, manage a cart, place orders, and track order status, while admins can add and manage product listings and process incoming orders — all backed by a single Node.js API and MongoDB database.\n" +
          "\n" +
          "The customer storefront and admin panel are both built with React and Vite, styled with Tailwind CSS, and use React Router for navigation. The storefront handles cart and application state through React Context, supports Google OAuth login alongside traditional authentication, and integrates both Stripe and Razorpay for payment processing. Toast notifications via React Toastify provide user feedback across both apps, and Axios handles all communication with the backend API.\n" +
          "\n" +
          "The backend is a Node.js/Express REST API using MongoDB with Mongoose for data modeling across products, users, and orders. Authentication is handled with JWT and bcrypt for password hashing, product images are uploaded and served through Cloudinary, and Multer manages file uploads. The API exposes dedicated routes and controllers for products, carts, orders, and users, with middleware enforcing authenticated and admin-only access.\n" +
          "\n" +
          "Together, the three apps form a complete e-commerce ecosystem — demonstrating skills in building multi-app architectures, integrating multiple payment gateways, handling cloud-based media storage, and implementing role-based authentication across a shared backend.",
      image: "images/jerseystore.webp",
      gitUrl: "https://github.com/swafey-karanja/JerseyStore",
    },
  ],

  // ── Testimonials ────────────────────────────────────────────
  testimonials: [
    {
      text: "I recently had to come up on 180 different types across eight different collections. Luckily I had the right partner.",
      name: "Soran Shah",
      role: "Designer",
      avatar: "https://i.pravatar.cc/60?img=11",
    },
    {
      text: "I recently had to come up on 180 different types across eight different collections. Luckily I had the right partner.",
      name: "Fiera Gheen",
      role: "Designer",
      avatar: "https://i.pravatar.cc/60?img=5",
    },
    {
      text: "I recently had to come up on 180 different types across eight different collections. Luckily I had the right partner.",
      name: "Evran Shah",
      role: "Designer",
      avatar: "https://i.pravatar.cc/60?img=8",
    },
  ],

  // ── Contact ─────────────────────────────────────────────────
  contact: {
    heading: "Let's Talk for Something special",
    subtext:
      "Whether you have a question, want to discuss a project, or just want to say hi, feel free to reach out. I'm always open to connecting with new people and exploring potential collaborations. Don't hesitate to get in touch!",
    email: "kswafeyii@gmail.com",
    phone: "+254 795 171 281",
  },

  // ── Footer ──────────────────────────────────────────────────
  footer: {
    brandImage: "/images/logo-footer.png",
    copyright: "© Portfolio. All rights reserved.",
  },
};
