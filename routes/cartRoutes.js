const express = require('express');
const router = express.Router();
const Cart = require('../models/cart');

router.post("/add_to_cart", async (req, res) => {
    try {
        const { itemName, price } = req.body;
        const cartItem = new Cart({
            itemName: itemName,
            price: price,
            quantity: 1 // Assuming quantity starts from 1
        });
        await cartItem.save();
        res.sendStatus(200);
    } catch (error) {
        console.error("Error saving item to cart:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

const { displayCart } = require('../controllers/cartController');
router.get('/cart', displayCart);

module.exports = router;

