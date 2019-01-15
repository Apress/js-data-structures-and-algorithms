
var exampleSet = new Set();
exampleSet.add(1); // exampleSet: Set(1) {1}
exampleSet.add(1); // exampleSet: Set(1) {1}
exampleSet.add(2); // exampleSet: Set(2) {1, 2}
exampleSet

var exampleSet = new Set();
exampleSet.add(1); // exampleSet: Set {1}
exampleSet.delete(1); // true
exampleSet.add(2); // exampleSet: Set {1, 2}

var exampleSet = new Set();
exampleSet.add(1); // exampleSet: Set(1) {1}
exampleSet.has(1); // true
exampleSet.has(2); // false
exampleSet.add(2); // exampleSet: Set(2) {1, 2}
exampleSet.has(2); // true

function intersectSets (setA, setB) {
    var intersection = new Set();
    for (var elem of setB) {
        if (setA.has(elem)) {
            intersection.add(elem);
        }
    }
    return intersection;
}
var setA = new Set([1, 2, 3, 4]),
    setB = new Set([2, 3]);
intersectSets(setA, setB); // Set {2, 3}

function isSuperset (setA, subset) {
    for (var elem of subset) {
        if (!setA.has(elem)) {
            return false;
        }
    }
    return true;
}

var setA = new Set([1, 2, 3, 4]),
    setB = new Set([2, 3]),
    setC = new Set([5]);
isSuperset(setA, setB); 

setA.isSuperset(setC);

function unionSet(setA, setB) {
    var union = new Set(setA);
    for (var elem of setB) {
        union.add(elem);
    }
    return union;
}
var setA = new Set([1, 2, 3, 4]),
    setB = new Set([2, 3]),
    setC = new Set([5]);
unionSet(setA, setB);

unionSet(setA, setC);

function differenceSet(setA, setB) {
    var difference = new Set(setA);
    for (var elem of setB) {
        difference.delete(elem);
    }
    return difference;
}
var setA = new Set([1, 2, 3, 4]),
    setB = new Set([2, 3]);
differenceSet(setA, setB); // Set(2) {1, 4}



// Exercises
// Question 1
function checkDuplicates(arr) {
    var mySet = new Set(arr);
    return mySet.size < arr.length;
}
checkDuplicates([1,2,3,4,5]); // false
checkDuplicates([1,1,2,3,4,5]); // true


// Question 2
function uniqueList(arr1, arr2) {
    var mySet = new Set(arr1.concat(arr2));
    return Array.from(mySet);
}
uniqueList([1,1,2,2],[2,3,4,5]); // [1,2,3,4,5]
uniqueList([1,2],[3,4,5]); // [1,2,3,4,5]
uniqueList([],[2,2,3,4,5]); // [2,3,4,5]


