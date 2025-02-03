let a = 5;
let b = 3;
let sum = a + b;
let diff = a - b;
let prod = a * b;
let quot = a / b;
let power = a ** b;
let power2 = b ** b;
let rem = a % b;

let text = 'one';
let bool = true;
let bool2 = false;
let smth = null;
let undef = undefined;

let stringPlusNumber = text + a;
let stringMinusNumber = text - b;
let truePlusNumber = bool + a;
let falsePlusNumber = bool2 - a;
let nullPlusNumber = smth + b;
let nullMinusNumber = smth - b;
let undefinedPlusNumber = b + undef;

console.log('Arifmetics same types: ', sum);
console.log(diff);
console.log(prod);
console.log(quot);
console.log(power);
console.log(power2);
console.log(rem);

console.log('Different types: ', stringPlusNumber);
console.log(stringMinusNumber);
console.log(truePlusNumber);
console.log(falsePlusNumber);
console.log(nullPlusNumber);
console.log(nullMinusNumber);
console.log(undefinedPlusNumber);

const big1 = 9007199254740991n;
const big2 = 20n;

let bigSum = big1 + big2;
let bigProd = big1 * big2;

console.log('BigInt', bigSum);
console.log(bigProd);

let obj1 = { name: 'text1' };
let obj2 = { name: 'text2' };

console.log(obj1 + obj2);

a += b;
console.log('a += b:', a);

a -= b;
console.log('a -= b:', a);

a *= b;
console.log('a *= b:', a);

a /= b;
console.log('a /= b:', a);

a++;
console.log('a++:', a);

a--;
console.log('a--:', a);
