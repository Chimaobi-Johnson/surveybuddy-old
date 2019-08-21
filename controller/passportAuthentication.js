const passport = require('passport');

exports.passportAuth1 =  passport.authenticate('google', { scope: ['profile', 'email'] });

exports.passportAuth2 = passport.authenticate('google', { failureRedirect: '/login' });

exports.passportAuth2Callback = (req, res) => {
  // Successful authentication, redirect home.
  // res.redirect('/');
}
