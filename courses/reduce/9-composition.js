//
// JS composition
//
const double = (x) => x * 2;
const triple = (x) => x * 3;
const quadruple = (x) => x * 4;

const pipe = (...funs) => (input) => funs.reduce((total, fn) => fn(total), input);

const fun1 = pipe(double);
const fun2 = pipe(double, triple);
const fun3 = pipe(triple, triple);
const fun4 = pipe(double, triple, quadruple);

console.log(fun1(2));
console.log(fun2(5));
console.log(fun3(7));
console.log(fun4(9));