const express = require('express');
const router = express.Router();

router.get('/paradise', (req, res) => {
    res.render('paradise');
});

router.get('/platform65', (req, res) => {
    res.render('platform65');
});

router.get('/ksbakers', (req, res) => {
    res.render('ksbakers');
});

router.get('/ramkibandi', (req, res) => {
    res.render('ramkibandi');
});

router.get('/Partner_Food', (req, res) => {
    res.render('Partner_Food');
});
// Add more restaurant-related routes if needed

module.exports = router;
