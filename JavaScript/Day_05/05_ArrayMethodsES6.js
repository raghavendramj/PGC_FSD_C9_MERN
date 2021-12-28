//Map => takes a input -> output

function mapFunction() {
  let numbers = [2, 4, 6, 8];

  let squares = new Array();
  for (let number of numbers) {
    let square = number * number;
    squares.push(square);
  }
  console.log("Typical Way :- Squared Numbers are :- ", squares);

  let squaresUsingMap = numbers.map(function (number) {
    return number * number;
  });

  console.log("Using Map :- Squared Numbers are :- ", squaresUsingMap);
}

mapFunction();

function secondExampleMap() {
  let names = ["virat", "sachin", "ganguly"];
  let capitalLetteredNames = new Array();
  for (let eachName of names) {
    capitalLetteredNames.push(eachName.toUpperCase());
  }
  console.log("Typical Way -- Uppercased names:- ", capitalLetteredNames);

  let capitalLetteredNamesMap = names.map(function (name) {
    return name.toUpperCase();
  });
  console.log("Using MAP -> Uppercased names:- ", capitalLetteredNamesMap);
}

function filerExample() {
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let evenNumbers = new Array();
  for (let number of numbers) {
    if (number % 2 == 0) {
      evenNumbers.push(number);
    }
  }
  console.log("Even Numbers :-", evenNumbers);

  let evenNumbersFiltered = numbers.filter((number) => number % 2 == 0);
  console.log("Using Filters : Even Numbers :-", evenNumbersFiltered);
}

function reduceExample() {
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log("Typical way of adding : ", sum);

  let reducedSum = numbers.reduce((accumulator, current) => {
    console.log("accumulator: ", accumulator, " and current: ", current);
    return accumulator + current;
  }, 0);
  console.log("Result : ", reducedSum);

  let reducedProduct = numbers.reduce((accumulator, current) => {
    return accumulator * current;
  }, 1);
  console.log("Result : ", reducedProduct);
}
