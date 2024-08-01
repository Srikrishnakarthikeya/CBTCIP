const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/home', (req, res) => {
    res.render('home');
});

router.get('/contact', (req, res) => {
    res.render('contact');
});

router.get('/login', (req, res) => {
    res.render('login');
});
router.get('/form', (req, res) => {
    res.render('form');
});

router.get('/search-results', (req, res) => {
    res.render('search-results');
});
router.get('/order', (req, res) => {
    res.render('order');
});
router.get('/payment', (req, res) => {
    res.render('payment');
});

router.get('/main', (req, res) => {
    res.render('main');
});
// Add more routes related to the index page if needed

module.exports = router;
