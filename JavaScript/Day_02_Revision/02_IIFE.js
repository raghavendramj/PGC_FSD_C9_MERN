function add(a, b) {
  return a + b;
}

add(15, 60);

var add = (function (a, b) {
  return a + b;
})(45, 55);

console.log(add);

// ------------------------------------

var calculator = (function () {
  function add(a, b) {
    return a + b;
  }

  function multiply(a, b) {
    return a * b;
  }

  function division(a, b) {
    return a / b;
  }

  function subtraction(a, b) {
    return a - b;
  }

  return {
    sum: add,
    prod: multiply,
    divide: division,
    diff: subtraction,
  };
})();
