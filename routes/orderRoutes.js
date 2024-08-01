const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');


router.post("/process_payment", orderController.processPayment);
router.get('/order/:orderId', orderController.getOrderSummary);


module.exports = router;
