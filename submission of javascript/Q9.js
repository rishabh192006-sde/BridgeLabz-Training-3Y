
const number1 = Math.floor(Math.random() * 20) + 1;
const number2 = Math.floor(Math.random() * 20) + 1;

const operators = ["+", "-", "*", "/"];
const randomIndex = Math.floor(Math.random() * operators.length);
const operator = operators[randomIndex];

let answer;

switch (operator) {
    case "+":
        answer = number1 + number2;
        break;
    case "-":
        answer = number1 - number2;
        break;
    case "*":
        answer = number1 * number2;
        break;
    case "/":
        answer = number1 / number2;
        break;
}

if (operator === "/") {
    answer = Number(answer.toFixed(2));
}

console.log(`Question: ${number1} ${operator} ${number2} = ?`);
console.log(`Correct Answer: ${answer}`);
