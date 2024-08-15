// Write a function that demonstrates the Temporal Dead Zone with let and const.

function tempDeadZone() {
    console.log(x);
    console.log(y);
    let x = 5;
    const y = 10;
}
tempDeadZone();