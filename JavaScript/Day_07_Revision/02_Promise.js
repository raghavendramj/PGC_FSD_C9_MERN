//Case :0 Login Users -> if valid -> search repo -> found -> fetch last 5 commits
//Case :1 Login Users -> if not valid -> "Invalid User"
//Case :2 Login Users -> if valid -> search repo -> not found -> redirect to home page
//Case :3 Login Users -> if valid -> search repo -> found -> only 3 commits -> return only 3 commits

let operate = (a, b) => {
  return new Promise((res, rej) => {
    if (b == 0) {
        rej("Can't divide the number by Zero");
    } else {
      let result = a / b;
      res("The result is :- " + result);
    }
  });
};

//Positive 300/15 = 20 => The result is :- 20 => then's successCalback -> 1st callback
let promiseSuccess = operate(300, 15);
promiseSuccess.then(
  (result) => console.log("******** SUCESSS!...", result),
  (error) => console.log("^^^^^^^^^^^ FAILURE!...", error)
);

//Negative 300/0 = infinity => Can't divide the number by Zero => then's failure callback -> 2nd callback
let promiseFailure = operate(300, 0);
promiseFailure.then(
  (result) => console.log("******** SUCESSS!...", result),
  (error) => console.log("^^^^^^^^^^^ FAILURE!...", error)
);
