function add(b) {
  console.log("This is : ", this);
  var res = this.a + b;
  console.log("Result is :- ", res);
  return res;
}

var obj1 = { a: 20 };
add.call(obj1, 20);

// var obj1 = { a: 52 };
// var boudedAdd = add.bind(obj1);
// console.log("Result is ", boudedAdd(10));

var obj2 = { a: 10 };
var add10 = add.bind(obj2);
add10(12);