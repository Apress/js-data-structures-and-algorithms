localStorage.setItem("testKey", "testValue");
location = location; // refreshes the page

//-----------------------------------
localStorage.getItem("testKey"); // prints "testValue"


// Start of: Linear Probing -----------------------------------
function HashTable(size) {
    this.size = size;
    this.keys = this.initArray(size);
    this.values = this.initArray(size);
    this.limit = 0;
}

HashTable.prototype.initArray = function(size) {
    var array = [];
    for (var i = 0; i < size; i++) {
        array.push(null);
    }
    return array;
}

HashTable.prototype.put = function(key, value) {
    if (this.limit >= this.size) throw 'hash table is full'

    var hashedIndex = this.hash(key);

    // Linear probing
    while (this.keys[hashedIndex] != null) {
        hashedIndex++;

        hashedIndex = hashedIndex % this.size;

    }

    this.keys[hashedIndex] = key;
    this.values[hashedIndex] = value;
    this.limit++;
}

HashTable.prototype.get = function(key) {
    var hashedIndex = this.hash(key);

    while (this.keys[hashedIndex] != key) {
        hashedIndex++;

        hashedIndex = hashedIndex % this.size;

    }
    return this.values[hashedIndex];
}

HashTable.prototype.hash = function(key) {
    // Check if int
    if (!Number.isInteger(key)) throw 'must be int';
    return key % this.size;
}

var exampletable = new HashTable(13);
exampletable.put(7, "hi");
exampletable.put(20, "hello");
exampletable.put(33, "sunny");
exampletable.put(46, "weather");
exampletable.put(59, "wow");
exampletable.put(72, "fourty");
exampletable.put(85, "happy");
exampletable.put(98, "sad");
// End of: Linear Probing ------------------------------------0



// Start of: Quadratic Probing --------------------------------
HashTable.prototype.put = function(key, value) {
    if (this.limit >= this.size) throw 'hash table is full'

    var hashedIndex = this.hash(key),
        squareIndex = 1;

    // quadratic probing
    while (this.keys[hashedIndex % this.size] != null) {
        hashedIndex += Math.pow(squareIndex, 2);
        squareIndex++;
    }

    this.keys[hashedIndex % this.size] = key;
    this.values[hashedIndex % this.size] = value;
    this.limit++;
}

HashTable.prototype.get = function(key) {
    
    var hashedIndex = this.hash(key),
        squareIndex = 1;

    while (this.keys[hashedIndex % this.size] != key) {
        hashedIndex += Math.pow(squareIndex, 2);
        hashedIndex = hashedIndex % this.size;
        squareIndex++;
    }
    return this.values[hashedIndex % this.size];
}
// End of: Quadratic Probing ----------------------------------


// Star of: Double Hashing with Linear Probing ----------------
HashTable.prototype.put = function(key, value) {
    if (this.limit >= this.size) throw 'hash table is full'

    var hashedIndex = this.hash(key);

    while (this.keys[hashedIndex] != null) {
        hashedIndex++;

        hashedIndex = hashedIndex % this.size;

    }
    this.keys[hashedIndex] = key;
    this.values[hashedIndex] = value;
    this.limit++;
}

HashTable.prototype.get = function(key) {
    var hashedIndex = this.hash(key);

    while (this.keys[hashedIndex] != key) {
        hashedIndex++;

        hashedIndex = hashedIndex % this.size;

    }
    return this.values[hashedIndex];
}

HashTable.prototype.hash = function(key) {
    if (!Number.isInteger(key)) throw 'must be int'; // check if int
    return this.secondHash(key);
}

HashTable.prototype.secondHash = function(hashedKey) {
    var R = this.size - 2;
    return R - hashedKey % R;
}
