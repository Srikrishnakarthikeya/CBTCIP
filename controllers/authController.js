const bcrypt = require('bcrypt');
const cookie = require("cookie");

const User = require( "../models/User" );


const signup = async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    
    // Validate email format
    const isValidEmail = (email) => {
        // Regular expression for validating email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    
    if (!email || !isValidEmail(email)) {
        return res.status(400).send("<h1>Invalid email format.</h1>");
    }
    

    try {
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.send("<h1>Email already exists</h1>");
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({ username, password: hashedPassword, email });
        await newUser.save();
        console.log("Record Inserted Successfully");
        res.redirect('/login');
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ error: 'Internal server error' });
    }
};


const signin = async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    console.log('Entered Password:', password);
    console.log('Request Body:', req.body);
    try {
        // Find the user by username
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(401).json({ error: 'Invalid username or password' });
        }

        // Compare the provided password with the hashed password from the database
        const isPasswordValid = await bcrypt.compare(password, user.password);
        console.log('Hashed Password:', user.password);
        console.log('Password Comparison Result:', isPasswordValid);

        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid username or password' });
        }

        res.cookie("user", user, { sameSite: true });
        
        // console.log("User signed in successfully");
        // res.redirect('./home');
        // Redirect based on role
        if (user.role === 'admin') {
            res.redirect('/Admin');  // Changed from '/users' to '/Admin'
        } else if (user.role === 'user') {
            res.redirect('/home');
        } else {
            res.status(401).render('login', { message: 'Unauthorized access' });
        }
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const profile = async (req, res) => {
    try {
                // Retrieve user data from cookies
                console.log("Cookies: ", req.cookies.user);
                const user = req.cookies.user;
        
                if (!user) {
                    return res.status(401).send("Unauthorized");
                }
        
                // Render the profile page with user details
                res.render("profile", { user });
            } catch (error) {
                console.error("Error fetching user details:", error);
                res.status(500).send("Internal server error");
            }
};

const renderDashboard = async (req, res) => {
    try {
        let user = req.cookies.user;

        if (!user) {
            return res.status(401).send("Unauthorized");
        }

        user = await User.findOne({ email: user.email });

       
        const foodPercentages = user.foodPercentages;
        const restaurantPercentages = user.restaurantPercentages;
        const restaurantPreferences = user.restaurantPreferences;
        const foodPreferences = user.foodPreferences;
        const data = { foodPercentages, restaurantPercentages, restaurantPreferences, foodPreferences };

        console.log(data);

        res.render("dashboard", { data });
    } catch (error) {
        console.error("Error fetching user data:", error);
        res.status(500).send("Internal server error");
    }
};

module.exports = { signup, signin, profile, renderDashboard};