// function declaration
function add(num1, num2) {
  return num1 + num2;
}

// function expression
const add2 = function newAdd2(num1, num2){
    return num1 + num2;
}

// function expression (anonymous)
const add3 = function (num1, num2){
    return num1 + num2;
}

// arrow function
const add4 = (num1, num2) => num1 + num2;

const result1 = add(15, 17);
const result2 = add2(15, 17);
const result3 = add3(15, 17);
const result4 = add4(15, 17);
console.log(result1, result2, result3, result4);


document
  .getElementById("mu-button")
  .addEventListener("click", function handleEvent() {});