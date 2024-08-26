import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    swift,
    meta,
    writejet,
    addverb,
    shopify,
    // carrent,
    ecommerce,
    medisync,
    // tripguide,
    bmi2,
    threejs,
  } from "../assets";
  
  export const navLink = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "MERN-Stack Developer",
      icon: web,
    },
    {
      title: "iOS App Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Software Developer",
      icon: creator,
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
    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
    {
      name: "React JS",
      icon: reactjs,
    },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "swift",
      icon: swift,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Full-Stack Web Developer Intern",
      company_name: "WriteJet",
      icon: writejet,
      iconBg: "#383E56",
      date: "June 2023 - August 2023",
      points: [
        "Led the development of an intuitive EDTech website using the MERN stack, ensuring a seamless connection between front-end and back-end for a cohesive user experience.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Software Developer Intern",
      company_name: "Addverb Technologies",
      icon: addverb,
      iconBg: "#E6DEDD",
      date: "Jun 2024 - Sep 2024",
      points: [
        "Providing software solutions for clients like HUL, ITC, PepsiCo, and Lenskart, focusing on automation to enhance operational efficiency.",
        "Contributing to code reviews, debugging, and optimization, improving the reliability and maintainability of software.",
        "Engaging with international clients to gather insights and develop tailored software solutions that meet their specific needs.",
        "Developing and optimizing software solutions, including user-friendly dashboards using React.js, robust backend services with Node.js and Express.js, and database management with MongoDB and MySQL.",
      ],
    },
    // {
    //   title: "Web Developer",
    //   company_name: "Shopify",
    //   icon: shopify,
    //   iconBg: "#383E56",
    //   date: "Jan 2022 - Jan 2023",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Harsh proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Harsh does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Harsh optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "E-Commerce",
      description:
        "This project has a unique feature in which apart from the basic shopping experience a person coming from abroad will carry the product with him.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "node",
          color: "blue-text-gradient",
        },
      ],
      image: ecommerce,
      source_code_link: "https://github.com/Harsharma2026/e-commerce",
    },
    {
      name: "Medi-Sync",
      description:
        "Facilitate real-time doctor-patient interaction, secure medical data sharing, and group collaboration through our ReactJS and TailwindCSS-based web app for a comprehensive healthcare experience.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "StreamApi",
          color: "green-text-gradient",
        },
        {
          name: "TailwindCSS",
          color: "pink-text-gradient",
        },
      ],
      image: medisync,
      source_code_link: "https://github.com/Harsharma2026/Medi-Sync",
    },
    {
      name: "BMI-Calculator",
      description:
        "The BMI Calculator app for iOS is a convenient tool for calculating your Body Mass Index (BMI) and determining your ideal weight range.",
      tags: [
        {
          name: "Swift",
          color: "blue-text-gradient",
        },
        {
          name: "SwiftUI",
          color: "green-text-gradient",
        },
        // {
        //   name: "css",
        //   color: "pink-text-gradient",
        // },
      ],
      image: bmi2,
      source_code_link: "https://github.com/Harsharma2026/BMI-Calculator-iOS",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };