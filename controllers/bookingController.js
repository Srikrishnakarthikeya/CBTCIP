const Booking = require('../models/Booking');
const User = require('../models/User');

// Function to generate a unique order ID
function generateUniqueOrderId() {
  return `Delish_id_${Math.floor(Math.random() * 1000000)}`;
}

exports.getBookingForm = (req, res) => {
  res.render('form');
};

exports.submitBooking = async (req, res) => {
  const { name, startBookingTimeSlot,endBookingTimeSlot, eveName, numTables } = req.body;

  try {
    const user = await User.findOne({ eveName });

    if (!user) {
      return res.status(404).send('Restaurant not found');
    }

    // const availableTimeSlots = user.availableTablesByTimeSlot.map(slot => slot.timeSlot);
    // if (!availableTimeSlots.includes(bookingTimeSlot)) {
    //   return res.status(404).send(`Time slot '${bookingTimeSlot}' not found for the selected restaurant`);
    // }

    // const availableTablesSlot = user.availableTablesByTimeSlot.find(slot => slot.timeSlot === bookingTimeSlot);
    // const availableTables = availableTablesSlot.availableTables;

    // if (numTables > availableTables) {
    //   return res.send(`Sorry, only ${availableTables} tables are available for the selected time slot.`);
    // }

    // Update available tables count in the time slot
    // const updatedAvailableTables = availableTables - numTables;
    // availableTablesSlot.availableTables = updatedAvailableTables;

    // Save the updated user data
    await user.save();

    // Save the booking
    const orderId = generateUniqueOrderId();
    const newBooking = new Booking({
      name,
      startBookingTimeSlot,
      endBookingTimeSlot,
      eveName,      
      numTablesBooked: numTables,
      orderId,
      userId: user._id,
    });
    await newBooking.save();

    console.log('Booking saved successfully:', newBooking);
    const budget = 20000;
    res.render('display', { name, startBookingTimeSlot, endBookingTimeSlot, numTables, budget });
    // res.send(`Booking saved successfully! Your order ID is: ${orderId}`);
  } catch (error) {
    console.error('Error handling form submission:', error);
    res.status(500).send('Internal Server Error');
  }
};

exports.markBookingAsServed = async (req, res) => {
  const { orderId } = req.body;

  try {
    // Find the booking by orderId
    const booking = await Booking.findOne({ orderId });

    if (!booking) {
      return res.status(404).send('Booking not found');
    }

    // Mark the booking as served
    booking.is_served = true;

    // Save the updated booking
    await booking.save();

    console.log('Booking marked as served:', booking);
    res.redirect('/'); // Redirect to the home page or wherever appropriate
  } catch (error) {
    console.error('Error marking booking as served:', error);
    res.status(500).send('Internal Server Error');
  }
};

exports.deleteBooking = async (req, res) => {
  const { orderId } = req.body;
  
  try {
    // Find the booking by orderId
    const booking = await Booking.findOne({ orderId });
    
    if (!booking) {
      return res.status(404).send('Booking not found');
    }

    // Delete the booking from the database
    await Booking.deleteOne({ orderId });

    console.log('Booking deleted:', booking);
    res.redirect('/login'); 
  } catch (error) {
    console.error('Error deleting booking:', error);
    res.status(500).send('Internal Server Error');
  }
};

