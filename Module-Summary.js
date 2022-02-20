let userName = "Muhammad";
userName = "Ahsan";

const hubby = "Ayesha";

// Default Parameter
function getName(first, last = "Chowdhury") {
  return first + " " + last;
}
const result = getName("Ayesha");

// Template String
const myPeople = `My lovely person: ${hubby} and his fullName is ${getName(
  "Ayesha"
)}. My name is ${userName}`;
console.log(myPeople);

// Arrow Function
const getName2 = (first, last) => first + " " + last;
const fiveTimes = (x) => x * 5;

const bigArrowFunction = (x, y, z) => {
  const firstPart = x + y;
  const secondPart = x * z;
  const thirdPart = x / z;
  const result = (firstPart + secondPart) * thirdPart;
  return result;
};
const total = bigArrowFunction(10, 20, 30);
console.log(total);

const numbers = [2, 4, 67, 55];
const min = Math.max(...numbers);
console.log(min);
