function Stack(array) {
    this.array = [];
    if (array) this.array = array;
}

Stack.prototype.getBuffer = function() {
    return this.array.slice();
}

Stack.prototype.isEmpty = function() {
    return this.array.length == 0;
}

//instance of the stack class
var stack1 = new Stack();

console.log(stack1); // {array: []}

Stack.prototype.peek = function() {
    return this.array[this.array.length - 1];
}
stack1.push(10);
console.log(stack1.peek()); // 10
stack1.push(5);
console.log(stack1.peek()); // 5

Stack.prototype.push = function(value) {
    this.array.push(value);
}

stack1.push(1);
stack1.push(2);
stack1.push(3);
console.log(stack1); // {array: [1,2,3]}


Stack.prototype.pop = function() {
    return this.array.pop();
};

stack1.pop(1);
stack1.pop(2);
stack1.pop(3);

console.log(stack1); // {array: []}


function stackAccessNthTopNode(stack, n) {
    if (n <= 0) throw 'error'
    
    var bufferArray = stack.getBuffer();
    var bufferStack = new Stack(bufferArray);

    while (--n !== 0) {
        bufferStack.pop();
    }
    return bufferStack.pop();
}

var stack2 = new Stack();
stack2.push(1);
stack2.push(2);
stack2.push(3);
stackAccessNthTopNode(stack2, 2); // 2

function stackSearch(stack, element){
    var bufferArray = stack.getBuffer();

    var bufferStack = new Stack(bufferArray);

    while(!bufferStack.isEmpty()){
        if(bufferStack.pop()==element){
            return true;
        }
    }
    return false;
}
var stack3 = new Stack();
stack3.push(1);
stack3.push(2);
stack3.push(3);
stackSearch(stack3,3); // true

function Queue(array) {
    this.array = [];
    if (array) this.array = array;
}

Queue.prototype.getBuffer = function() {
    return this.array.slice();
}

Queue.prototype.isEmpty = function() {
    return this.array.length == 0;
}

//instance of the queue class
var queue1 = new Queue();

console.log(queue1); // { array: [] }

Queue.prototype.peek = function() {
    return this.array[0];
}


Queue.prototype.enqueue = function(value) {
    return this.array.push(value);
}


Queue.prototype.dequeue = function() {
    return this.array.shift();
};

var queue1 = new Queue();

queue1.enqueue(1);
queue1.enqueue(2);
queue1.enqueue(3);

console.log(queue1); // {array: [1,2,3]}

queue1.dequeue();
console.log(queue1); // {array: [2,3]}

queue1.dequeue();
console.log(queue1); // {array: [3]}


function queueAccessNthTopNode(queue, n) {
    if (n <= 0) throw 'error'

    var bufferArray = queue.getBuffer();
    var bufferQueue = new Queue(bufferArray);

    while (--n !== 0) {
        bufferQueue.dequeue();
    }
    return bufferQueue.dequeue();
}


function queueSearch(queue, element) {
    var bufferArray = queue.getBuffer();

    var bufferQueue = new Queue(bufferArray);

    while (!bufferQueue.isEmpty()) {
        if (bufferQueue.dequeue() == element) {
            return true;
        }
    }
    return false;
}




function TwoStackQueue() {
    this.inbox = new Stack();
    this.outbox = new Stack();
}

TwoStackQueue.prototype.enqueue = function(val) {
    this.inbox.push(val);
}

TwoStackQueue.prototype.dequeue = function() {
    if (this.outbox.isEmpty()) {
        while (!this.inbox.isEmpty()) {
            this.outbox.push(this.inbox.pop());
        }
    }
    return this.outbox.pop();
};
var queue = new TwoStackQueue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.dequeue(); // 1
queue.dequeue(); // 2
queue.dequeue(); // 3



function QueueStack() {
    this.inbox = new Queue(); // first stack
}

QueueStack.prototype.push = function(val) {
    this.inbox.enqueue(val);
};

QueueStack.prototype.pop = function() {
    var size = this.inbox.array.length - 1;
    var counter = 0;
    var bufferQueue = new Queue();

    while (++counter <= size) {
        bufferQueue.enqueue(this.inbox.dequeue());
    }
    var popped = this.inbox.dequeue();
    this.inbox = bufferQueue;
    return popped
};

var stack = new QueueStack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);

console.log(stack.pop()); // 5
console.log(stack.pop()); // 4
console.log(stack.pop()); // 3
console.log(stack.pop()); // 2
console.log(stack.pop()); // 1


function Customer(name, order) {
    this.name = name;
    this.order = order;
}

function Cashier() {
    this.customers = new Queue();
}

Cashier.prototype.addOrder = function(customer) {
    this.customers.enqueue(customer);
}

Cashier.prototype.deliverOrder = function() {
    var finishedCustomer = this.customers.dequeue();

    console.log(finishedCustomer.name + ", your " + finishedCustomer.order + " is ready!");
}

var cashier = new Cashier();
var customer1 = new Customer('Jim', "Fries");
var customer2 = new Customer('Sammie', "Burger");
var customer3 = new Customer('Peter', "Drink");

cashier.addOrder(customer1);
cashier.addOrder(customer2);
cashier.addOrder(customer3);

cashier.deliverOrder(); // Jim, your Fries is ready!
cashier.deliverOrder(); // Sammie, your Burger is ready!
cashier.deliverOrder(); // Peter, your Drink is ready!


function isParenthesisValid(validationString) {
    var stack = new Stack();
    for (var pos = 0; pos < validationString.length; pos++) {
        var currentChar = validationString.charAt(pos);
        if (currentChar == "(") {
            stack.push(currentChar);
        } else if (currentChar == ")") {

            if (stack.isEmpty())
                return false;

            stack.pop();
        }
    }
    return stack.isEmpty();
}
isParenthesisValid("((()"); // false;
isParenthesisValid("(((("); // false;
isParenthesisValid("()()"); // true;



function sortableStack(size) {
    this.size = size;

    this.mainStack = new Stack();
    this.sortedStack = new Stack();

    // let's initialize it with some random ints
    for (var i = 0; i < this.size; i++) {
        this.mainStack.push(Math.floor(Math.random() * 11));
    }
}

sortableStack.prototype.sortStackDescending = function() {
    while (!this.mainStack.isEmpty()) {
        var temp = this.mainStack.pop();
        while (!this.sortedStack.isEmpty() && this.sortedStack.peek() < temp) {
            this.mainStack.push(this.sortedStack.pop());
        }
        this.sortedStack.push(temp);
    }
}

var ss = new sortableStack(10);
console.log(ss); // [ 8, 3, 4, 4, 1, 2, 0, 9, 7, 8 ]
ss.sortStackDescending();
console.log(ss.sortedStack); // [ 9, 8, 8, 7, 4, 4, 3, 2, 1, 0 ]
