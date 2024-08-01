const mongoose = require('mongoose');

// Define the FoodItem schema
const foodItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
});

// Create the model from the schema
const FoodItem = mongoose.model('FoodItem', foodItemSchema);

module.exports = FoodItem;
