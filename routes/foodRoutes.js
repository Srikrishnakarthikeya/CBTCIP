const express = require('express');
const router = express.Router();

router.get('/barbeque', (req, res) => {
    res.render('barbeque');
});

router.get('/dishes', (req, res) => {
    res.render('dishes');
});

router.get('/dominos', (req, res) => {
    res.render('dominos');
});

router.get('/hotnspicy', (req, res) => {
    res.render('hotnspicy');
});

router.get('/search-results', (req, res) => {
    res.render('search-results');
});

// Add more food-related routes if needed

module.exports = router;
