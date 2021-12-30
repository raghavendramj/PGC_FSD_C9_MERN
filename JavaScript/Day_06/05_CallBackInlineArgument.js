let operate = (num1, num2, callBack) => {
  let result = callBack(num1, num2);
  console.log("And the Result is : ", result);
};


let add = (a, b) => {
  return a + b;
};

//Passing function variable as an argument
operate(20, 10, add);

//Passing function definition as an argument
operate(20, 10, (a, b) => {
  return a + b;
});
