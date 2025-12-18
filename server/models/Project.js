import mongoose from 'mongoose';

/**
 * Project Schema
 * Stores portfolio project information
 */
const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Project title is required'],
      trim: true,
      maxlength: [100, 'Title cannot exceed 100 characters'],
    },
    description: {
      type: String,
      required: [true, 'Project description is required'],
      trim: true,
      maxlength: [1000, 'Description cannot exceed 1000 characters'],
    },
    techStack: {
      type: [String],
      required: [true, 'Tech stack is required'],
      validate: {
        validator: function(arr) {
          return arr.length > 0;
        },
        message: 'At least one technology must be specified',
      },
    },
    images: {
      type: [String],
      default: [],
      validate: {
        validator: function(arr) {
          return arr.every(url => url.startsWith('http://') || url.startsWith('https://'));
        },
        message: 'All images must be valid URLs',
      },
    },
    githubUrl: {
      type: String,
      trim: true,
      validate: {
        validator: function(v) {
          return !v || v.startsWith('http://') || v.startsWith('https://');
        },
        message: 'GitHub URL must be a valid URL',
      },
    },
    liveUrl: {
      type: String,
      trim: true,
      validate: {
        validator: function(v) {
          return !v || v.startsWith('http://') || v.startsWith('https://');
        },
        message: 'Live URL must be a valid URL',
      },
    },
    featured: {
      type: Boolean,
      default: false,
    },
    order: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

// Index for efficient queries
projectSchema.index({ createdAt: -1 });
projectSchema.index({ featured: -1, order: 1 });

const Project = mongoose.model('Project', projectSchema);

export default Project;
