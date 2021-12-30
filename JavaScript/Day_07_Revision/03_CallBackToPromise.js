let subtractionPromise = (arr) => {
  return new Promise((resolve, reject) => {
    if (arr.length >= 2) {
      let result = arr[0] - arr[1];
      console.log("Difference is : ", result);
      arr.push(result);
      resolve(arr);
    } else {
      reject("SUBTRACTION: Need atleast 2 numbers!");
    }
  });
};

let additionPromise = (arr) => {
  return new Promise((resolve, reject) => {
    if (arr.length >= 2) {
      let result = arr[0] + arr[1];
      console.log("Sum is : ", result);
      arr.push(result);
      resolve(arr);
    } else {
      reject("ADDITION: Need atleast 2 numbers!");
    }
  });
};

let divisionPromise = (arr) => {
  return new Promise((resolve, reject) => {
    if (arr.length >= 2 && arr[1] == 0) {
      reject("DIVISION: Can't divide the number by Zero");
    } else {
      let result = arr[0] / arr[1];
      arr.push(result);
      console.log("Division result is : ", result);
      resolve(arr);
    }
  });
};

//Callback hell -> CALL BACK HELL PROBLEM!! -> SOLUTION -> PROMISE
// subtract => success -> addition => success -> mutilplication => success -> division
// subtract => failure -> end

// let subPromise = subtractionPromise([50, 30]);
// let addPromise = subPromise.then((numbers) => additionPromise(numbers));
// let dividePromise = addPromise.then((numbers) => divisionPromise(numbers));
// dividePromise.then((numbers) => console.log("Returned numbers ", numbers));

// subtractionPromise([50, 30])
//   .then((numbers) => additionPromise(numbers))
//   .then((numbers) => divisionPromise(numbers))
//   .then((numbers) => console.log("Returned result is:- ", numbers))
//   .catch((error) => console.log("Error is ", error));

subtractionPromise([50, 30])
  .then(additionPromise)
  .then(divisionPromise)
  .then((result) => console.log("Final result : ", result));
