/**
 * @param {number[][]} accounts
 * @return {number}
 */
 var maximumWealth = function(accounts) {
    let maxWealth = Number.MIN_SAFE_INTEGER;
    let customerWealth;
    let m = accounts.length;
    let n = accounts[0].length;
    for(let i=0; i<m; i++) {
        customerWealth = 0;
        for(let j=0; j<n; j++)
            customerWealth += accounts[i][j];
        if(customerWealth > maxWealth)
            maxWealth = customerWealth;
    }
    
    return maxWealth;
};