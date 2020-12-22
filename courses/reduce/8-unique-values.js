//
// JS reduce - unique values
//
const values = [1, 1, 2, 2, 3, 4, 5, 5];

const unique = values.reduce((total, next) => {
  if (total.includes(next)) {
    return total;
  } else {
    return [...total, next];
  }
}, []);

console.log('unique', unique);
