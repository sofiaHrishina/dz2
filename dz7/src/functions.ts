function calculateSum(arr: (number | string)[]): number {
    return arr.reduce(function (sum: number, current: number | string): number {
        return sum + Number(current);
    }, 0);
}

const numbersArray: number[] = [14, 26, 654, 0, 100];
const stringsArray: string[] = ["LALALA", "Monday", "30", "Again", "cat"];
const stringsArray2: string[] = ["650", "540", "67890", "0", "33"];

console.log(calculateSum(numbersArray));
console.log(calculateSum(stringsArray));
console.log(calculateSum(stringsArray2));
