let divide = (a, b) => {
  return a / b;
};

let division = (a, b, callBack) => {
  let result = callBack(a, b);
  console.log("Result is : ", result);
};

let operate = (a, b) => {
  //division(a, b, divide);
  division(a, b, (a, b) => {
    return a / b;
  });
};

operate(200, 10);




