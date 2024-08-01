const express = require('express');
const router = express.Router();
const ordersController = require('../controllers/orders');

router.get('/dashboard', ordersController.getOrders);
router.put('/orders/:orderId/accept', ordersController.acceptOrder);
router.put('/orders/:orderId/reject', ordersController.rejectOrder);

module.exports = router;