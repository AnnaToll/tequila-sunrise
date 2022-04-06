const fs = require('fs');

const soldOut = './soldOut';

fs.watch(soldOut, (event, filename) => {
    if (filename && event ==='change') {
      console.log(`${filename} file Changed`);
    }
});