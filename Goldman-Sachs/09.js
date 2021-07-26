// Find the nth Number in fibonacci series using Iterative and Recursive Approach.


// Recursive Approach

function fibRecursive(n) {
    if (n < 2)
        return n;
    return fibRecursive(n - 1) + fibRecursive(n - 2);
}

console.log(fibRecursive(8));

// Iterative Approach

function fibIterative(n) {
    if (n < 2)
        return n;
    let first = 0;
    let second = 1;
    for (let i = 2; i <= n; i++) {
        let temp = second;
        second = first + second;
        first = temp;
    }
    return second;
}

console.log(fibIterative(8));