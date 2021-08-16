/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    let result = true;
    let hm = {};
    let str = 'abcdefghijklmnopqrstuvwxyz';
    for(let char of str)
        hm[char] = true;
    for(let char of sentence) {
        if(hm[char] !== undefined)
            delete hm[char];
    }
    if(Object.values(hm).length !== 0)
        result = false;
    return result;
};
