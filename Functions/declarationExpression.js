// Write a function that demonstrates the difference between function declarations and function expressions.


// Function Declaration
function declaration(){
    return "I am a function declaration";
}


// Function Expression
const expression = function(){
    return "I am a function expression";
}

console.log(declaration());
console.log(expression());