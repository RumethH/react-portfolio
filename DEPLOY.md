# Deploy your portfolio for free (GitHub Pages + Render)

This setup uses **GitHub Pages** for the frontend and **Render** for the backend so you can share your site with anyone, for free.

---

## 1. Run locally

**Terminal 1 – backend (contact form emails):**
```bash
cd server
npm install
# Optional: create .env with GMAIL_USER and GMAIL_APP_PASSWORD
npm start
```
Server runs at `http://localhost:4000`. Use a [Gmail App Password](https://support.google.com/accounts/answer/185833) (not your normal Gmail password—it’s a separate 16-character code from your Google account under **App passwords**) and set `GMAIL_APP_PASSWORD` in `.env` (do not commit `.env`).

**Terminal 2 – frontend:**
```bash
cd react-portfolio
npm install
npm run dev
```
Open the URL Vite prints (e.g. `http://localhost:5173`). The contact form talks to `http://localhost:4000` in dev.

---

## 2. Deploy backend to Render (free)

1. Go to [render.com](https://render.com) and sign in with GitHub.
2. **New → Web Service**.
3. Connect this repo and set:
   - **Root Directory:** `server` ← important: Render must run from the `server` folder so `npm start` exists.
   - **Build Command:** `npm install` (or leave blank; Render runs this in the root directory you set).
   - **Start Command:** `npm start`
   - **Plan:** Free
4. Under **Environment**, add:
   - `GMAIL_USER` = your Gmail address  
   - `GMAIL_APP_PASSWORD` = your Gmail **App Password** (from [Google App Passwords](https://myaccount.google.com/apppasswords)—not your normal Gmail password)
5. Create the service. Note the URL (e.g. `https://your-app-name.onrender.com`). You’ll use this as `VITE_API_URL` for the frontend.

---

## 3. Deploy frontend to GitHub Pages (free)

1. In your GitHub repo go to **Settings → Pages**.
2. Under **Build and deployment**, set:
   - **Source:** GitHub Actions
3. Add a secret for your backend URL:
   - **Settings → Secrets and variables → Actions**
   - **New repository secret**
   - Name: `VITE_API_URL`  
   - Value: your Render URL, e.g. `https://your-app-name.onrender.com` (no trailing slash)
4. Push to the `main` branch. The workflow in `.github/workflows/deploy-pages.yml` will build and deploy.
5. After it runs, your site will be at:
   - `https://<your-username>.github.io/<repo-name>/`  
   - e.g. `https://rumeth.github.io/react-portfolio-1/`

---

## 4. Share your portfolio

- **Frontend:** `https://<your-username>.github.io/<repo-name>/`
- **Contact form:** Works as long as `VITE_API_URL` in GitHub Actions is set to your Render backend URL.

**Note:** On Render’s free tier the backend may sleep after inactivity; the first contact form submit after a while can be slow while it wakes up.
