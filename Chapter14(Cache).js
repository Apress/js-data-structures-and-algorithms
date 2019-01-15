function LFUNode(key, value) {
    this.prev = null;
    this.next = null;
    this.key = key;
    this.data = value;
    this.freqCount = 1;
}

function LFUDoublyLinkedList() {
    this.head = new LFUNode('buffer head', null);
    this.tail = new LFUNode('buffer tail', null);
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.size = 0;
}

function LFUCache(capacity) {
    this.keys = {}; // stores LFUNode
    this.freq = {}; // stores LFUDoublyLinkedList
    this.capacity = capacity;
    this.minFreq = 0;
    this.size = 0;
}


LFUDoublyLinkedList.prototype.insertAtHead = function(node) {
    node.next = this.head.next;
    this.head.next.prev = node;
    this.head.next = node;
    node.prev = this.head;
    this.size++;
}

LFUDoublyLinkedList.prototype.removeAtTail = function() {
    var oldTail = this.tail.prev;
    var prev = this.tail.prev;
    prev.prev.next = this.tail;
    this.tail.prev = prev.prev;
    this.size--;
    return oldTail;
}

LFUDoublyLinkedList.prototype.removeNode = function(node) {
    node.prev.next = node.next
    node.next.prev = node.prev
    this.size--;
}




LFUCache.prototype.set = function(key, value) {
    var node = this.keys[key];

    if (node == undefined) {
        node = new LFUNode(key, value);

        this.keys[key] = node;

        if (this.size != this.capacity) {
            // insert without deleting
            if (this.freq[1] === undefined) {
                this.freq[1] = new LFUDoublyLinkedList();
            }
            this.freq[1].insertAtHead(node);
            this.size++;
        } else {
            // delete and insert
            var oldTail = this.freq[this.minFreq].removeAtTail();
            delete this.keys[oldTail.key];

            if (this.freq[1] === undefined) {
                this.freq[1] = new LFUDoublyLinkedList();
            }

            this.freq[1].insertAtHead(node);
        }
        this.minFreq = 1;
    } else {
        var oldFreqCount = node.freqCount;
        node.data = value;
        node.freqCount++;

        this.freq[oldFreqCount].removeNode(node);

        if (this.freq[node.freqCount] === undefined) {
            this.freq[node.freqCount] = new LFUDoublyLinkedList();
        }

        this.freq[node.freqCount].insertAtHead(node);

        if (oldFreqCount == this.minFreq && Object.keys(this.freq[oldFreqCount]).size == 0) {
            this.minFreq++;
        }

    }
}




LFUCache.prototype.get = function(key) {
    var node = this.keys[key];

    if (node == undefined) {
        return null;
    } else {

        var oldFreqCount = node.freqCount;
        node.freqCount++;

        this.freq[oldFreqCount].removeNode(node);

        if (this.freq[node.freqCount] === undefined) {
            this.freq[node.freqCount] = new LFUDoublyLinkedList();
        }

        this.freq[node.freqCount].insertAtHead(node);

        if (oldFreqCount == this.minFreq && Object.keys(this.freq[oldFreqCount]).length == 0) {
            this.minFreq++;
        }
        return node.data;
    }
}

var myLFU = new LFUCache(5);
myLFU.set(1, 1); // state of myLFU.freq: {1: 1}
myLFU.set(2, 2); // state of myLFU.freq: {1: 2<->1}
myLFU.set(3, 3); // state of myLFU.freq: {1: 3<->2<->1}
myLFU.set(4, 4); // state of myLFU.freq: {1: 4<->3<->2<->1}
myLFU.set(5, 5); // state of myLFU.freq: {1: 5<->4<->3<->2<->1}
myLFU.get(1); // returns 1, state of myLFU.freq: {1: 5<->4<->3<->2, 2: 1}
myLFU.get(1); // returns 1, state of myLFU.freq: {1: 5<->4<->3<->2, 3: 1}
myLFU.get(1); // returns 1, state of myLFU.freq: {1: 5<->4<->3<->2, 4: 1}
myLFU.set(6, 6); // state of myLFU.freq: {1: 6<->5<->4<->3, 4: 1}
myLFU.get(6); // state of myLFU.freq: {1: 5<->4<->3, 4: 1, 2: 6}



function DLLNode(key, data) {
    this.key = key;
    this.data = data;
    this.next = null;
    this.prev = null;
}


function LRUCache(capacity) {
    this.keys = {};
    this.capacity = capacity;
    this.head = new DLLNode('', null);
    this.tail = new DLLNode('', null);
    this.head.next = this.tail;
    this.tail.prev = this.head;
}


LRUCache.prototype.removeNode = function(node) {
    var prev = node.prev,
        next = node.next;
    prev.next = next;
    next.prev = prev;
}

LRUCache.prototype.addNode = function(node) {
    var realTail = this.tail.prev;
    realTail.next = node;

    this.tail.prev = node;
    node.prev = realTail;
    node.next = this.tail;
}


LRUCache.prototype.get = function(key) {
    var node = this.keys[key];
    if (node == undefined) {
        return null;
    } else {
        this.removeNode(node);
        this.addNode(node);
        return node.data;
    }
}

LRUCache.prototype.set = function(key, value) {
    var node = this.keys[key];
    if (node) {
        this.removeNode(node);
    }

    var newNode = new DLLNode(key, value);

    this.addNode(newNode);
    this.keys[key] = newNode;

    // evict a node
    if (Object.keys(this.keys).length > this.capacity) {
        var realHead = this.head.next;
        this.removeNode(realHead);
        delete this.keys[realHead.key];
    }
}


var myLRU = new LRUCache(5);

myLRU.set(1, 1); // 1
myLRU.set(2, 2); // 1 <-> 2
myLRU.set(3, 3); // 1 <-> 2 <-> 3
myLRU.set(4, 4); // 1 <-> 2 <-> 3 <-> 4
myLRU.set(5, 5); // 1 <-> 2 <-> 3 <-> 4 <-> 5


myLRU.get(1); // 2 <-> 3 <-> 4 <-> 5 <-> 1
myLRU.get(2); // 3 <-> 4 <-> 5 <-> 1 <-> 2

myLRU.set(6, 6); // 4 <-> 5 <-> 1 <-> 2 <-> 6
myLRU.set(7, 7); // 5 <-> 1 <-> 2 <-> 6 <-> 7
myLRU.set(8, 8); // 1 <-> 2 <-> 6 <-> 7 <-> 8