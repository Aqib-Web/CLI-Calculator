import { stylizeAnswer, stylizeExpression } from "./stylizeAnswer.js";
let theAnswer;
const calculate = function (operation, num1, num2) {
    if (operation === "Addition ➕") {
        theAnswer = num1 + num2;
        console.log(stylizeAnswer(theAnswer, num1, num2, operation));
    }
    else if (operation === "Subtraction ➖") {
        theAnswer = num1 - num2;
        console.log(stylizeAnswer(theAnswer, num1, num2, operation));
    }
    else if (operation === "Multiplication ✖️") {
        theAnswer = num1 * num2;
        console.log(stylizeAnswer(theAnswer, num1, num2, operation));
    }
    else if (operation === "Division ➗") {
        theAnswer = num1 / num2;
        console.log(stylizeAnswer(theAnswer, num1, num2, operation));
    }
};
const solveExpression = function (expression) {
    theAnswer = eval(expression);
    console.log(stylizeExpression(theAnswer, expression));
};
export { solveExpression, calculate, theAnswer };
