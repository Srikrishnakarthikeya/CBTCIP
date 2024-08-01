const User = require('../models/User');
const Booking = require('../models/Booking');

exports.getLoginForm = (req, res) => {
  res.render('login');
};

exports.handleLogin = (req, res) => {
  const { username, password, bookingTimeSlot } = req.body;

  User.findOne({ username, password })
    .then(user => {
      if (user) {
        const filterByTimeSlot = bookingTimeSlot ? { bookingTimeSlot } : {};
        Booking.find({ eveName: user.eveName, ...filterByTimeSlot })
          .then(bookings => {
            res.render('orders', { bookings });
          })
          .catch(err => {
            console.error('Error finding bookings for restaurant:', err);
            res.status(500).send('Internal Server Error');
          });
      } else {
        res.render('login', { error: 'Invalid credentials. Please try again.' });
      }
    })
    .catch(err => {
      console.error('Error finding user:', err);
      res.status(500).send('Internal Server Error');
    });
};