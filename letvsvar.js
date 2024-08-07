function scopeTest() {
    if (true) {
        var varVariable = 'I am a var variable';
        let letVariable = 'I am a let variable';
        console.log(varVariable); // Output: I am a var variable
        console.log(letVariable); // Output: I am a let variable
    }
    console.log(varVariable); // Output: I am a var variable
    // var is function-scoped. It means if a variable is declared with var inside a function, it will be available throughout the function, even outside the block where it was defined.
    console.log(letVariable); // Error: letVariable is not defined
    // let is block-scoped. It means if a variable is declared with let inside a block (e.g., inside a {}), it will be available only within that block.
}

function hoistingTest() {
    console.log(varVariable); // Output: undefined (due to hoisting)
    // Variables declared with var are hoisted to the top of their function scope and initialized with undefined.
    console.log(letVariable); // Error: Cannot access 'letVariable' before initialization
    // Variables declared with let are also hoisted to the top of their block scope but are not initialized. Accessing them before the declaration results in a ReferenceError.

    var varVariable = 'I am a var variable';
    let letVariable = 'I am a let variable';
}

scopeTest();
hoistingTest();
