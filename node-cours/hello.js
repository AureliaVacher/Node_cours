// console.log('J\'aime le chocolat');

const fs = require('fs');
// fs.writeFileSync('log.txt', 'Les marshmalows controlent le monde');

fs.appendFileSync('log.txt', 'Quand est il des sucettes?');
console.log('Reussi');

fs.appendFileSync('log.txt', '  Trop de sucre');
console.log('Reussi');