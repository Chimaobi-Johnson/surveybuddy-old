const mongoose = require('mongoose')
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: Number,
  facebookId: Number,
  firstName: String,
  displayName: String,
  email: String,
  profilePhoto: String
});

mongoose.model('user', userSchema);
