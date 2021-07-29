// Implement Queue using Stacks


let MyQueue = function () {
    this.stack1 = [];
    this.stack2 = [];
};

MyQueue.prototype.push = function (x) {
    this.stack1.push(x);
};

MyQueue.prototype.pop = function () {
    while (this.stack1.length !== 0) {
        this.stack2.push(this.stack1.pop());
    }
    let result = this.stack2.pop();
    while (this.stack2.length !== 0) {
        this.stack1.push(this.stack2.pop());
    }
    return result;
};

MyQueue.prototype.peek = function () {
    while (this.stack1.length !== 0) {
        this.stack2.push(this.stack1.pop());
    }
    let result = this.stack2[this.stack2.length - 1];
    while (this.stack2.length !== 0) {
        this.stack1.push(this.stack2.pop());
    }
    return result;
};

MyQueue.prototype.empty = function () {
    return this.stack1.length === 0;
};

let obj = new MyQueue()
obj.push(1);
obj.push(2);
console.log(obj.pop());
console.log(obj.peek());
console.log(obj.pop());
console.log(obj.empty());
obj.push(3);
obj.push(4);
console.log(obj.peek());