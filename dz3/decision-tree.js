let number = 4;

if (number % 2 === 0) {
    console.log(number + ' is an even');
}

if (number % 2 === 0 || number % 2 !== 0) {
    console.log(number + ' is either even or odd');
}

number = -6;
if (number % 2 === 0 && number >= 0) {
    console.log(number + ' is even number and >0');
} else if (number % 2 === 0 && number < 0) {
    console.log(number + ' is an even but <0');
}

number = 1;
if (number % 2 === 0) {
    console.log(number + ' is an even');
} else if (number === 1) {
    console.log(number + ' is the smallest odd number');
} else {
    console.log(number + ' is an odd');
}

const result = number % 2 === 0 ? 'even' : 'odd';
console.log(number + ' is ' + result);
