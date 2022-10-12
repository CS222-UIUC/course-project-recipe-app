const fs = require('fs');

// fs.readFile('./docs/blog1.txt', (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data.toString());
// });

fs.writeFile('/docs/blog1.txt', "hello, world", () => {
  console.log('file was written');
})

fs.writeFile('/docs/blog2.txt', "hello, world", () => {
  console.log('file was written');
})
