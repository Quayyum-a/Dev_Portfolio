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
  { text: "Backend Systems", imgPath: "/images/code.svg", key: "backend-1" },
  { text: "API Architecture", imgPath: "/images/code.svg", key: "api-1" },
  { text: "Cloud Solutions", imgPath: "/images/code.svg", key: "cloud-1" },
  { text: "Scalable Applications", imgPath: "/images/code.svg", key: "scalable-1" },
  { text: "Ideas", imgPath: "/images/ideas.svg", key: "ideas-2" },
  { text: "Concepts", imgPath: "/images/concepts.svg", key: "concepts-2" },
  { text: "Designs", imgPath: "/images/designs.svg", key: "designs-2" },
  { text: "Code", imgPath: "/images/code.svg", key: "code-2" },
  { text: "Databases", imgPath: "/images/code.svg", key: "database-2" },
  { text: "Microservices", imgPath: "/images/code.svg", key: "microservices-2" },
  { text: "Full-Stack", imgPath: "/images/code.svg", key: "fullstack-2" },
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
    challenge: "Needed to improve user engagement and conversion rates on a high-traffic e-commerce platform experiencing slow page loads and poor mobile experience.",
    solution: "Led a frontend optimization initiative implementing code splitting, lazy loading, and server-side rendering with React. Redesigned critical user flows with improved accessibility and mobile responsiveness.",
    impact: [
      { label: "Page Load Time", value: "65%", description: "Reduction in average load time (from 4.4s to 1.5s)" },
      { label: "Conversion Rate", value: "22%", description: "Increase in completed purchases (from 12% to 14.6%)" },
      { label: "Mobile Conversion", value: "34%", description: "Increase in mobile conversion rate" },
      { label: "SEO Ranking", value: "3x", description: "Improvement in search engine rankings for key terms" },
      { label: "User Engagement", value: "28%", description: "Increase in average session duration" }
    ],
    technicalDetails: "Implemented React.lazy and Suspense for code splitting, used Intersection Observer for lazy loading images, added server-side rendering with Next.js for SEO optimization, and improved accessibility compliance to WCAG 2.1 AA standards.",
    responsibilities: [
      "Developed and maintained user-facing features for the Hostinger website.",
      "Collaborated closely with UI/UX designers to ensure seamless user experiences.",
      "Optimized web applications for maximum speed and scalability.",
    ],
    technologies: [
      { name: "React", level: "Expert" },
      { name: "TypeScript", level: "Expert" },
      { name: "Next.js", level: "Advanced" },
      { name: "HTML5/CSS3", level: "Expert" },
      { name: "Webpack", level: "Advanced" }
    ]
  },
  {
    review:
      "Quayyum's contributions to Docker's web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Full Stack Developer",
    date: "October 2024 - Present",
    challenge: "Needed to modernize a legacy monolithic application to improve scalability, maintainability, and deployment frequency while serving millions of users.",
    solution: "Architected and led the migration to a microservices architecture using Node.js and Express. Implemented API gateway, service mesh, and containerization with Docker/Kubernetes for improved scalability and fault tolerance.",
    impact: [
      { label: "Deployment Frequency", value: "10x", description: "Increased from monthly to multiple times per week" },
      { label: "System Uptime", value: "99.95%", description: "Achieved through improved fault isolation and redundancy" },
      { label: "Release Cycle Time", value: "80%", description: "Reduction in time from code commit to production" },
      { label: "Operational Costs", value: "40%", description: "Decrease through optimized resource utilization" }
    ],
    technicalDetails: "Designed microservices architecture with Domain-Driven Design principles. Implemented API Gateway pattern with rate limiting and authentication. Used Docker containers orchestrated by Kubernetes with Helm charts for deployment. Applied circuit breaker pattern for resilience.",
    responsibilities: [
      "Led the development of Docker's web applications, focusing on scalability.",
      "Worked with backend engineers to integrate APIs seamlessly with the frontend.",
      "Contributed to open-source projects that were used with the Docker ecosystem.",
    ],
    technologies: [
      { name: "Node.js", level: "Expert" },
      { name: "Express.js", level: "Expert" },
      { name: "Docker", level: "Expert" },
      { name: "Kubernetes", level: "Advanced" },
      { name: "MongoDB", level: "Advanced" }
    ]
  },
  {
    review:
      "Quayyum's work on Appwrite's mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "React Native Developer",
    date: "October 2024 - Present",
    challenge: "Required to build a cross-platform mobile application that could deliver native-like performance while maintaining a single codebase for iOS and Android platforms.",
    solution: "Developed a high-performance React Native application with native module integration for performance-critical features. Implemented sophisticated state management with Redux Toolkit and optimized rendering with memoization techniques.",
    impact: [
      { label: "App Store Rating", value: "4.8/5", description: "Achieved on both iOS and Android platforms" },
      { label: "Development Speed", value: "60%", description: "Increase compared to native separate development" },
      { label: "Code Reusability", value: "85%", description: "Shared code between iOS and Android platforms" },
      { label: "App Launch Time", value: "40%", description: "Reduction in cold start time" }
    ],
    technicalDetails: "Used React Native with TypeScript for type safety. Implemented Redux Toolkit for state management with RTK Query for data fetching. Integrated native modules using JSI for performance-critical image processing. Optimized list rendering with FlatList and virtualization.",
    responsibilities: [
      "Built cross-platform mobile apps using React Native, integrating with Appwrite's backend services.",
      "Improved app performance and user experience through code optimization and testing.",
      "Coordinated with the product team to implement features based on feedback.",
    ],
    technologies: [
      { name: "React Native", level: "Expert" },
      { name: "TypeScript", level: "Expert" },
      { name: "Redux Toolkit", level: "Advanced" },
      { name: "React Navigation", level: "Advanced" }
    ]
  },
  {
    review:
      "Quayyum's expertise in Java enabled the development of robust, scalable backend systems. His deep understanding of object-oriented programming and design patterns ensured high-quality, maintainable code.",
    imgPath: "/images/exp4.png",
    logoPath: "/images/logo4.png",
    title: "Java Developer",
    date: "October 2024 - Present",
    challenge: "Required to modernize a legacy Java EE application to improve performance, scalability, and maintainability while reducing operational complexity.",
    solution: "Led the migration from Java EE to Spring Boot microservices architecture. Implemented domain-driven design, circuit breaker pattern, and centralized configuration management for improved resilience and scalability.",
    impact: [
      { label: "Application Response Time", value: "70%", description: "Improved from 8s to 2.4s average response time" },
      { label: "System Throughput", value: "5x", description: "Increase in requests handled per second" },
      { label: "Deployment Frequency", value: "20x", description: "Increased from quarterly to weekly releases" },
      { label: "Code Maintainability", value: "60%", description: "Improvement based on reduced bug count and faster feature development" }
    ],
    technicalDetails: "Refactored monolithic application into 12 microservices using Spring Boot and Spring Cloud. Implemented service discovery with Eureka, load balancing with Ribbon, and fault tolerance with Hystrix. Used Spring Data JPA for database access and Swagger for API documentation.",
    responsibilities: [
      "Designed and implemented backend services using Java and Spring Boot.",
      "Applied object-oriented principles to deliver clean, modular code.",
      "Collaborated with cross-functional teams to integrate Java services with frontend applications.",
    ],
    technologies: [
      { name: "Java", level: "Expert" },
      { name: "Spring Boot", level: "Expert" },
      { name: "Spring Cloud", level: "Advanced" },
      { name: "REST API Design", level: "Expert" },
      { name: "PostgreSQL", level: "Advanced" }
    ]
  },
  {
    review:
      "Quayyum's proficiency in Python accelerated our data-driven projects. His ability to automate workflows and build efficient scripts made a significant impact on productivity.",
    imgPath: "/images/exp5.png",
    logoPath: "/images/logo5.png",
    title: "Python Developer",
    date: "October 2024 - Present",
    challenge: "Needed to automate manual data processing workflows that were time-consuming, error-prone, and unable to scale with growing data volumes from multiple sources.",
    solution: "Designed and implemented scalable data pipelines using Python with Apache Airflow for workflow orchestration. Created ETL processes to extract, transform, and load data from various sources into a data warehouse for analytics.",
    impact: [
      { label: "Processing Time", value: "90%", description: "Reduction from 8 hours to 45 minutes for daily data pipelines" },
      { label: "Data Accuracy", value: "99.9%", description: "Improvement through automated validation and error handling" },
      { label: "Manual Effort", value: "80%", description: "Reduction in manual data processing tasks" },
      { label: "Scalability", value: "10x", description: "Increase in data volume processed without additional resources" }
    ],
    technicalDetails: "Built ETL pipelines using Pandas for data transformation, SQLAlchemy for database interactions, and Apache Airflow for workflow orchestration. Implemented data validation with Great Expectations and monitoring with Prometheus/Grafana.",
    responsibilities: [
      "Developed automation scripts and data processing pipelines in Python.",
      "Utilized popular libraries such as Pandas and NumPy for data analysis.",
      "Integrated Python solutions with web and cloud platforms.",
    ],
    technologies: [
      { name: "Python", level: "Expert" },
      { name: "Pandas", level: "Expert" },
      { name: "NumPy", level: "Advanced" },
      { name: "Apache Airflow", level: "Advanced" },
      { name: "SQLAlchemy", level: "Advanced" }
    ]
  },
  {
    review:
      "Quayyum's full-stack skills with the MERN stack brought end-to-end solutions to our projects. His ability to handle both frontend and backend tasks ensured seamless delivery.",
    imgPath: "/images/exp6.png",
    logoPath: "/images/logo6.png",
    title: "MERN Stack Developer",
    date: "October 2024 - Present",
    challenge: "Needed to develop a real-time collaborative application that could handle thousands of concurrent users with low latency updates while maintaining data consistency across clients.",
    solution: "Architected a real-time application using MongoDB for data storage, Express.js for REST APIs, React for frontend UI, and Node.js with Socket.IO for real-time communication. Implemented optimistic UI updates and conflict resolution strategies.",
    impact: [
      { label: "User Satisfaction", value: "4.9/5", description: "Average rating from user surveys" },
      { label: "System Scalability", value: "10k+", description: "Supported concurrent users during peak usage" },
      { label: "Update Latency", value: "200ms", description: "Average time for changes to propagate across all clients" },
      { label: "Development Velocity", value: "3x", description: "Increase in features delivered per sprint" }
    ],
    technicalDetails: "Implemented real-time synchronization using Socket.IO rooms and namespaces. Used MongoDB with proper indexing for efficient queries. Applied Redux for state management on frontend with middleware for handling asynchronous operations.",
    responsibilities: [
      "Built dynamic web applications using MongoDB, Express.js, React, and Node.js.",
      "Implemented RESTful APIs and managed database integrations.",
      "Ensured responsive UI/UX and optimized application performance.",
    ],
    technologies: [
      { name: "MongoDB", level: "Expert" },
      { name: "Express.js", level: "Expert" },
      { name: "React", level: "Expert" },
      { name: "Node.js", level: "Expert" },
      { name: "Socket.IO", level: "Advanced" }
    ]
  },
  {
    review:
      "Quayyum's adoption of TypeScript improved code reliability and maintainability across our codebase. His focus on type safety and modern JavaScript practices elevated our development standards.",
    imgPath: "/images/exp7.png",
    logoPath: "/images/logo7.png",
    title: "TypeScript Developer",
    date: "October 2024 - Present",
    challenge: "Needed to improve code quality and reduce bugs in a large JavaScript codebase that was becoming increasingly difficult to maintain as the project scaled.",
    solution: "Led a strategic migration from JavaScript to TypeScript across the entire codebase. Implemented strict type checking, refactored legacy code to use interfaces and types, and established coding standards and code review processes.",
    impact: [
      { label: "Bug Reduction", value: "75%", description: "Decrease in production bugs after TypeScript migration" },
      { label: "Developer Productivity", value: "40%", description: "Increase in features delivered per developer per sprint" },
      { label: "Code Refactoring Speed", value: "3x", description: "Increase in safe refactoring operations" },
      { label: "Onboarding Time", value: "50%", description: "Reduction in time for new developers to become productive" }
    ],
    technicalDetails: "Configured TypeScript with strict mode enabled. Used barrel exports for clean imports. Implemented path aliases for cleaner module resolution. Configured ESLint and Prettier for code quality and formatting.",
    responsibilities: [
      "Migrated large JavaScript codebases to TypeScript for enhanced type safety.",
      "Leveraged TypeScript features to reduce bugs and improve developer experience.",
      "Collaborated on scalable frontend and backend projects using TypeScript.",
    ],
    technologies: [
      { name: "TypeScript", level: "Expert" },
      { name: "ESLint", level: "Advanced" },
      { name: "Prettier", level: "Advanced" },
      { name: "Webpack", level: "Advanced" },
      { name: "React", level: "Expert" }
    ]
  },
  {
    review:
      "Quayyum's expertise in Flutter enabled rapid development of beautiful, cross-platform mobile apps. His attention to UI detail and performance optimization set a new standard for our mobile projects.",
    imgPath: "/images/exp8.png",
    logoPath: "/images/logo8.png",
    title: "Flutter Developer",
    date: "October 2024 - Present",
    challenge: "Required to build a visually rich, high-performance mobile application with complex animations and custom UI components that would work seamlessly on both iOS and Android devices.",
    solution: "Architected a Flutter application using the BLoC pattern for state management. Created custom widgets with Canvas for complex animations and implemented platform-specific optimizations for better performance.",
    impact: [
      { label: "App Store Rating", value: "4.7/5", description: "Achieved on both iOS and Android platforms" },
      { label: "Frame Rate", value: "60fps", description: "Consistently maintained during animation-heavy sequences" },
      { label: "Development Time", value: "50%", description: "Reduction compared to native separate development" },
      { label: "App Size", value: "30%", description: "Reduction through code splitting and asset optimization" }
    ],
    technicalDetails: "Used Flutter with Dart 2.17. Implemented BLoC pattern for state management. Used CustomPaint for complex graphics and animations. Integrated platform channels for native functionality when needed.",
    responsibilities: [
      "Developed cross-platform mobile applications using Flutter and Dart.",
      "Implemented custom UI components and animations for enhanced user experience.",
      "Optimized app performance and ensured smooth deployment to both iOS and Android stores.",
    ],
    technologies: [
      { name: "Flutter", level: "Expert" },
      { name: "Dart", level: "Expert" },
      { name: "Provider/Riverpod", level: "Advanced" },
      { name: "Firebase", level: "Advanced" }
    ]
  },
  {
    review:
      "Quayyum's proficiency with SQL databases ensured our data was always reliable, secure, and efficiently managed. His database design and optimization skills were crucial for our backend systems.",
    imgPath: "/images/exp9.png",
    logoPath: "/images/logo9.png",
    title: "SQL Developer",
    date: "October 2024 - Present",
    challenge: "Needed to optimize database performance for a rapidly growing application experiencing slow query response times and frequent deadlocks under high load.",
    solution: "Redesigned database schema with proper indexing, partitioning, and normalization. Implemented query optimization techniques, connection pooling, and caching strategies to improve performance and reliability.",
    impact: [
      { label: "Query Performance", value: "85%", description: "Improvement in average query execution time" },
      { label: "Database Throughput", value: "4x", description: "Increase in transactions processed per second" },
      { label: "Deadlock Occurrences", value: "95%", description: "Reduction in database deadlocks" },
      { label: "Storage Efficiency", value: "40%", description: "Improvement through proper normalization and data types" }
    ],
    technicalDetails: "Applied database normalization principles up to 3NF. Created appropriate indexing strategies based on query patterns. Implemented connection pooling with HikariCP. Used query execution plan analysis for optimization.",
    responsibilities: [
      "Designed and maintained relational databases using SQL.",
      "Wrote complex queries and optimized database performance.",
      "Ensured data integrity and security across all applications.",
    ],
    technologies: [
      { name: "PostgreSQL", level: "Expert" },
      { name: "SQL", level: "Expert" },
      { name: "Query Optimization", level: "Advanced" },
      { name: "Database Design", level: "Expert" },
      { name: "Connection Pooling", level: "Advanced" }
    ]
  },
  {
    review:
      "Quayyum's mastery of Docker streamlined our development and deployment workflows. His containerization strategies improved scalability and reliability across environments.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "Docker Specialist",
    date: "October 2024 - Present",
    challenge: "Needed to eliminate 'works on my machine' issues and improve consistency between development, testing, and production environments while improving scalability and resource utilization.",
    solution: "Implemented containerization strategy using Docker for all services. Created standardized Docker images, established CI/CD pipelines with automated testing, and deployed to Kubernetes orchestration platform.",
    impact: [
      { label: "Environment Consistency", value: "100%", description: "Achieved identical behavior across dev, test, and prod environments" },
      { label: "Deployment Time", value: "90%", description: "Reduction from hours to minutes for application deployments" },
      { label: "Resource Utilization", value: "60%", description: "Improvement through efficient container scheduling and scaling" },
      { label: "Scalability", value: "8x", description: "Increase in horizontal scaling capability" }
    ],
    technicalDetails: "Created multi-stage Docker builds for optimized images. Implemented Helm charts for Kubernetes deployments. Used Docker Compose for local development and testing environments.",
    responsibilities: [
      "Containerized applications and services using Docker.",
      "Developed and maintained CI/CD pipelines for automated deployments.",
      "Trained team members on best practices for containerization and orchestration.",
    ],
    technologies: [
      { name: "Docker", level: "Expert" },
      { name: "Kubernetes", level: "Advanced" },
      { name: "Helm", level: "Advanced" },
      { name: "CI/CD", level: "Expert" },
      { name: "YAML", level: "Expert" }
    ]
  }
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

const learningTopics = [
  {
    title: "Artificial Intelligence Fundamentals",
    description: "Studying core AI concepts including search algorithms, knowledge representation, logical reasoning, and planning techniques that form the foundation of intelligent systems.",
    progress: 65,
    resources: [
      { name: "Artificial Intelligence: A Modern Approach (Russell & Norvig)", url: "https://aima.cs.berkeley.edu/" },
      { name: "CS50's Introduction to Artificial Intelligence with Python (Harvard)", url: "https://cs50.harvard.edu/ai/2020/" },
      { name: "Introduction to Artificial Intelligence (Stanford Online)", url: "https://online.stanford.edu/courses/sohs-ytcs97" }
    ]
  },
  {
    title: "Machine Learning Engineering",
    description: "Focusing on practical ML implementation, model deployment, monitoring, and scaling machine learning systems in production environments with MLOps practices.",
    progress: 50,
    resources: [
      { name: "Machine Learning Engineering for Production (MLOps) Specialization (DeepLearning.AI)", url: "https://www.coursera.org/specializations/mlops-prod" },
      { name: "Machine Learning Zoomcamp (DataTalks.Club)", url: "https://github.com/DataTalksClub/mlops-zoomcamp" },
      { name: "MLOps Basics (Google Cloud)", url: "https://cloud.google.com/architecture/mlops-best-practices" }
    ]
  },
  {
    title: "Generative AI & Large Language Models",
    description: "Exploring LLMs, transformer architectures, prompt engineering, and applications of generative AI in software development and content creation.",
    progress: 40,
    resources: [
      { name: "Generative Deep Learning (David Foster)", url: "https://www.oreilly.com/library/view/generative-deep-learning/9781492057950/" },
      { name: "Prompt Engineering Guide", url: "https://www.promptingguide.ai/" },
      { name: "LLM University (Cohere)", url: "https://docs.cohere.com/docs" }
    ]
  }
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

export { learningTopics };
