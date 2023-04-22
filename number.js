let number1 = +prompt("Please enter a number");
let number2 = +prompt("Please enter another number");
let operator = prompt("Please enter one of these operators: + - * / %");
let result;
let text = "";

switch(operator){
    
    case "+":
        result = number1 + number2
        txt = "sum of";
        break;
    case "-":
        result = number1 - number2
        txt = "substraction of";
        break;
    case "*":
        result = number1 * number2
        txt = "multiplication of";
        break;
    case "/":
        result = number1 / number2
        txt = "partition of";
        break;
    case "%":
        result = number1 % number2
        txt = "percent of";
        break;
    default:
}
alert(`${number1} ${text} ${number2} equals to ${result} `);
console.log(`${number1} ${text} ${number2} equals to ${result} `);
