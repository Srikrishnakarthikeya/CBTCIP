const express = require('express');
const router = express.Router();
const partnerFoodController = require('../controllers/partnerFoodController');


router.post('/partner_food/signin', partnerFoodController.signin);
router.get("/dashboard", partnerFoodController.renderPartnerFoodDashboard);
router.post('/partner_food/manage_order', partnerFoodController.manageOrder);
router.get('/partner_food/users_and_orders', partnerFoodController.getAllUsersAndOrders);
router.get("/Partner_Food", partnerFoodController.renderPartnerFoodDashboard);


module.exports = router;
