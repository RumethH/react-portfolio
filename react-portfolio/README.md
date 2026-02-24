# react-portfolio (frontend)

The React frontend for the portfolio site. Built with **Vite 6**, **React 19**, and **Tailwind CSS 4**.

## Scripts

| Command            | Description                        |
| ------------------ | ---------------------------------- |
| `npm run dev`      | Start local dev server with HMR    |
| `npm run build`    | Production build to `dist/`        |
| `npm run preview`  | Preview the production build       |
| `npm run lint`     | Run ESLint                         |
| `npm run deploy`   | Deploy `dist/` to GitHub Pages     |

## Configuration

- [vite.config.js](./vite.config.js) — Vite + Tailwind plugin setup; `VITE_BASE_PATH` env var sets the base path for GitHub Pages.
- [eslint.config.js](./eslint.config.js) — ESLint flat config with React hooks and refresh plugins.

See the root [README](../README.md) for full project details.
