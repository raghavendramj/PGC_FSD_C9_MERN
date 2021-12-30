//Solution using callback
let sum;
const operate = (callBack) => {
    setTimeout(() => {
        let a = 10, b = 30;
        sum = a + b;
        callBack(sum);
    }, 2000);
}
const print = () => console.log(`The result is ${sum}`);
operate(print);