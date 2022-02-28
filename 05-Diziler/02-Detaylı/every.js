const newNumbers = [1,2,3,4,5,6];

const newEven = (num) => num % 2 == 0;

console.log(newNumbers.every(newEven));
// false

const num = (num) => num > 0;

console.log(newNumbers.every(num));
// true