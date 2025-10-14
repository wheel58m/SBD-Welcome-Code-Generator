// Main Express Application Entry Point

// Dependency Imports
require('dotenv').config(); // Allows for Loading Environment Variables (.env)
const express = require('express'); // Handles HTTP Requests and Webhooks

// Initialize Express Application
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to Parse JSON Bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health Check Endpoint
app.get('/', (req, res) => {
  res.send('Code Generator Server is Running');
});

// Start the Express Server and Listen for Incoming Requests
app.listen(PORT, () => {
  console.log(`Code Generator Server is Running on Port ${PORT}`);
  console.log(`Server URL: http://localhost:${PORT}`); // Log the Server URL
  console.log(`Server Started at: ${new Date().toISOString()}`);
});