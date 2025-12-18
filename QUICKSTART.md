# MERN Portfolio - Quick Start Guide

## 🚀 Quick Setup (5 Minutes)

### Step 1: Install MongoDB
Download and install MongoDB from https://www.mongodb.com/try/download/community

### Step 2: Install Dependencies

**Backend:**
\`\`\`bash
cd server
npm install
\`\`\`

**Frontend:**
\`\`\`bash
cd client
npm install
\`\`\`

### Step 3: Start MongoDB

**Windows:**
\`\`\`bash
net start MongoDB
\`\`\`

**Mac/Linux:**
\`\`\`bash
brew services start mongodb-community
# OR
sudo systemctl start mongod
\`\`\`

### Step 4: Seed Database
\`\`\`bash
cd server
npm run seed
\`\`\`

### Step 5: Start Servers

**Terminal 1 (Backend):**
\`\`\`bash
cd server
npm run dev
\`\`\`

**Terminal 2 (Frontend):**
\`\`\`bash
cd client
npm run dev
\`\`\`

### Step 6: Open Browser
Navigate to: `http://localhost:5173`

## 📊 MongoDB Compass

1. Download: https://www.mongodb.com/products/compass
2. Connect to: `mongodb://localhost:27017`
3. Database: `My_Portfolio`
4. Collections: `projects`, `contacts`

## 🛠️ Common Issues

**MongoDB Connection Error:**
- Make sure MongoDB is running
- Check connection string in `/server/.env`

**Port Already in Use:**
- Backend: Change PORT in `/server/.env`
- Frontend: Change port in `/client/vite.config.js`

**Dependencies Error:**
- Delete `node_modules` folder
- Delete `package-lock.json`
- Run `npm install` again

## 📝 Environment Variables

**Server (.env):**
\`\`\`
MONGODB_URI=mongodb://localhost:27017/My_Portfolio
PORT=5000
NODE_ENV=development
CLIENT_URL=http://localhost:5173
\`\`\`

**Client (.env):**
\`\`\`
VITE_API_URL=http://localhost:5000/api
\`\`\`

## 🎯 Next Steps

1. Customize personal information in `/client/src/data/constants.js`
2. Add your projects via MongoDB Compass
3. Update colors in `/client/tailwind.config.js`
4. Add your resume PDF to `/client/public/`

## 📞 Need Help?

Check the main README.md for detailed documentation!
