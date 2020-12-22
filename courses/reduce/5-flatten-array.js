
const values = [[0, 1], [2, 3], [4, 5], [5, 6]];
const flattened = values.reduce((total, next) => total.concat(next), []);

console.log('flattened: ', flattened);
