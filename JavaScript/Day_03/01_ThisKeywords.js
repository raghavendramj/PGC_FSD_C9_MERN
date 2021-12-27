function testThis() {
  console.log(this);
}

// Normal function -> GLOBAL
function addNumbers(a, b) {
  console.log("This is :- ", this);
  var sum = a + b;
  console.log("Result :- ", sum);
  return sum;
}
addNumbers(10, 20);


// Constructor function -> Object that gets created
function Book(name, author) {
  this.name = name;
  this.author = author;
  console.log("This is :- ", this);  //Object that created and returned from this function
}
var bookObject = new Book("Angels and Demons", "Dan Brown");

// Object -> the current object itself
var person = {
  name: "virat",
  age: 32,
  profession: "cricket",
  details: function () {
    console.log(this.name, " ", this.age, " ", this.profession);
    console.log("This is :- ", this);
  },
};
person.details();

