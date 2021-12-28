var printMyName = function () {
  console.log("My name is Raghav M J");
};

// setTimeout(printMyName, 3000);

var person = {
  firstName: "John",
  lastName: "Doe",
  getFullName: function () {
    console.log(this.firstName + " " + this.lastName);
  },
};

var greet = person.getFullName.bind(person);
// greet();
setTimeout(greet, 2000);


