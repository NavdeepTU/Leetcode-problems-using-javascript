/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
    let result = 0;
    let size = 1;
    while(size <= arr.length) {
        for(let i=0; i<=arr.length-size; i++) {
            for(let j=i; j<(i+size); j++)
                result += arr[j];
        }
        size += 2;
    }
    return result;
};
