let str = "Hello World";

let charArray = Array.from(str);
// Array.from(str) converts the string into an array of characters.

let vowels = charArray.filter(char => "aeiou".includes(char));
//The filter method is used to select characters that are vowels. 
//The callback function checks if each character is included in the string "aeiou".
//If the character is a vowel, the filter method adds it to the vowels array.
console.log(vowels); // Output: ['e', 'o']

let vowelStrings = vowels.join('');
// The join method is used to concatenate the characters in the vowels array to form a string.
// The join method joins the characters in the vowels array with an empty string separator.
// This creates a single string containing all the vowels.


console.log(vowelStrings);