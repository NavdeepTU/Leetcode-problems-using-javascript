// Find next greater number with same set of digits.

// Example 1:

// Input: n = 12
// Output: 21
// Example 2:

// Input: n = 21
// Output: -1

let nextGreaterElement = function (n) {
    let num_str = n.toString();
    if (num_str.length === 1)
        return -1;
    let arr = num_str.split('');
    for (let i = arr.length - 2; i >= 0; i--) {
        for (let j = arr.length - 1; j > i; j--) {
            if (arr[i] < arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
                let rest_sorted = arr.slice(i + 1).sort().join('');
                let result = arr.join('').slice(0, i + 1) + rest_sorted;
                return parseInt(result);
            }
        }
    }
    return -1;
};

let num = 1234;
console.log(nextGreaterElement(num));