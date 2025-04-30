// const express = require('express');
// const router = express.Router();
// const Reservation = require('../models/Reservation');

// // Save a new reservation
// router.post('/add', async (req, res) => {
//   try {
//     const reservation = new Reservation(req.body);
//     await reservation.save();
//     res.status(201).json(reservation);
//   } catch (err) {
//     res.status(500).json({ message: 'Failed to save reservation', error: err });
//   }
// });

// // Fetch all reservations
// router.get('/all', async (req, res) => {
//   try {
//     const reservations = await Reservation.find();
//     res.json(reservations);
//   } catch (err) {
//     res.status(500).json({ message: 'Failed to fetch reservations' });
//   }
// });

// module.exports = router;
