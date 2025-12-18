# 🔧 Troubleshooting Guide - MERN Portfolio

Common issues and their solutions.

## 📋 Table of Contents

1. [Installation Issues](#installation-issues)
2. [MongoDB Issues](#mongodb-issues)
3. [Backend Issues](#backend-issues)
4. [Frontend Issues](#frontend-issues)
5. [API Issues](#api-issues)
6. [Common Errors](#common-errors)

---

## Installation Issues

### ❌ npm install fails

**Error:** `npm ERR! code EACCES` or permission errors

**Solutions:**
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

### ❌ Node version incompatibility

**Error:** `Unsupported engine`

**Solution:**
```bash
# Check your Node version
node --version

# Update to Node.js 16+ if needed
# Download from: https://nodejs.org/
```

---

## MongoDB Issues

### ❌ MongoDB won't start

**Error:** `MongoDB service failed to start`

**Solutions:**

**Windows:**
```powershell
# Check if MongoDB is installed
mongod --version

# Try starting manually
net start MongoDB

# Or start as admin
# Run PowerShell as Administrator
Start-Service MongoDB
```

**If still not working:**
1. Check if MongoDB is installed: `C:\Program Files\MongoDB\`
2. Install MongoDB: https://www.mongodb.com/try/download/community
3. Ensure MongoDB is added to PATH

### ❌ Can't connect to MongoDB

**Error:** `MongoServerError: connect ECONNREFUSED`

**Solutions:**

1. **Check if MongoDB is running:**
   ```bash
   # Windows
   tasklist | findstr mongod
   
   # Should show mongod.exe running
   ```

2. **Verify connection string:**
   ```bash
   # In server/.env
   MONGODB_URI=mongodb://localhost:27017/My_Portfolio
   ```

3. **Test connection with MongoDB Compass:**
   - Open MongoDB Compass
   - Connect to: `mongodb://localhost:27017`
   - If this works, the issue is in your code

### ❌ Database not showing in Compass

**Issue:** "My_Portfolio" database not visible

**Solutions:**
```bash
# Run the seed script
cd server
npm run seed

# Check the output - should create database
# Refresh MongoDB Compass
```

---

## Backend Issues

### ❌ Server won't start

**Error:** `Error: listen EADDRINUSE: address already in use :::5000`

**Solution:**

**Port is already in use - kill the process:**

**Windows:**
```powershell
# Find process using port 5000
netstat -ano | findstr :5000

# Kill the process (replace PID with actual number)
taskkill /PID <PID> /F

# Or change port in server/.env
PORT=5001
```

**Mac/Linux:**
```bash
# Find and kill process
lsof -ti:5000 | xargs kill -9

# Or change port
```

### ❌ Module not found errors

**Error:** `Error: Cannot find module 'express'`

**Solution:**
```bash
cd server
rm -rf node_modules package-lock.json
npm install
```

### ❌ Environment variables not loading

**Error:** `undefined` values for env variables

**Solutions:**

1. **Check .env file exists:**
   ```bash
   # Should exist: server/.env
   # Copy from example if missing
   cp server/.env.example server/.env
   ```

2. **Verify dotenv is imported:**
   ```javascript
   // At the top of server.js
   import dotenv from 'dotenv';
   dotenv.config();
   ```

3. **Check variable names:**
   ```javascript
   // No typos
   process.env.MONGODB_URI
   process.env.PORT
   ```

---

## Frontend Issues

### ❌ Frontend won't start

**Error:** `Port 5173 is already in use`

**Solution:**

**Windows:**
```powershell
# Find and kill process
netstat -ano | findstr :5173
taskkill /PID <PID> /F
```

**Or change port in vite.config.js:**
```javascript
export default defineConfig({
  server: {
    port: 5174, // Changed port
  }
})
```

### ❌ Blank white page

**Issue:** Frontend loads but shows blank page

**Solutions:**

1. **Check browser console for errors:**
   - Press F12
   - Look at Console tab
   - Check for red errors

2. **Verify React is rendering:**
   ```javascript
   // Check src/main.jsx
   ReactDOM.createRoot(document.getElementById('root')).render(...)
   ```

3. **Clear browser cache:**
   - Ctrl + Shift + Delete
   - Clear cache and reload

### ❌ Tailwind styles not working

**Issue:** No styling applied

**Solutions:**

1. **Check Tailwind imports:**
   ```css
   /* src/index.css should have: */
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

2. **Verify tailwind.config.js:**
   ```javascript
   content: [
     "./index.html",
     "./src/**/*.{js,ts,jsx,tsx}",
   ],
   ```

3. **Rebuild:**
   ```bash
   cd client
   npm run dev
   ```

### ❌ API calls failing

**Error:** `Network Error` or `404 Not Found`

**Solutions:**

1. **Check backend is running:**
   - Visit: http://localhost:5000/api/health
   - Should return JSON response

2. **Verify API URL in .env:**
   ```bash
   # client/.env
   VITE_API_URL=http://localhost:5000/api
   ```

3. **Check CORS settings:**
   ```javascript
   // server.js
   app.use(cors({
     origin: 'http://localhost:5173'
   }));
   ```

---

## API Issues

### ❌ CORS errors

**Error:** `Access to fetch has been blocked by CORS policy`

**Solutions:**

1. **Update CORS config in server.js:**
   ```javascript
   import cors from 'cors';
   
   app.use(cors({
     origin: process.env.CLIENT_URL || 'http://localhost:5173',
     credentials: true,
   }));
   ```

2. **Check CLIENT_URL in .env:**
   ```bash
   CLIENT_URL=http://localhost:5173
   ```

### ❌ 404 on API endpoints

**Error:** `GET /api/projects 404 (Not Found)`

**Solutions:**

1. **Verify routes are registered:**
   ```javascript
   // server.js should have:
   app.use('/api/projects', projectRoutes);
   app.use('/api/contacts', contactRoutes);
   ```

2. **Check route files exist:**
   - server/routes/projectRoutes.js
   - server/routes/contactRoutes.js

3. **Test endpoint directly:**
   - Visit: http://localhost:5000/api/projects
   - Should return JSON

### ❌ Validation errors

**Error:** `400 Bad Request - Validation error`

**Solutions:**

Check your request body matches the schema:

**Projects require:**
```json
{
  "title": "string (required)",
  "description": "string (required)",
  "techStack": ["array", "of", "strings"],
  "images": ["optional", "urls"],
  "githubUrl": "optional string",
  "liveUrl": "optional string"
}
```

**Contacts require:**
```json
{
  "name": "string (min 2 chars)",
  "email": "valid email",
  "message": "string (min 10 chars)"
}
```

---

## Common Errors

### ❌ "MongooseError: Operation buffering timed out"

**Cause:** MongoDB not running or wrong connection string

**Solution:**
1. Start MongoDB service
2. Check connection string in .env
3. Verify MongoDB is accessible

### ❌ "Cannot read property of undefined"

**Cause:** Data not loaded or API failed

**Solution:**
1. Check network tab in browser (F12)
2. Verify API is returning data
3. Add null checks in code:
   ```javascript
   const projects = data?.projects || [];
   ```

### ❌ "Unexpected token < in JSON"

**Cause:** Receiving HTML instead of JSON (usually 404 or error page)

**Solution:**
1. Check the API endpoint URL
2. Verify backend is running
3. Check backend logs for errors

### ❌ Images not loading

**Cause:** Invalid image URLs or CORS

**Solution:**
1. Use full URLs (https://...)
2. Test URLs in browser
3. Use image hosting services:
   - Unsplash
   - Cloudinary
   - AWS S3

### ❌ "React Hook useEffect has a missing dependency"

**Cause:** ESLint warning about dependencies

**Solution:**
```javascript
// Add missing dependencies
useEffect(() => {
  fetchData();
}, [fetchData]); // Add dependency

// Or disable for specific line
// eslint-disable-next-line react-hooks/exhaustive-deps
```

---

## 🔍 Debugging Tips

### Check Server Logs

```bash
cd server
npm run dev

# Look for:
# ✅ MongoDB Connected
# ✅ Server running on port 5000
```

### Check Browser Console

1. Open DevTools (F12)
2. Console tab - Check for errors
3. Network tab - Check API calls
4. React DevTools - Check component state

### Test API with cURL

```bash
# Test health endpoint
curl http://localhost:5000/api/health

# Test get projects
curl http://localhost:5000/api/projects

# Test post contact
curl -X POST http://localhost:5000/api/contacts \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@test.com","message":"Test message"}'
```

### Use MongoDB Compass

1. Connect to database
2. Check if collections exist
3. Verify data is present
4. Test queries manually

---

## 🆘 Still Having Issues?

### Before Seeking Help:

1. ✅ Check all error messages carefully
2. ✅ Search error message online
3. ✅ Review relevant documentation
4. ✅ Check MongoDB is running
5. ✅ Verify all dependencies installed
6. ✅ Try restarting servers

### When Asking for Help:

Include:
- Exact error message
- What you tried
- Your environment (OS, Node version)
- Steps to reproduce
- Relevant code snippets
- Screenshots if applicable

### Useful Resources:

- **MongoDB Docs:** https://docs.mongodb.com/
- **React Docs:** https://react.dev/
- **Express Docs:** https://expressjs.com/
- **Stack Overflow:** Search for specific errors
- **GitHub Issues:** Check project issues

---

## 🔄 Clean Restart

If all else fails, try a complete reset:

```bash
# 1. Stop all servers (Ctrl+C)

# 2. Delete dependencies
cd server
rm -rf node_modules package-lock.json

cd ../client
rm -rf node_modules package-lock.json

# 3. Reinstall everything
cd ../server
npm install

cd ../client
npm install

# 4. Reset database
cd ../server
npm run seed

# 5. Start fresh
npm run dev
```

---

## ✅ System Health Check

Run this checklist:

- [ ] Node.js installed (v16+)
- [ ] MongoDB installed and running
- [ ] Server dependencies installed
- [ ] Client dependencies installed
- [ ] .env files exist and configured
- [ ] Database seeded
- [ ] Backend running on port 5000
- [ ] Frontend running on port 5173
- [ ] Can access both in browser
- [ ] API calls working
- [ ] MongoDB Compass connected

---

**Still stuck? Don't worry!** Most issues are simple configuration problems. Work through the checklist systematically and you'll find the solution. 💪

Happy debugging! 🐛🔨
