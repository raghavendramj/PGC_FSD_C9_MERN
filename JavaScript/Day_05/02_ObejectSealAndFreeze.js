function sealExample() {
  let obj = {
    value: 10,
  };
  //Creates a non-extensible object.
  Object.seal(obj);
  console.log("Before :- ", obj);
  //Allowed
  obj.value = 20;
  //Not Allowed
  delete obj.value;
  console.log("After :- ", obj);
}
// sealExample();

function freezeExample() {
  let person = {
    name: "Raghavendra",
  };
  Object.freeze(person);
  console.log("Before :- ", person);
  //Not allowed
  person.name = "Raghav M J";
  //Not Allowed
  delete person.name;
  console.log("After :- ", person);
}

// freezeExample();

function freezeOnNestedProperties() {
  let person = {
    name: "Raghav",
    email: "raghav@gmail.com",
    address: {
      city: "Bangalore",
      state: "Karanataka",
    },
  };

  Object.freeze(person);

  console.log("Before :- ", person);

  //Not allowed
  person.name = "Raghavendra M J";

  //Not Allowed
  delete person.address;

  //Nested Property modification -> Allowed
  person.address.city = "Mumbai";
  person.address.state = "Maharastra";

  //Nested Property deletion -> Allowed
  delete person.address.state;

  console.log("After :- ", person);
}

// freezeOnNestedProperties();

function constTestNestedProps() {
  const person = {
    name: "Raghav",
    email: "raghav@gmail.com",
    address: {
      city: "Bangalore",
      state: "Karanataka",
    },
  };

  console.log("Before :- ", person);
  try {
    //Not allowed -> TypeError: Assignment to constant variable.
    person = {
      name: "Raghav",
    };
  } catch (error) {
    console.log("Error:- ", error.message);
  }

  //Property modifications are allowed!
  person.name = "Raghavendra M J";
  person.address.city = "Mumbai";
  person.address.state = "Maharastra";

  console.log("After :- ", person);
}

constTestNestedProps();
