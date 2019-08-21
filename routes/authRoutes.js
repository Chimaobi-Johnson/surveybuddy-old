const express = require('express');

const passportAuth = require('../controller/passportAuthentication');

const router = express.Router();

router.get('/auth/google', passportAuth.passportAuth1)

router.get('/auth/google/callback', passportAuth.passportAuth2);

router.get('/api/logout', (req, res) => {
  req.logout();
  res.send(req.user);
})

router.get('/api/current_user', (req, res) => {
  res.send({user: req.user});
})


module.exports = router;
