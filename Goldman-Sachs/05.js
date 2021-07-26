// Find out the number of pair from given integer array whose sum is equal to a given number.
// Input:
// N = 4, K = 6
// arr[] = {1, 5, 7, 1}
// Output: 2

function getPairsCount(arr, sum) {
    let pair_count = 0;
    let hm = new Map();
    arr.forEach((num) => {
        if (hm.has(num)) {
            hm.set(num, hm.get(num) + 1)
        } else {
            hm.set(num, 1);
        }
    })
    arr.forEach((num) => {
        let temp = sum - num;
        if (hm.has(temp)) {
            pair_count += hm.get(temp);
            if (sum - num === num)
                pair_count--;
        }
    })

    return pair_count / 2;
}

let arr = [10, 12, 10, 15, -1, 7, 6, 5, 4, 2, 1, 1, 1]
let sum = 11;
console.log(getPairsCount(arr, sum));

// Algorithm
// 1. Create a map to store frequency of each number in the array. (Single traversal is required)
// 2. In the next traversal, for every element check if it can be combined with any other element (other than itself!) to give the desired sum. Increment the counter accordingly.
// 3. After completion of second traversal, we’d have twice the required value stored in counter because every pair is counted two times. Hence divide count by 2 and return.