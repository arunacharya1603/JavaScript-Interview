const arr = [[1,2],[3,4],[5,6]];

//flat method
function flatArr(arr, n){
    if(n===0) return arr;
    const res = [];

    for(let i=0; i<arr.length; i++){
        if(typeof arr[i] == 'number'){
            res.push(arr[i]);
        }
        else{
            res.push(...flatArr(arr[i], n - 1)); 
        }
}
return res;
}

console.log(flatArr(arr, 1)); // [1, 2, 3, 4, 5, 6]