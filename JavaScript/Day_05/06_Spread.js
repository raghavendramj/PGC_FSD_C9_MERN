function spreadTest() {
  const odd = [1, 3, 5];
  const even = [2, 4, 6];
  const combined = odd.concat(even);
  console.log("Odd Nums : ", combined);
  console.log("Even Nums : ", even);
  console.log("Tyical Way.. Combined result : ", combined);

  const spreadCombined = [...odd, ...even];
  console.log("Using spread.. Combined result : ", spreadCombined);

  const spreadCombinedSecond = [12, 15, ...odd, 21, 31, ...even];
  console.log("Using spread.. Second Combined result : ", spreadCombinedSecond);
}

// spreadTest();

function addNumbers(a, b, ...others) {
  let result = a + b;
  result = others.reduce((x, y) => x + y, result);

  console.log(result);
}

// addNumbers(10, 20, 5, 15, 50, 100, 150);

function copyingArray() {
  let car = { name: "Mercedes", model: "C200", color: "white", weight: 500 };
  let carsecond = { ...car };

  car.name = "BMW";
  console.log("First Car : ", car);
  console.log("Second Car : ", carsecond);
}

copyingArray();
