// Write a method for ATOI functionality (ASCII to Integer conversion)

let atoi = (str) => {
    return Math.max(Math.min(parseInt(str) || 0, 2147483647), -2147483648);
}

let str = "-2342";
console.log(atoi(str));