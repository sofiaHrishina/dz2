let a = true;
let b = false;
let c = null;
let d = 5;
let e;
console.log(a && b);

console.log(a || b);

console.log(!a);

console.log(!!d);

console.log(c ?? d);

console.log(!c);

console.log(e ?? d);

let f = 10;
let g = '10';

console.log(a == b);
console.log(a === b);
console.log(d == g);
console.log(d === g);

console.log(f > d);
console.log(f < d);
console.log(f >= d);
console.log(f <= d);

console.log(f != d);
console.log(f !== d);

console.log(c == null);
console.log(c === null);
console.log(e == undefined);
console.log(e === undefined);
