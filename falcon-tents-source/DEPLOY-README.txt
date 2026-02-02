SOURCE DEPLOYMENT - For platforms that run npm run build
========================================================

This package contains the full project with app/ and src/ directories.
Use this when your hosting platform automatically runs npm install and npm run build.

STEPS (usually automatic on Hostinger, Vercel, etc.):
-----------------------------------------------------
  1. npm install
  2. npm run build
  3. npm start

Build commands (if you need to set them manually):
  Build:  npm run build
  Start:  npm start   (or: node server.js if using standalone output)

Requirements: Node.js 18+
