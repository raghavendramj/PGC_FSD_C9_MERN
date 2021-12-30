function promiseExample(name) {
  let promiseObject = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (name.length > 3) {
        resolve("My name is John Doe!");
      } else {
        reject("Unbable to fetch the name!");
      }
    }, 2000);
  });
  return promiseObject;
}

const prom = promiseExample("raghav"); //Sucess case
const prom = promiseExample("ra"); //Failure case
prom.then(
  (msg) => console.log("********** SUCCESS!!...Promise Fulfilled", msg),
  (msg) => console.log("-------FAILURE... Promise Rejected", msg)
);
