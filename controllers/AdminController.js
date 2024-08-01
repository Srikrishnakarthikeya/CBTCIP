const Admin = require('../models/Admin');

// Example controller function to create a new admin
exports.createAdmin = async (req, res) => {
    const { username, password, email } = req.body;

    try {
        // Check if admin with the same email already exists
        const existingAdmin = await Admin.findOne({ email });

        if (existingAdmin) {
            return res.status(400).json({ error: 'Admin with this email already exists' });
        }

        // Create a new admin instance
        const newAdmin = new Admin({ username, password, email });

        // Save the admin to the database
        await newAdmin.save();

        res.status(201).json(newAdmin);
    } catch (error) {
        console.error('Error creating admin:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Add more controller functions as needed for admin management
