//Problem Statement
let sum;
const operate = () => {
    setTimeout(() => {
        let a = 10, b = 30;
        sum = a + b;
    }, 2000);
}
const print = () => console.log(`The result is ${sum}`);
operate();
print();