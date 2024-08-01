const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  zip: {
    type: Number,
    required: true
  },
  cardName: {
    type: String,
    required: true
  },
  cardNumber: {
    type: String,
    required: true
  },
  expMonth: {
    type: String,
    required: true
  },
  expYear: {
    type: String,
    required: true
  },
  cvv: {
    type: Number,
    required: true
  },
  totalAmount: {
    type: Number, // Adjust data type as needed
    required: true
  }
});

module.exports = mongoose.model('Order', orderSchema);
