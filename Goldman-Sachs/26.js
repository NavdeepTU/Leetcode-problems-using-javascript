// Given n size unsorted array, find its mean and median.

let findMeanAndMedian = (nums) => {
    let mean = 0;
    let median = 0;
    let sum = 0;
    for (let num of nums) {
        sum += num;
    }
    mean = sum / nums.length;
    nums.sort();
    if ((nums.length & 1) === 0) {
        let first_idx = Math.floor((nums.length / 2)) - 1;
        let second_idx = Math.floor(nums.length / 2);
        median = (nums[first_idx] + nums[second_idx]) / 2;
    } else {
        let second_idx = Math.floor(nums.length / 2);
        median = nums[second_idx];
    }

    console.log(`Mean: ${mean} Median: ${median}`)
}

let arr = [4, 4, 4, 4, 4];
findMeanAndMedian(arr);