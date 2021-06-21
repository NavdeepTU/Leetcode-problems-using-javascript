var smallerNumbersThanCurrent = function(nums) {
    let result = new Array();
    let count;
    nums.forEach((num, idx) => {
        count = 0;
        for(let j=0; j<nums.length; j++) 
            if(j!=idx && nums[j]<num)
                count++;
        result.push(count)
    })
    return result;
};