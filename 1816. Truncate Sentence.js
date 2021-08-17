/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    let temp = 0;
    let result = "";
    let i=0
    while(i<s.length) {
        if(s[i] === ' ') {
            temp ++;
            if(temp === k)
                break;
        }
        i++;
    }
    result = s.slice(0, i);
    return result;
};
