const express = require('express');

const passportAuth = require('../controller/passportAuthentication');

const router = express.Router();

router.get('/auth/google', passportAuth.passportAuth1)

router.get('/auth/google/callback', passportAuth.passportAuth2, passportAuth.passportAuth2Callback);

router.get('/auth/facebook', passportAuth.passportFacebookAuth);

router.get('/auth/facebook/callback', passportAuth.passportFacebookAuth2, passportAuth.passportAuth2Callback);

router.get('/privacy-policy', (req, res) => {
  res.send({message: 'this is the privacy policy page'});
});

router.post('/login', passportAuth.passportLocalAuth, (req, res) => {
  console.log(req.body);
});

router.get('/api/logout', (req, res) => {
  req.logout();
  res.redirect('/');
})

router.get('/api/current_user', (req, res) => {
  res.send({user: req.user});
})


module.exports = router;
