const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const { signup, signin, profile, renderDashboard } = require('../controllers/authController');
const authController = require('../controllers/authController');

const router = express.Router();


router.post("/signup", signup);
router.post("/signin", signin);
router.get("/profile", profile);
router.get('/dashboard', authController.renderDashboard);

const updatePasswords = async () => {
    const users = [
        {
            username: "John Michael",
            password: "Nani@2004",
            email: "johnnani120723@gmail.com",
            role: "user",
            foodPreferences: ["Pizza", "Burger", "Sushi", "Salad", "Pasta"],
            restaurantPreferences: ["Restaurant A", "Restaurant B", "Restaurant C", "Restaurant D", "Restaurant E"],
            foodPercentages: [30, 20, 15, 10, 25], // Food ordering percentages
            restaurantPercentages: [25, 15, 20, 30, 10]  //Restaurant reservation percentages
        },
        {
            username: "Alexo",
            password: "John@03",
            email: "alexo123@gmail.com",
            role: "user",
            foodPreferences: ["Sushi", "Salad", "Pasta"],
            restaurantPreferences: ["Restaurant Rishi", "Restaurant John", "Restaurant Laddu"],
            foodPercentages: [100, 300, 250], // Food ordering percentages for User2
            restaurantPercentages: [40, 20, 40] // Restaurant reservation percentages for User2
        },
    ];
    for (let user of users) {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        await User.updateOne({ email: user.email }, { $set: { password: hashedPassword } });
    }
};



router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../login'));
});




function checkRole(roles) {
    return (req, res, next) => {
        const user = req.cookies.user;
        if (user && roles.includes(user.role)) {
            next();
        } else {
            res.status(403).send("Access Denied");
        }
    };
}

router.get('/Admin', checkRole(['admin']), async (req, res) => {
    try {
        const users = await User.find();  // Fetch all users from the MongoDB database
        res.render('Admin', { users });   // Pass the users data to the Admin.ejs view for rendering
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).send("Error fetching user data");
    }
});

updatePasswords().then(() => {
    console.log("Passwords updated successfully");
}).catch(err => {
    console.error("Failed to update passwords:", err);
});

module.exports = router;
