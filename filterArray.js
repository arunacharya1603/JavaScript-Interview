// array.filter(callback(element[, index[, array]])[, thisArg])

let numbers = [1,2,3,4,5,6];

function isEven(num){
    return num%2 == 0;
}

let evenNumbers = numbers.filter(isEven);
console.log(evenNumbers);

function isOdd(num1){
    return num1%2 !=0;
}

let oddNumber = numbers.filter(isOdd);
console.log(oddNumber);