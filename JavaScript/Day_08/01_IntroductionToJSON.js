function testJSON() {
  // JSON String -> JS Object -> JSON String
  console.log("************** JSON String :- ");
  let normalString = '{"name":"raghavendra"}';
  console.log("typeof normalString :- ", typeof normalString);
  console.log("normalString :- ", normalString);

  let jsObject = JSON.parse(normalString);
  console.log("\n************** Convert JSON String to Javascript Object :- ");
  console.log("typeof jsObject :- ", typeof jsObject);
  console.log("jsObject :- ", jsObject);

  console.log("\n************** Convert Javascript Object to JSON String :- ");
  let reConvertedString = JSON.stringify(jsObject);
  console.log("typeof reConvertedString :- ", typeof reConvertedString);
  console.log("reConvertedString :- ", reConvertedString);
}

testJSON();
