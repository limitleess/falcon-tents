# Falcon Tents - Deployment Guide

## Option A: Standalone Package (Hostinger VPS, cPanel Node.js, etc.)

**Use:** `falcon-tents-deploy.zip`

1. Upload and extract the zip on your server
2. Open terminal in the extracted `falcon-tents-deploy` folder
3. Run: **`node server.js`**

⚠️ **Do NOT run** `npm install` or `npm run build` — the package is pre-built.

---

## Option B: Full Source (Git deployment, platforms that run build)

**Use:** The full project folder (with `src/`, `package.json`, etc.)

1. Upload the entire project or connect your Git repo
2. Run: `npm install`
3. Run: `npm run build`
4. Run: `npm start`

---

## Hostinger VPS Steps

1. SSH into your VPS
2. Upload `falcon-tents-deploy.zip` (e.g. via File Manager or SCP)
3. Extract: `unzip falcon-tents-deploy.zip`
4. `cd falcon-tents-deploy`
5. `node server.js` (or use PM2: `pm2 start server.js --name falcon-tents`)
