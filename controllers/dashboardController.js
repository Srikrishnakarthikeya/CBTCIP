const Booking = require('../models/Booking');
const User = require('../models/User');

exports.getDashboard = async (req, res) => {
  try {
    // Query the database to get the total number of bookings
    const totalBooked = await Booking.countDocuments();

    // Query the database to get the total number of served bookings
    const totalServed = await Booking.countDocuments({ is_served: true });

    // Query the database to get the total number of canceled bookings
    const totalCanceled = await Booking.countDocuments({ is_deleted: true });

    // Get the total deleted bookings for each restaurant
    const restaurants = await User.find({}, 'eveName totalDeletedBookings');

    // Render the dashboard template with the fetched data
    res.render('dashboard', { totalBooked, totalServed, totalCanceled, restaurants });
  } catch (error) {
    console.error('Error rendering dashboard:', error);
    res.status(500).send('Internal Server Error');
  }
};