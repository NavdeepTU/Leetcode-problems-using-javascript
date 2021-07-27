// Possible to make a divisible by 3 number using all digits in an array

function isPossible(arr) {

    let remainder = arr.reduce((acc, num) => {
        return (acc + num) % 3;
    }, 0)

    return remainder === 0;
}

let arr = [1, 4]

console.log(isPossible(arr));