const mongoose = require('mongoose');

const ReservationSchema = new mongoose.Schema({
  place: String,
  guests: Number,
  days: Number,
  amount: Number,
  checkIn: String,
  checkOut: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Reservation', ReservationSchema);
