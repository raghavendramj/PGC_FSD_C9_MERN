function typicalScenario() {
  let person = {
    name: "Raghav",
    get: function () {
      //Here this -> current object
      console.log("GET:- Name :- ", this.name);
      let print = function () {
        //Here this -> global window object.
        console.log("PRINT:- Name :- ", this.name);
      };
      print();
    },
  };

  person.get();
}

typicalScenario();

function thisArrowCheck() {
  let person = {
    name: "Raghav",
    get: function () {
      //Here this -> current object
      console.log("GET:- Name :- ", this.name);
      let print = () => {
        //Here this -> current object.
        console.log("PRINT:- Name :- ", this.name);
      };
      print();
    },
  };

  person.get();
}

thisArrowCheck();


function arrowThisSecond(){
    let obj = {
        a: 10,
        get : function(){
            console.log("GET :- This ", this);
            let print = () => {
                console.log("PRINT:- This ", this);
                let display = () => {
                    console.log("DISPLAY:- This ", this);
                }
                display();
            }
            print();
        }
    }
    obj.get();
}