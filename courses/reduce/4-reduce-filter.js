const values = [-1, -2, 3, 4, -5, -6];
const filtered = values.reduce((total, next) => {
  if (next > 0) {
    total.push(next * 2);
  }

  return total;
}, []);

console.log('filtered: ', filtered);
