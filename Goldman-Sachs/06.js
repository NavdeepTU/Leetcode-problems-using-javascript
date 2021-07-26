// Pangram is a sentence containing every letter in the English alphabet. Given a string, find all characters that are missing from the string, i.e., the characters that can make the string a Pangram. We need to print output in alphabetic order.


function missingChars(string) {
    let str = "abcdefghijklmnopqrstuvwxyz";
    let result = "";
    let hm = new Map();
    for (let char of string) {
        hm.set(char.toLowerCase(), true);
    }
    for (let char of str) {
        if (!hm.has(char)) {
            result += char;
        }
    }
    return result;
}

let str = 'The quick brown fox jumps';
console.log(missingChars(str));