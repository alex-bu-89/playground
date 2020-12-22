const values = [1, 2, 3, 4, 5];
const [initial] = values;

const min = values.reduce((total, next) => Math.min(total, next), initial);
const max = values.reduce((total, next) => Math.max(total, next), initial);

console.log(`The minimum is: ${min}`);
console.log(`The maximum is: ${max}`);


// It is possible to calculate both values in one go.
const initials = {
    min: Number.MAX_VALUE,
    max: Number.MIN_VALUE,
};

const minMaxVals = values.reduce(reduceMinMax, initials);
console.log('minimum and maximum: ', minMaxVals);

function reduceMinMax(total, next) {
    return {
        min: Math.min(total.min, next),
        max: Math.max(total.max, next),
    };
}