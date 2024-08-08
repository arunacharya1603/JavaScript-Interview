let a = 123;

let numArr = [];

function reverse(num) {

    let numStr = num.toString();
    
    for(let i = numStr.length-1;i>=0;i--){
        numArr.push(numStr[i]);
    }
    let arr = numArr.join('');
    let ans = Number(arr);
    console.log(ans);
}

reverse(a);