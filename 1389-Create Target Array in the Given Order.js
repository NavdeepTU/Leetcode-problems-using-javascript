/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
    let result = [];
    nums.forEach((num, idx) => {
        result.splice(index[idx], 0, num)
    })
    return result;
};
