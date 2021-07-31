// Reverse individual words. Given a string str, we need to print reverse of individual words.

Input: "Hello World"
Output: "olleH dlroW"

let result = "";

function reverse(str, start, end) {
    if (result.length === 0) {
        for (let i = end - 1; i >= start; i--)
            result += str[i];
    } else {
        result += " ";
        for (let i = end - 1; i >= start; i--)
            result += str[i];
    }
}

let reverseWords = (str) => {
    let s = 0;
    let e = 0;
    while (true) {
        if (e === str.length || str[e] === " ") {
            reverse(str, s, e);
            if (e === str.length) {
                break;
            }
            s = e + 1;
        }
        e++;
    }

    return result;
}

let str = "Hello World";
console.log(reverseWords(str));