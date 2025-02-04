const userRole = 'admin';
let roleMessage;

switch (userRole) {
    case 'admin':
        roleMessage = 'You are admin.';
        break;
    case 'user':
        roleMessage = 'You are user.';
        break;
    default:
        roleMessage = 'Unknown role.';
}
console.log(roleMessage);
const number = 5;
switch (number) {
    case -1:
        console.log('less than 0');
        break;
    case 1:
        console.log('greater than 0');
        break;
    case 0:
        console.log('equal to 0');
        break;
    default:
        console.log('unknown number');
}


const result = number % 2 === 0 ? 'even' : 'odd';
console.log(number + ' is ' + result);
