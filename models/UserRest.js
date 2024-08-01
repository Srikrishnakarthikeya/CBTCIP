const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  eveName: String,
  availableTablesByTimeSlot: [
    {
      timeSlot: String,
      availableTables: Number
    }
  ],
  totalDeletedBookings: { type: Number, default: 0 }
});

const User = mongoose.model('UserRest', userSchema);

module.exports = User;