let myFun = (n) => {
    console.log(n);
    if (n <= 0) return;  // Base case to terminate recursion
    return myFun(n - 1);
}
myFun(5)