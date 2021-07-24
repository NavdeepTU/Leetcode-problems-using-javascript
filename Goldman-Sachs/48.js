// Find Second largest element in an array

// Input: arr[] = {12, 35, 1, 10, 34, 1}
// Output: The second largest element is 34.
// Explanation: The largest element of the 
// array is 35 and the second 
// largest element is 34

let secondLargest = (nums) => {
    let largest = -Infinity;
    let second_largest = -Infinity;
    nums.forEach(num => {
        if (num > largest) {
            second_largest = largest;
            largest = num;
        } else if (num > second_largest && num !== largest) {
            second_largest = num;
        }
    })

    return second_largest;
}

// let arr = [12, 35, 1, 10, 34, 1]
let arr = [10, 5, 10]
console.log(secondLargest(arr));