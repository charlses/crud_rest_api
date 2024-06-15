import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: [true, 'Please provide your first name'],
    unique: false
  },
  lastname: {
    type: String,
    required: [true, 'Please provide your last name'],
    unique: false
  },
  email: {
    type: String,
    required: [true, 'Please provide your email address'],
    unique: true
  },
  password: {
    type: String,
    required: [true, 'Please provide your password'],
    unique: false
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment'
    }
  ]
})

const User = mongoose.models.users || mongoose.model('users', userSchema)

export default User
