// "Find the dot product of two arrays - mean array1[i] * array2[i].(if the length of the two arrays are not equal then the loop should go for the lesser length)."

const dotProduct = (arr1, arr2) => {
    let dot_product = 0;
    let len = Math.min(arr1.length, arr2.length);
    for (let i = 0; i < len; i++) {
        dot_product += (arr1[i] * arr2[i])
    }

    return (dot_product) / arr1.length;
}

let arr1 = [3, -5, 4];
let arr2 = [2, 6, 5, 5, 6, 7];
console.log(dotProduct(arr1, arr2));