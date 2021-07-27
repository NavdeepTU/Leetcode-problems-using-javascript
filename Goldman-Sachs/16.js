// Print words of a string in reverse order. Let there be a string say “I AM A TESTER So, the output should be TESTER A AM I”

function wordsInReverseOrder(str) {
    let char_arr = str.split('');
    char_arr.reverse();
    let reversed_string = char_arr.join('');
    let reversed_words_array = reversed_string.split(' ');
    reversed_words_array = reversed_words_array.map((reversed_word) => {
        return reversed_word.split('').reverse().join('')
    })

    return reversed_words_array.join(' ');
}

let str = 'I AM A TESTER';
console.log(wordsInReverseOrder(str));