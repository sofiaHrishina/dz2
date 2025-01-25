function generateRandomNumberAndReact(): void {
    const randomNumber = Math.floor(Math.random() * 10) + 1;

    console.log(`Generated number: ${randomNumber}`);

    if (randomNumber >= 6) {
        console.log("😊 Yay! This is a happy number!");
    } else {
        console.log("😢 Oh no! This is a sad number.");
    }
    console.log("Thanks for playing!");
}