require('dotenv').config();
const express = require('express');
const connectDB = require('./database/db');
const bookRoutes = require('./routes/book-routes');


const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Middleware to parse JSON requests
app.use(express.json());

// Book routes
app.use('/api', bookRoutes);

app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});

