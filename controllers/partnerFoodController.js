const bcrypt = require('bcrypt');
const User = require('../models/User');
const Partner_Food = require('../models/partnerFood');


exports.insertPartnerFoodCredentials = async () => {
    try {
        const partnerFoodCredentials = [
            {
                username: "partner1",
                password: "password1",
                email: "partner1@example.com",
                role: "Partner_Food"
            },
            {
                username: "partner2",
                password: "password2",
                email: "partner2@example.com",
                role: "Partner_Food"
            }
        ];

        for (const cred of partnerFoodCredentials) {
            const existingPartner = await Partner_Food.findOne({ email: cred.email });
            if (!existingPartner) {
                const hashedPassword = await bcrypt.hash(cred.password, 10);
                const newPartner = new Partner_Food({ ...cred, password: hashedPassword });
                await newPartner.save();
                console.log(`Partner_Food ${cred.email} inserted successfully`);
            } else {
                console.log(`Partner_Food ${cred.email} already exists`);
            }
        }
        console.log("Pre-defined Partner_Food credentials inserted successfully");
    } catch (error) {
        console.error("Error inserting pre-defined Partner_Food credentials:", error.message);
    }
};

// Function to handle Partner_Food login
exports.signin = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find the Partner_Food with the given email
        const partnerFood = await Partner_Food.findOne({ email });

        if (!partnerFood) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        // Compare the provided password with the hashed password from the database
        const isPasswordValid = await bcrypt.compare(password, partnerFood.password);
        console.log('Hashed Password:', user.password);
        console.log('Password Comparison Result:', isPasswordValid);

        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        // Set a cookie to store Partner_Food details
        res.cookie("partnerFood", partnerFood, { sameSite: true });

        // Redirect to the Partner_Food dashboard
        res.redirect('./Partner_Food');
    } catch (error) {
        console.error('Error logging in Partner_Food:', error.message);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Function to render the Partner_Food dashboard
exports.renderPartnerFoodDashboard = async (req, res) => {
    try {
        // Retrieve Partner_Food details from cookies
        const partnerFood = req.cookies.partnerFood;

        if (!partnerFood) {
            return res.status(401).send("Unauthorized");
        }

        // Render the Partner_Food dashboard with Partner_Food details
        res.render("./Partner_Food", { partnerFood });
    } catch (error) {
        console.error("Error rendering Partner_Food dashboard:", error);
        res.status(500).send("Internal server error");
    }
};

// Accept or reject order
exports.manageOrder = async (req, res) => {
    const { orderId, status } = req.body;

    try {
        const order = await User.findById(orderId);

        if (!order) {
            return res.status(404).json({ error: 'Order not found' });
        }

        order.status = status;
        await order.save();

        res.status(200).json({ message: 'Order updated successfully', order });
    } catch (error) {
        console.error('Error updating order:', error.message);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Get all users and their orders
exports.getAllUsersAndOrders = async (req, res) => {
    try {
        const users = await User.find().populate('orders.userId');
        res.status(200).json(users);
    } catch (error) {
        console.error('Error fetching users and orders:', error.message);
        res.status(500).json({ error: 'Internal server error' });
    }
};
