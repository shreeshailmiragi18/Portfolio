// Skills Section Logo's
import Bootstrap from './assets/Skills_logo/Bootstrap_logo.png';
import C from './assets/Skills_logo/C_logo.png';
import Cpp from './assets/Skills_logo/C++_logo.png';
import CSS from './assets/Skills_logo/CSS_logo.png';
import Docker from './assets/Skills_logo/Docker_logo.png';
import Git from './assets/Skills_logo/Git_logo.png';
import Github from './assets/Skills_logo/Github_logo.png';
import HTML from './assets/Skills_logo/HTML_logo.png';
import Intellij from './assets/Skills_logo/Intellij_logo.png';
import Java from './assets/Skills_logo/Java_logo.png';
import JS from './assets/Skills_logo/JS_logo.png';
import Mysql from './assets/Skills_logo/Mysql.png';
import n8n from './assets/Skills_logo/n8n_logo.png';
import netlify from './assets/Skills_logo/netlify_logo.png';
import Postman from './assets/Skills_logo/Postman_logo.png';
import Python from './assets/Skills_logo/Python_logo.png';
import React from './assets/Skills_logo/React_logo.png';
import Springboot from './assets/Skills_logo/Springboot_logo.png';
import Tailwind from './assets/Skills_logo/Tailwind_logo.png';
import vercel from './assets/Skills_logo/vercel_logo.svg';
import VSCode from './assets/Skills_logo/VSCode_logo.png';

//about section logos
import Photo from './assets/About/photo.jpeg';


//Education Section Logos
import UVCE from './assets/Education_logo/UVCE_logo.webp';
import sarvodaya from './assets/Education_logo/sarvodaya.webp';

//Project Section Logos
import AI_image from './assets/Projects_logo/AI-Image.png';
import Billing from './assets/Projects_logo/Billing.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: HTML },
      { name: 'CSS', logo: CSS },
      { name: 'JavaScript', logo: JS},
      { name: 'React JS', logo: React },
      { name: 'Tailwind CSS', logo: Tailwind },
      { name: 'Bootstrap', logo: Bootstrap },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: Springboot },
      { name: 'MySQL', logo: Mysql },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: C },
      { name: 'C++', logo: Cpp },
      { name: 'Java', logo: Java },
      { name: 'Python', logo: Python },
      { name: 'JavaScript', logo: JS },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: Git },
      { name: 'GitHub', logo: Github },
      { name: 'VS Code', logo: VSCode },
      { name: 'IntelliJ', logo: Intellij },
      { name: 'Postman', logo: Postman },
      { name: 'Vercel', logo: vercel },
      { name: 'Netlify', logo: netlify },
      { name: 'Docker', logo: Docker },
      { name: 'n8n', logo: n8n },
    ],
  },
];

 export const education = [
    {
      id: 0,
      img: UVCE,
      school: "University of Visvesvaraya College of Engineering(UVCE), Bengaluru",
      date: "Oct 2023 - jul 2027",
      grade: "8.01 CGPA",
      desc: "I am Persuing my B.Tech degree in Information Science and Engineering from UVCE College, Belgaluru. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at BSA College allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "Bachelor of Technology - B.tech Information Science(Computer Science)",
    },
    {
      id: 1,
      img: sarvodaya,
      school: "Sarvodaya PU Sceince College, Vijayapura",
      date: "Jun 2021 - March 2023",
      grade: "91.5%",
      desc: "I completed my class 12th education from Sarvodaya PU Science College, Vijayapura, under the Karnataka State board, where I studied Physics, Chemistry, and Mathematics (PCM) with Biology.",
      degree: "XII - PCM with Biology",
    },
    {
      id: 2,
      img: sarvodaya,
      school: "Sarvodaya English Medium School, Vijayapura",
      date: "Apr 2020 - Mar 2021",
      grade: "96.48%",
      desc: "I completed my class 10th education from Sarvodaya English medium School, Vijayapura, under the Karnataka State board.",
      degree: "X - Karnataka State Board",
    },
 ];
  

 export const projects = [
    {
      id: 0,
      title: "AI Image Generator",
      description:
             "An elegant AI-powered image generator web application that allows users to create stunning images from text prompts. Built with HTML, CSS, and JavaScript, it integrates Hugging Face API models to bring your imagination to life.",
      image: AI_image,
      tags: ["HTML", "CSS", "JavaScript", "API", "Font Awesome"],
      github: "https://github.com/shreeshailmiragi18/AI-Image-Generator",
      webapp: "https://ai-image-generator-sable-six.vercel.app/",
    },
    {
      id: 1,
      title: "Billing Software",
      description:
        "Billing Software Application is a secure and efficient system that automates invoice generation, manages products, users, and sales records, and integrates seamless payments. Built using Spring Boot, Spring Security, JWT, React, and Razorpay Payment Gateway, it ensures accurate billing, secure authentication, and a smooth user experience",
      image: Billing,
      tags: ["React JS","Bootstrap", "Spring boot", "Spring Security", "JWT", "Razorpay Payment Gateway"," MySQL", "Maven"],
      github: "https://github.com/shreeshailmiragi18/DBMS-Project-Billing-software-",
      webapp: "",
    },
    {
      id: 2,
      title: "Trade-Sathi",
      description:
        "The Treading Platform Application is a comprehensive trading platform built with Spring Boot and MySQL, designed for both novice and experienced traders. Its primary goal is to offer a seamless, user-friendly interface for trading operations. Core features include the ability for users to buy and sell assets, manage a secure wallet, view transaction history, and control their orders. The application ensures a personalized and secure experience through user registration and authentication managed by Spring Security and JWT.",
      image: movierecLogo,
      tags: ["React JS", "Spring Boot", "Spring Security", "JWT", "MySQL"],
      github: "https://github.com/shreeshailmiragi18/TradeSathi",
      webapp: "",
    },
    
  ];  