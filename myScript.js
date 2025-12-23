const displayResult = document.querySelector(".display-result");

const buttons = document.querySelectorAll(".btn");

const numButtons = document.querySelectorAll(".num-btn");

const oprButtons = document.querySelectorAll(".opr-btn");

let number1 = 0;
let operation = "";
let number2 = 0;

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
            displayResult.textContent = "0";
            operation = "";
        } /*else {
            displayResult.textContent = `${number1} ${operation} ${number2}`;
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
            number1 += Number(numButton.value);
            console.log(number1);
            displayResult.textContent = number1;

        } else {
            number2 += Number(numButton.value);
            console.log(number2);
            displayResult.textContent += number2;

        }
    });
});

oprButtons.forEach(oprButton => {
    oprButton.addEventListener("click", e => {
        if (e.target.innerText === "X") {
            operation = multiply;
            
        } else if (e.target.innerText === "/") {
            operation = divide;
        } else if (e.target.innerText === "-") {
            operation = subtract;
        } else if (e.target.innerText === "+") {
            operation = add;
        }
        console.log(operation);
        displayResult.textContent += e.target.textContent;
        
        if (e.target.innerText === "=") {
            console.log(number2);
            let result = operate(number1, number2, operation);
            console.log(result);
            displayResult.innerHTML = result;
            number1 = result;
            number2 = 0;
            
        }
        });
    });
