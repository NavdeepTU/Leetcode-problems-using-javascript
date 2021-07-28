// Program to check Strength of Password. A password is said to be strong if it satisfies the following criteria: 

// It contains at least one lowercase English character.
// It contains at least one uppercase English character.
// It contains at least one special character. The special characters are: !@#$%^&*(
// Its length is at least 8.
// It contains at least one digit.

// Given a string, find its strength. 
// Let a strong password is one that satisfies all above conditions. 
// A moderate password is one that satisfies first three conditions and has length atleast 6. 
// Otherwise password is weak.

// Input : "gFg!@12"
// Output : Moderate

// Input : “SapientGlobalMarkets!@12"
// Output : Strong

function containsSplChar(pwd) {
    let spl_chars = "!@#$%^&*(";
    for (let char of pwd) {
        for (let spl_char of spl_chars) {
            if (char === spl_char)
                return true;
        }
    }
    return false;
}

function containsDigit(pwd) {
    for (let i = 0; i < pwd.length; i++) {
        if (pwd.codePointAt(i) >= 48 && pwd.codePointAt(i) <= 57)
            return true;
    }
    return false;
}

function checkPasswordStrength(pwd) {
    let result = '';
    if (pwd === pwd.toUpperCase() || pwd === pwd.toLowerCase() || !containsSplChar(pwd)) {
        result = "weak";
        return result;
    }
    if (pwd.length >= 6) {
        result = "Moderate";
    }
    if (pwd.length >= 8 && containsDigit(pwd)) {
        result = "Strong";
    }

    return result;
}

let pwd = "SapientGlobalMarkets!@12";
console.log(checkPasswordStrength(pwd));