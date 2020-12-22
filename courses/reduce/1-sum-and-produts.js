const values = [1, 2, 3, 4, 5];

const sum = values.reduce((total, next) => { return total + next });
const product = values.reduce((total, next) => { return total * next });

console.log('sum: ', sum);
console.log('product: ', product);

