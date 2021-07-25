// First unique character of a string. 
// E.g. aabdcce . Output : d

var firstUniqChar = function (s) {
    let freq_hm = new Map();
    let idx_hm = new Map();
    let result = '';
    let min_idx = Infinity;
    for (let idx = 0; idx < s.length; idx++) {
        if (freq_hm.has(s[idx])) {
            let freq = freq_hm.get(s[idx]);
            freq_hm.set(s[idx], freq + 1);
        } else {
            freq_hm.set(s[idx], 1);
            idx_hm.set(s[idx], idx);
        }
    }

    for (let char of freq_hm.keys()) {
        if (freq_hm.get(char) === 1) {
            if (idx_hm.get(char) < min_idx) {
                result = char;
                min_idx = idx_hm.get(char);
            }
        }
    }

    if (!isFinite(min_idx)) {
        result = 'No unique character';
        min_idx = -1;
    }

    return result;
};

let str = 'aabdcce';
console.log(firstUniqChar(str));