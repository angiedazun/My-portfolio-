import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Project from '../models/Project.js';
import Contact from '../models/Contact.js';

dotenv.config();

/**
 * Seed Script for MongoDB
 * Populates the database with initial project data
 * Run using: npm run seed
 */

// Sample project data
const projects = [
  {
    title: 'Sri Lanka Ports Authority Inventory Management System',
    description: 'Web-based inventory management system for Sri Lanka Ports Authority (SLPA) tracking office supplies (toners, ribbons, papers). Features: real-time stock monitoring, issuing/receiving/returns, multi-division support, Excel/PDF reports, user auth, audit trails, and analytics. Built with PHP, MySQL, JavaScript & CSS.',
    techStack: ['PHP', 'MySQL', 'JavaScript', 'CSS', 'HTML5', 'RESTful API'],
    images: ['https://images.unsplash.com/photo-1553413077-190dd305871c?w=800'],
    githubUrl: 'https://github.com/angiedazun/Sri-Lanka-Ports-Authority-Inventory-Management-System',
    liveUrl: '',
    featured: true,
    order: 1,
  },
  {
    title: 'Work From Home Employee Attendance Management Platform',
    description: 'Enterprise attendance management platform for remote teams. AI-powered facial recognition, real-time tracking, task assignment, leave management, analytics dashboard. MERN stack with JWT authentication, role-based access control, and audit trail compliance.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Facial Recognition'],
    images: ['https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800'],
    githubUrl: 'https://github.com/angiedazun/Work-from-home-Employee-Attendance-Management-Platform',
    liveUrl: '',
    featured: true,
    order: 2,
  },
  {
    title: 'Portfolio Website',
    description: 'Modern full-stack portfolio website built with MERN stack. Features dark theme with glassmorphism effects, smooth animations, project showcase with filtering, contact form, and responsive design. Demonstrates expertise in React, Node.js, MongoDB, and modern web development practices.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Framer Motion'],
    images: ['https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800'],
    githubUrl: 'https://github.com/angiedazun',
    liveUrl: '',
    featured: false,
    order: 3,
  },
];

// Sample contact data (optional)
const contacts = [
  {
    name: 'John Doe',
    email: 'john.doe@example.com',
    message: 'Great portfolio! I would love to discuss a potential project opportunity.',
    status: 'read',
  },
  {
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    message: 'Your work is impressive. Would you be available for a freelance project?',
    status: 'unread',
  },
];

/**
 * Seed database with sample data
 */
const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('✅ Connected to MongoDB');

    // Clear existing data
    await Project.deleteMany({});
    await Contact.deleteMany({});
    console.log('🗑️  Cleared existing data');

    // Insert projects
    const createdProjects = await Project.insertMany(projects);
    console.log(`✅ Added ${createdProjects.length} projects`);

    // Insert contacts (optional)
    const createdContacts = await Contact.insertMany(contacts);
    console.log(`✅ Added ${createdContacts.length} contact messages`);

    console.log('\n🎉 Database seeded successfully!');
    console.log('\n📊 Summary:');
    console.log(`   Projects: ${createdProjects.length}`);
    console.log(`   Contacts: ${createdContacts.length}`);
    console.log('\n💡 You can now view this data in MongoDB Compass');
    console.log(`   Database: My_Portfolio`);
    console.log(`   Connection: ${process.env.MONGODB_URI}\n`);

    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
};

// Run seed function
seedDatabase();
