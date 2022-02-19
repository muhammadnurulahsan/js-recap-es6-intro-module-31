// break up with var

let balance = 1240;
balance = 1340;

const userName = "Nurul Ahsan";
const weTogether = "ami " + userName;
console.log(weTogether);

const numbers = [45, 54, 23, 89, 60];
// numbers = [85, 12, 78, 45]; // not allowed
numbers.push(555);
numbers[1] = 333;

const student = { roll: 101, name: "Ahsan", job: "intern" };
student.name = "Nurul Ahsan";
// student = 'Md Nurul Ahsan' // Not allowed

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  sum = sum + number;
}
