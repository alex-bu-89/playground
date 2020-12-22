//
// JS reduce reverse
//
const values = [88, 28, 0, 9, 389, 420];

const reversed = values.reduce((total, next) => {
  return [next, ...total];
}, []);

console.log(reversed);
