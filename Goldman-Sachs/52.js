// Print the string format of value of an object separated by comma ,
// const employee = { 
// name: { 
// firstName: "Rohan",
// lastName: "Ray", 
// }, 
// age: 25, 
// city: "New York", 
// getName: function () { 
// return this.name; 
// } 
// } 

// OUTPUT: 'Rohan, Ray, 25, New York, '

const employee = {
    name: {
        firstName: "Rohan",
        lastName: "Ray",
        address: {
            city: "patiala",
            pincode: "147001"
        }
    },
    age: 25,
    city: "New York",
    getName: function () {
        return this.name;
    }
}

let result = '';

function buildRecursively(obj, result) {
    for (let key in obj) {
        if (typeof obj[key] === 'object') {
            result = buildRecursively(obj[key], result);
        } else if (typeof obj[key] !== 'function') {
            result += obj[key] + ", ";
        }
    }
    return result;
}
console.log(buildRecursively(employee, result));
// console.log(result);