// Given a string, sort it in descending order. Input : mupursingh Output : uusrpnmihg

let str = "mupursingh";
let sorted_str = str.split('').sort((a, b) => b.localeCompare(a)).join('')
console.log(sorted_str);