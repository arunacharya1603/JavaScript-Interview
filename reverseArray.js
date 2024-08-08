let arr = [1,2,3,4,5,6,7];

function reverseArray(n){
    let rev = [];
    for(let i= n.length-1; i>=0 ; i--){
        rev.push(n[i]);

    }
    return rev;
}

let revArr = reverseArray(arr);
console.log(revArr);