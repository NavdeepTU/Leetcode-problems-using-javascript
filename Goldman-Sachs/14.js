// Given a program to reverse a string which is incorrect. Need todebug and fix it to run executing all test cases successfully


// Method 1

function stringReverse1(str) {
    return str.split('').reverse().join('');
}

let str = 'abcd';
console.log(stringReverse1(str));

// Method 2 
function stringReverse2(str) {
    let result = '';
    for (let i = str.length - 1; i >= 0; i--) {
        result += str.charAt(i);
    }

    return result;
}

console.log(stringReverse2(str));