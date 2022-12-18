const path = require('path');
const express = require("express");
const morgan = require('morgan');
const mongoose = require('mongoose');
const Recipe = require('../models/recipe.js');
const User = require('../models/user.js');
const csv = require('csv-parser');
const fs = require('fs');
const multer = require('multer');
const sharp = require('sharp');

const {spawn} = require('child_process');

const ObjectId = require('mongodb').ObjectId;
const PORT = process.env.PORT || 3001;
const app = express();

const dbURI = 'mongodb+srv://netninja:test1234@cluster0.tf6of1q.mongodb.net/node-tuts?retryWrites=true&w=majority'
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => console.log('connected to db'))
  .catch((err) => console.log(err));

app.use(express.static('public'));
app.use(express.urlencoded({ limit: '25mb', extended: true }))
app.use(express.json({limit: '25mb'}));
app.use(morgan('dev'));
app.use(express.static(path.resolve(__dirname, '../client/build')));

const imageStorage = multer.diskStorage({
    // Destination to store image     
    destination: 'images', 
      filename: (req, file, cb) => {
        cb(null, file.fieldname + '_' + Date.now()
          + path.extname(file.originalname))
            // file.fieldname is name of the field (image)
            // path.extname get the uploaded file extension
    }
});

const upload = multer({
  storage: imageStorage,
  limits: {
    fileSize: 1000000 // 1000000 Bytes = 1 MB
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(png|jpg)$/)) {
      // upload only png and jpg format
      return cb(new Error('Please upload a Image'))
    }
    cb(undefined, true)
  }
}) 

app.get('/groceries', async (req, res) => {
  // const user = await User.findById('6379434e41121f9226ba1e13');
  Recipe.deleteMany({});
  // res.json(JSON.stringify(user.groceries));
});


app.post('/groceries', async (req, res) => {
  var newItem = JSON.stringify(req.body).slice(2).split('"')[0].toLocaleLowerCase();
  const user = await User.findById('6379434e41121f9226ba1e13');
  var userGroceries = user.groceries;
  userGroceries.push(newItem);
  User.updateOne(
          { _id: ObjectId('6379434e41121f9226ba1e13') },
          { $set: { groceries: userGroceries } }
  ).then(result => {
    res.json({ message: "APPLE" });
    }).catch(err => {
      console.log(err);
    })
});

app.get('/pantry', async (req, res) => {
  const user = await User.findById('6379434e41121f9226ba1e13');
  res.json(JSON.stringify(user.ingredients));
});

app.get('/recipes', async (req, res) => {
  const user = await User.findById('6379434e41121f9226ba1e13');
  res.json(JSON.stringify(user.recipes));
});

app.post('/pantry', async (req, res) => {
  var newIngredient = JSON.stringify(req.body).slice(2).split('"')[0].toLocaleLowerCase().trim();
  const user = await User.findById('6379434e41121f9226ba1e13');
  var userIngredients = user.ingredients;
  Recipe.deleteMany({});
  userIngredients.push(newIngredient.trim());
  User.updateOne(
          { _id: ObjectId('6379434e41121f9226ba1e13') },
          { $set: { ingredients: userIngredients } }
  ).then(result => {
    updateRecipes();
    }).catch(err => {
      console.log(err);
    })
});

app.get('/recipe_details/:id', async (req, res) => {
  const id = req.params.id;
  console.log(id)
  const recipe = await Recipe.findById(id);
  res.json(JSON.stringify(recipe));
});

app.post('/scan', async (req, res) => {
	fs.writeFile('./out.jpeg', req.body.imgsource, 'base64', (err) => {
		if (err) throw err
	})
	res.status(200)
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.post('/delete/pantry', async (req, res) => {
  const deleteIngredient = JSON.stringify(req.body).slice(2).split('"')[0].toLocaleLowerCase();
    console.log(deleteIngredient);
    console.log(req.body);
    const user = await User.findById('6379434e41121f9226ba1e13');
    var userIngredients = user.ingredients;
    const index = userIngredients.indexOf(deleteIngredient);
    if (index > -1) {
      userIngredients.splice(index, 1); 
    }
    User.updateOne(
            { _id: ObjectId("6379434e41121f9226ba1e13") },
            { $set: { ingredients: userIngredients } }
    ).then(result => {
        updateRecipes();
        res.redirect('/pantry');
      }).catch(err => {
        console.log(err);
      })
});
app.post('/delete/groceries', async (req, res) => {
  const deleteIngredient = JSON.stringify(req.body).slice(2).split('"')[0].toLocaleLowerCase();
    console.log(deleteIngredient);
    console.log(req.body);
    const user = await User.findById('6379434e41121f9226ba1e13');
    var userIngredients = user.groceries;
    const index = userIngredients.indexOf(deleteIngredient);
    if (index > -1) {
      userIngredients.splice(index, 1); 
    }
    User.updateOne(
            { _id: ObjectId("6379434e41121f9226ba1e13") },
            { $set: { groceries: userIngredients } }
    ).then(result => {
        updateRecipes();
        res.redirect('/pantry');
      }).catch(err => {
        console.log(err);
      })
});
async function updateRecipes() {

  const user = await User.findById('6379434e41121f9226ba1e13');
  var ingredients = user.ingredients;

  ingredients = ingredients.map(element => {
      return element.toUpperCase();
  });
  
  compare = (a1, a2) => a1.reduce((a, c) => a + a2.includes(c), 0);
  var goodRecipes = [];

  const recipes = await Recipe.find();
  recipes.forEach(r => {

    const rIngredients = r.ingredients.map(element => {
      return element.toUpperCase();
    });

    if (compare(ingredients, rIngredients) > 0) {
          goodRecipes.push([r.title, compare(ingredients, rIngredients), compare(ingredients, rIngredients).toString() + "/" + rIngredients.length.toString(), r._id]);
        }
  })

  goodRecipes.sort(function(a, b){return b[1] - a[1]});
  User.updateOne(
        { _id: ObjectId("6379434e41121f9226ba1e13") },
        { $set: { title: "Patrick Cunningham", recipes: goodRecipes } }
  ).then(result => {
    console.log(result);
  }).catch(err => {
    console.log(err);
  })
}
