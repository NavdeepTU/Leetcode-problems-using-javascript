/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    let ans = [];
    let n = nums.length;
    nums.forEach((num, i) => {
        ans[i] = num;
        ans[i+n] = num;
    })
    return ans;
};     
