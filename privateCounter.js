// Demonstrate how to create a private variable in JavaScript using closures.

function privateCounter(){
    let counter = 0;
    return {
        increment: function(){
            counter++;
            return counter;
        },
        getCount: function(){
            return counter;
        }
    };
}

const counter = privateCounter();
console.log(counter.increment()); // 1
console.log(counter.getCount()); // 2