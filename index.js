const numbersArray = [10, 2, 6, 8];
const doubleArray = numbersArray.map(el => el * 2);
console.log(doubleArray);

const stringArray = ['hello', 'dog', 'cat'];
const toUpperCase = stringArray.map(el => el.toUpperCase());
console.log(toUpperCase);

const sumArray = numbersArray.reduce((acc, currentValue) => acc += currentValue, 0);
console.log(sumArray);

const negativeNumbersArray = [-1, -2, 5, -6, 3];
const deleteNegative = negativeNumbersArray.filter((el) => el > 0);
console.log(deleteNegative);
