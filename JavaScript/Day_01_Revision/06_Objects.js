function objectExample() {
  var person = {
    firstName: "John",
    lastName: "Doe",
    age: 27,
    getFullName: function () {
      return this.firstName + " " + this.lastName;
    },
    address: {
      building: "Villa Apartments",
      road: "Rue La Roi",
      city: "Paris",
    },
  };

  console.log(person);
  console.log("person.firstName :- ", person.firstName);
  console.log("person['lastName'] :- ", person["lastName"]);

  console.log("*****************************************");
  for (var prop in person) {
    console.log("--> Key:-", prop, " ::: --> Value:-", person[prop]);
  }
}

// objectExample();

function question() {
  var music = {
    rock: "guitar",
    classical: "violin",
  };


  var sound1 = music.classical;
  console.log(sound1);

  var sound2 = music["classical"];
  console.log(sound2);

  var classical = "rock";
  var sound3 = music[classical]; // => music["rock"] => guitar
  console.log(sound3);
}

question();