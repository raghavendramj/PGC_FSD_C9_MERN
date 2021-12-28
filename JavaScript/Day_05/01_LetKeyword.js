function varTest1() {
  var number = 25;
  console.log("Oustide the BLOCK - Variable number value :- ", number);
  {
    var number = 23;
    console.log("Inside BLOCK - Variable number value :- ", number);
  }
  console.log("Oustide the BLOCK - Variable number value :- ", number);
}

// varTest1();

function varTest2() {
  console.log("Oustide the BLOCK - Variable number value :- ", number);
  {
    var number = 26;
    console.log("Inside the BLOCK - Variable number value :- ", number);
  }
  console.log("Oustide the BLOCK - Variable number value :- ", number);
}

// varTest2();

function letTest() {
  let number = 25;
  console.log("Oustide the BLOCK - LET number value :- ", number);
  {
    let number = 23;
    console.log("Inside BLOCK - LET number value :- ", number);
  }
  console.log("Oustide the BLOCK - LET number value :- ", number);
}

// letTest();


function letTest2() {
  try{
    console.log("Oustide the BLOCK - Variable number value :- ", number);
    {
      let number = 26;
      console.log("Inside the BLOCK - Variable number value :- ", number);
    }
    console.log("Oustide the BLOCK - Variable number value :- ", number);
  }
  catch(error){
    console.log("Error thrown :- ", error.message);
  }
}

letTest2(); //This will throw an error


