// Given Input,print the following input: “SSSSSTTPPQ” Output:“5S2T2P1Q”.

function compressString(str) {
    let result = '';
    let i = 0;
    while (true) {
        let char = str.charAt(i);
        let count = 0;
        while (i < str.length && str.charAt(i) === char) {
            count++;
            i++;
        }
        result += `${count}${char}`;
        if (i === str.length)
            break;
    }

    return result;
}


let str = 'SSSSSTTPPQ';
console.log(compressString(str));