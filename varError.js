console.log(x);
// console.log(y);

var x = y = 11;

console.log('3'+12*5); //--->3 will concatinate  to the 12*5=60 , i.e., 3 60 == 360.

console.log(3+'12'*5);
// Order of operations: Multiplication has higher precedence than addition, so '12' * 5 is evaluated first.
//'12' is implicitly converted to the number 12.
//12 * 5 evaluates to 60.
//3 + 60 evaluates to 63.
console.log(3+12*'5');
// Order of operations: Multiplication has higher precedence than addition, so 12 * '5' is evaluated first.
//'5' is implicitly converted to the number 5.
//12 * 5 evaluates to 60.
//3 + 60 evaluates to 63.
console.log(3+12*5);
// Order of operations: Multiplication has higher precedence than addition, so 12 * 5 is evaluated first.
//12 * 5 evaluates to 60.
//3 + 60 evaluates to 63.

console.log('3'+'12'+5);
// '3' + '12' evaluates to '312'.
// '312' + 5 evaluates to '3125'.
console.log('3'+'12'*5);
// Order of operations: Multiplication has higher precedence than concatenation, so '12' * 5 is evaluated first.
//The string '12' is implicitly converted to the number 12.
// 12 * 5 evaluates to 60.
//The string '3' is concatenated with the number 60, which results in the string '360'.

