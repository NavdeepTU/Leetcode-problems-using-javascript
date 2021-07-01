/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {
    
    
//     Method-1 (O(nlgn) -> Time)
    // let result = 0;
    // nums.sort((a,b) => a-b)
    // let min1 = nums[0];
    // let min2 = nums[1];
    // let max1 = nums[nums.length-1];
    // let max2 = nums[nums.length-2];
    // result = (max1*max2) - (min1*min2);
    // return result;
    
    
//     Method-2 (O(n) -> Time, O(1) -> Space)
    let result = 0;
    let max1 = -Infinity;
    let max2 = -Infinity;
    let min1 = +Infinity;
    let min2 = +Infinity;
    
    nums.forEach(num => {
        if(num > max1) {
            max2 = max1;
            max1 = num
        } else if(num > max2)
            max2 = num;
    })
    
    nums.forEach(num => {
        if(num < min1) {
            min2 = min1;
            min1 = num;
        }else if(num < min2)
            min2 = num;
    })
    
    result = (max1*max2) - (min1*min2);
    
    return result;
};
