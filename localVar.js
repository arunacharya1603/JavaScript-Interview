// Implement a function that prevents scope pollution using block scope.

(function() {
    let localVar = 'I am local';
    console.log(localVar);
})();

console.log(localVar);
