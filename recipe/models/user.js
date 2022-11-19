const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  ingredients: {
    type: Array,
    required: true
  },
  recipes: {
    type: Array,
    required: true
  },
  groceries: {
    type: Array,
    required: true
  },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
module.exports = User;

