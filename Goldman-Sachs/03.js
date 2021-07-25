// Print matrix in spiral form 
// e.g. {{1,2,3},{4,5,6},{7,8,9}} 
// Output . 1,2,3,6,9,8,7,4,5

var spiralOrder = function (matrix) {
    let top = 0;
    let bottom = matrix.length - 1;
    let left = 0;
    let right = matrix[0].length - 1;
    let dir = 0;
    let result = [];

    while (top <= bottom && left <= right) {
        // moving left to right
        if (dir === 0) {
            for (let i = left; i <= right; i++)
                result.push(matrix[top][i])
            top++;
        }
        // moving top to bottom
        else if (dir === 1) {
            for (let i = top; i <= bottom; i++)
                result.push(matrix[i][right])
            right--;
        }
        // moving right to left
        else if (dir === 2) {
            for (let i = right; i >= left; i--)
                result.push(matrix[bottom][i])
            bottom--;
        }
        // moving bottom to top
        else if (dir === 3) {
            for (let i = bottom; i >= top; i--)
                result.push(matrix[i][left])
            left++;
        }

        // changing direction for next iteration
        dir = (dir + 1) % 4;
    }

    return result;
};

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(spiralOrder(matrix));