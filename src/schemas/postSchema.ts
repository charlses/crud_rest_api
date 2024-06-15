import mongoose from 'mongoose'

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide the title of the post'],
    unique: false
  },
  content: {
    type: String,
    required: [true, 'Please provide the content of the post'],
    unique: false
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

const Post = mongoose.models.posts || mongoose.model('posts', postSchema)

export default Post
