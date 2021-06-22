/**
 * @param {number} n
 * @return {number}
 */

let getProduct = (num) => {
    let result = 1;
    while(num != 0) {
        result *= num%10;
        num = Math.floor(num/10);
    }
    return result;
}

let getSum = (num) => {
    let result = 0;
    while(num != 0) {
        result += num%10;
        num = Math.floor(num/10);
    }
    return result;
}

var subtractProductAndSum = function(n) {
    let product = getProduct(n);
    let sum = getSum(n);
    return product-sum;
};