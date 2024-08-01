const mongoose = require('mongoose');

// Check if the model already exists
const User = mongoose.models.User || mongoose.model('User', new mongoose.Schema({
  username: String,
  password: String,
  eveName: String,
  // availableTablesByTimeSlot:Number,

  // availableTablesByTimeSlot: [
  //   {
  //     timeSlot: String,
  //     availableTables: Number
  //   }
  // ],
  totalDeletedBookings: { type: Number, default: 0 }
}));

module.exports = User;
