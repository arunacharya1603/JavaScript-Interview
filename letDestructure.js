let a = [1,8,9,10,22,57,27];

function array(b,...a){
    console.log(a);
    console.log(b);
}

// This line declares a function named array that takes one parameter b and a rest parameter ...a.
// b will capture the first argument passed to the function.
// ...a (rest parameter) will capture all remaining arguments passed to the function as an array.

array(3,8,9,10,11);

// Output:
// [8, 9, 10, 11]
// 3