// Find the dot product of two arrays - mean array1[i] * array2[i]

const dotProduct = (arr1, arr2) => {
    let dot_product = 0;
    for (let i = 0; i < arr1.length; i++) {
        dot_product += (arr1[i] * arr2[i])
    }

    return (dot_product) / arr1.length;
}

let arr1 = [3, -5, 4];
let arr2 = [2, 6, 5];
console.log(dotProduct(arr1, arr2));