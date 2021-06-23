/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    let max = num;
    let temp;
    let digits_arr = String(num).split("").map(d => Number(d))
    digits_arr.forEach((digit, idx) => {
        if(digit === 6) {
            digits_arr[idx] = 9;
            temp = 0;
            for(let i=0; i<digits_arr.length; i++)
                temp = temp*10 + digits_arr[i]
            if(temp > max)
                max = temp;
            digits_arr[idx] = 6;
        }
    })
    return max;
};
