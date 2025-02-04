let a = 5;
let b = 3;
let action = a + b;
console.log('Arifmetics same types: ', action);
console.log(action);

action = a - b;
console.log(action);

action = a * b;
console.log(action);

action = a / b;
console.log(action);

action = a ** b;
console.log(action);

action = b ** b;
console.log(action);

action = a % b;
console.log(action);

const text = 'one';
const bool = true;
const bool2 = false;
const smth = null;

const stringPlusNumber = text + a;
const stringMinusNumber = text - b;
const truePlusNumber = bool + a;
const falsePlusNumber = bool2 - a;
const nullPlusNumber = smth + b;
const nullMinusNumber = smth - b;

console.log('Different types: ', stringPlusNumber);
console.log(stringMinusNumber);
console.log(truePlusNumber);
console.log(falsePlusNumber);
console.log(nullPlusNumber);
console.log(nullMinusNumber);

const big1 = 9007199254740991n;
const big2 = 20n;

const bigSum = big1 + big2;
const bigProd = big1 * big2;

console.log('BigInt', bigSum);
console.log(bigProd);

const obj1 = { name: 'text1' };
const obj2 = { name: 'text2' };

console.log(obj1 + obj2);

a += b;
console.log('a += b:', a);

a -= b;
console.log('a -= b:', a);

a *= b;
console.log('a *= b:', a);

b /= a;
console.log('b /= a:', b);

b++;
console.log('b++:', b);

a--;
console.log('a--:', a);
