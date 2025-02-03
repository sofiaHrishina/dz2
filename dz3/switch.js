let number = 4;

switch (number % 2 === 0) {
    case true:
        console.log(number + ' is even');
        break;
    case false:
        console.log(number + ' is odd');
        break;
}

switch (number % 2 === 0 || number % 2 !== 0) {
    case true:
        console.log('is either even or odd');
        break;
}
number =-6;
switch (true) {
    case number % 2 === 0 && number >= 0:
        console.log(number + ' is even and >0');
        break;
    case number % 2 === 0 && number < 0:
        console.log(number + ' is even number but <0');
        break;
}
number = 3;
switch (number) {
    case 1:
        console.log(number + ' is the smallest odd number');
        break;
    case number % 2 === 0:
        console.log(number + ' is even');
        break;
    default:
        console.log(number + ' is odd');
        break;
}

let result = number % 2 === 0 ? 'even' : 'odd';
console.log(number + ' is ' + result);
