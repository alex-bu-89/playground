import victorianSlang from './data/victorianSlang.js'

//
// with reduce
//
const values = [1, 2, 3, 4, 5];
const average = values.reduce((total, next) => total + next) / values.length;

console.log('average', average);

//
// not using reduce at all (imperative)
//

let popularitySum = 0;
let itemsFound = 0;

const len = victorianSlang.length;
// let item = null;
// for (let i = 0; i < len; i++) {
//     item = victorianSlang[i];
//     if (item.found) {
//         popularitySum = item.popularity + popularitySum;
//         itemsFound = itemsFound + 1;
//     }
// }
// const averagePopularity = popularitySum / itemsFound;
// console.log("Average popularity:", averagePopularity);