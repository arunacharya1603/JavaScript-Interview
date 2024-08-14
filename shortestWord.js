const words = 'ascv asdfs asdfsa sdfsaasd sdfasdfsdasdf asdfafdsadf';

function longestWord(word){
    const wordArr = word.split(' ');
    let long = '';

    wordArr.forEach(element => {
        if(element.length > long.length){
            long = element;
        }
    });
    return long;

   
}

const longWord = longestWord(words);
console.log(longWord);

// Function to find the shortest word
function short(word){
    const wordArr = word.split(' ');
    let short = wordArr[0];
    wordArr.forEach(item =>{
        if(item.length <short.length){
            short = item;
        }
    });
    return short;

}

const shortWord = short(words);
console.log(shortWord);


