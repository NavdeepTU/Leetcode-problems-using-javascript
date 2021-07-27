// Find the first repeated word in a string. Input : "Ravi had been saying that he had been there" .Output : had

const firstRepeatedWord = (str) => {
    let hm = new Map();
    let result = 'No Repitition';
    let word_array = str.split(" ");
    for (let word of word_array) {
        if (hm.has(word)) {
            result = word;
            break;
        }
        hm.set(word, true);
    }
    return result;
}

let str = "Ravi had been saying that he there";
console.log(firstRepeatedWord(str));