const express = require('express');
const Booking = require('../models/Booking');
const router = express.Router();

// Create a new booking
router.post('/book', async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();
    res.status(201).json(booking);
  } catch (err) {
    res.status(400).json({ error: 'Booking failed', details: err.message });
  }
});

// Get all bookings for a user
router.get('/user/:userId', async (req, res) => {
  try {
    const bookings = await Booking.find({ userId: req.params.userId }).populate('placeId');
    res.status(200).json(bookings);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching bookings' });
  }
});

module.exports = router;