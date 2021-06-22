/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
 var shuffle = function(nums, n) {
    let result = new Array();
    let i = 0;
    let j = n;
    while(i < n) {
        result.push(nums[i]);
        result.push(nums[j]);
        i++;
        j++;
    }
    return result;
};