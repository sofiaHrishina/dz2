import { isPositive } from './ispos';

function generateRandomNumberAndReact(): void {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
// Author is Sofiia Hryshyna, email is sofka2708@gmail.com
console.log(`Generated number: ${randomNumber}`);

    if (randomNumber >= 6) {
        console.log("😊 Yay! This is a happy number!");
    } else {
        console.log("😢 Oh no! This is a sad number.");
    }
    console.log("Thanks for playing!");
}
 
function isEven(number: number): boolean {
    return number % 2 === 0;
}
function drawFlower(): void {
    console.log("   @");
    console.log("  @@@");
    console.log(" @@@@@");
    console.log("@@@@@@@@@");
    console.log("   |||");
    console.log("   |||");
    console.log("   |||");
} 

const testNumber = 7;
console.log(`${testNumber} is ${isEven(testNumber) ? "even" : "odd"}.`);

const testNumber2 = -5;
console.log(`${testNumber} is ${isPositive(testNumber) ? "positive" : "negative"}.`);
drawFlower();