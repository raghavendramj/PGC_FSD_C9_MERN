function escapeExample() {
  var statement =
    'The nickname "Red Devils" is given to the players playing for Manchester United FC.';
  statement =
    "The nickname 'Red Devils' is given to the players playing for Manchester United FC.";
}

function indexMethods() {
  var str = "Hello World";
  console.log("Hello World -> str.length :- ", str.length);
  console.log("str.indexOf('World') :- ", str.indexOf("World"));

  var stmt = "I have to visit to United Kingdom to buy some Kites";
  console.log("str.indexOf('K') :- ", stmt.indexOf("K"));
  console.log("str.lastIndexOf('K') :- ", stmt.lastIndexOf("K"));

  console.log("str.indexOf('to') :- ", stmt.indexOf("to"));
  console.log("str.lastIndexOf('to') :- ", stmt.lastIndexOf("to"));

  console.log("str.lastIndexOf('i') :- ", stmt.lastIndexOf("i"));
}

// indexMethods();

function subStringMethod() {
  var str = "My favorite country is India";
  //first index is inclusive
  //last  index is exclusive
  console.log("str.substring(3, 11) :- ", str.substring(3, 11));
}

// subStringMethod();

function subStrMethod() {
  var str = "My favorite country is India";
  //first param -> index to start
  //second param -> length to be extacted
  console.log("str.substr(3, 11):- ", str.substr(3, 11));
}

// subStrMethod();

function replaceMethod() {
  var stmt =
    "I have to visit to Bangalore because Bangalore is a nice place to hang-out";
  console.log(stmt.replace(/Bangalore/g, "Kolkota"));
}

// replaceMethod();

function sliceMethod() {
  var stmt =
    "I have to visit to Bangalore because Bangalore is a nice place to hang-out";
  console.log("stmt.slice(10, 15) :- ", stmt.slice(10, 15));
}

sliceMethod();

