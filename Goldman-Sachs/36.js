// Arrange given numbers to form the biggest number.Input- List of numbers : {1, 34, 3, 98, 9, 76, 45, 4} Output – 998764543431

let arr = [1, 34, 3, 98, 9, 76, 45, 4];

arr.sort((a, b) => {
    let num1 = parseInt(a.toString() + b.toString());
    let num2 = parseInt(b.toString() + a.toString());

    if (num1 > num2) {
        return -1;
    }
    return 1;
})

let max_number = arr.join('');
console.log(max_number);