// Given a sentence, task is to remove spaces from the sentence and rewrite in Camel case. It is a style of writing where we don’t have spaces and all words begin with capital letters.

// Example:

// camelize("background color") == 'BackgroundColor';
// camelize("list style image") == 'ListStyleImage';
// camelize(" webkit transition") == 'WebkitTransition';

function camelize(str) {
    return str.split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join('');
}

let str = " webkit transition";
console.log(camelize(str));

console.log(-1%5);