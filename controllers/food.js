const FoodItem = require('../models/FoodItem');

// Create a new Food Item
exports.createFoodItem = async (req, res) => {
    try {
        const foodItem = new FoodItem({
            name: req.body.name,
            category: req.body.category,
            rating: req.body.rating,
            price: req.body.price,
            img: req.body.img,
            quantity: req.body.quantity
        });
        const savedFoodItem = await foodItem.save();
        res.status(201).send(savedFoodItem);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Get all Food Items
exports.getAllFoodItems = async (req, res) => {
    try {
        const foodItems = await FoodItem.find();
        res.status(200).send(foodItems);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Get a single Food Item by ID
exports.getFoodItemById = async (req, res) => {
    try {
        const foodItem = await FoodItem.findById(req.params.id);
        if (!foodItem) {
            return res.status(404).send({ message: "Food Item not found!" });
        }
        res.status(200).send(foodItem);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Update a Food Item
exports.updateFoodItem = async (req, res) => {
    try {
        const foodItem = await FoodItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!foodItem) {
            return res.status(404).send({ message: "Food Item not found!" });
        }
        res.status(200).send(foodItem);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Delete a Food Item
exports.deleteFoodItem = async (req, res) => {
    try {
        const foodItem = await FoodItem.findByIdAndDelete(req.params.id);
        if (!foodItem) {
            return res.status(404).send({ message: "Food Item not found!" });
        }
        res.status(200).send({ message: "Food Item deleted successfully" });
    } catch (error) {
        res.status(500).send(error);
    }
};
