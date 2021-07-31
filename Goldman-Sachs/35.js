// Given a String “aabbbbddcc” find the longest first repeating index and its length. (Input: “aabbbbddcc” Output: [2,4] 2 is the index and 4 is the length

let longest = (str) => {
    let max_start = 0;
    let max_len = 1;
    let start = 0;
    for (let i = 1; i <= str.length; i++) {
        if (i === str.length || str[i] !== str[i - 1]) {
            if ((i - start) > max_len) {
                max_len = i - start;
                max_start = start;
            }
            start = i;
        }
    }
    console.log('Index : ' + max_start);
    console.log('Length : ' + max_len);
}

let str = "aabbbbddcc"
longest(str);