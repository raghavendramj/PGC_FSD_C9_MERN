let subtract = (a, b) => {
  return a - b;
};

let multiply = (a, b) => {
  return a * b;
};

let divide = (a, b) => {
  return a / b;
};

let add = (a, b) => {
  return a + b;
};

let operate = (num1, num2, callBack) => {
  let result = callBack(num1, num2);
  console.log("And the Result is : ", result);
};

operate(20, 10, add);
operate(20, 10, multiply);
operate(20, 10, subtract);
operator(20, 10, divide);

// Interpretation of callbacks
// let add = (a, b) => {
//   return a + b;
// };
// let callBack = add;
// callBack(10, 20);