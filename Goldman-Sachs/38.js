// Find the smallest subarray whose sum is equal or greater than the target value.

const smallestSubArray = (arr, target_value) => {
    let min_length = Infinity;
    let sum, j;
    for (let i = 0; i < arr.length; i++) {
        sum = arr[i];
        j = i + 1;
        while (true) {
            if (sum >= target_value) {
                min_length = Math.min(min_length, j - i);
                break;
            }
            if (j === arr.length) {
                break;
            }
            sum += arr[j];
            j++;
        }
    }
    return min_length;
}

let arr = [1, 11, 100, 1, 0, 200, 3, 2, 1, 250];
let target = 280;

console.log(smallestSubArray(arr, target));