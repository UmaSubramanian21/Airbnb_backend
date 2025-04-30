require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./db/db');
const app = express();
const PORT = process.env.PORT || 7000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
// app.use('/payment', paymentRoutes);

// Test route
app.get('/api', (req, res) => {
    res.send('API works successfully');
});

// user login details route
const userRoutes = require('./routes/userRoutes');
app.use('/api/user', userRoutes);


app.listen(PORT, () => {
    console.log(`Running on port ${PORT}...`);
});