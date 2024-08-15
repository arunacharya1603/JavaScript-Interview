// Show how a variable declared with var can cause issues in loops with asynchronous callbacks.

// Simulating asynchronous operations using setTimeout
for (var i = 1; i <= 3; i++) {
    setTimeout(function() {
        console.log(i); // 4, 4, 4
    }, 1000);
}
