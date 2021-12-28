//Normal function
function greetPerson(name) {
  console.log("Hello", name);
}
greetPerson("Raghavendra");

//Anonymous function => Function expression
let greetPersonVariable = function (name) {
  console.log("Hello", name);
};
greetPersonVariable("Virat");

//Arrow function
let greetPersonArrow = (name) => {
  console.log("Hello", name);
};
greetPersonArrow("Sachin");

//Arrow function - simplified
let greetPersonArrowSimplified = (name) => console.log("Hello", name);
greetPersonArrowSimplified("Ganguly");

//Arrow function - simplifiedFurther
let greetPersonArrowSimplifiedFurther = name => console.log("Hello", name);
greetPersonArrowSimplifiedFurther("Zaheer");