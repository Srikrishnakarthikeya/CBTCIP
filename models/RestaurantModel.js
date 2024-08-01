const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        type: String,
        required: true
    },
    categories: {
        type: [String],  // Array of strings for multiple categories
        required: true
    },
    stars: {
        type: Number,
        required: true,
        min: 0,
        max: 5
    },
    link: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: ''
    },
    address: {
        street: String,
        city: String,
        state: String,
        zip: String
    },
    contact: {
        phone: String,
        email: String
    },
    openingHours: {
        type: Map,
        of: String
    },
    menu: [{
        dishName: String,
        price: Number,
        description: String,
        image: String
    }],
    reviews: [{
        reviewer: String,
        comment: String,
        rating: Number,
        date: {
            type: Date,
            default: Date.now
        }
    }]
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;
