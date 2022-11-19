const path = require('path');
const express = require("express");
const morgan = require('morgan');
const mongoose = require('mongoose');
const Recipe = require('/Users/patrickcunningham/Programming/recipe/recipe/models/recipe.js');
const User = require('/Users/patrickcunningham/Programming/recipe/recipe/models/user.js');
const csv = require('csv-parser')
const fs = require('fs')

const ObjectId = require('mongodb').ObjectId;
const PORT = process.env.PORT || 3001;
const app = express();

const dbURI = 'mongodb+srv://netninja:test1234@cluster0.tf6of1q.mongodb.net/node-tuts?retryWrites=true&w=majority'
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => console.log('connected to db'))
  .catch((err) => console.log(err));

app.use(express.static('public'));
app.use(express.urlencoded({extended: true }))
app.use(morgan('dev'));

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.get('/pantry', async (req, res) => {
  const user = await User.findById('63626cab767cc0e556117add');
  console.log(user.ingredients);
  res.json(JSON.stringify(user.ingredients));
});

app.post('/pantry', async (req, res) => {
  var newIngredient = JSON.stringify(req.body).slice(2).split('"')[0];
  const user = await User.findById('63626cab767cc0e556117add');
  var userIngredients = user.ingredients;
  userIngredients.push(newIngredient);
  User.updateOne(
          { _id: ObjectId('63626cab767cc0e556117add') },
          { $set: { ingredients: userIngredients } }
  ).then(result => {
    res.json({ message: "APPLE" });
    }).catch(err => {
      console.log(err);
    })
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

