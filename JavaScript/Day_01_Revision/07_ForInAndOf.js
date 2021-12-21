var person = {
  firstName: "John",
  lastName: "Doe",
  age: 27,
};

// OBJECTS -> FOR - IN
console.log("********** Iterating over an object keys ");
for (var key in person) {
  console.log(" -> Key :- ", key , " -> Value :- ", person[key]);
}

// ARRAYS -> FOR - OF
console.log("********** Iterating over an array ");
var array = ["Mountains", "Sea", "Island", "Forest", "Cave"];
for (let each of array) {
  console.log(each);
}
