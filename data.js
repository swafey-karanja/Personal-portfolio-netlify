// ============================================================
//  PORTFOLIO DATA — Edit this file to update your website
// ============================================================

const portfolioData = {
  // ── Navigation ─────────────────────────────────────────────
  nav: {
    brandImage: "/images/logo-.png",
    links: ["About Me", "Skills", "Project", "Contact Me"],
    resumeUrl:
      "https://drive.google.com/file/d/1n4oq62792RnTntG3EVQXwshaBxLJkCEi/view?usp=sharing",
  },

  // ── Hero ────────────────────────────────────────────────────
  hero: {
    greeting: "Hello I'am",
    name: "Samuel Karanja.",
    title: "A Software Engineer.",
    location: "Based In Nairobi, Kenya.",
    bio: {
      paragraphs: [
        "I'm a software engineer passionate about building scalable, user-focused digital experiences that solve real-world problems. With experience spanning web applications, mobile development, AI integrations, payment systems, and event technology platforms, I enjoy turning complex requirements into intuitive and reliable solutions.",
        "My expertise includes React, Next.js, JavaScript, TypeScript, and modern web technologies, enabling me to deliver responsive applications across web and mobile platforms. Beyond development, I have experience leading technical projects, coordinating system integrations, and ensuring seamless delivery of digital products from concept to deployment.",
        "I thrive at the intersection of technology and user experience, whether I'm developing high-performance applications, integrating third-party services, optimizing existing systems, or implementing innovative features such as AI-powered document assistants. I am driven by continuous learning, clean architecture, and building technology that creates measurable impact for organizations and the people they serve.",
        "When approaching a project, my focus is always on creating solutions that are not only technically sound but also intuitive, accessible, and aligned with business objectives.",
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
    { name: "TypeScript", icon: "devicon-typescript-plain" },
    { name: "Angular", icon: "fab fa-angular" },
    { name: "React", icon: "fab fa-react" },
    { name: "Next.js", icon: "fas fa-n" },
    { name: "Node.js", icon: "fab fa-node-js" },
    { name: "Python", icon: "fab fa-python" },
    { name: "PostgreSQL", icon: "fas fa-database" },
    { name: "MongoDB", icon: "fas fa-leaf" },
    { name: "REST APIs", icon: "fas fa-plug" },
    { name: "Tailwind CSS", icon: "devicon-tailwindcss-original" },
    { name: "Git", icon: "fab fa-git-alt" },
    { name: "CSS", icon: "fab fa-css3-alt" },
    { name: "WordPress", icon: "fab fa-wordpress" },
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
      "I work across web and mobile development, with experience building projects using React, Next.js, Flutter, and modern web technologies. Whether I'm developing an event platform, integrating payment systems, creating AI-powered tools, or refining user experiences, I enjoy the challenge of finding practical and elegant solutions to complex problems.",
      "Outside of writing code, I'm driven by curiosity and a desire to keep learning. I enjoy exploring new technologies, experimenting with personal projects, and continuously improving my skills as a developer. I believe that great software is built through a combination of technical excellence, creativity, attention to detail, and a genuine understanding of the people who use it.",
      "My goal is simple: to build impactful digital experiences that solve real problems and make technology more accessible, efficient, and engaging.",
    ],
  },

  // ── Projects ────────────────────────────────────────────────
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
    copyright: "© 2026 Portfolio. All rights reserved.",
  },
};
