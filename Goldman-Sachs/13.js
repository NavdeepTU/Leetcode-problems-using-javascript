// "Given an array of Employees with name,marks. Find out the maximum average marks from the list.

// let employees = [{
//     name: "Alia",
//     marks: "-678"
// },
// {
//     name: "Bobby",
//     marks: "100"
// },
// {
//     name: "Alex",
//     marks: "223"
// },
// {
//     name: "Alex",
//     marks: "-23"
// },
// {
//     name: "Bobby",
//     marks: "723"
// }
// ];
// Avg Bobby = 315,Alex= 100,Alia=-678. Result: 315"




function getMaxAvg(objArr) {
    let marks_hm = new Map();
    let freq_hm = new Map();
    let max_avg = -Infinity;

    objArr.forEach((obj) => {
        if (marks_hm.has(obj.name)) {
            marks_hm.set(obj.name, marks_hm.get(obj.name) + parseInt(obj.marks));
            freq_hm.set(obj.name, freq_hm.get(obj.name) + 1);
        } else {
            marks_hm.set(obj.name, parseInt(obj.marks));
            freq_hm.set(obj.name, 1);
        }
    })

    for (let key of marks_hm.keys()) {
        let total_marks = marks_hm.get(key);
        let freq = freq_hm.get(key);
        let avg = total_marks / freq;
        if (avg > max_avg)
            max_avg = avg;
    }

    return max_avg;
}

let employees = [{
        name: "Alia",
        marks: "-678"
    },
    {
        name: "Bobby",
        marks: "100"
    },
    {
        name: "Alex",
        marks: "223"
    },
    {
        name: "Alex",
        marks: "-23"
    },
    {
        name: "Bobby",
        marks: "723"
    }
];

console.log(getMaxAvg(employees));