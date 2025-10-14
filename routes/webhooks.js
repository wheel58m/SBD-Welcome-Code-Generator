// Webhook Routes Module

// Dependency Imports
const express = require('express');

// Initialize Router
const router = express.Router(); // Create a Mini-App for Organizing Routes (Router)

// Mailchimp Webhook Endpoint – New Subscriber Trigger
router.post('/mailchimp', (req, res) => {
  console.log('Mailchimp Webhook Received at:', new Date().toISOString());
  console.log('Payload:', req.body);

  // Respond to Mailchimp to Acknowledge Receipt
  res.status(200).send('Webhook Received');
});

// Export the Router to be Used in the Main App
module.exports = router;