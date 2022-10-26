const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');
const Recipe = require('./models/recipe');
const User = require('./models/user');

const ObjectId = require('mongodb').ObjectId;


// express app
const app = express();

// function findRecipe(a1, a2) {
//   compare = (a1, a2) => arr1.reduce((a, c) => a + arr2.includeas(c), 0);
//   return compare(arr1, arr2) >= 1;
// }

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
  const recipes = await Recipe.find();
  recipes.forEach(r => {
    if (compare(ingredients, r.ingredients) > 0) {
          goodRecipes.push(r.title);
        }
  })
    User.updateOne(
          { _id: ObjectId("635038320950a622ca6b333c") },
          { $set: { title: "Patrick Cunningham", recipes: goodRecipes } }
    ).then(result => {
      console.log(result);
      res.send(goodRecipes);
    }).catch(err => {
      console.log(err);
    })
  
})

app.get('/recipe-home', (req, res) => {
  Recipe.find()
    .then((result) => {
      res.render('recipe-home', { title: 'All Recipes', recipes: result })
    })
    .catch((err) => {
      console.log(err);
    })
});

app.get('/user-recipes', async (req, res) => {
  const user = await User.findById('635038320950a622ca6b333c');
  console.log(user.title);
  res.render('user-home', { title: 'User Recipes', user: user });
});

app.get('/pantry', async (req, res) => {
  const user = await User.findById('635038320950a622ca6b333c');
  console.log(user.title);
  res.render('pantry', { title: 'Pantry', user: user });
});

async function updateRecipes() {

  const user = await User.findById('635038320950a622ca6b333c');
  var ingredients = user.ingredients;
  compare = (a1, a2) => a1.reduce((a, c) => a + a2.includes(c), 0);
  var goodRecipes = [];
  const recipes = await Recipe.find();
  recipes.forEach(r => {
    if (compare(ingredients, r.ingredients) > 0) {
          goodRecipes.push(r.title);
        }
  })
    User.updateOne(
          { _id: ObjectId("635038320950a622ca6b333c") },
          { $set: { title: "Patrick Cunningham", recipes: goodRecipes } }
    ).then(result => {
      console.log(result);
    }).catch(err => {
      console.log(err);
    })
  
}

app.post('/pantry', async (req, res) => {
  const newIngredient = req.body.title;
  const user = await User.findById('635038320950a622ca6b333c');
  var userIngredients = user.ingredients;
  userIngredients.push(newIngredient);
  User.updateOne(
          { _id: ObjectId('635038320950a622ca6b333c') },
          { $set: { ingredients: userIngredients } }
  ).then(result => {
      updateRecipes();
      res.redirect('/pantry');
    }).catch(err => {
      console.log(err);
    })
});

app.get('/delete/pantry', (req, res) => {
  res.redirect('/pantry');
});

app.post('/delete/pantry', async (req, res) => {
  const deleteIngredient = req.body.title;
    console.log(req.body);
    const user = await User.findById('635038320950a622ca6b333c');
    var userIngredients = user.ingredients;
    const index = userIngredients.indexOf(deleteIngredient);
    if (index > -1) {
      userIngredients.splice(index, 1); 
    }
    User.updateOne(
            { _id: ObjectId("635038320950a622ca6b333c") },
            { $set: { ingredients: userIngredients } }
    ).then(result => {
        updateRecipes();
        res.redirect('/pantry');
      }).catch(err => {
        console.log(err);
      })
});

app.use('/blogs', blogRoutes);

//404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
})