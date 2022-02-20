const numbers = [45, 47, 85, 47];
// console.log(numbers);
// console.log(...numbers);

const max = Math.max(23, 45, 85);
const maxInArray = Math.max(...numbers);
console.log(max, maxInArray);

const numbers2 = [22,...numbers, 45];
numbers.push(55);
console.log(numbers);
console.log(numbers2);




