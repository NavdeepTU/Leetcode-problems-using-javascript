/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
 var kidsWithCandies = function(candies, extraCandies) {
    let result = new Array()
    let maxCandies = 0;
    candies.forEach(candy => {
        if(candy > maxCandies)
            maxCandies = candy;
    })
    candies.forEach(candy => {
        if((candy+extraCandies) >= maxCandies) 
            result.push(true)
        else
            result.push(false)
    })
    return result;
};