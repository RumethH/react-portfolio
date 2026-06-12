# Gemini CLI Project Instructions (GEMINI.md)

This file contains foundational mandates, architectural design, conventions, and operational workflows for this repository. All development and maintenance tasks must adhere to these guidelines.

---

## 1. Project Overview & Architecture

This repository is organized as a clean, single-level project:
- **Root Directory (`/`)**: Contains all repository files, standard development configurations, build scripts, deployment parameters, and the React frontend source code.
- **Frontend Application**: A modern, interactive, and fully-responsive personal portfolio built with:
  - **Framework**: React 19 + Vite 6 (configured as ES Modules via `"type": "module"` in `package.json`).
  - **Styling**: Tailwind CSS v4 using the new `@tailwindcss/vite` compiler plugin.
  - **Animations**: Framer Motion (specifically, the `"motion"` package v12+).
  - **Routing/Pathing**: Single-page application structure using standard component sections.

*Note regarding Backend:* As documented in `DEPLOY.md`, an optional contact-form mailer backend can reside in a `/server` folder to handle email transfers (via Nodemailer & Express), communicating with the frontend using the `VITE_API_URL` environment variable.

---

## 2. Directory Structure & Key Files

```text
/Users/rh10/react-portfolio/
├── .github/workflows/
│   └── deploy-pages.yml      # CI/CD action for automatic GitHub Pages deployment
├── DEPLOY.md                 # Setup, local running, and deployment instructions
├── eslint.config.js          # ESLint configuration (Flat Config format)
├── GEMINI.md                 # This instructions file (Do not delete or ignore)
├── index.html                # Main entry HTML
├── package.json              # Integrated workspace dependencies and scripts
├── package-lock.json         # Package lock file
├── vite.config.js            # Vite configuration (Base paths and Tailwind v4 setup)
├── public/
│   ├── favicon.ico
│   └── RumethHerath_resume.pdf  # Static assets (Resume)
└── src/
    ├── App.jsx               # Main application shell with layout/radial-gradients
    ├── main.jsx              # DOM mounting entry
    ├── index.css             # Styles & custom font/Tailwind directives
    ├── assets/               # UI images & icons
    ├── constants/
    │   └── index.js          # Core static text, links, experiences, and project definitions
    └── components/           # UI Components
        ├── Navbar.jsx        # Logo & Social links (LinkedIn, GitHub, Instagram)
        ├── About.jsx         # Hero section with download link for Resume & intro text
        ├── Aboutme.jsx       # Deeper biographical details and visual layout
        ├── Techstack.jsx     # Floating animations of technology icons (React, Rust, etc.)
        ├── Experience.jsx    # Interactive timeline list of roles & tech stacks
        ├── Projects.jsx      # Visual card display for projects with GitHub & Live Demo integration
        └── Contact.jsx       # Input form making POST request to VITE_API_URL
```

---

## 3. Technology Stack & Packages

- **React 19**: Utilizes standard React functional components.
- **Vite 6**: Modern build tool supporting ESM and native Tailwind integration.
- **Tailwind CSS v4**: Set up using `@tailwindcss/vite` in `vite.config.js`. Tailored with dark neutral backgrounds (`bg-neutral-950`) and neon color themes (e.g. `cyan-400`, `purple-500`, `text-purple-800`).
- **Motion (Framer Motion)**: Used for transitions, enters, and hover animations.
- **React Icons**: Icon provider (`react-icons/fa`, `react-icons/fi`, `react-icons/ri`, `react-icons/tb`, `react-icons/si`, `react-icons/io5`).
- **Axios**: Standard HTTP request package used in `Contact.jsx` for posting message forms.

---

## 4. Key Conventions & Style Mandates

To ensure code maintainability, clean structural patterns, and alignment with the local codebase:

### Code Structure
- **Component Pattern**: Always write functional components using ES6 arrow function syntax.
- **Export Syntax**: Maintain consistent export practices (e.g. `export default Navbar` / `export const HERO_CONTENT = ...`).
- **Constants Separation**: Keep UI copy, external links, experience items, and projects definitions strictly in `src/constants/index.js`. Never hardcode static text directly inside components.
- **Relative Pathing**: Ensure correct resolution of relative directories for assets. Frontend assets reside in `src/assets/` and can be imported as ESM modules. Static documents like PDF files should reside in `public/` and are resolved with `import.meta.env.BASE_URL`.

### Animation & Motion
- **Import Statement**: Always import motion from `"motion/react"` (rather than `"framer-motion"`) to match the installed dependency structure.
- **Custom Variants**: Define motion variations cleanly. For instance, utilize standard floating hover configurations:
  ```javascript
  whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(192, 132, 252, 0.6)" }}
  ```
- **Responsive Layouts**: Design all components with a mobile-first responsive layout (e.g. `w-full lg:w-1/2`, `flex flex-wrap`).

### Environment Variables
- **API Target**: For the contact form, use `import.meta.env.VITE_API_URL` to target the backend mailing server. Fallback to `"http://localhost:4000"` in local development mode (`import.meta.env.DEV`).

---

## 5. Build, Lint & Deploy Workflows

Always perform checks directly inside the repository root:

- **Local Development**:
  ```bash
  npm run dev
  ```
- **Production Build**:
  ```bash
  npm run build
  ```
- **Linting & Code Quality**:
  ```bash
  npm run lint
  ```
- **Deployment to GitHub Pages**:
  Managed automatically via GitHub Actions `.github/workflows/deploy-pages.yml` on push to the `main` or `master` branches.
  - Generates artifacts from the built `dist` folder.
  - Base path matches `/${{ github.event.repository.name }}/` via `VITE_BASE_PATH` env configuration.
