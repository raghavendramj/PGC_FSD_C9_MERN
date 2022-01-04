function jsonTypes() {
  let jsObject = {
    //Number
    age: 25,
    //String
    name: "raghavendra",
    //Boolean
    isTeacher: true,
    //Array
    hoobies: ["Cricket", "Trekking", "Driving", "Music"],
    //Object
    address: {
      city: "Bangalore",
      pinCode: 560001,
    },
    //null
    email: null,
  };

  //Validate using => https://jsonlint.com/
  console.log("Convereted JSON String is :- ", JSON.stringify(jsObject));

  /**
 * Coverted JSON String
    {
        //Number
        "age": 25,
        //String
        "name": "raghavendra",
        //Boolean
        "isTeacher": true,
        //Array
        "hoobies": ["Cricket", "Trekking", "Driving", "Music"],
        //Object
        "address": {
            "city": "Bangalore",
            "pinCode": 560001
        },
        //Null
        "email": null
    }
    */
}

jsonTypes();
