# 🚀 Deployment Guide - Free Hosting

This guide will help you deploy your MERN portfolio to free hosting platforms.

## 📋 Prerequisites

- GitHub account
- Vercel account (sign up at https://vercel.com)
- Render account (sign up at https://render.com)
- MongoDB Atlas account (sign up at https://www.mongodb.com/cloud/atlas)

---

## 🗄️ STEP 1: Setup MongoDB Atlas (Database)

### 1.1 Create Free Cluster
1. Go to https://www.mongodb.com/cloud/atlas
2. Sign up/Login
3. Click **"Build a Database"**
4. Select **"M0 FREE"** tier
5. Choose a cloud provider and region (closest to you)
6. Click **"Create Cluster"**

### 1.2 Create Database User
1. In the left sidebar, click **"Database Access"**
2. Click **"Add New Database User"**
3. Choose **"Password"** authentication
4. Username: `portfolio_user`
5. Click **"Autogenerate Secure Password"** (SAVE THIS!)
6. User Privileges: **"Read and write to any database"**
7. Click **"Add User"**

### 1.3 Allow Network Access
1. In the left sidebar, click **"Network Access"**
2. Click **"Add IP Address"**
3. Click **"Allow Access from Anywhere"** (for Render)
4. Click **"Confirm"**

### 1.4 Get Connection String
1. Go back to **"Database"** → Click **"Connect"**
2. Choose **"Connect your application"**
3. Copy the connection string (looks like):
   ```
   mongodb+srv://portfolio_user:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```
4. Replace `<password>` with your saved password
5. Add `/My_Portfolio` before the `?` character:
   ```
   mongodb+srv://portfolio_user:yourpassword@cluster0.xxxxx.mongodb.net/My_Portfolio?retryWrites=true&w=majority
   ```

### 1.5 Seed Production Database
1. Update your local `server/.env` file with the Atlas connection string
2. Run: `cd server && npm run seed`
3. This will populate your cloud database with your projects

---

## 🖥️ STEP 2: Deploy Backend to Render

### 2.1 Prepare Repository
1. Make sure your code is pushed to GitHub
2. Ensure `server/package.json` has:
   ```json
   "scripts": {
     "start": "node server.js",
     "dev": "nodemon server.js"
   }
   ```

### 2.2 Create Render Web Service
1. Go to https://render.com/dashboard
2. Click **"New +"** → **"Web Service"**
3. Connect your GitHub account
4. Select your **My-portfolio-** repository
5. Configure:
   - **Name**: `my-portfolio-api`
   - **Region**: Choose closest to you
   - **Branch**: `main`
   - **Root Directory**: `server`
   - **Runtime**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `node server.js`
   - **Instance Type**: `Free`

### 2.3 Add Environment Variables
Click **"Advanced"** → **"Add Environment Variable"**:

```
MONGO_URI = mongodb+srv://portfolio_user:yourpassword@cluster0.xxxxx.mongodb.net/My_Portfolio?retryWrites=true&w=majority

NODE_ENV = production

CLIENT_URL = https://your-app.vercel.app
(We'll update this after Vercel deployment)
```

### 2.4 Deploy
1. Click **"Create Web Service"**
2. Wait 3-5 minutes for deployment
3. Copy your backend URL (looks like): `https://my-portfolio-api.onrender.com`
4. **SAVE THIS URL!**

---

## 🌐 STEP 3: Deploy Frontend to Vercel

### 3.1 Update API URL in Code
1. Create `client/.env.production` file:
   ```
   VITE_API_URL=https://my-portfolio-api.onrender.com
   ```
   (Use your actual Render backend URL)

2. Update `client/src/utils/api.js` (or wherever you call the API):
   ```javascript
   const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
   ```

### 3.2 Deploy to Vercel
1. Go to https://vercel.com/dashboard
2. Click **"Add New..."** → **"Project"**
3. Import your **My-portfolio-** repository
4. Configure:
   - **Framework Preset**: `Vite`
   - **Root Directory**: `client`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

### 3.3 Add Environment Variable
- **Key**: `VITE_API_URL`
- **Value**: `https://my-portfolio-api.onrender.com` (your Render URL)

### 3.4 Deploy
1. Click **"Deploy"**
2. Wait 2-3 minutes
3. You'll get a URL like: `https://my-portfolio-xxx.vercel.app`

---

## 🔄 STEP 4: Update CORS Settings

### 4.1 Update Backend Environment Variables
1. Go back to **Render Dashboard** → Your web service
2. Go to **"Environment"**
3. Update `CLIENT_URL` to your Vercel URL:
   ```
   CLIENT_URL = https://my-portfolio-xxx.vercel.app
   ```
4. Click **"Save Changes"**
5. Service will automatically redeploy

---

## ✅ STEP 5: Test Your Live Portfolio

1. Visit your Vercel URL: `https://my-portfolio-xxx.vercel.app`
2. Check all pages work
3. Test the contact form
4. Verify projects are loading

---

## 🐛 Troubleshooting

### Backend Issues
- **Check Render Logs**: Dashboard → Your service → "Logs"
- **MongoDB Connection**: Verify connection string is correct
- **Environment Variables**: Double-check all variables are set

### Frontend Issues
- **API Not Working**: Check `VITE_API_URL` is correct
- **Build Errors**: Check Vercel build logs
- **404 Errors**: Ensure `vercel.json` rewrites are configured

### Contact Form Not Working
- Check backend logs for errors
- Verify CORS settings allow your Vercel domain
- Test API endpoint directly: `https://your-api.onrender.com/api/contacts`

---

## 📝 Important Notes

### Free Tier Limitations
- **Render**: Service sleeps after 15 minutes of inactivity (first request takes 30-60 seconds)
- **Vercel**: 100 GB bandwidth/month
- **MongoDB Atlas**: 512 MB storage

### Custom Domain (Optional)
- **Vercel**: Settings → Domains → Add custom domain
- **Update**: Change `CLIENT_URL` in Render to your custom domain

---

## 🔐 Security Checklist

- ✅ `.env` files are in `.gitignore`
- ✅ MongoDB password is secure
- ✅ MongoDB network access is configured
- ✅ CORS is properly configured
- ✅ No sensitive data in GitHub repo

---

## 🚀 Deploy Updates

### After Making Changes:
```bash
# 1. Commit changes
git add .
git commit -m "Update portfolio"
git push origin main

# 2. Vercel will auto-redeploy
# 3. Render will auto-redeploy
```

---

## 📞 Support

- **Vercel Docs**: https://vercel.com/docs
- **Render Docs**: https://render.com/docs
- **MongoDB Atlas Docs**: https://docs.atlas.mongodb.com/

---

**🎉 Congratulations! Your portfolio is now live!**
