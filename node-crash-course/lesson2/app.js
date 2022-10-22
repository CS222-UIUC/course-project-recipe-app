const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');
const Recipe = require('./models/recipe');
const User = require('./models/user');

// express app
const app = express();

function findRecipe(a1, a2) {
  compare = (a1, a2) => arr1.reduce((a, c) => a + arr2.includes(c), 0);
  return compare(arr1, arr2) >= 1;
}

//connect to mondodb
const dbURI = 'mongodb+srv://netninja:test1234@cluster0.tf6of1q.mongodb.net/node-tuts?retryWrites=true&w=majority'
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => console.log('connected to db'))
  .catch((err) => console.log(err));

//register view engine
app.set('view engine', 'ejs');

//listen for requests
app.listen(3000);

//middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({extended: true }))
app.use(morgan('dev'));

//routes
app.get('/', (req, res) => {
  res.redirect('/blogs');
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

app.get('/add-recipe', (req, res) => {
  const recipe = new Recipe({
    title: "Buckwheat Tabboulah",
    time: 30,
    ingredients: ["Buckwheat", "Vegetarian", "Carrots", "Onion"]
  })
  recipe.save()
      .then((result) => {
        res.send(result);
      })
    .catch(err => {
      console.log(err);
      });
})

app.get('/add-user', (req, res) => {
  const user = new User({
    title: "Patrick Cunningham",
    ingredients: ["Buckwheat", "Vegetarian", "Carrots", "Onion"],
    recipes: []
  })
  user.save()
      .then((result) => {
        res.send(result);
      })
    .catch(err => {
      console.log(err);
      });
})

app.get('/test-recipe', async (req, res) => {

  const user = await User.findById('635038320950a622ca6b333c');
  var ingredients = user.ingredients;
  compare = (a1, a2) => a1.reduce((a, c) => a + a2.includes(c), 0);
  var goodRecipes = [];
  Recipe.find()
    .then((result) => {
      result.forEach(r => {
        var test = r.ingredients;
        if (compare(ingredients, test) > 0) {
          goodRecipes.push(r.title);
        }
        console.log(compare(ingredients, test));
      })
      res.send(goodRecipes);
    })
    .catch(err => {
      console.log(err);
    })
})

app.use('/blogs', blogRoutes);

//404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
})