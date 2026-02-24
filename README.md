# React Portfolio

A modern, responsive personal portfolio website built with **React 19**, **Vite**, and **Tailwind CSS 4**. Features smooth animations powered by Motion and a working contact form.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)

## Features

- **Hero & About** — Introduction and personal background
- **Tech Stack** — Technologies and tools
- **Experience** — Work history timeline
- **Projects** — Showcase of recent work with GitHub links
- **Contact Form** — Sends emails via a Node/Express backend using Nodemailer
- **Animations** — Page transitions and scroll effects via [Motion](https://motion.dev)
- **Responsive** — Mobile-first layout with Tailwind CSS
- **GitHub Pages CI/CD** — Automatic deployment on push to `main`

## Tech Stack

| Layer    | Technology                          |
| -------- | ----------------------------------- |
| Frontend | React 19, Vite 6, Tailwind CSS 4   |
| Animation| Motion (Framer Motion)              |
| Icons    | React Icons                         |
| HTTP     | Axios                               |
| Backend  | Node.js, Express, Nodemailer        |
| Deploy   | GitHub Pages (frontend), Render (backend) |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) >= 18

### Run the frontend

```bash
cd react-portfolio
npm install
npm run dev
```

Open the URL Vite prints (e.g. `http://localhost:5173`).

### Run the backend (contact form)

```bash
cd server
npm install
npm start
```

Server runs at `http://localhost:4000`. Create a `.env` file with:

```
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-16-char-app-password
```

> Use a [Gmail App Password](https://myaccount.google.com/apppasswords), not your normal Gmail password. **Do not commit `.env`.**

## Deployment

| Component | Platform     | Cost |
| --------- | ------------ | ---- |
| Frontend  | GitHub Pages | Free |
| Backend   | Render       | Free |

Pushes to `main` trigger the GitHub Actions workflow at `.github/workflows/deploy-pages.yml`, which builds the frontend and deploys to GitHub Pages automatically.

For full step-by-step deployment instructions, see **[DEPLOY.md](./DEPLOY.md)**.

## Project Structure

```
react-portfolio-1/
├── .github/workflows/    # GitHub Actions CI/CD
├── react-portfolio/      # Frontend (React + Vite)
│   ├── src/
│   │   ├── components/   # Navbar, About, Experience, Projects, Contact, etc.
│   │   ├── constants/    # Content data (hero text, experiences, projects)
│   │   └── assets/       # Images and static files
│   ├── index.html
│   └── vite.config.js
├── server/               # Backend (Express + Nodemailer)
├── DEPLOY.md             # Deployment guide
└── package.json          # Root package (scripts for backend)
```

## License

This project is open source and available for personal use.
