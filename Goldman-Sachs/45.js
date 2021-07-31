// "Find winner of an election where votes are represented as candidate names. Given an array of names of candidates in an election.A candidate name in array represents a vote casted to the candidate.
// Print the name of candidates received Max vote. If there is tie, print lexicographically smaller name."


// npm install --save collections
// external library to use heap in js.
let Heap = require("collections/heap");

let names = ["John", "Annie", "Thomas", "John", "Thomas", "John", "Thomas", "Thomas", "John"]
let hm = new Map();
names.forEach((name) => {
    if (hm.has(name)) {
        hm.set(name, hm.get(name) + 1);
    } else {
        hm.set(name, 1);
    }
})

var heap = new Heap([], null, function (entry1, entry2) {
    return entry1[1] - entry2[1];
});

for (let entry of hm.entries()) {
    heap.push(entry);
}

console.log(heap.peek()[0]);