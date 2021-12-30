// Reference GIF for setTimeout to understand -> https://i.stack.imgur.com/2DRQc.gif
function testAsyncJS() {
  console.log("1st Statment to print");
  let showMessage = () => {
    console.log("3rd Statement to print :- Hello World"); //Line3
  };
  setTimeout(showMessage, 2000);
  console.log("2nd Statment to print :- Goodbye World"); //Line6
}

testAsyncJS();

//HandsOn
let afterExecute = () => {
  setTimeout(() => {
    console.log("Welcom to upGrad");
  }, 5000);
};
afterExecute();
