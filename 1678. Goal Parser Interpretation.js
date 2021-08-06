/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    let result = "";
    let i = 0;
    while(i < command.length) {
        if(command.charAt(i) === "G") {
            result += "G";
            i++;
        }
        else if(command.charAt(i) === "(" && command.charAt(i+1) === ")") {
            result += "o";
            i += 2;
        }
        else {
            result += "al";
            i += 4;
        }
    }
    
    return result;
};
