function forLoops() {
  let numbers = [1, 2, 3, 4, 5, 6];

  console.log("************ For of loop for Array ");

  for (let eachNumber of numbers) {
    console.log("Each Number is ", eachNumber);
  }

  let person = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
    email: "John.doe@gmail.com",
  };

  console.log("\n===========> For in loop for object ");

  for (let eachProp in person) {
    console.log(" Key : ", eachProp, " Value : ", person[eachProp]);
  }
}

// forLoops();

function defaultParams() {
  let display = (x, y = 2) => {
    console.log(x + " " + y);
  };
  display(1, 45);
}

defaultParams();