import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";

export const HERO_CONTENT = `Hi, I am an passionate junior software engineer finishing up my studies at Macquarie University. Passionate about tech and innovation, I aim to build impactful software solutions that drive real-world change.`;

export const ABOUT_TEXT = `A passionate junior software engineer currently completing my Bachelor of Software Engineering at Macquarie University. With hands-on experience from my internship at Advent Atum, I’ve worked on real-world applications involving AI, OS imaging, and technical support.

I’m driven by a deep interest in technology and a commitment to continuous learning. Whether it's contributing to impactful projects, building full-stack applications, or exploring cutting-edge innovations, I strive to create solutions that make a real-world difference. I'm always open to new challenges and opportunities to grow as a developer and engineer.`;

export const EXPERIENCES = [
  {
    year: "Jul 2024 - Mar 2025",
    role: "AI Software Engineering Intern",
    company: "Advent Atum",
    description: `I assisted in the development of image recognition and LSTM models, contributing to the enhancement of AI-driven applications. My work involved using computer vision libraries to improve functionality and accuracy. I also played a key role in optimizing deep learning models for better performance. Additionally, I contributed to the development of new features in an Android application built with Flutter.`,
    technologies: ["Python", "Flutter", "Pytorch", "REST APIs"],
  },
  {
    year: "May 2018 - June 2018",
    role: "Techbar IT Support",
    company: "Woolworths Group",
    description: `Completed my required work experience for year 10 conducting tasks such as re-imaging operating systems and setting up new devices for employees.`,
    technologies: ["OS Imaging", "Communication"],
  },
];

export const PROJECTS = [
  {
    title: "Charity App",
    image: project1,
    description:
      "A mobile charity app built with React Native that connects donors with causes they care about.",
    technologies: ["Expo", "React", "Javascript"],
    github: "https://github.com/RumethH/charity-app"
  },
  {
    title: "Portfolio Website",
    image: project2,
    description:
      "An responsive portfolio website (this one) made in React to showcase myself.",
    technologies: ["React", "Tailwindcss", "Javascript", "Nodemailer"],
    github: "https://github.com/RumethH/react-portfolio"
  },
  {
    title: "Mini-Golf Game",
    image: project3,
    description:
      "Fun little golf game application made using Processing.",
    technologies: ["Processing"],
    github: "https://github.com/RumethH/minigolf-game"
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
