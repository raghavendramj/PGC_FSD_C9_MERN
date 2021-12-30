import { customMessage, setMessage, sum } from "./08_util.js";

let message = "Original Message : "+ customMessage;
console.log(message);
let myDiv = document.getElementById("myDiv");
myDiv.append(message);

setMessage("The Message has been modified");
message = "Updated Message : "+ customMessage;
console.log(message);

let newH3 = document.createElement("h3");
newH3.textContent = message;
myDiv.appendChild(newH3);

let newH4 = document.createElement("h4");
newH4.textContent = "Sum of the numbers:- "+ sum(2, 4, 5, 6, 7);
myDiv.appendChild(newH4);