HOSTINGER VPS DEPLOYMENT
========================

1. Upload this zip to your Hostinger VPS
2. Extract: unzip falcon-tents-deploy.zip
3. cd falcon-tents-deploy
4. Run: node server.js

Do NOT run npm install or npm run build.

For PM2 (run in background):
  pm2 start server.js --name falcon-tents
  pm2 save
  pm2 startup
