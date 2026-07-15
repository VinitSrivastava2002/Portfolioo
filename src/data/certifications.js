// Each entry has either an `image` (real certificate thumbnail from the
// original portfolio) or an `icon` key (mapped to a react-icons/si
// component in Certifications.jsx) for newer credentials with no image asset.
export const certifications = [
  {
    name: "Salesforce Developer",
    issuer: "SmartInternz",
    image: "images/salesforcecerti.jpg",
    url: "https://smartinternz.com/internships/salesforce_certificates/b3bddc1e5e15f4f6453783189f96e32b",
  },
  {
    name: "Cybersecurity",
    issuer: "Virtual Internship",
    image: "images/cybersecurity.jpeg.jpg",
    url: "https://www.linkedin.com/posts/vinit-srivastava-2ba5191a6_cybersecurity-virtual-internship-activity-7038386893276733440-EUM9",
  },
  {
    name: "DSA — Problem Solving",
    issuer: "HackerRank",
    image: "images/problemsolving.png",
    url: "https://www.hackerrank.com/certificates/6afb17030afc",
  },
  {
    name: "Python Certification",
    issuer: "HackerRank",
    image: "images/python.png",
    url: "https://www.hackerrank.com/certificates/6afb17030afc",
  },
  {
    name: "CSS Certification",
    issuer: "HackerRank",
    image: "images/css cert.png",
    url: "https://www.hackerrank.com/certificates/005e3ade1084",
  },
  {
    name: "UI/UX Design",
    issuer: "Google — Coursera",
    image: "images/UI-UX.jpeg",
    url: "https://coursera.org/share/bd995e89f8f658fe1ed6ce42e28d41d9",
  },
  {
    name: "Object-Oriented Programming",
    issuer: "LinkedIn Learning",
    image: "images/oopscerti.jpg",
    url: "https://www.linkedin.com/posts/vinit-srivastava-2ba5191a6_oops-activity-6980598513063591937-Nj92",
  },
  {
    name: "Learnathon",
    issuer: "ICT Academy",
    image: "images/lernathoncerti.jpg",
    url: "https://www.linkedin.com/posts/vinit-srivastava-2ba5191a6_learnathon-ictacademy-activity-6930787110345932800-sn4F",
  },
  {
    name: "GIT Certification",
    issuer: "Simplilearn",
    image: "images/gitcert.png",
    url: "https://www.simplilearn.com/skillup-certificate-landing",
  },
  // Newer credentials from the resume — no certificate image asset available,
  // rendered as icon badges instead.
  {
    name: "MERN Stack Certification",
    issuer: "Coursera",
    icon: "coursera",
    url: "https://coursera.org",
  },
  {
    name: "Docker Program Certification",
    issuer: "Docker",
    icon: "docker",
    url: "https://www.docker.com",
  },
  {
    name: "Google Cloud Ready Facilitator Program",
    issuer: "Google",
    icon: "googlecloud",
    url: "https://cloud.google.com",
  },
  {
    name: "270+ Problems Solved",
    issuer: "LeetCode",
    icon: "leetcode",
    url: "https://leetcode.com/Vinit_srivastava/",
  },
];
