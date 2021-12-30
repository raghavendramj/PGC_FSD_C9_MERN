// let subtract = (a, b) => {
//   return a - b;
// };

// let multiply = (a, b) => {
//   return a * b;
// };

// let divide = (a, b) => {
//   return a / b;
// };

// let add = (a, b) => {
//   return a + b;
// };

let addition = (a, b, callBackForAdd) => {
  let sum = callBackForAdd(a, b);
  console.log("Sum is :- ", sum);
};

let subtraction = (a, b, callBackForSub) => {
  let diff = callBackForSub(a, b);
  console.log("Difference is :- ", diff);
};

let multiplication = (a, b, callBackForMulti) => {
  let diff = callBackForMulti(a, b);
  console.log("Product is :- ", diff);
};

let division = (a, b, callBackForDiv) => {
  let diff = callBackForDiv(a, b);
  console.log("Division result is :- ", diff);
};

let performOperations = (a, b) => {
  //subtraction(a, b, subtract);
  subtraction(a, b, (a, b) => {
    //addition(a, b, add);
    addition(a, b, (a, b) => {
      //multiplication(a, b, multiply);
      multiplication(a, b, (a, b) => {
        //division(a, b, divide);
        division(a, b, (a, b) => {
          return a / b;
        });
        return a * b;
      });
      //throw console.error("Test"); -> This is the problem with callbacks
      return a + b;
    });
    return a - b;
  });
};

performOperations(50, 20);

//Callback hell -> CALL BACK HELL PROBLEM!!
// subtract -> addition -> mutilplication -> division
