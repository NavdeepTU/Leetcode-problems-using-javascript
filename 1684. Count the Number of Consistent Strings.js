/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    let result = 0;
    outer: for(let word of words) {
        for(let char of word) {
            if(!allowed.includes(char))
                continue outer;
        }
        result++;
    }
    return result;
};
