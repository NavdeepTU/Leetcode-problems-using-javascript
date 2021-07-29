// find smallest and 2nd smallest element of an unsorted array.

function minAnd2ndMin(arr) {
    //code here
    let result = [];
    let smallest = Infinity;
    let second_smallest = Infinity;
    for (let num of arr) {
        if (num < smallest) {
            second_smallest = smallest;
            smallest = num;
        } else if (num < second_smallest && num != smallest) {
            second_smallest = num;
        }
    }

    if (!isFinite(smallest) || !isFinite(second_smallest)) {
        result = [-1];
    } else {
        result = [smallest, second_smallest];
    }

    return result;
}

let arr = [1, 2, 3, 7, 345, 34534, 4, -8];
console.log(minAnd2ndMin(arr));