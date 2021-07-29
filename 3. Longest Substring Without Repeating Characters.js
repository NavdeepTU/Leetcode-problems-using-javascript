/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(str) {
    let hm = new Map();
    let start = 0;
    let max_len = 0;
    for(let i=0; i<str.length; i++) {
        let char = str[i];
        if(hm.get(char) >= start)
            start = hm.get(char)+1;
        hm.set(char, i);
        max_len = Math.max(max_len, i-start+1);
        }
    return max_len;
};
