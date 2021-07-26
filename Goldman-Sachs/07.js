// Given two positive numbers X and Y, check if Y is a power of X or not.
// Input:
// X = 2, Y = 8
// Output:
// true
// Explanation:
// 2^3 is equal to 8.

function isPowerOfAnother(X, Y) {
    if (Y === 1)
        return true;
    if (X === 1 && Y !== 1)
        return false;
    let originalX = X;
    while (X <= Y) {
        if (X === Y) {
            return true;
        }
        X *= originalX;
    }
    return false;
}

console.log(isPowerOfAnother(3, 27));