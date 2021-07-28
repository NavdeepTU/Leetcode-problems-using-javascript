// Write a program that prints a staircase of size n. 

// This is a staircase of size n = 4:


//    #
//   ##
//  ###
// ####

let stairCase = (n) => {
    let str = '';
    for (let i = 1; i <= n; i++) {
        str = ''
        for (let j = 1; j <= (n - i); j++)
            str += ' ';
        for (let j = 1; j <= i; j++)
            str += '#';
        console.log(str);
    }
}

let n = 10;
stairCase(n);