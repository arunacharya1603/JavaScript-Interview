// Here's a more practical example where block scope is used to prevent variable pollution:

function createArray(){
    let arr = []; // declare arr in block scope

    for(let i=0;i<3;i++){
        let j =i*2;
        arr.push(function(){
            console.log(j);
        });
    }
    return arr;
}

const arr = createArray();
arr[0](); // 0
arr[1](); // 2
arr[2](); // 4
// In the above example, the variables arr and j are declared using let inside the for loop. This creates a new scope for each iteration of the loop. As a result, each function in the array arr captures the value of j at the time it was created, rather than the final value of j after the loop has finished. This is a common use case for block scope in JavaScript.