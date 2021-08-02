/**
 * @param {number} n
 * @return {number}
 */
var nextGreaterElement = function(n) {
    let num_str = n.toString();
    if(num_str.length === 1)
        return -1;
    let arr = num_str.split('');
    for(let i=arr.length-2; i>=0; i--) {
        for(let j=arr.length-1; j>i; j--) {
            if(arr[i] < arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
                let rest_sorted = arr.slice(i+1).sort().join('');
                let result = arr.join('').slice(0, i+1)+rest_sorted;
                result = parseInt(result);
                if(result > 2147483647)
                    return -1;
                return result;
            }
        }
    }
    return -1;
};
