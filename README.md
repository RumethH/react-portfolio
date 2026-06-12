# React Portfolio

A professional, highly-interactive personal portfolio website built with **React 19**, **Vite 6**, and **Tailwind CSS v4**. It features high-fidelity smooth scrolling, entrance animations, custom glowing states powered by **Motion**, and a clean single-level architecture.

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Motion](https://img.shields.io/badge/Motion-12-FF0055?style=for-the-badge&logo=framer&logoColor=white)

---

## 🚀 Features

- **Hero & About** — Engaging introduction with dynamic text and a downloadable styled PDF resume.
- **Tech Stack** — Showcase of technologies (React, Python, Rust, Pytorch, etc.) using smooth spring-based hover states and continuous reverse floating loops.
- **Experience Timeline** — Interactive chronological listing of previous software engineering, data engineering, and technical support roles.
- **Featured Projects** — Card-based showcases featuring:
  - Custom neon hovering borders and responsive design.
  - Quick-access icons linking directly to their **GitHub Repositories**.
  - Dynamic **Live Demo** links (such as AWS-deployed containers) displayed automatically when a project demo path is specified.
- **Contact Form** — Integrated frontend message submission form using standard state validations and Axios integrations.
- **Animations** — Production-grade fluid layout, entrance transitions, and responsive hover-effects.
- **GitHub Pages CI/CD** — Fully integrated Actions pipeline for automated builds and zero-downtime deployment.

---

## 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| **Frontend Framework** | React 19, Vite 6, Tailwind CSS v4 |
| **Animations** | Motion (Framer Motion v12+) |
| **Icons** | React Icons (Feather, FontAwesome, Remix) |
| **HTTP client** | Axios |
| **Backend Option** | Express, Node.js, Nodemailer (Optional server) |
| **Hosting & Deployment** | GitHub Pages (Frontend), Render / AWS (Backend) |

---

## 📂 Repository Structure

The project uses a clean, single-level workspace structure:

```text
/
├── .github/workflows/
│   └── deploy-pages.yml      # CI/CD action for automatic GitHub Pages deployment
├── public/
│   ├── favicon.ico           # Website icon
│   └── RumethHerath_resume.pdf# Static resume document
├── src/
│   ├── App.jsx               # Root application component with layout & background effects
│   ├── main.jsx              # DOM entry point
│   ├── index.css             # Main stylesheet (Tailwind directives and custom styles)
│   ├── assets/               # Local static images (profile photo, project previews)
│   ├── constants/
│   │   └── index.js          # Core copy, experiences data, and project list metadata
│   └── components/           # Modular UI Components
│       ├── Navbar.jsx        # Navigation bar & social connections (LinkedIn, GitHub, etc.)
│       ├── About.jsx         # Hero section & introduction with a resume download
│       ├── Aboutme.jsx       # Biography component with a responsive profile layout
│       ├── Techstack.jsx     # Floating icons with custom motion spring behaviors
│       ├── Experience.jsx    # Interactive, professional timeline cards
│       ├── Projects.jsx      # Card grids with source code and live demo links
│       └── Contact.jsx       # Contact form submitting submissions via Axios
├── DEPLOY.md                 # Deployment guides for Render & GitHub Pages
├── eslint.config.js          # ESLint flat config file
├── GEMINI.md                 # AI CLI Developer & mandate guidelines
├── package.json              # Direct build scripts & dependencies
├── vite.config.js            # Vite configuration including Tailwind plugin compiler rules
└── README.md                 # Project documentation (this file)
```

---

## 💻 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) >= 18.0.0
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/RumethH/react-portfolio.git
   cd react-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run locally in development mode:
   ```bash
   npm run dev
   ```

Open `http://localhost:5173` in your browser.

---

## 🧪 Commands & Scripts

Inside the root directory, the following scripts are available:

| Command | Description |
|---|---|
| `npm run dev` | Starts Vite local development server with HMR. |
| `npm run build` | Builds a highly optimized, minimized bundle into `/dist` for production. |
| `npm run preview` | Runs a local preview server for checking the `/dist` production build. |
| `npm run lint` | Runs ESLint analysis ensuring clean, standard-compliant code. |
| `npm run deploy` | Standard manual deployment of `/dist` to the GitHub Pages branch. |

---

## 🌐 Deployment & CI/CD

### 1. Frontend (GitHub Pages)
A GitHub Action is configured at `.github/workflows/deploy-pages.yml`. Whenever changes are pushed to the `main` or `master` branches, the runner will:
- Check out the code.
- Spin up Node.js v20.
- Execute `npm install` and `npm run build`.
- Upload the compiled `dist/` bundle as an artifact.
- Deploy the build to the `github-pages` environment automatically.

### 2. Optional Mail Backend (Render / AWS)
To support contact form delivery, deploy your `/server` package to **Render** or your preferred VPS:
- Point the **Root Directory** to `server`.
- Configure the build command as `npm install` and start command as `npm start`.
- Inject `GMAIL_USER` and `GMAIL_APP_PASSWORD` as secure environment variables in the host dashboard.
- Set the frontend's repository secret/variable `VITE_API_URL` to point to your backend domain.

---

## 📄 License

This repository is open-source and available for developer portfolio customization and personal use.
