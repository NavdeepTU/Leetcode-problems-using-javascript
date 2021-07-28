// Given an array A[] of integers find sum of product of all pairs of array elements
// Input : A[] = {1, 3, 4}
// Output : 19
// Possible Pairs : (1,3), (1,4), (3,4)
// Sum of Product : 1*3 + 1*4 + 3*4 = 19

let sumOfProducts = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++)
            sum += arr[i] * arr[j];
    }

    return sum;
}

let arr = [1, 3, 4];
console.log(sumOfProducts(arr));