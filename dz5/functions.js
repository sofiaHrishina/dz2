
function calculateSum(arr) {
    return arr.reduce(function(sum, current) {
        return sum + Number(current);
    }, 0);
}

const numbersArray = [14, 26, 654, 0, 100];
const stringsArray = ["LALALA", "Monday", "30", "Again", "cat"];
const stringsArray2 = ["650", "540", "67890", "0", "33"];

console.log(calculateSum(numbersArray));
console.log(calculateSum(stringsArray));
console.log(calculateSum(stringsArray2));
