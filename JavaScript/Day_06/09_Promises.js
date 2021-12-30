//Problem Statement :-
// Trainer          :- All of you should complete the assignment by tomorrow.
// Learners         :- You guys don't know whether you can finish the assignment by tomorrow or not.
// Learners Promise :- Will complete the the assignment by tomorrow.

//Promise can be divided into 3 stages.

// Fulfilled :- Complete -> You will finish the assignment by tomorrow
// Rejected  :- InComplete -> You won't finish
// Pending   :- Don't know the if you will be able to finsih by tomorrow or not.

let jsAssignment = (status) => {
  return new Promise((resolve, reject) => {
    if (status) {
      resolve("I have completed the assignment");
    } else {
      reject("I could not complete the assignment");
    }
  });
};

// Fulfilled -> status -> true
// Rejected -> status -> false
jsAssignment(false).then(
  (doneMsg) => console.log("Status of the assigment :- ", doneMsg),
  (reasonForNotCompletion) =>
    console.log("Status of the assigment :- ", reasonForNotCompletion)
);

