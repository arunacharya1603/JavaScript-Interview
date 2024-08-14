// Write a closure that adds a given number to its internal counter.

function addCounter(){
    let counter = 0;
    return function(num){
        counter +=num;
        return counter;
    }
}

const add = addCounter();
console.log(add(5)); // 5
console.log(add(6)); // 11

