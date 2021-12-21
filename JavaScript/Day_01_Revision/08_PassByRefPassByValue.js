function passByValue() {
  var x = 10;
  var y = x;
  console.log(" X :- ", x);
  console.log(" Y :- ", y);

  x = 40;

  console.log(" X :- ", x);
  console.log(" Y :- ", y);
}

// passByValue();

function passByReference() {
  var first = ["Mountains", "Sea", "Island", "Forest", "Cave"];
  var second = first; //Pass by reference

  console.log(" first :- ", first);
  console.log(" second :- ", second);

  first.push("Rivers");
  first.push("Hills");

  console.log(" first :- ", first);
  console.log(" second :- ", second);
}

// passByReference();

function passByRefQuestion() {
  var a = [11, 22, 33];
  var b = a;
  console.log(" A :- ", a);
  console.log(" B :- ", b);
  a[0] = [11, 20, 99];
  console.log(" A :- ", a);
  console.log(" B :- ", b);
  
  console.log(b[0]);
}

passByRefQuestion();