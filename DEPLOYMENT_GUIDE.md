# 🚀 Deployment Guide - MERN Portfolio

This guide covers deploying your portfolio to production.

## 📋 Pre-Deployment Checklist

- [ ] All features tested locally
- [ ] Environment variables documented
- [ ] Database seeded with real data
- [ ] API endpoints tested
- [ ] Frontend builds successfully
- [ ] MongoDB connection string ready
- [ ] GitHub repository created

## 🗄️ Database Deployment (MongoDB Atlas)

### Step 1: Create MongoDB Atlas Account

1. Visit: https://www.mongodb.com/cloud/atlas/register
2. Sign up for a free account
3. Create a new cluster (M0 Free tier)

### Step 2: Configure Cluster

1. Choose cloud provider (AWS/Google/Azure)
2. Select region (closest to your users)
3. Wait for cluster creation (~5 minutes)

### Step 3: Create Database User

1. Go to **Database Access**
2. Click "**Add New Database User**"
3. Create username and password
4. Save credentials securely!

### Step 4: Configure Network Access

1. Go to **Network Access**
2. Click "**Add IP Address**"
3. Select "**Allow Access from Anywhere**" (0.0.0.0/0)
4. Or add specific IP addresses

### Step 5: Get Connection String

1. Click "**Connect**" on your cluster
2. Choose "**Connect your application**"
3. Copy the connection string
4. Replace `<password>` with your password
5. Replace `<dbname>` with `My_Portfolio`

**Example:**
\`\`\`
mongodb+srv://username:<password>@cluster0.xxxxx.mongodb.net/My_Portfolio?retryWrites=true&w=majority
\`\`\`

### Step 6: Migrate Data

Option A: **Using MongoDB Compass**
1. Connect to local database
2. Export collections (projects & contacts)
3. Connect to Atlas database
4. Import collections

Option B: **Using mongodump/mongorestore**
\`\`\`bash
# Export from local
mongodump --db My_Portfolio --out ./backup

# Import to Atlas
mongorestore --uri "your-atlas-connection-string" ./backup/My_Portfolio
\`\`\`

## 🖥️ Backend Deployment

### Option 1: Render (Recommended - Free Tier)

1. **Create Account:** https://render.com/
2. **New Web Service:**
   - Connect GitHub repository
   - Select server folder
   - Build command: `npm install`
   - Start command: `npm start`

3. **Environment Variables:**
   \`\`\`
   MONGODB_URI=your-atlas-connection-string
   NODE_ENV=production
   CLIENT_URL=your-frontend-url
   PORT=5000
   \`\`\`

4. **Deploy:** Click "Create Web Service"

### Option 2: Railway

1. **Create Account:** https://railway.app/
2. **New Project:** Import from GitHub
3. **Select server directory**
4. **Add Environment Variables** (same as above)
5. **Deploy:** Automatic deployment

### Option 3: Heroku

1. **Install Heroku CLI**
2. **Login:** `heroku login`
3. **Create app:**
   \`\`\`bash
   cd server
   heroku create your-portfolio-api
   \`\`\`
4. **Set environment variables:**
   \`\`\`bash
   heroku config:set MONGODB_URI=your-atlas-uri
   heroku config:set NODE_ENV=production
   \`\`\`
5. **Deploy:**
   \`\`\`bash
   git push heroku main
   \`\`\`

## 🌐 Frontend Deployment

### Option 1: Vercel (Recommended)

1. **Create Account:** https://vercel.com/
2. **Import Project:**
   - Connect GitHub repository
   - Select client folder
   - Framework: Vite
   - Build command: `npm run build`
   - Output directory: `dist`

3. **Environment Variables:**
   \`\`\`
   VITE_API_URL=https://your-backend-url.com/api
   \`\`\`

4. **Deploy:** Click "Deploy"

### Option 2: Netlify

1. **Create Account:** https://www.netlify.com/
2. **New Site from Git:**
   - Connect repository
   - Base directory: `client`
   - Build command: `npm run build`
   - Publish directory: `dist`

3. **Environment Variables:**
   - Go to Site Settings > Environment Variables
   - Add: `VITE_API_URL=your-backend-url/api`

4. **Deploy:** Click "Deploy site"

### Option 3: GitHub Pages (Static)

1. **Update vite.config.js:**
   \`\`\`javascript
   export default defineConfig({
     base: '/repository-name/',
     // ... other config
   })
   \`\`\`

2. **Build and deploy:**
   \`\`\`bash
   cd client
   npm run build
   # Use gh-pages package or manual upload
   \`\`\`

## 🔐 Environment Variables

### Backend (.env)
\`\`\`bash
# Production MongoDB Atlas
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/My_Portfolio

# Server Config
NODE_ENV=production
PORT=5000

# Frontend URL (deployed frontend)
CLIENT_URL=https://your-portfolio.vercel.app
\`\`\`

### Frontend (.env)
\`\`\`bash
# Backend API URL (deployed backend)
VITE_API_URL=https://your-api.render.com/api
\`\`\`

## 🎯 Post-Deployment Steps

### 1. Test All Features

- [ ] Homepage loads correctly
- [ ] Projects display properly
- [ ] Filtering works
- [ ] Contact form submits
- [ ] Toast notifications appear
- [ ] All links work

### 2. Configure Custom Domain (Optional)

**Vercel:**
1. Go to project settings
2. Add custom domain
3. Update DNS records

**Render:**
1. Go to Settings > Custom Domain
2. Add your domain
3. Configure DNS

### 3. Setup SSL Certificate

Most platforms (Vercel, Netlify, Render) provide free SSL certificates automatically.

### 4. Monitor Performance

- Check loading times
- Monitor API response times
- Review error logs
- Set up uptime monitoring

## 📊 Monitoring & Analytics

### Backend Monitoring

**Recommended Tools:**
- Render Dashboard (built-in)
- Uptime Robot: https://uptimerobot.com/
- New Relic (for detailed metrics)

### Frontend Analytics

**Google Analytics:**
1. Create property
2. Add tracking code to `index.html`
3. Monitor traffic

**Vercel Analytics:**
- Built-in with Vercel deployment
- Automatic performance tracking

## 🔧 Troubleshooting

### CORS Errors

Update server CORS config:
\`\`\`javascript
app.use(cors({
  origin: [
    'https://your-portfolio.vercel.app',
    'http://localhost:5173'
  ],
  credentials: true,
}));
\`\`\`

### MongoDB Connection Error

- Verify connection string
- Check network access (IP whitelist)
- Confirm database user credentials
- Test connection with MongoDB Compass

### Build Fails

- Check Node.js version compatibility
- Verify all dependencies installed
- Review build logs for errors
- Test build locally first

### Environment Variables Not Working

- Verify variable names (VITE_ prefix for frontend)
- Redeploy after adding variables
- Check platform-specific syntax
- Clear cache and rebuild

## 🎨 Customization for Production

### Update Personal Info

Edit `/client/src/data/constants.js`:
- Real name and contact info
- Actual social media links
- Professional bio
- Working resume link

### Add Real Projects

Via MongoDB Compass or API:
1. Delete sample projects
2. Add your actual projects
3. Use real screenshots
4. Add working demo links

### Custom Domain Setup

1. Purchase domain (Namecheap, GoDaddy)
2. Add to hosting platform
3. Configure DNS:
   - A record: Points to server IP
   - CNAME: Points to hosting platform

## 📱 Progressive Web App (Optional)

### Add PWA Support

1. **Install plugin:**
   \`\`\`bash
   npm install vite-plugin-pwa
   \`\`\`

2. **Update vite.config.js:**
   \`\`\`javascript
   import { VitePWA } from 'vite-plugin-pwa'
   
   plugins: [
     react(),
     VitePWA({
       registerType: 'autoUpdate',
       manifest: {
         name: 'Your Portfolio',
         short_name: 'Portfolio',
         theme_color: '#0ea5e9',
       }
     })
   ]
   \`\`\`

## 🚀 Continuous Deployment

### GitHub Actions (Auto-deploy)

Create `.github/workflows/deploy.yml`:
\`\`\`yaml
name: Deploy

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
      - run: npm install
      - run: npm run build
      # Add deployment steps
\`\`\`

## 📈 Performance Optimization

### Frontend
- Enable gzip compression
- Optimize images (use WebP)
- Lazy load components
- Minimize bundle size

### Backend
- Enable response compression
- Add caching headers
- Optimize database queries
- Use connection pooling

## ✅ Deployment Checklist

Before going live:

- [ ] MongoDB Atlas configured
- [ ] Data migrated to production DB
- [ ] Backend deployed and tested
- [ ] Frontend deployed and tested
- [ ] Environment variables set
- [ ] CORS configured correctly
- [ ] Custom domain (optional)
- [ ] SSL certificate active
- [ ] Contact form working
- [ ] All links verified
- [ ] Mobile responsive checked
- [ ] SEO metadata added
- [ ] Analytics setup
- [ ] Error monitoring enabled
- [ ] README updated with live links

## 🎉 Congratulations!

Your portfolio is now live! Share it with:
- Potential employers
- Clients
- Social media
- LinkedIn profile
- Resume/CV

**Live URLs to Share:**
- Portfolio: `https://your-portfolio.vercel.app`
- API: `https://your-api.render.com`

---

## 📞 Need Help?

If you encounter issues:
1. Check platform documentation
2. Review error logs
3. Search community forums
4. Reach out for support

**Good luck with your deployment! 🚀**
