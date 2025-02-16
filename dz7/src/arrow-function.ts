const sumArray = (arr: (number | string)[]): number =>
    arr.reduce((sum: number, current: string | number) => sum + Number(current), 0);

const numbersArray2: number[] = [14, 26, 654, 0, 100];
const stringsArray21: string[] = ["LALALA", "Monday", "30", "Again", "cat"];
const stringsArray22: string[] = ["650", "540", "67890", "0", "33"];

console.log(sumArray(numbersArray2));
console.log(sumArray(stringsArray21));
console.log(sumArray(stringsArray22));
