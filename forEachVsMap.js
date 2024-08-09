const arr = [1,2,3,4,5,6];

// forEach

const forEachResult = [];

// you declare an empty array forEachResult that will be used to store the results of the operations performed inside the forEach loop.

arr.forEach((item,index)=>{
    forEachResult[index] = item * 2;
})
// console.log(forEachResult); // [2, 4, 6, 8, 10, 12].


// map

const mapResult = arr.map((item,index)=>{
    return item*2;
})
// console.log(mapResult); // [2, 4, 6, 8, 10, 12].


// forEach: You manually push or assign values to an array (forEachResult) inside the loop. It doesn't return a new array.

// map: It returns a new array with the results of the operations performed inside the loop. You don't need to manually push or assign values to an array.