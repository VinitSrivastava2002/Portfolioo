export const projects = [
  // Current professional work (from resume)
  {
    title: "PowerMakerAI",
    description:
      "AI-driven CRM automation chatbot built end-to-end as tech lead for a 3-person team — React frontend, Node/Express APIs, OAuth 2.0 + Firebase auth, deployed on Google Cloud Run with zero-downtime CI/CD.",
    tech: ["React.js", "Node.js", "Express.js", "OAuth 2.0", "Firebase", "Google Cloud Run"],
    image: "https://portfolio-8dd15b.netlify.app/drawables/GetNewslogo.png",
    github: null,
    live: null,
    status: "Production",
    featured: true,
  },
  {
    title: "AI Excel Automation Agent",
    description:
      "Integrated Dify.ai LLM pipelines with a custom Node.js backend to automate CRUD operations on Excel data via natural-language commands, cutting manual spreadsheet work for end users. Firestore models handle concurrent sessions and real-time sync across tabs, secured with OAuth 2.0 bearer-token middleware.",
    tech: ["React.js", "Node.js", "Dify.ai", "OAuth 2.0", "Firestore"],
    image: "https://portfolio-8dd15b.netlify.app/drawables/Laptoppricelogo.png",
    github: null,
    live: null,
    featured: false,
  },
  {
    title: "TechHub",
    description:
      "Full-stack collaboration platform for students to discover, contribute to, and manage group projects, with server-enforced role-based access (Admin / Contributor / Viewer) and real-time sync via Firebase Realtime Database listeners — no polling required.",
    tech: ["React.js", "Node.js", "Firebase", "RBAC", "Express.js"],
    image: "https://portfolio-8dd15b.netlify.app/drawables/Techhublogo.png",
    github: "https://github.com/VinitSrivastava2002",
    live: "https://techhub-def2e.web.app/",
    featured: true,
  },

  // Earlier / personal projects (kept from the original portfolio)
  {
    title: "GetNews",
    description:
      "Full-stack MERN news platform with geolocation-aware queries, JWT + Firebase authentication, and server-side rendering for fast, shareable pages.",
    tech: ["MongoDB", "Express", "React", "Node.js", "Firebase", "JWT"],
    image: "https://portfolio-8dd15b.netlify.app/drawables/GetNewslogo.png",
    github: "https://github.com/VinitSrivastava2002",
    live: null,
    status: "Ongoing",
    featured: false,
  },
  {
    title: "Laptop Price Prediction",
    description:
      "ML model trained in a Jupyter/Anaconda environment to predict laptop prices from spec data, serialized with pickle and deployed on Heroku.",
    tech: ["Python", "Pandas", "scikit-learn", "Jupyter", "Heroku"],
    image: "https://portfolio-8dd15b.netlify.app/drawables/Laptoppricelogo.png",
    github: "https://github.com/VinitSrivastava2002/LAPTOP__PRICE_PREDICT",
    live: null,
    featured: false,
  },
  {
    title: "Natours",
    description:
      "A polished tours & travel booking front end built with a strong SCSS/Flexbox foundation, focused on visual storytelling and a pleasant UI.",
    tech: ["HTML5", "SCSS", "Flexbox"],
    image: "https://portfolio-8dd15b.netlify.app/drawables/natours2.jpg",
    github: "https://github.com/VinitSrivastava2002",
    live: "http://nature-to-natours.netlify.app/",
    featured: false,
  },
  {
    title: "Doctero",
    description:
      "Appointment booking system for doctors with automated email confirmations powered by Nodemailer and a clean, approachable UI.",
    tech: ["Node.js", "Nodemailer", "Express"],
    image: "https://portfolio-8dd15b.netlify.app/drawables/deepak%20website%20(1).png",
    github: "https://github.com/VinitSrivastava2002",
    live: "https://deepak-physio.herokuapp.com/",
    featured: false,
  },
  {
    title: "Musicify.io",
    description:
      "An online music player inspired by modern streaming UIs, built with vanilla JS and DOM manipulation over a hand-crafted SCSS design system.",
    tech: ["JavaScript", "SCSS", "DOM APIs"],
    image: "https://portfolio-8dd15b.netlify.app/drawables/musicify.png",
    github: "https://github.com/VinitSrivastava2002",
    live: "https://musicify-io.netlify.app/",
    featured: false,
  },
];
