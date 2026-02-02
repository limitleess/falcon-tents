# Deploy Falcon Tents to Hostinger

## Important: Use VPS or Node.js Hosting

Next.js needs a **Node.js runtime**. Hostinger **shared hosting** does not support it. Use:
- **Hostinger VPS** (recommended), or
- **Hostinger Node.js Web App** (if available in your plan)

---

## Method 1: VPS – Standalone Package (fastest)

**Use:** `falcon-tents-deploy.zip` — pre-built, no build step.

### Steps

1. **Upload**  
   - In hPanel → **Files** → File Manager  
   - Or use SSH/SCP

2. **Extract**
   ```bash
   unzip falcon-tents-deploy.zip
   cd falcon-tents-deploy
   ```

3. **Run**
   ```bash
   node server.js
   ```

4. **Run in background with PM2**
   ```bash
   npm install -g pm2
   pm2 start server.js --name falcon-tents
   pm2 save
   pm2 startup   # enable auto-start on reboot
   ```

5. **Use Nginx** as reverse proxy (optional, for domain/SSL):
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;
       location / {
           proxy_pass http://127.0.0.1:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
       }
   }
   ```

---

## Method 2: Node.js App (Git or ZIP deploy)

**Use:** `falcon-tents-source.zip` — when the platform runs the build for you.

### Via hPanel → Node.js

1. In hPanel, open **Advanced** → **Node.js**
2. Click **Create application**
3. **Upload** or connect Git
   - ZIP: upload `falcon-tents-source.zip` and extract
   - Git: connect your repository
4. **Settings**
   - Node version: **18** or **20**
   - Build command: `npm run build`
   - Start command: `npm start` (or `node server.js` if using standalone output)
5. Deploy

---

## Method 3: VPS – Full source

**Use:** `falcon-tents-source.zip` — full source, you run build on the server.

1. Upload and extract `falcon-tents-source.zip`
2. SSH into the VPS:
   ```bash
   cd /path/to/falcon-tents-source
   npm install
   npm run build
   node .next/standalone/server.js
   ```
   Or with PM2:
   ```bash
   pm2 start "node .next/standalone/server.js" --name falcon-tents
   ```

---

## Environment variables

If you use `.env`, add the same variables in Hostinger:
- hPanel → Node.js → Your app → Environment variables

---

## Which zip to use

| File | Use case |
|------|----------|
| **falcon-tents-deploy.zip** | VPS, run `node server.js` only. No build. |
| **falcon-tents-source.zip** | Node.js app or manual VPS build. Run `npm install`, `npm run build`, then `npm start`. |
