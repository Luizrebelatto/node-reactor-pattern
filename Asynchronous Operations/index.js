const fs = require('fs');

console.log('begin');

fs.readFile('arquivo.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

console.log('end');
