const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  name: String,
  startBookingTimeSlot: String,
  endBookingTimeSlot: String,
  eveName: String,
  numpeople: Number,
  orderId: String,
  userId: String,
  is_finished: { type: Boolean, default: false },
  is_deleted: { type: Boolean, default: false }
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;