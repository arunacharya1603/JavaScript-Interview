console.log('2'+3*4);
console.log('2'*3*4);
console.log('2'*3+4); 
console.log(5 + '5' + 5);
console.log('10' - 2); //The - operator triggers numeric conversion.
console.log(5 + '5' - 5); 
console.log('10' / 2); //The / operator also triggers numeric conversion. 
console.log(5 + '5' / 5); //
console.log('10' % 2); //The % operator also triggers numeric conversion.
console.log(5 + '5' % 5);
console.log('10' ** 2); //The ** operator also triggers numeric conversion.
console.log(5 + '5' ** 5);
console.log('10' - '2');
console.log('10' * '2'); //Both strings are converted to numbers because the * operator requires numeric operands. 
console.log('10' / '2'); //Both strings are converted to numbers because the / operator requires numeric operands.
console.log(10 + '5' - 3); // 102
console.log(10 - '5' + 3); // 83
console.log('5' * 2 + '1' * 3); // 13
console.log('5' * 2 - '1' * 3); // 7
console.log('5' * 2 / '1' * 3); // 30
console.log('5' * 2 % '1' * 3); // 0
console.log('5' * 2 ** '1' * 3); // 30
console.log('5' * 2 + '1' ** 3); // 13
console.log('10' / 0); //Infinity
console.log(10 / '0'); //Infinity
console.log(10 / 0); //Infinity
console.log('10' * 'two'); //The string 'two' cannot be converted to a number, so the result is NaN (Not-a-Number).
console.log('10' / 'two'); //The string 'two' cannot be converted to a number, so the result is NaN.
console.log('10' % 'two'); //The string 'two' cannot be converted to a number, so the result is NaN.
console.log('10' ** 'two'); //The string 'two' cannot be converted to a number, so the result is NaN.
console.log(10 / 'two'); //The string 'two' cannot be converted to a number, so the result is NaN.
console.log(10 % 'two'); //The string 'two' cannot be converted to a number, so the result is NaN.
console.log(10 ** 'two'); //The string 'two' cannot be converted to a number, so the result is NaN.
console.log('' + 5 + 1); //The empty string '' is concatenated with 5, resulting in '5'. Then '5' + 1 results in '51'.
console.log(true + 1); //The boolean true is implicitly converted to 1, so 1 + 1 results in 2.
console.log(false + 1); //The boolean false is implicitly converted to 0, so 0 + 1 results in 1.
console.log(true + '1'); //The boolean true is implicitly converted to 1, so 1 is concatenated with '1', resulting in '11'.
console.log(false + '1'); //The boolean false is implicitly converted to 0, so 0 is concatenated with '1', resulting in '01'.
console.log(5 + 'true'); 
console.log(null + 5); //null is converted to 0, so 0 + 5 results in 5.
console.log(undefined + 5); //undefined is converted to NaN, so NaN + 5 results in NaN.
console.log({} + 1); //The object {} is converted to the string "[object Object]", and "[object Object]" + 1 results in the string "[object Object]1".
console.log([] + 1); //The array [] is converted to the empty string "", and "" + 1 results in the string "1".
console.log([1] + 1); //The array [1] is converted to the string "1", and "1" + 1 results in the string "11".
console.log([1, 2] + 1); //The array [1, 2] is converted to the string "1,2", and "1,2" + 1 results in the string "1,21".
console.log([1, 2] *5); 
console.log([1, 2] / 5);
console.log([1, 2] % 5);
console.log([1, 2] ** 5);
console.log([1, 2] - 5);
console.log([1, 2] + 5);
console.log(5 * '2' + 3 + '4'); //134
console.log(5 * '2' + 3 * '4'); //26
console.log(+'10' + 5); //The unary plus + converts the string '10' to the number 10, so 10 + 5 results in 15.
console.log(+'10' - 5); //The unary plus + converts the string '10' to the number 10, so 10 - 5 results in 5.
console.log(+'10' * 5); //The unary plus + converts the string '10' to the number 10, so 10 * 5 results in 50.
console.log(+'');//0
console.log(+true); //1
console.log(+false); //0
console.log(+null); //0
console.log(+undefined); //NaN
console.log(+{}); //NaN
console.log(+[]); //0
console.log(+[1]); //1
console.log(+[1, 2]); //NaN
console.log(+[1, 2, 3]); //NaN
console.log(+[1, 2, 3, 4]); //NaN

