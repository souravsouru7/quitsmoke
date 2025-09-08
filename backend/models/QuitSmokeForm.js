const mongoose = require('mongoose');

const quitSmokeFormSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  },
  phone: {
    type: String,
    trim: true,
    default: ''
  },
  message: {
    type: String,
    trim: true,
    maxlength: 1000,
    default: ''
  },
  status: {
    type: String,
    enum: ['pending', 'contacted', 'enrolled', 'completed'],
    default: 'pending'
  },
  adminNotes: {
    type: String,
    trim: true,
    default: ''
  }
}, {
  timestamps: true
});

// Index for better query performance
quitSmokeFormSchema.index({ email: 1 });
quitSmokeFormSchema.index({ status: 1 });
quitSmokeFormSchema.index({ createdAt: -1 });

module.exports = mongoose.model('QuitSmokeForm', quitSmokeFormSchema);
