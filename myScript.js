let number1 = "";
let operation = "";
let number2 = "";

function add(num1, nmu2) {
    return num1 + nmu2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(num1, num2, operator) {
    return operator(num1, num2);
}

const displayResult = document.querySelector(".display-result");

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        if ( operation === "") {
            number1 = Number(button.textContent);
        } else {
            number2 = Number(button.textContent);
        }
        if (button.textContent === "X") {
            operation = multiply;
        } else if (button.textContent === "/") {
            operation = divide;
        } else if (button.textContent === "-") {
            operation = subtract;
        } else if (button.textContent === "+") {
            operation = add;
        }
        
        if (button.textContent === "AC" || button.textContent === "clear") {
            displayResult.textContent = "0";
            operation = "";
        } /*else {
            displayResult.textContent = `${number1} ${operation} ${number2}`;
        }*/
        if (button.value === "equal") {
            console.log(button.textContent);
           console.log(operate(number1, number2, operation));
        }
        console.log(button.value);
        
    });
});
