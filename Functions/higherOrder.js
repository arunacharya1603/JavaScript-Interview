// Implement a higher-order function that takes a function and a number as arguments, and applies the function to that number.

function higherOrder(fn, num){
    return fn(num);
}

function add(n){
    return n+6;
}

console.log(higherOrder(add,7));
