const sumArray = (arr: (number | string)[]): number =>
    arr.reduce((sum: number, current: string | number) => {
        const num = Number(current);
        if (isNaN(num)) {
            console.log(current + ' is not a number');
            return sum;
        }
        return sum + num;
    }, 0);

const numbersArray2 = [14, 26, 654, 0, 100];
const stringsArray21 = ["LALALA", "Monday", "30", "Again", "cat"];
const stringsArray22 = ["650", "540", "67890", "0", "33"];

console.log(sumArray(numbersArray2));
console.log(sumArray(stringsArray21));
console.log(sumArray(stringsArray22));
