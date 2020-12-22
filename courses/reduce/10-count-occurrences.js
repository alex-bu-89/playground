//
// Reduce count occurrences
//

const words = [
  'sky',
  'forest',
  'wood',
  'sky',
  'rock',
  'cloud',
  'sky',
  'forest',
  'rock',
  'sky',
];

const result = words.reduce((total, next) => {
  total[next] = (total[next] || 0) + 1;
  return total;
}, {});

console.log(result);
