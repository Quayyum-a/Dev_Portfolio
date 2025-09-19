const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg", key: "ideas-1" },
  { text: "Concepts", imgPath: "/images/concepts.svg", key: "concepts-1" },
  { text: "Designs", imgPath: "/images/designs.svg", key: "designs-1" },
  { text: "Code", imgPath: "/images/code.svg", key: "code-1" },
  { text: "Ideas", imgPath: "/images/ideas.svg", key: "ideas-2" },
  { text: "Concepts", imgPath: "/images/concepts.svg", key: "concepts-2" },
  { text: "Designs", imgPath: "/images/designs.svg", key: "designs-2" },
  { text: "Code", imgPath: "/images/code.svg", key: "code-2" },
];

const counterItems = [
  { value: 4, suffix: "+", label: "Years of Experience" },
  { value: 35, suffix: "+", label: "Satisfied Clients" },
  { value: 57, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Architect of Innovation",
    desc: "Pioneering transformative solutions by blending creativity with technical mastery—turning ambitious ideas into reality.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Empathetic Collaborator",
    desc: "Fostering trust and synergy through transparent communication, active listening, and a genuine commitment to your vision.",
  },
  {
    imgPath: "/images/time.png",
    title: "Relentless Excellence",
    desc: "Consistently exceeding expectations by delivering robust, scalable software—on time, with uncompromising attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
  {
    name: "Java Developer",
    imgPath: "/images/logos/java.png",
  },
  {
    name: "MERN Stack Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "TypeScript Developer",
    imgPath: "/images/logos/typescript.png",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
  {
    name: "Java Developer",
    modelPath: "/models/java.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  // {
  //   name: "MERN Stack Developer",
  //   modelPath: "/models/node-transformed.glb",
  //   scale: 5,
  //   rotation: [0, -Math.PI / 2, 0],
  // },
  // {
  //   name: "TypeScript Developer",
  //   modelPath: "/models/python-transformed.glb",
  //   scale: 0.8,
  //   rotation: [0, 0, 0],
  // },
];

const expCards = [
  {
    review:
      "Quayyum brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Frontend Developer",
    date: "October 2024 - Present",
    responsibilities: [
      "Developed and maintained user-facing features for the Hostinger website.",
      "Collaborated closely with UI/UX designers to ensure seamless user experiences.",
      "Optimized web applications for maximum speed and scalability.",
    ],
  },
  {
    review:
      "Quayyum's contributions to Docker's web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Full Stack Developer",
    date: "October 2024 - Present",
    responsibilities: [
      "Led the development of Docker's web applications, focusing on scalability.",
      "Worked with backend engineers to integrate APIs seamlessly with the frontend.",
      "Contributed to open-source projects that were used with the Docker ecosystem.",
    ],
  },
  {
    review:
      "Quayyum's work on Appwrite's mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "React Native Developer",
    date: "October 2024 - Present",
    responsibilities: [
      "Built cross-platform mobile apps using React Native, integrating with Appwrite's backend services.",
      "Improved app performance and user experience through code optimization and testing.",
      "Coordinated with the product team to implement features based on feedback.",
    ],
  },
  {
    review:
      "Quayyum's expertise in Java enabled the development of robust, scalable backend systems. His deep understanding of object-oriented programming and design patterns ensured high-quality, maintainable code.",
    imgPath: "/images/exp4.png",
    logoPath: "/images/logo4.png",
    title: "Java Developer",
    date: "October 2024 - Present",
    responsibilities: [
      "Designed and implemented backend services using Java and Spring Boot.",
      "Applied object-oriented principles to deliver clean, modular code.",
      "Collaborated with cross-functional teams to integrate Java services with frontend applications.",
    ],
  },
  {
    review:
      "Quayyum's proficiency in Python accelerated our data-driven projects. His ability to automate workflows and build efficient scripts made a significant impact on productivity.",
    imgPath: "/images/exp5.png",
    logoPath: "/images/logo5.png",
    title: "Python Developer",
    date: "October 2024 - Present",
    responsibilities: [
      "Developed automation scripts and data processing pipelines in Python.",
      "Utilized popular libraries such as Pandas and NumPy for data analysis.",
      "Integrated Python solutions with web and cloud platforms.",
    ],
  },
  {
    review:
      "Quayyum's full-stack skills with the MERN stack brought end-to-end solutions to our projects. His ability to handle both frontend and backend tasks ensured seamless delivery.",
    imgPath: "/images/exp6.png",
    logoPath: "/images/logo6.png",
    title: "MERN Stack Developer",
    date: "October 2024 - Present",
    responsibilities: [
      "Built dynamic web applications using MongoDB, Express.js, React, and Node.js.",
      "Implemented RESTful APIs and managed database integrations.",
      "Ensured responsive UI/UX and optimized application performance.",
    ],
  },
  {
    review:
      "Quayyum's adoption of TypeScript improved code reliability and maintainability across our codebase. His focus on type safety and modern JavaScript practices elevated our development standards.",
    imgPath: "/images/exp7.png",
    logoPath: "/images/logo7.png",
    title: "TypeScript Developer",
    date: "October 2024 - Present",
    responsibilities: [
      "Migrated large JavaScript codebases to TypeScript for enhanced type safety.",
      "Leveraged TypeScript features to reduce bugs and improve developer experience.",
      "Collaborated on scalable frontend and backend projects using TypeScript.",
    ],
  },
  {
    review:
      "Quayyum's expertise in Flutter enabled rapid development of beautiful, cross-platform mobile apps. His attention to UI detail and performance optimization set a new standard for our mobile projects.",
    imgPath: "/images/exp8.png",
    logoPath: "/images/logo8.png",
    title: "Flutter Developer",
    date: "October 2024 - Present",
    responsibilities: [
      "Developed cross-platform mobile applications using Flutter and Dart.",
      "Implemented custom UI components and animations for enhanced user experience.",
      "Optimized app performance and ensured smooth deployment to both iOS and Android stores.",
    ],
  },
  {
    review:
      "Quayyum's proficiency with SQL databases ensured our data was always reliable, secure, and efficiently managed. His database design and optimization skills were crucial for our backend systems.",
    imgPath: "/images/exp9.png",
    logoPath: "/images/logo9.png",
    title: "SQL Developer",
    date: "October 2024 - Present",
    responsibilities: [
      "Designed and maintained relational databases using SQL.",
      "Wrote complex queries and optimized database performance.",
      "Ensured data integrity and security across all applications.",
    ],
  },
  {
    review:
      "Quayyum's mastery of Docker streamlined our development and deployment workflows. His containerization strategies improved scalability and reliability across environments.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "Docker Specialist",
    date: "October 2024 - Present",
    responsibilities: [
      "Containerized applications and services using Docker.",
      "Developed and maintained CI/CD pipelines for automated deployments.",
      "Trained team members on best practices for containerization and orchestration.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Adeola Ogunleye",
    mentions: "@adeolaogunleye",
    review:
      "Quayyum quickly turned our complex requirements into a smooth, production-ready website. His problem‑solving is outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Chinedu Okafor",
    mentions: "@chineduokafor",
    review:
      "Working with Quayyum was excellent. He modernized our outdated site into an easy-to-use platform with great attention to detail.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Aisha Bello",
    mentions: "@aishabello",
    review:
      "Collaborating with Quayyum was a pleasure. He’s professional, responsive, and committed to delivering results end to end.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Ifeanyi Nwosu",
    mentions: "@ifeanyinwosu",
    review:
      "Quayyum transformed our old website into a fresh, intuitive experience. Clean work from start to finish.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Temitope Adebayo",
    mentions: "@temitopeadebayo",
    review:
      "Quayyum delivered a robust, scalable solution for our e‑commerce app. Our online sales have grown significantly since launch.",
    imgPath: "/images/client4.png",
  },
  {
    name: "Fatima Yusuf",
    mentions: "@fatemayusuf",
    review:
      "He understood our requirements perfectly and delivered beyond expectations. Strong skills across frontend and backend.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
