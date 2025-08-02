import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  minitab,
  c,
  kotlin,
  sp,
  ocbc,
  saf,
  sit,
  oop,
  websys,
  progfund,
  dsa,
  sd,
  polyfyp,
  adobe,
  android,
  java,
  ml,
  mysql,
  mad,
  php,
  python,
  tableau,
  oracle,
  hackrift,
  workato
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experiences",
  },
  {
    id: "project",
    title: "Projects",
  },
  {
    id: "certificates",
    title: "Certificates",
  },
];

const services = [
  {
    title: "Full-Stack Web Developer",
    icon: web,
  },
  {
    title: "Android Native Developer",
    icon: mobile,
  },
  {
    title: "Data Analytics",
    icon: creator,
  },
  {
    title: "Machine Learning Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "PHP",
    icon: php,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "C#",
    icon: c,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Android",
    icon: android,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Tableau",
    icon: tableau,
  },
  {
    name: "Adobe Creative Cloud",
    icon: adobe,
  },
  {
    name: "Kotlin",
    icon: kotlin,
  },
  {
    name: "Minitab",
    icon: minitab,
  },
];

const experiences = [
  {
    title: "Polytechnic Student, Diploma in Business Information Technology",
    company_name: "Singapore Polytechnic",
    icon: sp,
    iconBg: "#FFFFFF",
    date: "March 2018 - April 2021",
    points: [
      "Diploma with Merit in Business Information Technology (GPA: 3.75 / 4)",
      "Activities and Societies: Subcommitee | Canoe Polo",
      "Top 3 Distinction Modules: Web Client Development | Mobile Application Development | Programming for Data Science",
      "Specialization: Data Analytics (R, Tableau, Minitab, SAS, Python)",
      "Technical Skills - Web Development (HTML, CSS, JavaScript, PHP, ReactJS, jQuery), Mobile Development (Java, Kotlin, Flutter)",
      "Other Skills - Database Management (Microsoft SQL Server, MySQL), UX/UI Development (Adobe Creative Cloud, Figma)",
    ],
  },
  {
    title: "Polytechnic Intern",
    company_name: "OCBC",
    icon: ocbc,
    iconBg: "#FFFFFF",
    date: "September 2020 - April 2021",
    points: [
      "Developed and maintained Robotic Process Automation (RPA) solutions using UiPath.",
      "Developed a Duty Roster Bot in UiPath to automate notifications and scheduling, saving the team 15 effort hours per month.",
      "Assisted in the development of an Email Releaser Bot to automate corporate email sorting, saving the department 20 effort hours per month and improving workflow efficiency. ",
      "Collaborated with cross-functional teams including designers, product managers, and other developers to create RPA solutions.",
      "Actively participated in code reviews, gaining valuable expertise in optimizing banking and fintech processes through automation.",
    ],
  },
  {
    title: "Chief Administration Specialist",
    company_name: "Singapore Armed Forces",
    icon: saf,
    iconBg: "#FFFFFF",
    date: "October 2021 - July 2023",
    points: [
      "Led a team of seven soldiers to manage all human resource management matters in the Battalion.",
      "Automated administrative workflows by converting physical Manpower Operations forms into Excel  Sheets using Excel VBA and implementing an online attendance tracking system for the Battalion, saving 25 effort hours per week and improving operational efficiency.",
      "Designed and deployed a secure online Key Press system using Excel VBA in collaboration with MINDEF to transfer restricted physical documents to MINDEF I-Net system, saving 20 effort hours per week and ensuring secure document handling. ",
    ],
  },
  {
    title: "BEng (Hons) in Information Communication Technology (Software Engineering)",
    company_name: "Singapore Insitute of Technology",
    icon: sit,
    iconBg: "#FFFFFF",
    date: "August 2023 - Present",
    points: [
      "Undergraduate - Currently pursuing a degree in Software Engineering.",
      "Current cGPA: 4.46/ 5",
      "As a Natural Language Processing Research Assistant under the SIT Work Scheme, I utilized NLP techniques to develop multilingual translation models for teaching materials in Chinese, Spanish and French, enhancing accessibility for over 200 overseas exchange students. ",
      "Graduating in 2027.",
    ],
  },
];

const certificates = [
  {
    certificate:
      "Automation Pro I",
    date: "Issued on: 21 December 2024",
    expiry: "Expiry on: 21 December 2026",
    link: "https://credentials.workato.com/ef0f1012-cf2c-44e5-83bf-c9b7428f9ec1#acc.tpWG4eLN",
    image: workato,
  },
  {
    certificate:
      "Automation Pro II",
    date: "Issued on: 23 December 2024",
    expiry: "Expiry on: 23 December 2026",
    link: "https://credentials.workato.com/027dfc3c-9f86-4a84-b607-87a8e72b252c#acc.Unft7s4y",
    image: workato,
  },
  {
    certificate:
      "Automation Pro III",
    date: "Issued on: 23 December 2024",
    expiry: "Expiry on: 23 December 2026",  
    link: "https://credentials.workato.com/87b1ff10-95a7-4b86-9edf-a7e0486a2cc9#acc.wBxPM26I",
    image: workato,
  },
  {
    certificate:
      "Oracle Cloud Infrastructure 2024 Generative AI Certified Professional",
    date: "Issued on: 29 July 2024",
    expiry: "Expiry on: 29 July 2026",
    link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=55608ACA09EC16BECE07AE11FEC76F6F09CD28B2B21CAC8E9B76944F6F0ACA61",
    image: oracle,
  },
  {
    certificate:
      "Oracle Cloud Infrastructure 2024 Certified AI Foundations Associate",
    date: "Issued on: 19 August 2024",
    expiry: "Expiry on: 19 August 2026",
    link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=523EE7D0E68642B6DCE7E413FB8F4BA70A632C41A8E71810A53964A4E9906BCE",
    image: oracle,
  },
  {
    certificate:
      "Oracle Cloud Infrastructure 2023 Certified AI Foundations Associate",
    date: "Issued on: 20 August 2024",
    expiry: "Expiry on: 20 August 2026",  
    link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=C9CC3702B18A1A7CD6511C6AD062E90210BBEC68E98DC4CB3DDF3DEE984E222D",
    image: oracle,
  }
];

const projects = [
  {
    name: "Rocket Robert",
    description:
      "A 2D game developed using LibGDX and Java, designed to engage and inspire young children with an interest in space exploration.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "LibGDX",
        color: "green-text-gradient",
      },
    ],
    image: oop,
    source_code_link: "https://github.com/melwin911/INF1009",
  },
  {
    name: "5 Hotel",
    description:
      "A full-stack web application for hotel booking.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "red-text-gradient",
      },
      {
        name: "PHP",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
    ],
    image: websys,
    source_code_link: "https://github.com/melwin911/INF1005",
  },
  {
    name: "HDB Price Prediction",
    description:
      "A comprehensive full-stack web application for analyzing and predicting HDB prices in Singapore. Leveraging advanced data analysis techniques and visualization libraries, the project uncovers trends, patterns, and key factors influencing HDB pricing.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Machine-Learning",
        color: "green-text-gradient",
      },
      {
        name: "Flask",
        color: "pink-text-gradient",
      },
    ],
    image: progfund,
    source_code_link: "https://github.com/melwin911/INF1002",
  },
  {
    name: "VishShield",
    description:
      "A comprehensive vishing detection system on Telegram designed to educate and advise the public on preventing scam attempts. The system includes a reporting feature to blacklist suspicious callers, addressing the growing threat of scam calls.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Telegram",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
    ],
    image: dsa,
    source_code_link: "https://github.com/melwin911/INF1008",
  },
  {
    name: "ClearCare",
    description:
      "A moderately complex web application built to streamline the scheduling and coordination of patient pre-discharge services.",
    tags: [
      {
        name: "C#",
        color: "blue-text-gradient",
      },
      {
        name: "ASP.NET",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
    ],
    image: sd,
    source_code_link: "https://github.com/melwin911/ICT2112_SoftwareDesign",
  },
  {
    name: "Smart Appointment Booking Application",
    description:
      "A Kotlin-powered Android app designed to optimize healthcare workflows by enabling appointment booking, seamless patient check-ins, and Gemini chatbot-assisted health inquiries.",
    tags: [
      {
        name: "Kotlin",
        color: "blue-text-gradient",
      },
      {
        name: "Android",
        color: "green-text-gradient",
      },
      {
        name: "Google Gemini",
        color: "pink-text-gradient",
      },
    ],
    image: mad,
    source_code_link: "https://github.com/melwin911/ICT2112_SoftwareDesign",
  },
  {
    name: "Fruit Images Classification",
    description:
      "An image classification project leveraging machine learning algorithms for accurate visual recognition.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "TensorFlow",
        color: "red-text-gradient",
      },
      {
        name: "SciKit",
        color: "green-text-gradient",
      },
    ],
    image: ml,
    source_code_link: "https://github.com/melwin911/INF2008",
  },
  {
    name: "SgSAFE",
    description:
      "A Figma prototype for an AI-driven mobile app that uses NLP and computer vision to detect scams through suspicious text and deepfake image analysis, promoting user safety and scam awareness.",
    tags: [
      {
        name: "Figma",
        color: "blue-text-gradient",
      },
      {
        name: "Machine Learning",
        color: "red-text-gradient",
      },
      {
        name: "Natural Language Processing",
        color: "green-text-gradient",
      },
    ],
    image: hackrift,
    source_code_link: "https://drive.google.com/file/d/15UDhrFV53qSF3YZHIQjpCqrdRqBr2sA8/view?usp=sharing",
  },
  {
    name: "Digital Attendance System",
    description:
      "A full-stack web application for an attendance tracking system, developed for the Institute for Financial Literacy.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "PHP",
        color: "red-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: polyfyp,
    source_code_link: "https://github.com/melwin911/IFL_FYP",
  },
];

export { services, technologies, experiences, certificates, projects };
