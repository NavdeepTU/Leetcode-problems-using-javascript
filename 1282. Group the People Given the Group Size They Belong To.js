/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
    let result = [];
    let hm = new Map();
    groupSizes.forEach((size, index) => {
        if(hm.has(size)) {
            let arr = hm.get(size);
            arr.push(index);
            hm.set(size, arr);
        }else {
            hm.set(size, [index]);
        }
    })
    
    for(let size of hm.keys()) {
        let arr = hm.get(size);
        let parts = arr.length/size;
        let start = 0, end = size;
        for(let i=0; i<parts; i++) {
            result.push(arr.slice(start, end));
            start = end;
            end = start+size;
        }
    }
    
    return result;
};
