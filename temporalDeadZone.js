var myFun = () => {
    console.log(n); //This indicates that the error occurred inside the myFun function at line 2, column 17 of the temporalDeadZone.js file.
    let a;
    // Temporal Dead Zone (TDZ) in JavaScript, which is associated with the let and const keywords.
}
myFun(5); //This shows that the error occurred when the function was called at line 5, column 1 of the same file.