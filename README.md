# 🚀 Modern MERN Stack Portfolio

A professional, production-ready full-stack portfolio application built with the MERN stack (MongoDB, Express, React, Node.js). Features a modern dark theme with glassmorphism design, smooth animations, and a fully functional backend API.

![Portfolio Preview](https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop)

## ✨ Features

### Frontend
- ⚡ **React 18** with Vite for blazing-fast development
- 🎨 **Tailwind CSS** for modern, responsive styling
- 🌊 **Framer Motion** for smooth animations and transitions
- 🎯 **React Router** for seamless navigation
- 🔔 **Toast Notifications** for user feedback
- 📱 **Mobile-First Design** - fully responsive
- 🌙 **Dark Theme** with glassmorphism effects
- ♿ **Accessible** - semantic HTML and ARIA labels

### Backend
- 🟢 **Node.js & Express** REST API
- 🍃 **MongoDB** with Mongoose ODM
- ✅ **Input Validation** with express-validator
- 🔒 **CORS** enabled for security
- 📊 **Centralized Error Handling**
- 🎯 **MVC Architecture** for clean code organization

### Database
- 📦 **MongoDB Compass** compatible
- 🗃️ Project management schema
- 📧 Contact form submissions
- 🌱 Seed script for initial data

## 🛠️ Tech Stack

**Frontend:**
- React 18
- Vite
- Tailwind CSS
- Framer Motion
- React Router DOM
- Axios
- React Hot Toast
- Lucide React Icons

**Backend:**
- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv
- CORS

**Development:**
- ESLint
- PostCSS
- Autoprefixer
- Nodemon

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- **MongoDB** (v5 or higher) - [Download](https://www.mongodb.com/try/download/community)
- **MongoDB Compass** (Optional but recommended) - [Download](https://www.mongodb.com/products/compass)
- **npm** or **yarn** package manager

## 🚀 Installation & Setup

### 1. Clone the Repository

\`\`\`bash
git clone <your-repo-url>
cd Portfolio
\`\`\`

### 2. Backend Setup

\`\`\`bash
# Navigate to server directory
cd server

# Install dependencies
npm install

# Create .env file (copy from .env.example)
cp .env.example .env

# Edit .env file with your configuration
# MONGODB_URI=mongodb://localhost:27017/My_Portfolio
# PORT=5000
\`\`\`

### 3. Start MongoDB

**Option A: Using MongoDB Service (Windows)**
\`\`\`bash
# Start MongoDB service
net start MongoDB
\`\`\`

**Option B: Using MongoDB Compass**
1. Open MongoDB Compass
2. Connect to `mongodb://localhost:27017`
3. The application will automatically create the "My_Portfolio" database

### 4. Seed the Database

\`\`\`bash
# Run the seed script to populate initial data
npm run seed
\`\`\`

This will create:
- 6 sample projects with various tech stacks
- 2 sample contact messages
- All data will be visible in MongoDB Compass

### 5. Start the Backend Server

\`\`\`bash
# Development mode with auto-restart
npm run dev

# OR Production mode
npm start
\`\`\`

Server will run on: `http://localhost:5000`

### 6. Frontend Setup

Open a new terminal window:

\`\`\`bash
# Navigate to client directory
cd client

# Install dependencies
npm install

# Create .env file (copy from .env.example)
cp .env.example .env

# Start the development server
npm run dev
\`\`\`

Frontend will run on: `http://localhost:5173`

## 🗄️ MongoDB Compass Setup

### Connecting to Your Database

1. **Open MongoDB Compass**
2. **Connection String:** 
   \`\`\`
   mongodb://localhost:27017
   \`\`\`
3. Click **Connect**
4. You should see the **My_Portfolio** database

### Database Structure

**Collections:**

1. **projects**
   - title (String)
   - description (String)
   - techStack (Array of Strings)
   - images (Array of URLs)
   - githubUrl (String)
   - liveUrl (String)
   - featured (Boolean)
   - order (Number)
   - createdAt (Date)
   - updatedAt (Date)

2. **contacts**
   - name (String)
   - email (String)
   - message (String)
   - status (String: unread/read/archived)
   - ipAddress (String)
   - createdAt (Date)
   - updatedAt (Date)

### Managing Data in MongoDB Compass

- **View Projects:** Click on "projects" collection
- **Add Project:** Click "Insert Document" button
- **Edit Project:** Double-click on any field to edit
- **Delete Project:** Click the trash icon
- **View Contacts:** Click on "contacts" collection

## 📁 Project Structure

\`\`\`
Portfolio/
│
├── client/                    # Frontend React Application
│   ├── public/               # Public assets
│   ├── src/
│   │   ├── components/       # Reusable components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Loader.jsx
│   │   │   └── ErrorMessage.jsx
│   │   ├── pages/           # Page components
│   │   │   ├── Home.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Projects.jsx
│   │   │   └── Contact.jsx
│   │   ├── services/        # API service layer
│   │   │   └── api.js
│   │   ├── utils/           # Utility functions
│   │   │   └── helpers.js
│   │   ├── data/            # Static data and constants
│   │   │   └── constants.js
│   │   ├── App.jsx          # Main App component
│   │   ├── main.jsx         # Entry point
│   │   └── index.css        # Global styles
│   ├── package.json
│   ├── vite.config.js
│   └── tailwind.config.js
│
├── server/                   # Backend Node/Express API
│   ├── config/              # Configuration files
│   │   ├── database.js      # MongoDB connection
│   │   └── seed.js          # Database seed script
│   ├── controllers/         # Route controllers
│   │   ├── projectController.js
│   │   └── contactController.js
│   ├── models/              # Mongoose models
│   │   ├── Project.js
│   │   └── Contact.js
│   ├── routes/              # API routes
│   │   ├── projectRoutes.js
│   │   └── contactRoutes.js
│   ├── middleware/          # Custom middleware
│   │   └── errorMiddleware.js
│   ├── server.js            # Main server file
│   ├── package.json
│   └── .env                 # Environment variables
│
└── README.md               # This file
\`\`\`

## 🔌 API Endpoints

### Projects API

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/projects` | Get all projects |
| GET | `/api/projects?techStack=React` | Filter projects by tech |
| GET | `/api/projects?featured=true` | Get featured projects |
| GET | `/api/projects/:id` | Get single project |
| POST | `/api/projects` | Create new project |
| PUT | `/api/projects/:id` | Update project |
| DELETE | `/api/projects/:id` | Delete project |
| GET | `/api/projects/tags/all` | Get all unique tags |

### Contacts API

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/contacts` | Get all messages |
| GET | `/api/contacts/:id` | Get single message |
| POST | `/api/contacts` | Create new message |
| PATCH | `/api/contacts/:id` | Update message status |
| DELETE | `/api/contacts/:id` | Delete message |

### Health Check

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/health` | Server health check |

## 🎨 Customization Guide

### 1. Personal Information

Edit `/client/src/data/constants.js`:

\`\`\`javascript
export const personalInfo = {
  name: "Your Name",
  title: "Full-Stack Developer",
  tagline: "Your tagline here",
  bio: "Your bio here",
  email: "your.email@example.com",
  phone: "+1 (555) 123-4567",
  location: "Your Location",
  social: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
  },
};
\`\`\`

### 2. Skills

Update the skills section in `/client/src/data/constants.js`

### 3. Experience & Education

Modify experience and education arrays in `/client/src/data/constants.js`

### 4. Theme Colors

Edit `/client/tailwind.config.js` to customize colors:

\`\`\`javascript
colors: {
  primary: {
    // Your custom color palette
  }
}
\`\`\`

### 5. Add Projects via MongoDB Compass

1. Open MongoDB Compass
2. Connect to your database
3. Navigate to "My_Portfolio" > "projects"
4. Click "Insert Document"
5. Add your project data following the schema

## 🚢 Deployment

### Frontend (Vercel/Netlify)

\`\`\`bash
cd client
npm run build
# Deploy the 'dist' folder
\`\`\`

### Backend (Render/Railway/Heroku)

1. Update `MONGODB_URI` to your cloud MongoDB (MongoDB Atlas)
2. Set environment variables
3. Deploy the server folder

### MongoDB Atlas (Cloud Database)

1. Create account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a cluster
3. Get connection string
4. Update `.env` with Atlas connection string
5. Run seed script to populate data

## 🧪 Testing

### Test Backend API

\`\`\`bash
# Get all projects
curl http://localhost:5000/api/projects

# Create contact message
curl -X POST http://localhost:5000/api/contacts \\
  -H "Content-Type: application/json" \\
  -d '{"name":"Test","email":"test@example.com","message":"Hello"}'
\`\`\`

### Test Frontend

1. Navigate to `http://localhost:5173`
2. Test all navigation links
3. Test project filtering
4. Test contact form submission

## 📸 Screenshots

Add your screenshots here once deployed!

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Name](https://linkedin.com/in/yourusername)
- Email: your.email@example.com

## 🙏 Acknowledgments

- React Team for the amazing library
- MongoDB for the excellent database
- Tailwind CSS for the utility-first CSS framework
- Framer Motion for smooth animations
- Unsplash for beautiful placeholder images

## 📞 Support

If you have any questions or need help, feel free to:
- Open an issue
- Send me an email
- Connect on LinkedIn

---

**Made with ❤️ using the MERN Stack**
