/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function(boxes) {
    let result = new Array(boxes.length);
    result.fill(0);
    for(let i=0; i<boxes.length; i++) {
        if(boxes[i] === '1') {
            for(let j=0; j<boxes.length; j++) {
                if(j !== i) {
                    result[j] += Math.abs(i-j);
                }
            }
        }
    }
    return result;
};
