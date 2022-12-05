const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  time: {
    type: Number,
    required: true
  },
  ingredients: {
    type: Array,
    required: true
  },
  measurements: {
    type: Array,
    required: true
  },
  steps: {
    type: Array,
    required: true
  }
}, { timestamps: true });

const Recipe = mongoose.model('Recipe', recipeSchema);
module.exports = Recipe;

