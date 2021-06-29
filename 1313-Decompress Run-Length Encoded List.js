/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    let result = [];
    let freq, num;
    for(let i=0; i<nums.length/2; i++) {
        freq = nums[2*i];
        num = nums[2*i+1];
        for(let j=0; j<freq; j++)
            result.push(num)
    }
    return result;
};
