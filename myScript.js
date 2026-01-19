const displayResult = document.querySelector("#display-result");

const buttons = document.querySelectorAll(".btn");

const numButtons = document.querySelectorAll(".num-btn");

const oprButtons = document.querySelectorAll(".opr-btn");

let number1 = "";
let operation = "";
let number2 = "";
let operation2 = "";
let result = "";
let currentOperation;
let stringValue = "";
let arrValue = [];

function add(num1, num2) {
    return +(num1) + +(num2);
}

function subtract(num1, num2) {
    return +(num1) - +(num2);
}

function multiply(num1, num2) {
    return +(num1) * +(num2);
}

function divide(num1, num2) {
    return +(num1) / +(num2);
}

function singleValuePercentage(num1) {
    return num1 / 100;
}

function multiValuePercentage(num1, num2, operator) {
    if (operator === multiply) {
        return (num1 * num2) / 100;
    } else if (operator === divide) {
        return (num1 / num2) / 100;
    } else if (operator === subtract) {
        return (num1 - num2) / 100;
    } else if (operator === add) {
        return (num1 + num2) / 100;
    }
}

function correct(num) {
    return num.slice(0, -1);
}

function valueCorrect(str) {
    return str.slice(0, -1);
}

function operate(num1, num2, operator) {
    return operator(num1, num2);
}



/*buttons.forEach(button => {
    button.addEventListener("click", () => {
        number1 = button.value;

        if (button.textContent === "X") {
            operation = multiply;
        } else if (button.textContent === "/") {
            operation = divide;
        } else if (button.textContent === "-") {
            operation = subtract;
        } else if (button.textContent === "+") {
            operation = add;
        }
        if (operation === multiply ||
            operation === divide ||
            operation === subtract ||
            operation === add) {
            number2 = button.value;
        }

        if (button.textContent === "AC" || button.textContent === "clear") {
            displayResult.value = "0";
            operation = "";
        } /*else {
            displayResult.value = `${number1} ${operation} ${number2}`;
        }*/
/*if (button.value === "equal") {
    console.log(button.textContent);
    let result = operate(number1, number2, operation);
    console.log(result);

}
console.log(button.value);

});
});*/

numButtons.forEach(numButton => {
    numButton.addEventListener("click", e => {
        if (operation === "") {
            number1 += (numButton.value);
            console.log(number1);
            arrValue.push(number1);
            displayResult.value = number1;

        } else {
            number2 += (numButton.value);
            console.log(number2);
            arrValue.push(number2);
            displayResult.value += numButton.value;
        }
    });
});

oprButtons.forEach(oprButton => {
    oprButton.addEventListener("click", e => {
        if (e.target.innerText === "X" && number2 === "") {
            operation = multiply;
            operation.innerText = "x";
        } else if (e.target.innerText === "/" && number2 === "") {
            operation = divide;
            operation.innerText = "/";
        } else if (e.target.innerText === "-" && number2 === "") {
            operation = subtract;
            operation.innerText = "-";
        } else if (e.target.innerText === "+" && number2 === "") {
            operation = add;
            operation.innerText = "+";
        }
        console.log(operation);
        if (displayResult.value.slice(-1) === currentOperation && operation !== "") {
            displayResult.value = displayResult.value.slice(0, -1);
            displayResult.value += operation.innerText;
        } else {
            displayResult.value += operation.innerText;
        }
        console.log(displayResult.value.slice(-1));
        


        if (number2 !== "" && e.target.innerText === "X") {
            operation2 = multiply;
            operation2.textContent = "X";
        } else if (number2 !== "" && e.target.innerText === "/") {
            operation2 = divide;
            operation2.textContent = "/";
        } else if (number2 !== "" && e.target.innerText === "-") {
            operation2 = subtract;
            operation2.textContent = "-";
        } else if (number2 !== "" && e.target.innerText === "+") {
            operation2 = add;
            operation2.textContent = "+";
        }

        if (e.target.innerText === "=" ||
            operation2.textContent === "x" ||
            operation2.textContent === "/" ||
            operation2.textContent === "-" ||
            operation2.textContent === "+") {
            console.log(number2);
            result = operate(number1, number2, operation);
            console.log(result);
            displayResult.value = result;
            number1 = result;
            if (number2 !== "" && oprButton.innerText !== "=" || number2 === "") {
                //displayResult.value += operation2.textContent;
                displayResult.value += e.target.textContent;
            }

            if (number2 !== "" || oprButton.innerText === "=") {
                operation2.textContent = "";
            }

            number2 = "";
            operation = operation2;


        }

        if (operation !== "" && number2 === "") {
            //console.log(displayResult.value = displayResult.value.slice(0, -1));
            //console.log(displayResult.value += operation.innerText);
            currentOperation = operation.innerText;
            console.log(currentOperation);
            

        }

        if (e.target.textContent === "%" && operation === "") {
            result = singleValuePercentage(number1);
            displayResult.value = result;
        } else if (e.target.textContent === "%" && operation !== "") {
            result = multiValuePercentage(number1, number2, operation);
            displayResult.value = result;
        }

        if (e.target.textContent === "=" && number1 !== "") {
            operation = "";
        }

        if (number1 !== result) {
            number1 = number1;
        }

        if (e.target.innerText === "Correct" && operation === "") {
            number1 = correct(number1);
            console.log(number1);
            if (number1 === "") {
                displayResult.value = 0;
            } else {
                displayResult.value = number1;
            }
            //displayResult.value = valueCorrect(displayResult.value);
        } else if (e.target.innerText === "Correct" && operation !== "" && number2 !== "") {
            //let correctValue2 = correct(number2);
            /*console.log(correctValue2);
            number2 = correctValue2;*/
            number2 = correct(number2);
            /*displayResult.value += number2;
            let visual = displayResult.value;
            let correctVisual = valueCorrect(visual);
            displayResult.value = correctVisual;*/
            //stringValue = displayResult.value;
            displayResult.value = displayResult.value.slice(0, -1);
            console.log(number2);
            console.log(stringValue);

        }


        if (e.target.textContent === "AC") {
            number1 = "";
            operation = "";
            operation2 = "";
            displayResult.value = 0;
        }
    });
});
