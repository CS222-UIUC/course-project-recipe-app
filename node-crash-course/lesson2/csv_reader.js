const csv = require('csv-parser')
const fs = require('fs')
const results = [];

fs.createReadStream('/Users/patrickcunningham/Programming/recipe/node-crash-course/lesson2/Recipes - Sheet1.csv')
  .pipe(csv({}))
  .on('data', (data) => {
    results.push(data);
  })
  .on('end', () => {
    
    for (let i = 0;  i < results.length; i++) {
      console.log(results[i]['Ingredients']);
    }
  });

