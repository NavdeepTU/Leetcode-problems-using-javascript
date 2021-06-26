/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let result = 0;
    let hm = new Map();
    for(let jewel of jewels)
        hm.set(jewel, true);
    for(let stone of stones)
        if(hm.has(stone))
            result++;
    return result;
};
