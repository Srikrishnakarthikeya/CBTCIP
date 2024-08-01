const User = require('../models/user_food');
const bcrypt = require('bcrypt');

exports.getLogin = (req, res) => {
  res.render('login_food');
};

exports.postLogin = (req, res) => {
  const { username, password } = req.body;
  User.findOne({ username })
    .then(user => {
      if (!user) {
        return res.redirect('/login_food');
        res.send("invalid credentials");
      }
      bcrypt.compare(password, user.password)
        .then(doMatch => {
          if (doMatch) {
            req.session.isLoggedIn = true;
            req.session.user = user;
            return req.session.save(err => {
              console.log(err);
              res.redirect('/dashboard');
            });
          }
          res.redirect('/login_food');
        })
        .catch(err => {
          console.log(err);
          res.redirect('/login_food');
        });
    })
    .catch(err => console.log(err));
};

exports.getSignup = (req, res) => {
  res.render('signup');
};

exports.postSignup = (req, res) => {
  const { username, password } = req.body;
  User.findOne({ username })
    .then(userDoc => {
      if (userDoc) {
        return res.redirect('/signup');
      }
      return bcrypt.hash(password, 12)
        .then(hashedPassword => {
          const user = new User({
            username,
            password: hashedPassword
          });
          return user.save();
        })
        .then(result => {
          res.redirect('/login_food');
        });
    })
    .catch(err => {
      console.log(err);
    });
};