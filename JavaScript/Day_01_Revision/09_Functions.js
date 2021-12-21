function sum(a, b, c) {
  for (var arg of arguments) {
    console.log("sum -> Argument :- ", arg);
  }
}
// sum(10, 20, 30);

function product() {
  for (var arg of arguments) {
    console.log("product -> Argument :- ", arg);
  }
}

// product(10, 20, 30);

//Named Function
function addition(a, b) {
  var sum = a + b;
  console.log("Named Function -> Sum :- ", sum);
}
// addition(10, 20);

//Anonymous function
var sumVar = function (a, b) {
  var sum = a + b;
  console.log("Anonymous Function -> Sum :- ", sum);
};
// sumVar(15, 30);

//Recursive function
function countdown(num) {
  console.log(num);
  var nextNum = num - 1;
  if (nextNum > 0) {
    countdown(nextNum);
  }
}
countdown(5);
