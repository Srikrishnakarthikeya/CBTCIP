const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const bcrypt = require('bcrypt');
const app = express();
const { log } = require("console");
const cookieParser = require("cookie-parser");
const ejs = require("ejs");
const User = require('./models/User');
const authController = require('./controllers/authController');
const partnerFoodController = require('./controllers/partnerFoodController');
const contactModel = require('./models/contactModel');
const formController = require('./controllers/formController100');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.set('views', './views');
app.set("view engine", "ejs");

app.use(express.static('public'));
app.use('/css', express.static(path.join(__dirname, 'public', 'css')));

mongoose.connect('mongodb://localhost:27017/project', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(async () => {
    console.log('MongoDB connected');
    partnerFoodController.insertPartnerFoodCredentials();
    const count = await User.countDocuments();
    if (count === 0) {
      const restaurants = [
        {
          username: 'marriage',
          password: 'marriage',
          eveName: 'marriage',
          totalDeletedBookings: 0
        },
        {
          username: 'birthday',
          password: 'birthday',
          eveName: 'birthday',
          totalDeletedBookings: 0
        },
        {
          username: 'cultural',
          password: 'cultural',
          eveName: 'cultural',
          totalDeletedBookings: 0
        },
        {
          username: 'dj',
          password: 'dj',
          eveName: 'dj',
          totalDeletedBookings: 0
        }
      ];

      try {
        await User.insertMany(restaurants);
        console.log('5 restaurants inserted successfully');
      } catch (error) {
        console.error('Error inserting restaurants:', error);
      }
    }
  })
  .catch((err) => console.error(err));

const indexRoutes = require('./routes/indexRoutes');
const foodRoutes = require('./routes/foodRoutes');
const restaurantRoutes = require('./routes/restaurantRoutes');
const partnerFoodRoutes = require('./routes/partnerFoodRoutes');
const orderRoutes = require('./routes/orderRoutes');
const authRoutes = require('./routes/authRoutes');
const cartRoutes = require('./routes/cartRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const loginRoutes = require('./routes/loginRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');

app.use('/', indexRoutes);
app.use('/', foodRoutes);
app.use('/', restaurantRoutes);
app.use('/', authRoutes);
app.use('/partner-food', partnerFoodRoutes); 
app.use('/', cartRoutes);
app.use('/', orderRoutes);
app.use('/', bookingRoutes);
app.use('/loginRest', loginRoutes);
app.use('/login', loginRoutes);
app.use('/dashboardRest', dashboardRoutes);

app.use(express.static('scripts'));

app.get('/search-results', (req, res) => {
    res.render('search-results');
});

app.post('/delete-user', async (req, res) => {
    try {
        const { userId } = req.body;
        await User.findByIdAndDelete(userId);
        res.redirect('/Admin');
    } catch (error) {
        console.error("Error deleting user:", error);
        res.status(500).send("Failed to delete user");
    }
});

app.get('/main', (req, res) => {
    res.render('main');
});

app.get('/about_us', (req,res) => {
    res.render('AboutUs');
});

app.get('/review', async (req,res) => {
    const list = await contactModel.find();
    res.render('Reviews', {
        content: list
    });
});

app.get('/contact_us', (req,res) => {
    res.render('ContactUs');
});

app.get('/marriage', (req, res) => { 
  res.render('marriage');
});

app.get('/cultural', (req, res) => {
    res.render('cultural');
});

app.get('/form100', (req, res) => {
  console.log("Rendering form100");
  res.render('form100');
});

app.post('/submit-event-service', formController.submitForm);

app.get('/form1', (req, res) => {
    res.render('form1');
});

app.get('/form2', (req, res) => {
    res.render('form2');
});

app.get('/form3', (req, res) => {
    res.render('form3');
});

app.get('/form4', (req, res) => {
    res.render('form4');
});

app.get('/formInv', (req, res) => {
  res.render('formInv');
});

app.get('/birthday', (req, res) => {
    res.render('birthday');
});

app.get('/dj', (req, res) => {
    res.render('dj');
});

app.post('/send', (req, res) => {
    const data = req.body;
    console.log(data);
    const list = new contactModel({
        name: data.name,
        email: data.email,
        message: data.message
    });
    list.save();
    res.send();
});

app.use('/', bookingRoutes);
app.use('/login', loginRoutes);
app.use('/dashboard', dashboardRoutes);
const PORT = 8000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});