// Program to add two fractions

// Input:  1/2 + 3/2
// Output: 2/1

// Input:  1/3 + 3/9
// Output: 2/3

// Input:  1/5 + 3/15
// Output: 2/5

function gcd(a, b) {
    if (a === 0) {
        return b;
    }
    return gcd(b % a, a);
}

function add(num1, den1, num2, den2) {
    // calculating the denominator i.e. lcm using formula LCM = product 0f elements/HCF
    let lcm = (den1 * den2) / gcd(den1, den2);

    // calculating the numerator of the resultant fraction
    let num = ((lcm / den1) * num1) + ((lcm / den2) * num2)

    // simplifing the fraction further
    let common_factor = gcd(num, lcm);

    num = num / common_factor;
    let den = lcm / common_factor;

    console.log(`${num}/${den}`);
}

console.log(add(1, 5, 3, 15));