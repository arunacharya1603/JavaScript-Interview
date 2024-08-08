let a = 123;
let rev = "";
function reverse(num) {

    let string = num.toString();
  
    for(let i = string.length-1; i>=0; i--){
        rev += string[i];
        console.log(string[i]);
    }
}
reverse(a);
console.log(rev);
let reversedString = parseInt(rev);
console.log(reversedString);

