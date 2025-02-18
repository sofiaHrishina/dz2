function calculateSum(arr: (number | string)[]): number {
    return arr.reduce(function (sum: number, current: number | string): number {
        const num = Number(current);
        if (isNaN(num)) {
            console.log(current + ' is not a number');
            return sum;
        }
        return sum + num;
    }, 0);
}

const numbersArray = [14, 26, 654, 0, 100];
const stringsArray = ["LALALA", "Monday", "30", "Again", "cat"];
const stringsArray2 = ["650", "540", "67890", "0", "33"];

console.log(calculateSum(numbersArray));
console.log(calculateSum(stringsArray));
console.log(calculateSum(stringsArray2));
