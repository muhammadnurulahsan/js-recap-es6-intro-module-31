const add = (num1, num2) => num1 + num2;
const sum = add(220, 220);
console.log(sum);

const multiply = (num1, num2, num3) => num1 * num2 * num3;
const sum2 = multiply(10, 10, 10);
console.log(sum2);

const fiveTimes = (num1) => num1 * 5;
const result = fiveTimes(17);
console.log(result);

const tenTimes = (num1) => num1 * 10;
const resultTen = tenTimes(17);
console.log(resultTen);

const getName = () => "Brandon Sam";
const name = getName();
console.log(name);

const doMath = (x, y) => {
  const sum = x + y;
  const diff = x - y;
  const result = sum * diff;
  const output = result * 5;
  return output;
};
const total = doMath(12, 5);
console.log(total);











