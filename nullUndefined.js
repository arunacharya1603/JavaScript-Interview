// Implement a function that returns undefined and null and explain the difference.

function getUndefined() {
    let x;
    return x;
}

function getNull() {
    let x = null;
    return x;
}

console.log(getUndefined());
console.log(getNull());