import mongoose from "mongoose"

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  author: {
    type: String,
    required: true,
    trim: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  readTime: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  fullContent: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  likes: {
    type: Number,
    default: 0
  },
  comments: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

export const Blog = mongoose.model('Blog', blogSchema);