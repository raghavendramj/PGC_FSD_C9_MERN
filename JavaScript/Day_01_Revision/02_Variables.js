function variables() {
  var x, y;
  x = 10;
  y = 20;
  console.log("X is : ", x);
  console.log("Y is : ", y);

  var sum = x + y;
  console.log("Sum is ", sum);

  var numberString = x + "" + y;
  console.log("typeof numberString ", typeof numberString);
  console.log("Sum is ", numberString);

  var a = 10;
  var b = "10";

  console.log("typeof a ", typeof a);
  console.log("typeof b ", typeof b);

  var areTheySame = a == b;
  console.log("Are they same? " + areTheySame);

  var areTheySameStrict = a === b;
  console.log("Are they same strict? " + areTheySameStrict);

  var result = (24 + 200) * 50;
  console.log("result is ", result);
}

variables();
