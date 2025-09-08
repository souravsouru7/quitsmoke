const express = require('express');
const QuitSmokeForm = require('../models/QuitSmokeForm');

const router = express.Router();

// Submit quit smoking form
router.post('/submit', async (req, res) => {
  try {
    console.log('Received form data:', JSON.stringify(req.body, null, 2));
    
    const formData = req.body;
    
    // Validate required fields
    if (!formData.firstName || !formData.lastName || !formData.email) {
      return res.status(400).json({ 
        message: 'Missing required fields: firstName, lastName, and email are required',
        received: Object.keys(formData)
      });
    }

    // Create new form submission
    const newForm = new QuitSmokeForm(formData);
    
    console.log('Attempting to save form...');
    await newForm.save();
    console.log('Form saved successfully with ID:', newForm._id);

    res.status(201).json({
      message: 'Form submitted successfully',
      formId: newForm._id
    });

  } catch (error) {
    console.error('Form submission error details:', {
      message: error.message,
      stack: error.stack,
      name: error.name,
      code: error.code
    });
    
    // Handle specific MongoDB errors
    if (error.name === 'ValidationError') {
      return res.status(400).json({ 
        message: 'Validation failed',
        errors: Object.keys(error.errors).map(key => ({
          field: key,
          message: error.errors[key].message
        }))
      });
    }
    
    if (error.code === 11000) {
      return res.status(400).json({ 
        message: 'A form with this email already exists' 
      });
    }
    
    res.status(500).json({ 
      message: 'Server error. Please try again.',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
});

// Get all form submissions (for admin to view)
router.get('/all', async (req, res) => {
  try {
    const forms = await QuitSmokeForm.find().sort({ createdAt: -1 });
    res.json(forms);
  } catch (error) {
    console.error('Get forms error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get form by ID
router.get('/:formId', async (req, res) => {
  try {
    const form = await QuitSmokeForm.findById(req.params.formId);
    
    if (!form) {
      return res.status(404).json({ message: 'Form not found' });
    }

    res.json(form);

  } catch (error) {
    console.error('Get form error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
