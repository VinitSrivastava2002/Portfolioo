// Categorized skills. `level` drives the animated progress bar (0-100).
export const skillCategories = [
  {
    category: "Frontend",
    icon: "frontend",
    skills: [
      { name: "React.js", level: 90 },
      { name: "Redux Toolkit", level: 82 },
      { name: "JavaScript (ES2022)", level: 92 },
      { name: "TypeScript", level: 78 },
      { name: "Tailwind CSS", level: 85 },
    ],
  },
  {
    category: "Backend",
    icon: "backend",
    skills: [
      { name: "Node.js / Express.js", level: 90 },
      { name: "REST API Design", level: 88 },
      { name: "OAuth 2.0 / JWT", level: 85 },
      { name: "Java", level: 70 },
    ],
  },
  {
    category: "Databases",
    icon: "database",
    skills: [
      { name: "MongoDB", level: 86 },
      { name: "Firestore / Firebase RTDB", level: 84 },
      { name: "MySQL", level: 75 },
    ],
  },
  {
    category: "Cloud & Tools",
    icon: "cloud",
    skills: [
      { name: "Google Cloud Run", level: 82 },
      { name: "Docker", level: 80 },
      { name: "Git & GitHub", level: 90 },
      { name: "Postman", level: 85 },
    ],
  },
];

// Core concepts shown as a tag cloud rather than progress bars —
// these aren't tools but ongoing practice areas.
export const coreConcepts = [
  "Data Structures & Algorithms",
  "System Design",
  "Scalable Architecture",
  "270+ LeetCode Problems Solved",
];
