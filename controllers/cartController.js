// controllers/cartController.js

const Cart = require('../models/cart');

const displayCart = async (req, res) => {
    try {
        const cartItems = await Cart.find();
        res.render("cart", { cartItems });
    } catch (error) {
        console.error("Error fetching cart items:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

module.exports = { displayCart };
