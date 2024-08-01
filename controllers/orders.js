const Order = require('../models/order');

exports.getOrders = (req, res) => {
  Order.find()
    .then(orders => {
      res.render('dashboard', { orders });
    })
    .catch(err => console.log(err));
};

exports.acceptOrder = (req, res) => {
  const orderId = req.params.orderId;
  Order.findByIdAndUpdate(orderId, { $set: { status: 'accepted' } }, { new: true })
    .then(order => {
      res.json({ message: 'Order accepted', order });
    })
    .catch(err => console.log(err));
};

exports.rejectOrder = (req, res) => {
  const orderId = req.params.orderId;
  Order.findByIdAndUpdate(orderId, { $set: { status: 'rejected' } }, { new: true })
    .then(order => {
      res.json({ message: 'Order rejected', order });
    })
    .catch(err => console.log(err));
};