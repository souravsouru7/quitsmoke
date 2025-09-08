const express = require('express');
const QuitSmokeForm = require('../models/QuitSmokeForm');

const router = express.Router();

// Predefined admin credentials
const ADMIN_EMAIL = 'admin@quitsmoke.com';
const ADMIN_PASSWORD = 'admin123';

// Admin login check
const checkAdmin = (req, res, next) => {
  const { email, password } = req.body;
  
  if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    next();
  } else {
    res.status(401).json({ message: 'Invalid admin credentials' });
  }
};

// Admin login
router.post('/login', checkAdmin, (req, res) => {
  res.json({ 
    message: 'Admin login successful',
    admin: { email: ADMIN_EMAIL }
  });
});

// Get all forms (admin only)
router.post('/forms', checkAdmin, async (req, res) => {
  try {
    const forms = await QuitSmokeForm.find().sort({ createdAt: -1 });
    res.json({
      message: 'Forms retrieved successfully',
      forms: forms
    });
  } catch (error) {
    console.error('Get forms error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get form by ID (admin only)
router.post('/form/:formId', checkAdmin, async (req, res) => {
  try {
    const form = await QuitSmokeForm.findById(req.params.formId);
    
    if (!form) {
      return res.status(404).json({ message: 'Form not found' });
    }

    res.json({
      message: 'Form retrieved successfully',
      form: form
    });

  } catch (error) {
    console.error('Get form error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Delete form (admin only)
router.delete('/form/:formId', checkAdmin, async (req, res) => {
  try {
    const form = await QuitSmokeForm.findByIdAndDelete(req.params.formId);
    
    if (!form) {
      return res.status(404).json({ message: 'Form not found' });
    }

    res.json({ message: 'Form deleted successfully' });

  } catch (error) {
    console.error('Delete form error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
