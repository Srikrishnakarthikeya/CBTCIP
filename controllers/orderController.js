// orderController.js

const Order = require('../models/orderModel');

const calculateTotalAmount = (items) => {
  let total = 0;
  items.forEach(item => {
      total += item.price;
  });
  return total;
};

const processPayment = async (req, res) => {
  try {
    // Calculate total amount based on items or other relevant data
    const totalAmount = calculateTotalAmount(req.body.items); // Adjust this according to your data structure

    const order = new Order({
      fullName: req.body.fullName,
      email: req.body.email,
      address: req.body.address,
      city: req.body.city,
      state: req.body.state,
      zip: req.body.zip,
      cardName: req.body.cardName,
      cardNumber: req.body.cardNumber,
      expMonth: req.body.expMonth,
      expYear: req.body.expYear,
      cvv: req.body.cvv,
      totalAmount: totalAmount // Set the total amount
    });
    

    await order.save();
    res.redirect("/order/" + order._id); // Redirect to the order summary page
  } catch (error) {
    console.error("Error saving order:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getOrderSummary = async (req, res) => {
  try {
      // Fetch order details from the database
      const order = await Order.findById(req.params.orderId);
      res.render('order', { order });
  } catch (error) {
      console.error("Error fetching order details:", error);
      res.status(500).send("Internal server error");
  }
};

module.exports = { processPayment, getOrderSummary }; // Ensure both functions are exported
