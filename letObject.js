let a = false || {} || null;

console.log(a);


// The logical OR operator (||) returns the first truthy value, or the last value if no truthy value is found.
// In this case, the first operand is false, which is a falsy value. The second operand is an empty object {}, which is a truthy value.
// Therefore, the expression evaluates to the empty object {}.  
// Output:
// {}
//null is also  a falsy if it is like let a = false || null || {};
// then also we will get the {}.
