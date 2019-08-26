const passport = require('passport');

exports.passportAuth1 =  passport.authenticate('google', { scope: ['profile', 'email'] });

exports.passportAuth2 = passport.authenticate('google', { failureRedirect: '/login' });

exports.passportFacebookAuth = passport.authenticate('facebook');

exports.passportFacebookAuth2 = passport.authenticate('facebook', { successRedirect: '/', failureRedirect: '/login' });

exports.passportLocalAuth = passport.authenticate('local');

exports.passportAuth2Callback = (req, res) => {
  // Successful authentication, redirect home.
  // res.redirect('/');
}
