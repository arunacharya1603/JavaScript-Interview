// Implement a function that prevents scope pollution using block scope.

(function() {
    let localVar = 'I am local';
    console.log(localVar);
})();

console.log(localVar);


// In this example, localVar is only accessible within the {} block, preventing it from polluting the outer scope.