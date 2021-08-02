/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let result = [];
    let hm = new Map();
    for(let i=0; i<nums.length; i++) {
        if(hm.has(nums[i])) {
            result.push(hm.get(nums[i]));
            result.push(i);
            break;
        }else {
            hm.set(target-nums[i], i);
        }
    }
    return result;
};
