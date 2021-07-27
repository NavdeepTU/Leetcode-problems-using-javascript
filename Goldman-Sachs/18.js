// Given a string, find the minimum and the maximum length words in it. 
// Examples: 


// Input : "This is a test string"
// Output : Minimum length word: a
//          Maximum length word: string

// Input : "GeeksforGeeks A computer Science portal for Geeks"
// Output : Minimum length word: A
//          Maximum length word: GeeksforGeeks

let minWord = "";
let maxWord = "";

function minMaxLengthWords(input) {

    let len = input.length;
    let si = 0,
        ei = 0;
    let min_length = len;
    let min_start_index = 0;
    let max_length = 0;
    let max_start_index = 0;

    // Loop while input string is not empty
    while (ei <= len) {
        if (ei < len && input[ei] !== ' ') {
            ei++;
        } else {
            // end of a word
            // find curr word length
            let curr_length = ei - si;

            if (curr_length < min_length) {
                min_length = curr_length;
                min_start_index = si;
            }

            if (curr_length > max_length) {
                max_length = curr_length;
                max_start_index = si;
            }
            ei++;
            si = ei;
        }
    }

    // store minimum and maximum length words
    minWord =
        input.slice(min_start_index, min_start_index + min_length);

    maxWord =
        input.slice(max_start_index, max_start_index + max_length);

}

let str = "This is a test string";
minMaxLengthWords(str);
console.log(minWord);
console.log(maxWord);