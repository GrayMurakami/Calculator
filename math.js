function addition(a, b) {
    return (+a) + (+b);
}

function subtraction(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function division(a, b) {
    const outputResult = document.querySelector(".field");
    if(b === "0") {  // checking division by zero
        a = "";
        b = "";
        operation = "";
        return outputResult.textContent = "Error";
    } 
    return a / b;
}