export const myProjects = [
  {
    id: 1,
    title: "DRAPE: Real-Time Detection & Classification System",
    description:
      "An AI-powered real-time detection system using YOLOv8 for multi-object detection across clothing categories and weapon detection.",
    subDescription: [
      "Developed real-time detection using YOLOv8 across 8 clothing categories and weapon detection.",
      "Evaluated architectures including ResNet50, ResNet101, YOLOv8n, and YOLOv8m to optimize real-time accuracy and scalability.",
      "Improved detection performance from 63% to 76% through dataset refinement, augmentation pipelines, and iterative tuning.",
      "Built a scale-aware person-weapon association algorithm and unified GUI supporting image, video, and livestream inputs.",
    ],
    href: "https://drive.google.com/drive/folders/17BzJNB4nvtxsO1XH_JMFhk164SIcOXNP?usp=sharing",
    logo: "",
    image: "/assets/projects/accessories.jpg",
    tags: [
      { id: 1, name: "Python",         path: "/assets/logos/python.svg" },
      { id: 2, name: "YOLOv8",         path: "/assets/logos/git.svg" },
      { id: 3, name: "Deep Learning",  path: "/assets/logos/javascript.svg" },
      { id: 4, name: "Computer Vision",path: "/assets/logos/vitejs.svg" },
    ],
  },
  {
    id: 2,
    title: "Day.ly: Short Video Sharing Platform",
    description:
      "A full-stack short-video sharing platform inspired by modern social media, built with ReactJS and Node.js.",
    subDescription: [
      "Developed a full-stack short-video platform using ReactJS, Node.js, Express.js, MongoDB, and REST APIs.",
      "Implemented authentication, modular backend APIs, and scalable database workflows for content management.",
      "Applied product management principles including user journey analysis, feature prioritization, and competitive analysis.",
    ],
    href: "https://github.com/manyalalhall/dayly.git",
    logo: "",
    image: "",
    tags: [
      { id: 1, name: "ReactJS",   path: "/assets/logos/react.svg" },
      { id: 2, name: "Node.js",   path: "/assets/logos/vitejs.svg" },
      { id: 3, name: "MongoDB",   path: "/assets/logos/javascript.svg" },
      { id: 4, name: "REST APIs", path: "/assets/logos/git.svg" },
    ],
  },

  {
    id: 3,
    title: "Calendar: A Desktop Widget",
    description:
      "Built a desktop calendar widget using JavaScript, CSS, and Electron with responsive UI components, date navigation, and desktop application support.",
    subDescription:[],
    href: "https://github.com/manyalalhall/calendar.git",
    logo: "",
    image: "",
    tags: [
      { id: 1, name: "javascript",   path: "/assets/logos/react.svg" },
      { id: 2, name: "CSS",   path: "/assets/logos/vitejs.svg" },
      { id: 3, name: "HTML",   path: "/assets/logos/javascript.svg" },
      { id: 4, name: "Electron", path: "/assets/logos/git.svg" },
    ],
  },
];

export const mySocials = [
  {
    name: "WhatsApp",
    href: "https://wa.me/918427528393",
    icon: "/assets/socials/whatsApp.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/manyalalhall/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "GitHub",
    href: "https://github.com/manyalalhall",
    icon: "/assets/socials/github.svg",
  },
];

export const experiences = [
  {
    title: "Deep Learning Intern",
    job: "DRDO DIPR",
    date: "May 2025 - Jul 2025",
    contents: [
      "Developed and optimized ML pipelines for classification and pattern recognition tasks using Python-based deep learning frameworks.",
      "Built automated preprocessing and annotation workflows, reducing manual effort and improving experimentation efficiency.",
      "Performed exploratory data analysis (EDA), hyperparameter tuning, and model evaluation to improve robustness and performance.",
      "Collaborated with cross-functional teams to communicate findings and support data-driven research decisions.",
    ],
  },
  {
    title: "B.Tech in Computer Science and Engineering",
    job: "NIT Hamirpur",
    date: "2023 - 2027",
    contents: [
      "Pursuing a Bachelor's degree in Computer Science and Engineering with a CGPA of 8.00/10.00.",
      "Led robotics workshops with 400+ participants and organized RoboWeek 3.0 at NIT Hamirpur.",
      "Served as NCC Cadet Captain and earned NCC C Certificate for leadership and teamwork.",
      "Solved 100+ coding problems across LeetCode and Codeforces, strengthening algorithmic problem-solving skills.",
    ],
  },

];