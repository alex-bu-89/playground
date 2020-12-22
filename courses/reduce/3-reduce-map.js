const values = [1, 2, 3, 4, 5];
const mapped = values.reduce((total, next) => {
  total.push(next * 2);
  return total;
}, []);

console.log('mapped: ', mapped);
