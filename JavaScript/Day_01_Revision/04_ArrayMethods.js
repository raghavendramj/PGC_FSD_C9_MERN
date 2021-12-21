function arrayExample() {
  var students = ["Sandeep", "Anuj", "Beena", "Chandrakant"];
  printArrayElements(students);
  console.log("First Element :- ", students[0]);
  console.log("Last Element :- ", students[students.length - 1]);
  console.log(typeof students);
}
// arrayExample();

function printArrayElements(arr) {
  console.log(
    `********** Elements in the array of length ${arr.length} are .. `
  );
  console.log(arr);
}

function pushAndPopFromEndOftheArray() {
  var students = ["Sandeep", "Anuj", "Beena", "Chandrakant"];
  printArrayElements(students);
  students.push("Sonali");
  students.push("Babita");
  printArrayElements(students);
  students.pop();
  students.pop();
  students.pop();
  printArrayElements(students);
}

// pushAndPopFromEndOftheArray();

function unshiftAndShiftFromBeginningOfTheArray() {
  var students = ["Sandeep", "Anuj", "Beena", "Chandrakant"];
  printArrayElements(students);
  students.unshift("Sonali");
  students.unshift("Babita");
  printArrayElements(students);
  students.shift();
  students.shift();
  students.shift();
  printArrayElements(students);
}

// unshiftAndShiftFromBeginningOfTheArray();

function arrayJoin() {
  var students = ["Sandeep", "Anuj", "Beena", "Chandrakant"];
  console.log(students.join("--"));
}
// arrayJoin();

function mergeTwoArrays() {
  var arr1 = ["Bangalore", "Mysore"];
  var arr2 = ["Chennai", "Mumbai"];
  var cities = arr1.concat(arr2);
  console.log("mergeTwoArrays -> ", cities);
}

// mergeTwoArrays();

function spliceExamples() {
  var cities = ["Bangalore", "Mysore", "Chennai", "Kerala"];
  // Params -> splice(param1, param2, "Kerala", "Gujurat", "Tamilnadu")
  //  param1 -> pos where new elements are added or removed
  //  param2 -> how many elements needs to be removed
  //  param3 and ... -> new elements to be added
  console.log(cities);

  //Both addition and removal case.
  console.log("Before :- Cities :- ", cities);
  cities.splice(0, 2, "Delhi", "MP", "Goa");
  console.log("After :- Cities :- ", cities);

  //Only addition case
  console.log("Before :- Cities :- ", cities);
  cities.splice(0, 0, "Delhi", "MP", "Goa");
  console.log("After :- Cities :- ", cities);

  //Only removal case
  console.log("Before :- Cities :- ", cities);
  cities.splice(0, 3);
  console.log("After :- Cities :- ", cities);

  //Removes all the elements from the given index to end of the array
  console.log("Before :- Cities :- ", cities);
  cities.splice(2);
  console.log("After :- Cities :- ", cities);

  var array = ["Mountains", "Sea", "Island", "Forest", "Cave"];
  array.splice(2);
  console.log(array);
}

// spliceExamples();

function sliceMethods() {
  var cities = ["Bangalore", "Mysore", "Chennai", "Mumbai"];
  console.log("cities.slice(0, 3) :- ", cities.slice(0, 3));
  console.log("cities.slice(0, 3) :- ", cities.slice(-3, -1));
}

// sliceMethods();

function deleteMethod() {
  var cities = ["Bangalore", "Mysore", "Chennai", "Mumbai"];
  printArrayElements(cities);
  delete cities[2];
  printArrayElements(cities);
}

deleteMethod();
