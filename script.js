let operator = prompt("Please Enter Operator ( Eg: +, -, *, / ): ");
let number1 = parseInt(prompt("Number 1: "));
let number2 = parseInt(prompt(number1 + "" + operator));

if (operator == "")
{
    alert ("Error! Field is required")
}
if(operator == "+")
{
    alert (number1 + number2)
} 
else if(operator == "-")
{
    alert (number1-number2)
}
else if (operator == "*")
{
    alert (number1*number2)
}
else if (operator == "/")
{
    alert (number1/number2)
}
 