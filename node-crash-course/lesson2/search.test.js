const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');
const Recipe = require('./models/recipe');
const User = require('./models/user');

const ObjectId = require('mongodb').ObjectId;

test('adding ingredients to user', async () => {
  jest.setTimeout(3000000);
  const user = await User.findById('635038320950a622ca6b333c');
  var ingredients = user.ingredients;
  ingredients.push("MILK TEST");
  User.updateOne(
          { _id: ObjectId("635038320950a622ca6b333c") },
          { $set: { title: "Patrick Cunningham", ingredients: ingredients } }
  )
    .then(result => {
      expect(user.ingredients.includes("MILK TEST"));
  })
  
});

test('deleting ingredients from user', async () => {
  const deleteIngredient = "Apple";
  console.log(req.body);
  const user = await User.findById('635038320950a622ca6b333c');
  var userIngredients = user.ingredients;
  userIngredients.push(deleteIngredient);
  expect(userIngredients.includes(deleteIngredient));

  const index = userIngredients.indexOf(deleteIngredient);
    if (index > -1) {
      userIngredients.splice(index, 1); 
    }
    User.updateOne(
            { _id: ObjectId("635038320950a622ca6b333c") },
            { $set: { ingredients: userIngredients } }
    ).then(result => {
      expect(!user.ingredients.includes(deleteIngredient));
      }).catch(err => {
        console.log(err);
      })
});