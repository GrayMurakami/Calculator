let a = "";
let b = ""; 
let operation = "";
let finish = false;

const calcButtons = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const calcOperations = ["+", "-", "*", "/"];
const outputResult = document.querySelector(".field");

document.querySelector(".clear").onclick = function pushBtnClear() {   // function for clearing variables and resetting the result 
    a = "";
    b = "";
    operation = "";
    finish = false;
    outputResult.textContent = 0;
}

document.querySelector(".buttons").onclick = (event) => {  // pressing the button
    let btnPressed = event.target.textContent;  // assigning a variable to the value of a button

    if(!event.target.classList.contains("btn")) return;    // pressing in the area between the buttins, exit
    if(event.target.classList.contains("clear")) return;   // pressing on "C" do not process

    outputResult.textContent = "";   // clearing screen

    if(calcButtons.includes(btnPressed)) {  // number or dot pressed
        if(b === "" && operation === "") {  
            a += btnPressed;  // declare a variable "a"
            outputResult.textContent = a;  // value on the screen
        } 
        else if(a !== "" && b !== "" && finish) {
            b = btnPressed;
            finish = false;
            outputResult.textContent = b;
        } 
        else if(a !== "" && operation !== "" ) {
            b += btnPressed;  // declare a variable "b"
            outputResult.textContent = b;
        }
        return;
    }
 
    if(calcOperations.includes(btnPressed)) {  // sign is pressed
        operation = btnPressed;
        outputResult.textContent = operation;
        return;
    }

    if(btnPressed === "=") {  // when "=", doing math active
        if(a !== "" && b !== "") {   // Only perform calculations if both a and b are present
            let result = calculate(a, b, operation);
            outputResult.textContent = result;
            a = result.toString(); // Convert result to string for further calculations
            b = ""; // reset b
            operation = ""; // reset operation
            finish = true;
        }
    }
}
