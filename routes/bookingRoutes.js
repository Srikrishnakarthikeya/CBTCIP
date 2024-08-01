const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

router.get('/', (req, res) => {
  res.render('home');
});

router.get('/form', (req, res) => {
  bookingController.getBookingForm(req, res);
});

router.post('/submit-form', bookingController.submitBooking);

router.post('/mark-served', (req, res) => {
  bookingController.markBookingAsServed(req, res);
});

router.post('/delete-order', (req, res) => {
  bookingController.deleteBooking(req, res);
});

module.exports = router;