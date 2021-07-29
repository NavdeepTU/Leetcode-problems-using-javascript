/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let result = [];
    let hm = new Map();
    strs.forEach((word) => {
        let sorted_word = word.split('').sort().join('');
        if(hm.has(sorted_word)) {
            let new_list = hm.get(sorted_word)
            new_list.push(word);
            hm.set(sorted_word, new_list);
        }else {
            hm.set(sorted_word, [word])
        }
    })
    
    for(let key of hm.keys()) {
        result.push(hm.get(key));
    }
    
    return result;
};
