const numbers = [2,3,4,5,6,7,8];

numbers.forEach((num, index, arr) => {
    arr[index] = num *2;
})

console.log(numbers); // Output: [4, 6, 8, 10, 12, 14]