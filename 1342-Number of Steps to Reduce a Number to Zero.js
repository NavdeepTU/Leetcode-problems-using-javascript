/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    let steps = 0;
    let log_base_2 = Math.log2(num);
    if(num === 0)
        steps = 0;
    else if(Math.trunc(log_base_2) === log_base_2)
        steps = log_base_2 + 1;
    else {
        while(num != 0) {
            if(num%2 === 0)
                num /= 2;
            else
                num -= 1;
            steps++;
        }
    }
    return steps;
};
