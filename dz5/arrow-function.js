const sumArray = (arr) => arr.reduce((sum, current) => sum + Number(current), 0);

const numbersArray = [14, 26, 654, 0, 100];
const stringsArray = ["LALALA", "Monday", "30", "Again", "cat"];
const stringsArray2 = ["650", "540", "67890", "0", "33"];

console.log(sumArray(numbersArray));
console.log(sumArray(stringsArray));
console.log(sumArray(stringsArray2));
