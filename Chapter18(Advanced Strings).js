function TrieNode() {
    this.children = {}; // table
    this.endOfWord = false;
}

function Trie() {
    this.root = new TrieNode();
}


Trie.prototype.insert = function(word) {
    var current = this.root;
    for (var i = 0; i < word.length; i++) {
        var ch = word.charAt(i);
        var node = current.children[ch];
        if (node == null) {
            node = new TrieNode();
            current.children[ch] = node;
        }
        current = node;
    }
    current.endOfWord = true; //mark the current nodes endOfWord as true
}


Trie.prototype.search = function(word) {
    var current = this.root;
    for (var i = 0; i < word.length; i++) {
        var ch = word.charAt(i);
        var node = current.children[ch];
        if (node == null) {
            return false; // node doesn't exist
        }
        current = node;
    }
    return current.endOfWord;
}
var trie = new Trie();
trie.insert("sammie");
trie.insert("simran");
trie.search("simran"); // true
trie.search(“fake”) // false
trie.search(“sam”) // false


Trie.prototype.delete = function(word) {
    this.deleteRecursively(this.root, word, 0);
}

Trie.prototype.deleteRecursively = function(current, word, index) {
    if (index == word.length) {
        //when end of word is reached only delete if currrent.endOfWord is true.
        if (!current.endOfWord) {
            return false;
        }
        current.endOfWord = false;
        //if current has no other mapping then return true
        return Object.keys(current.children).length == 0;
    }
    var ch = word.charAt(index),
        node = current.children[ch];
    if (node == null) {
        return false;
    }
    var shouldDeleteCurrentNode = this.deleteRecursively(node, word, index + 1);

    // if true is returned then
    // delete the mapping of character and trienode reference from map.
    if (shouldDeleteCurrentNode) {
        delete current.children[ch];
        //return true if no mappings are left in the map.
        return Object.keys(current.children).length == 0;
    }
    return false;
}
var trie1 = new Trie();
trie1.insert("sammie");
trie1.insert("simran");
trie1.search("simran"); // true
trie1.delete("sammie");
trie1.delete("simran");
trie1.search("sammie"); // false
trie1.search("simran"); // false




-
i;




function RabinKarpSearch() {
    this.prime = 101;
}
RabinKarpSearch.prototype.rabinkarpFingerprintHash = function(str, endLength) {
    if (endLength == null) endLength = str.length;
    var hashInt = 0;
    for (var i = 0; i < endLength; i++) {
        hashInt += str.charCodeAt(i) * Math.pow(this.prime, i);
    }
    return hashInt;
}
var rks = new RabinKarpSearch();
rks.rabinkarpFingerprintHash("sammie"); // 1072559917336
rks.rabinkarpFingerprintHash("zammie"); // 1072559917343
rks.rabinkarpFingerprintHash("sa"); // 9912
rks.rabinkarpFingerprintHash("am"); // 11106
RabinKarpSearch.prototype.recalculateHash = function(str, oldIndex, newIndex, oldHash, patternLength) {
    if (patternLength == null) patternLength = str.length;
    var newHash = oldHash - str.charCodeAt(oldIndex);
    newHash = Math.floor(newHash / this.prime);
    newHash += str.charCodeAt(newIndex) * Math.pow(this.prime, patternLength - 1);
    return newHash;
}
var oldHash = rks.rabinkarpFingerprintHash("sa"); // 9912
rks.recalculateHash("same", 0, 2, oldHash, "sa".length); //  11106
RabinKarpSearch.prototype.strEquals = function(str1, startIndex1, endIndex1,
    str2, startIndex2, endIndex2) {
    if (endIndex1 - startIndex1 != endIndex2 - startIndex2) {
        return false;
    }
    while (startIndex1 <= endIndex1 &&
        startIndex2 <= endIndex2) {
        if (str1[startIndex1] != str2[startIndex2]) {
            return false;
        }
        startIndex1++;
        startIndex2++;
    }
    return true;
}
RabinKarpSearch.prototype.rabinkarpSearch = function(str, pattern) {
    var T = str.length,
        W = pattern.length,
        patternHash = this.rabinkarpFingerprintHash(pattern, W),
        textHash = this.rabinkarpFingerprintHash(str, W);

    for (var i = 1; i <= T - W + 1; i++) {
        if (patternHash == textHash &&
            this.strEquals(str, i - 1, i + W - 2, pattern, 0, W - 1)) {
            return i - 1;
        }
        if (i < T - W + 1) {
            textHash = this.recalculateHash(str, i - 1, i + W - 1, textHash, W);
        }
    }

    return -1;
}

var rks = new RabinKarpSearch();
rks.rabinkarpSearch("SammieBae", "as"); // -1
rks.rabinkarpSearch("SammieBae", "Bae"); // 6
rks.rabinkarpSearch("SammieBae", "Sam"); // 0