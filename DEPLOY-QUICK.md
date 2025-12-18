# Quick Deployment Guide

Follow these steps to deploy your portfolio for free:

## 📦 What You Need
- GitHub account ✅ (Already done)
- Vercel account (for frontend)
- Render account (for backend)
- MongoDB Atlas account (for database)

---

## 🚀 Quick Start (30 minutes)

### 1️⃣ Setup Database (10 min)
1. Go to **MongoDB Atlas**: https://www.mongodb.com/cloud/atlas
2. Create **FREE M0 cluster**
3. Create database user (save password!)
4. Add network access: **0.0.0.0/0** (Allow all)
5. Get connection string:
   ```
   mongodb+srv://user:password@cluster.xxxxx.mongodb.net/My_Portfolio?retryWrites=true&w=majority
   ```

### 2️⃣ Deploy Backend (10 min)
1. Go to **Render**: https://render.com
2. New **Web Service** → Connect GitHub
3. Select **My-portfolio-** repo
4. Settings:
   - Root Directory: `server`
   - Build: `npm install`
   - Start: `node server.js`
   - Free tier
5. Add Environment Variables:
   ```
   MONGO_URI = <your-mongodb-atlas-connection-string>
   NODE_ENV = production
   ```
6. Deploy → Copy your URL: `https://your-api.onrender.com`

### 3️⃣ Deploy Frontend (10 min)
1. Create `client/.env.production`:
   ```
   VITE_API_URL=https://your-api.onrender.com
   ```
2. Commit and push:
   ```bash
   git add .
   git commit -m "Add production config"
   git push origin main
   ```
3. Go to **Vercel**: https://vercel.com
4. Import **My-portfolio-** repo
5. Settings:
   - Framework: Vite
   - Root Directory: `client`
   - Build: `npm run build`
6. Environment Variable:
   ```
   VITE_API_URL = https://your-api.onrender.com
   ```
7. Deploy → Get your URL: `https://your-portfolio.vercel.app`

### 4️⃣ Update CORS
1. Go back to Render → Your service → Environment
2. Add:
   ```
   CLIENT_URL = https://your-portfolio.vercel.app
   ```
3. Save (auto redeploys)

---

## ✅ Done!
Your portfolio is live at: `https://your-portfolio.vercel.app`

📖 For detailed instructions, see [DEPLOYMENT.md](DEPLOYMENT.md)
