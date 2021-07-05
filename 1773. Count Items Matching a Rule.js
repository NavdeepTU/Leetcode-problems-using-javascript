/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    let idx;
    if(ruleKey === "type")
        idx = 0;
    else if(ruleKey === "color")
        idx = 1;
    else
        idx = 2;
    
    return items.reduce((result, item) => {
        if(item[idx] === ruleValue)
            return result+1;
        return result;
    }, 0)
};
