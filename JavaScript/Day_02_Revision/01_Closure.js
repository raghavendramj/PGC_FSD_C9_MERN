var name = "raghav";
function greeting() {
  var message = "Hi";
  console.log(message + " " + name);
}
greeting();

// -------------------------------------
function greeting() {
  var message = "Hi";
  function sayHi() {
    var name = "Raghavendra";
    console.log(message + " " + name);
  }
  sayHi();
}
greeting();
// -------------------------------------
// CLOSURE EXAMPLE
function greeting() {
  var message = "Hi";
  function sayHi() {
    var name = "Raghavendra";
    console.log(message + " " + name); //Message inside scope of sayHi function as closure,
  }
  return sayHi;
}
var greetRaghav = greeting();

//Example - 02

function greet() {
  var message = "Welcome to ";
  function sayHi(city) {
    console.log(message + " " + city);
  }
  return sayHi;
}

var myObj = greet();

var salOfEmp = (function () {
  var salary = 60000; //Outer function's variable
  function changeSalaryBy(amount) {
    salary += amount;
  }
  return {
    raise: function (val) {
      changeSalaryBy(val);
    },

    lower: function (val) {
      changeSalaryBy(-val);
    },

    currentSalary: function () {
      return salary;
    },
  };
})();
