// option one
function addNumbers(num1, num2) {
  if (num2 === undefined) {
    num2 = 0;
  }
  console.log(12);
  const total = num1 + num2;
  return total;
}
const result = addNumbers(45, 54);
console.log(result);

// option two
function addNumbers(num1, num2) {
  num2 = num2 || 0;
  const total = num1 + num2;
  return total;
}
const result = addNumbers(100);
console.log(result);

// ES6 New Version Default Parameter
function addNumbers(num1, num2 = 0) {
  const total = num1 + num2;
  return total;
}
const result = addNumbers(45);
console.log(result);

// Default Parameter
function fullName(first, last = "Ahmed") {
  const name = first + " " + last;
  return name;
}
const result = fullName('Rakib');
console.log(result);
