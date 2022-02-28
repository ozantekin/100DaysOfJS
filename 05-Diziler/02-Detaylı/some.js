const numbers = [1,2,3,4,5,6];

const adult = (num) => num >= 18;

console.log(numbers.some(adult));
// false

const even = (num) => num % 2 == 0;

console.log(numbers.some(even));
// true