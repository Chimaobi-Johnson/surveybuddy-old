const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const app = express();

const keys = require('./config/keys');

require('./models/User');
require('./services/passport');

app.use(bodyParser.json()); // to parse incoming json data

const authRoutes = require('./routes/authRoutes');

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'OPTIONS, GET, POST, PUT, PATCH, DELETE'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});


app.get('/', (req, res) => {
  res.send('yes i rock');
})

app.use(cookieSession({
  maxAge: 30 * 24 * 60 * 60 * 1000,
  keys: [keys.cookieKey]
}))

// Tell passport to use cookie session
app.use(passport.initialize());
app.use(passport.session());

app.use(authRoutes);

mongoose.connect(keys.mongoURI).then(mongo => {
  console.log('connected!')
}).catch(err => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT);
