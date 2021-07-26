// Find if a given number is Armstrong number -An Armstrong number of three digits is an integer such that the sum of the cubes of its digits is equal to the number itself. For example, 371 is an Armstrong number since 3*3*3 + 7*7*7 + 1*1*1 = 371.

function armstrongNumber(n) {
    let sum = 0;
    let original_number = n;
    let digit_count = n.toString().length;
    while (n !== 0) {
        let digit = n % 10;
        sum += Math.pow(digit, digit_count)
        n = Math.floor(n / 10);
    }

    if (sum === original_number)
        return ("Yes");
    return ("No");
}


console.log(armstrongNumber(1634));