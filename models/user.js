const mongoose = require('mongoose');

// Create a User Schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true, unique: true }
});

// Create the User model from the schema
const User = mongoose.model('User', userSchema);

module.exports = User;
