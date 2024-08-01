const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  username: { type: String, required: true },
  orderDetails: { type: String, required: true },
  location: { type: String, required: true },
  restaurantName: { type: String, required: true },
  status: { type: String, default: 'pending' }
});

module.exports = mongoose.model('Order', orderSchema);