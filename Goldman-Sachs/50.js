// "Given a list L of video names and their watch rates, write a function that will return the videos with the top 10 watch rates.
// Video names may appear more than once.Example:
// L = [(‘abc’, 10), (‘def’, 15), (‘ghi’, 10), (‘abc’, 12), …, (‘xyz’,100)]
// The function should return [‘xyz’, ‘abc’, …, ‘def’, ‘ghi’]"

let Heap = require("collections/heap");
const top10Videos = (videosArr) => {
    let hm = new Map();
    let result = [];

    videosArr.forEach((video) => {
        if (hm.has(video[0])) {
            hm.set(video[0], hm.get(video[0]) + video[1])
        } else {
            hm.set(video[0], video[1])
        }
    })

    let heap = new Heap([], null, (video1, video2) => {
        return video1[1] - video2[1];
    })

    for (let entry of hm.entries()) {
        heap.push(entry);
    }

    for (let i = 0; i < 10; i++) {
        result.push(heap.pop());
    }

    return result;
}

L = [
    ["abc", 10],
    ["abc", 12],
    ["def", 15],
    ["def", 25],
    ["ghi", 10],
    ["jkl", 30],
    ["jkl", 200],
    ["jkl", 20],
    ["mno", 120],
    ["mno", 10],
    ["xyz", 100]
]

console.log(top10Videos(L));