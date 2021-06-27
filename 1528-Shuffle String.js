/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    let hm = new Map();
    let result = '';
    for(let i=0; i<s.length; i++)
        hm.set(indices[i], s.charAt(i));
    for(let i=0; i<s.length; i++)
        result += hm.get(i);
    return result;
};
