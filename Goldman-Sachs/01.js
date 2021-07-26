// 2nd smallest element of a sorted rotated array. E.g. 5,6,1,2,3,4


let findSecondMin = function (nums) {
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        // if nums[mid] > nums[right], that means we need to move right to find the smallest element
        if (nums[mid] > nums[right]) {
            left = mid + 1;
        } else
            right = mid;
    }
    // left index has the smallest element but we need second smallest hence we increment in circular fation
    return nums[(left + 1) % nums.length];
};

let arr = [4, 5, 6, 7, 0, 1, 2];

console.log(findSecondMin(arr));