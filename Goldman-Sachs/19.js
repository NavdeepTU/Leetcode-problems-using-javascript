// Given a string str and a character x, find last index of x in str.

function lastIndex(str, char) {
    for (let i = str.length - 1; i >= 0; i--) {
        if (str[i] === char)
            return i
    }

    return -1;
}

let str = "Hello world!";
let char = "o";
console.log(lastIndex(str, char));