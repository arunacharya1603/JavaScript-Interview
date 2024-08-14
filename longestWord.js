const words = 'ascv asdfs asdfsa sdfsaasd sdfasdfsdasdf asdfafdsadf';

function longestWord(words) {
    const wordsArr = words.split(' ');
    let longestWord = '';
    wordsArr.forEach(word => {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    });
    return longestWord;
}

const longestWords = longestWord(words);
console.log(longestWords);
