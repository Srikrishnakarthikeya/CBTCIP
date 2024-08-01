const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    itemName: String,
    price: Number,
    quantity: Number
});

module.exports = mongoose.model('Cart', cartSchema);
