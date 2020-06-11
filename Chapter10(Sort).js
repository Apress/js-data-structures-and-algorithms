function bubbleSort(array) {
    for (var i = 0, arrayLength = array.length; i < arrayLength; i++) {
        for (var j = 0; j <= i; j++) {
            if (array[j] > array[j+1]) {
                swap(array, i, j);
            }
        }
    }
    return array;
}

function swap(array, index1, index2) {
    var temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
}

bubbleSort([6, 1, 2, 3, 4, 5]); // [1,2,3,4,5,6]


function selectionSort(items) {
    var len = items.length,
        min;

    for (var i = 0; i < len; i++) {
        // set minimum to this position
        min = i;
        //check the rest of the array to see if anything is smaller
        for (j = i + 1; j < len; j++) {
            if (items[j] < items[min]) {
                min = j;
            }
        }
        //if the minimum isn't in the position, swap it
        if (i != min) {
            swap(items, i, min);
        }
    }

    return items;
}
selectionSort([6, 1, 23, 4, 2, 3]); // [1, 2, 3, 4, 6, 23]

function insertionSort(items) {
    var len = items.length, // number of items in the array
        value, // the value currently being compared
        i, // index into unsorted section
        j; // index into sorted section

    for (i = 0; i < len; i++) {
        // store the current value because it may shift later
        value = items[i];

        // Whenever the value in the sorted section is greater than the value
        // in the unsorted section, shift all items in the sorted section over
        //by one. This creates space in which to insert the value.

        for (j = i - 1; j > -1 && items[j] > value; j--) {
            items[j + 1] = items[j];
        }
        items[j + 1] = value;
    }
    return items;
}
insertionSort([6, 1, 23, 4, 2, 3]); // [1, 2, 3, 4, 6, 23]

function quickSort(items) {
    return quickSortHelper(items, 0, items.length - 1);
}

function quickSortHelper(items, left, right) {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right);

        if (left < index - 1) {
            quickSortHelper(items, left, index - 1);
        }

        if (index < right) {
            quickSortHelper(items, index, right);
        }
    }
    return items;
}

function partition(array, left, right) {
    var pivot = array[Math.floor((right + left) / 2)];
    while (left <= right) {
        while (pivot > array[left]) {
            left++;
        }
        while (pivot < array[right]) {
            right--;
        }
        if (left <= right) {
            var temp = array[left];
            array[left] = array[right];
            array[right] = temp;
            left++;
            right--;
        }
    }
    return left;
}

quickSort([6, 1, 23, 4, 2, 3]); // [1, 2, 3, 4, 6, 23]

var array = [1, 3, 3, -2, 3, 14, 7, 8, 1, 2, 2];
// sorted form: [-2, 1, 1, 2, 2, 3, 3, 3, 7, 8, 14]

function quickSelectInPlace(A, l, h, k) {
    var p = partition(A, l, h);
    if (p == (k - 1)) {
        return A[p];
    } else if (p > (k - 1)) {
        return quickSelectInPlace(A, l, p - 1, k);
    } else {
        return quickSelectInPlace(A, p + 1, h, k);
    }
}

function medianQuickselect(array) {
    return quickSelectInPlace(array, 0, array.length - 1, Math.floor(array.length / 2));
}

quickSelectInPlace(array, 0, array.length - 1, 5); // 2
// 2 - because it's the fifth smallest element
quickSelectInPlace(array, 0, array.length - 1, 10); // 7 
// 7 - because it's the tenth smallest element

function merge(leftA, rightA){
    var results= [], leftIndex= 0, rightIndex= 0;

    while (leftIndex < leftA.length && rightIndex < rightA.length) {
        if( leftA[leftIndex]<rightA[rightIndex] ){
            results.push(leftA[leftIndex++]);
        } else {
            results.push(rightA[rightIndex++]);
        }
    }
    var leftRemains = leftA.slice(leftIndex),
        rightRemains = rightA.slice(rightIndex);

    // add remaining to resultant array
    return results.concat(leftRemains).concat(rightRemains);
}

function mergeSort(array) {
    if(array.length<2){
        return array; // Base case: array is now sorted since it's just 1 element
    }

    var midpoint = Math.floor((array.length)/2),
        leftArray = array.slice(0, midpoint),
        rightArray = array.slice(midpoint);

    return merge(mergeSort(leftArray), mergeSort(rightArray));
}
mergeSort([6,1,23,4,2,3]); // [1, 2, 3, 4, 6, 23]

function countSort(array) {
    var hash = {},
        countArr = [];
    for (var i = 0; i < array.length; i++) {
        if (!hash[array[i]]) {
            hash[array[i]] = 1;
        } else {
            hash[array[i]]++;
        }
    }

    for (var key in hash) {
        // for any number of _ element, add it to array
        for (var i = 0; i < hash[key]; i++) {
            countArr.push(parseInt(key));
        }
    }

    return countArr;
}
countSort([6, 1, 23, 2, 3, 2, 1, 2, 2, 3, 3, 1, 123, 123, 4, 2, 3]); // [1, 2, 3, 4, 6, 23]

var array1 = [12,3,4,2,1,34,23];
array1.sort(); // array1: [1, 12, 2, 23, 3, 34, 4]

var array1 = [12,3,4,2,1,34,23];

function comparatorNumber(a,b) {
    return a-b;
}

array1.sort(comparatorNumber);

var array1 = [12,3,4,2,1,34,23];

function comparatorNumber(a,b) {
    return b-a;
}

array1.sort(comparatorNumber); 

var mythical = ['dragon', 'slayer','magic','wizard of oz', 'ned stark'];

function sortComparator(a,b){
    return a.length - b.length;
}
mythical.sort(sortComparator);

var mythical = ['dragon', 'slayer','magic','wizard of oz', 'ned tark'];

function sortComparator(a,b){
    return a.indexOf("a") - b.indexOf("a");
}

mythical.sort(sortComparator);

var mythical=[{prop1:'', prop2:''},{prop1:'', prop2:'', prop3:''},{prop1:'', prop2:''}];

function sortComparator(a,b){
    return Object.keys(a).length - Object.keys(b).length;
}

mythical.sort(sortComparator); // [{prop1:'', prop2:''},{prop1:'', prop2:''},{prop1:'', prop2:'', prop3:''}]

function wordCount(sentence) {
  // period with nothing so it doesn't count as word
  var wordsArray = sentence.replace(/[.]/g, "").split(" "),
      occurenceList = {},
      answerList = {};

  for (var i = 0, wordsLength = wordsArray.length; i < wordsLength; i++) {
      var currentWord = wordsArray[i];
      if (!occurenceList[currentWord]) { // doesn't exist, set as 1st occurrence
          occurenceList[currentWord] = 1;
      } else {
          occurenceList[currentWord]++; // add occurrences
      }
  }

  var arrayTemp = [];
  // push the value and key as fixed array
  for (var prop in occurenceList) {
      arrayTemp.push([occurenceList[prop], prop]);
  }

  function sortcomp(a, b) {
      return b[0] - a[0]; // compare the first element of the array
  }

  arrayTemp.sort(sortcomp); //sort

  for (var i = 0, arrlength = arrayTemp.length; i < arrlength; i++) {
      var current = arrayTemp[i];
      answerList[current[1]] = current[0]; // key value pairs
  }
  return answerList;
}
wordCount("practice makes perfect. get perfect by practice. just practice");
