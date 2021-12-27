function show(name, address) {
  //   console.log("Value of this : ", this);
  //   console.log("Its a show function");
  console.log("Name and Address is :- ", name, " : ", address);
}

var myObject = {
  a: 10,
  b: 20,
  add: function () {
    console.log("Value of this : ", this);
    return this.a + this.b;
  },
};
console.log("Return value : ", myObject.add());
show();

//Call makes function to refer to the object we pass as its this.
show.call(myObject, "Raghavendra", "Bangalore");
show.apply(myObject, ["Raghavendra", "Bangalore"]);
show.bind(myObject)("Raghavendra", "Bangalore");
