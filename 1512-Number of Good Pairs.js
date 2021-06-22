/**
 * @param {number[]} nums
 * @return {number}
 */

 let helper = function(count) {
    let result = 0;
    for(let i=1; i<=count; i++)
        result += i;
    return result;
}
var numIdenticalPairs = function(nums) {
    let good_pairs = 0;
    let values_seen = new Map();
    
    nums.forEach((val, idx) => {
        if(!values_seen.has(val)) {
            let count = 0;
            for(let j=idx+1; j<nums.length; j++)
                if(nums[j] === val)
                    count++;
            good_pairs += helper(count);
            values_seen.set(val, true);
        }
    })
    
    return good_pairs;
    
};