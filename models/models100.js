const mongoose = require('mongoose');

const baseSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    date: Date,
    numberOfPeople: Number,
    numberOfHours: Number
});

const Catering = mongoose.model('Catering', baseSchema);
const Music = mongoose.model('Music', baseSchema);
const Decoration = mongoose.model('Decoration', baseSchema);
const Photography = mongoose.model('Photography', baseSchema);

module.exports = { Catering, Music, Decoration, Photography };