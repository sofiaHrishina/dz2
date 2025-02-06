const numberArray = [56, 22, 30000, 4, 588];
const stringArray = ["hello", "world", "!!!!", "34"];
const booleanArray = [true, true, true, false];
const randomArray = [true, "cat", 4647, "dog", true, { key: "value" }];

numberArray.push(76);
console.log(numberArray);
const sortedNumberArray = numberArray.sort((a,b)=> a - b);
console.log(sortedNumberArray);

const sortedNumberArray2 = numberArray.sort((a,b)=> b - a);
console.log(sortedNumberArray2);

const sortedRandomArray = [];
randomArray.forEach((el, i) => {
    if (typeof el === 'boolean') {
        sortedRandomArray.push(el);
        console.log(i);
    }
});
console.log(sortedRandomArray);

const combinedArray = numberArray.concat(stringArray);
console.log(combinedArray);

stringArray.forEach(str => console.log(str));

const foundNumber = numberArray.find(num => num > 500);
console.log(foundNumber);

console.log(numberArray.includes(22));
console.log(numberArray.includes(23));

const filteredArray = randomArray.filter((el)=> typeof el == 'number');
console.log(filteredArray);

const filteredArray2 = randomArray.filter((el)=> typeof el == 'string');
console.log(filteredArray2);

const doubledNumbers = numberArray.map(num => num * 2);
console.log(doubledNumbers);

const mergedArrays = [...booleanArray, ...randomArray];
console.log(mergedArrays);
