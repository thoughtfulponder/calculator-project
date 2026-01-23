const displayResult = document.querySelector("#display-result");

const buttons = document.querySelectorAll(".btn");

const numButtons = document.querySelectorAll(".num-btn");

const oprButtons = document.querySelectorAll(".opr-btn");

const correctButton = document.querySelector(".correct");

const dotButton = document.querySelector(".dot");

let isEnabled = true;

let number1 = "";
let operation = "";
let number2 = "";
let operation2 = "";
let result = 0;
let currentOperation;
let stringValue = "";
let arrValue = [];
let currentNumValue = "";

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

function roundToDecimal(num, decimalPlaces) {
    const factor = Math.pow(10, decimalPlaces);
    return Math.round(num * factor) / factor;
}

function toggleDotButton() {
    console.log(dotButton.value);
    currentNumValue = "";
    if (operation === "") {
        currentNumValue = number1;
    } else {
        currentNumValue = number2;
    }
    if (number2 === "") {
        currentNumValue = number1;
    }
    currentNumValue = currentNumValue.split("");
    console.log("currentNumValue:" + currentNumValue);
    
    for (let i = 0; i < currentNumValue.length; i++) {
        if (currentNumValue[i] === ".") {
            dotButton.disabled = true;
            break;
        } else {
            dotButton.disabled = false;
        }
    }
    /*if (displayResult.value.slice(-1) === "." !isEnabled) {
        dotButton.disabled = false;
        console.log("isEnabled:" + isEnabled);
    }
    else {
        dotButton.disabled = true;
        console.log("isEanbled:" + isEnabled);
    }
    console.log(isEnabled = !isEnabled);*/
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
            if (result === number1) {
                number1 = "";
            }
            number1 += (numButton.value);
            console.log(number1);

            displayResult.value = number1;

        } else {
            number2 += (numButton.value);
            console.log(number2);
            arrValue.push(number2);
            displayResult.value += numButton.value;
        }
        toggleDotButton();
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
        //toggleDotButton();



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
                if (number1 === "" || operation === "" || number2 === "" ) {
                    alert("Please enter numbers and a operator first");
                    number1 = "";
                    displayResult.value = 0;
                } else if (operation === divide && number2 === "0") {
                    alert("you cant divide a value by 0 you know that right?");
                    number1 = "";
                    operation = "";
                    number2 = "";
                    displayResult.value = 0;
                } else {
            console.log(number2);
            result = operate(number1, number2, operation);
            console.log(result);
            if (result % 1 !== 0) {
                result = roundToDecimal(result, 4);
            }
            
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

       /* if (e.target.textContent === "=" && number1 !== "") {
            operation = "";
        }*/

        /*  if (e.target.innerText === "Correct" && operation === "") {
              number1 = correct(number1);
              console.log(number1);
              if (number1 === "") {
                  displayResult.value = 0;
              } else {
                  console.log(displayResult.value = displayResult.value.slice(0, -1));
                  //displayResult.value = number1;
              }
              //displayResult.value = valueCorrect(displayResult.value);
          } else if (e.target.innerText === "Correct" && operation !== "" && number2 !== "") {
              //let correctValue2 = correct(number2);
              /*console.log(correctValue2);
              number2 = correctValue2;*/
        /*  number2 = correct(number2);
          displayResult.value = displayResult.value.slice(0, -1);
          /*displayResult.value += number2;
          let visual = displayResult.value;
          let correctVisual = valueCorrect(visual);
          displayResult.value = correctVisual;*/
        //stringValue = displayResult.value;

        /* console.log(number2);
         console.log(stringValue);

     } */


        if (e.target.textContent === "AC") {
            number1 = "";
            number2 = "";
            operation = "";
            operation2 = "";
            displayResult.value = 0;
        }
    });
});

correctButton.addEventListener("click", (e) => {
    if (e.target.innerText === "Correct" && operation === "") {
        number1 = correct(number1);
        console.log(number1);
        if (number1 === "") {
            displayResult.value = 0;
        } else {
            //console.log(displayResult.value = displayResult.value.slice(0, -1));
            //displayResult.value = number1;
        }
        //displayResult.value = valueCorrect(displayResult.value);
    } else if (number2 === "") {
        operation = "";
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
        console.log(number2);
    }
    console.log("num1: " + number1);
    console.log("num2: " + number2);
    console.log(displayResult.value = displayResult.value.slice(0, -1));
    console.log("display value:" + displayResult.value.slice(-1));
    
    toggleDotButton();
    
});

dotButton.addEventListener("click", () => {
    toggleDotButton();
});

document.addEventListener("keydown", (e) => {
    console.log(e.key);
    
});