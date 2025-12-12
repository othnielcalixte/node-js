const User = require('../models/user');

exports.getLogin = (req, res, next) => {
  // const isLoggedIn =
  //   req.get('Cookie').split(';')[0].trim().split('=')[1] === 'true';

  res.render('auth/login', {
    pageTitle: 'Login',
    path: '/login',
    isAuthenticated: false,
  });
};

exports.postLogin = (req, res, next) => {
  // User.findById('693a08e1a17ced31de4a6f8f')
  User.findOne()
    .then(user => {
      if (!user) {
        return res.redirect('login');
      }
      req.session.isLoggedIn = true;
      req.session.user = user._id.toString();
      req.session.save(err => {
        console.log(err);
        res.redirect('/');
      });
    })
    .catch(err => console.log(err));
};

exports.postLogout = (req, res, next) => {
  req.session.destroy(err => {
    console.log(err);
    res.redirect('/');
  });
};
