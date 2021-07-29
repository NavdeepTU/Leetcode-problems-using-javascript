// Largest substring with unique characters e.g. aaabcbdeaf Output : cbdeaf

var longestUniqueSubstring = function (str) {
    let hm = new Map();
    let start = 0;
    let max_len = 0;
    let max_len_start = 0;
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (hm.get(char) >= start)
            start = hm.get(char) + 1;
        hm.set(char, i);
        if ((i - start + 1) > max_len) {
            max_len_start = start;
            max_len = i - start + 1;
        }
    }
    return str.slice(max_len_start, max_len_start + max_len);
};

let str = "aaabcbdeaf";
console.log(longestUniqueSubstring(str));