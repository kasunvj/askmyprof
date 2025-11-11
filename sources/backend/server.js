const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/database');

// Load environment variables
dotenv.config();

// Initialize express app
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors({
  origin: ['https://web-msi-kasun.sylnk.io', 'https://api-msi-kasun.sylnk.io', 'http://localhost:3000'],
  credentials: true
}));

// Add request logging
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  console.log('Content-Type:', req.headers['content-type']);
  console.log('Headers:', JSON.stringify(req.headers, null, 2));
  next();
});

// Raw body parser for debugging and Base64 decoding (for sylnk.io)
app.use(express.raw({ type: 'application/json', limit: '10mb' }));
app.use((req, res, next) => {
  if (req.body && Buffer.isBuffer(req.body) && req.body.length > 0) {
    const rawBody = req.body.toString();
    console.log('Raw body received:', rawBody.substring(0, 100));

    try {
      // First try to parse as JSON directly
      req.body = JSON.parse(rawBody);
      console.log('✓ Parsed as JSON');
    } catch (e) {
      // If it fails, try Base64 decoding first (for sylnk.io)
      try {
        const decoded = Buffer.from(rawBody, 'base64').toString('utf-8');
        console.log('Base64 decoded:', decoded);
        req.body = JSON.parse(decoded);
        console.log('✓ Parsed after Base64 decode');
      } catch (e2) {
        console.error('✗ Failed to parse body:', e2.message);
        req.body = {};
      }
    }
  } else if (typeof req.body === 'string') {
    try {
      req.body = JSON.parse(req.body);
    } catch (e) {
      // Keep as is
    }
  }
  next();
});

app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/letter-requests', require('./routes/letterRequests'));

// Health check route
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!', error: err.message });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
