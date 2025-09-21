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
  },
  // Medical conditions
  medicalConditions: [{
    type: String,
    trim: true
  }],
  // Mental health conditions
  mentalHealthConditions: [{
    type: String,
    trim: true
  }],
  // Current medications
  currentMedications: [{
    type: String,
    trim: true
  }],
  // Smoking history (Fagerstrom Score)
  smokingHistory: {
    dailyAmount: {
      type: String,
      trim: true,
      default: ''
    },
    type: {
      type: String,
      trim: true,
      default: ''
    },
    timeToFirstSmoke: {
      type: String,
      trim: true,
      default: ''
    },
    difficultWhereForbidden: {
      type: String,
      trim: true,
      default: ''
    },
    hardestToQuit: {
      type: String,
      trim: true,
      default: ''
    },
    smokeMoreMorning: {
      type: String,
      trim: true,
      default: ''
    },
    smokeWhenIll: {
      type: String,
      trim: true,
      default: ''
    },
    fagerstromScore: {
      type: Number,
      default: 0
    }
  },
  // About you section
  aboutYou: {
    yearsSmoked: {
      type: String,
      trim: true,
      default: ''
    },
    smokeCannabis: {
      type: String,
      trim: true,
      default: ''
    },
    haveChildren: {
      type: String,
      trim: true,
      default: ''
    },
    liveWithSmokers: {
      type: String,
      trim: true,
      default: ''
    },
    useHomeOxygen: {
      type: String,
      trim: true,
      default: ''
    }
  }
}, {
  timestamps: true
});

// Index for better query performance
quitSmokeFormSchema.index({ email: 1 });
quitSmokeFormSchema.index({ status: 1 });
quitSmokeFormSchema.index({ createdAt: -1 });

module.exports = mongoose.model('QuitSmokeForm', quitSmokeFormSchema);
