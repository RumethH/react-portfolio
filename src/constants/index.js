import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpeg";

export const HERO_CONTENT = `Hi, I’m a Software Engineer specialising in AI and backend systems.
I build scalable, production-ready software that solves real-world problems.`;

export const ABOUT_TEXT = `I’m a Software Engineer based in Sydney with hands-on experience building production-ready AI and backend systems.

During my time at Advent Atum, I’ve worked across computer vision pipelines, machine learning model development, backend services, and AI-integrated mobile applications. My work has involved designing scalable systems, improving performance and reliability, and contributing to real-world deployments.

I’m particularly interested in AI-driven systems, backend architecture, and building software that performs reliably in production environments. I care about writing clean, maintainable code and continuously improving my engineering skills as I grow into a full-time software engineer.`;

export const EXPERIENCES = [
  {
  year: "Jan 2026 - Present",
  role: "Software Engineer",
  company: "Advent Atum",
  description: "Contributing to production-grade AI and backend systems, improving performance, scalability, and reliability while supporting service optimisation and migration to Rust.",
  technologies: ["Python", "Rust", "Backend Systems", "CI/CD", "Linux", "APIs"]
  },
  {
    year: "May 2025 - Dec 2025",
    role: "AI Data Engineer (Casual)",
    company: "Advent Atum",
    description: "Collaborated on training, testing, and deploying computer vision models for real-world drone detection systems while improving debugging workflows and system reliability.",
    technologies: ["Python", "PyTorch", "AI Pipelines", "Testing", "Debugging"]
  },
  {
    year: "Jul 2024 - Mar 2025",
    role: "AI Software Engineer Intern",
    company: "Advent Atum",
    description: "Developed and optimised deep learning models and contributed to AI-integrated Flutter applications, supporting end-to-end computer vision pipelines.",
    technologies: ["Python", "PyTorch", "Flutter", "REST APIs", "Git"]
  },
  {
    year: "May 2018",
    role: "Techbar IT Support",
    company: "Woolworths Group",
    description: "Provided operating system re-imaging, device setup, and technical support to ensure smooth hardware and software deployment.",
    technologies: ["OS Imaging", "Technical Support"]
  }
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
  {
    title: "Gov-Policy-Insight-RAG",
    image: project4,
    description:
      "RAG application for government policy analysis.",
    technologies: ["Python", "Streamlit", "AWS Clous", "Docker", "FastAPI"],
    github: "https://github.com/RumethH/Gov-Policy-Insight",
    demo: "https://go-5595fec1ed404b769a518c290d28ad7f.ecs.us-east-1.on.aws/"
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
