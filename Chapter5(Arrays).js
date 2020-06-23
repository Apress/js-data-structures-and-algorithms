
var array1 = [1,2,3,4];

array1  = [1,2,3,4];
array1.push(5); // array1 = [1,2,3,4,5]
array1.push(7); // array1 = [1,2,3,4,5,7]
array1.push(2); // array1 = [1,2,3,4,5,7,2]
console.log(array1);

array1  = [1,2,3,4];
array1.pop(); //returns 4, array1 = [1,2,3]
array1.pop(); //returns 3, array1 = [1,2]

array1  = [1,2,3,4];
array1.shift(); //returns 1, array1 = [2,3,4]
array1.shift(); //returns 2, array1 = [3,4]

array1  = [1,2,3,4];
console.log(array1[0]); //returns 1
console.log(array1[1]); //returns 2

for ( var i=0; i<array1.length; i++ ) {
    // insert code here
}

var counter=0;
while(counter<array1.length){
    // insert code here
    counter++;
}

breakCondition = true;
while(true){
    if (breakCondition) {
        break;
    }
}

for ( ; ;) {
    if (breakCondition) {
        break
    }
}

var array1 = ['all','cows','are','big'];

for (var index in array1) {
    console.log(index);
}

for (var index in array1) {
    console.log(array1[index]);
}

for (var element of array1) {
    console.log(element);
}

var array1 = ['all','cows','are','big'];

array1.forEach( function (element, index){
    console.log(element);
});

array1.forEach( function (element, index){
    console.log(array1[index]);
});

var array1  = [1,2,3,4];
array1.slice(1,2); //returns [2], array1  = [1,2,3,4]
array1.slice(2,4); //returns [3,4], array1  = [1,2,3,4]

array1.slice(1);   //returns [2,3,4], array1  = [1,2,3,4]
array1.slice(1,4); //returns [2,3,4], array1  = [1,2,3,4]

array1.slice(); //returns [1,2,3,4], array1 = [1,2,3,4]

var array1 = [1,2,3,4],
    array2 = array1;

console.log(array1); // [1,2,3,4]
console.log(array2); // [1,2,3,4]

array2[0] = 5;

console.log(array1); // [5,2,3,4]
console.log(array2); // [5,2,3,4]

var array1 = [1,2,3,4];
var array2 = array1.slice();

console.log(array1); // [1,2,3,4]
console.log(array2); // [1,2,3,4]

array2[0] = 5;

console.log(array1); // [1,2,3,4]
console.log(array2); // [5,2,3,4]

var array1 = [1,2,3,4];
array1.splice(); //returns [], array1 = [1,2,3,4]
array1.splice(1,2); //returns [2,3], array1 = [1,4]

var array1 = [1,2,3,4];
array1.splice(); //returns [], array1 = [1,2,3,4]
array1.splice(1,2,5,6,7); //returns [2,3],array1 = [1,5,6,7,4]

array1 = [1,2,3,4];
array1.splice(1,2,[5,6,7]);  //returns [2,3],  array1 = [1,[5,6,7],4]
array1 = [1,2,3,4];
array1.splice(1,2,{'ss':1}); //returns [2,3], array1 = [1,{'ss':1},4]

var array1 = [1,2,3,4];
array1.concat(); //returns [], array1 = [1,2,3,4]
array1.concat([2,3,4]); //returns [1,2,3,4,2,3,4],array1 = [1,2,3,4,2,3,4]

var array1 = [1,2,3,4];
console.log(array1.length); //prints 4
array1.length = 3; // array1 = [1,2,3]

// Spread operator
function addFourNums(a, b, c, d) {
    return a + b + c + d;
}
var numbers = [1, 2, 3, 4];
console.log(addFourNums(...numbers)); // 10


var array1 = [1,2,3,4,5];
Math.max.apply(null,array1); // 5

var array2 = [3,2,-123,2132,12];
Math.min.apply(null,array2); // -123

function findSum(arr, weight) {
    for (var i=0,arrLength=arr.length; i<arrLength; i++){
        for (var j=i+1; j<arrLength; j++) {
            if (arr[i]+arr[j]==weight){
                return [i,j];
            }
        }
    }
    return -1;
}
findSum([1,2,3,4],5); // [ 0, 3 ]

var arr = [1,2,3,4,5];
var weight = 9;

function findSumBetter(arr, weight) {
    var hashtable = {};

    for (var i = 0, arrLength = arr.length; i < arrLength; i++) {
        var currentElement = arr[i],
            difference = weight - currentElement;

        // check the right one already exists
        if (hashtable[currentElement] != undefined) {
            return [i, hashtable[currentElement]];
        } else {
            // store index
            hashtable[difference] = i;
        }
    }
    return -1;
}
findSumBetter([1, 2, 3, 4,5], 9); // [ 4, 3 ]


function arraySlice(array, beginIndex, endIndex) {
    // If no parameters passed, return the array
    if (!beginIndex && !endIndex) {
        return array;
    }

    // If only beginning index is found, set endIndex to size
    if (!endIndex)  
        endIndex = array.length;

    var partArray = [];

    // If both begin and end index specified return the part of the array
    for (var i = beginIndex; i < endIndex; i++) {
        partArray.push(array[i]);
    }

    return partArray;
}
arraySlice([1, 2, 3, 4], 1, 2); // [2]
arraySlice([1, 2, 3, 4], 2, 4); // [3,4]


function medianOfArray(array) {
    var length = array.length;
    // Odd
    if (length % 2 == 1) {
        return array[Math.floor(length / 2)];
    } else {
        // Even
        return (array[length / 2] + array[length / 2 - 1]) / 2;
    }
}
// arr2 is the bigger array
function medianOfTwoSortedArray(arr1, arr2, pos) {
    if (pos <= 0) {
        return -1;
    }
    if (pos == 1) {
        return (arr1[0] + arr2[0]) / 2;
    }
    if (pos == 2) {
        return (Math.max(arr1[0], arr2[0]) + Math.min(arr1[1], arr2[1])) / 2;
    }

    var median1 = medianOfArray(arr1),
        median2 = medianOfArray(arr2);

    if (median1 == median2) {
        return median1;
    }

    var evenOffset = pos % 2 == 0 ? 1 : 0,
        offsetMinus = Math.floor(pos / 2) - evenOffset,
        offsetPlus = pos - Math.floor(pos / 2) + evenOffset;


    if (median1 < median2) {
        return medianOfTwoSortedArray(arr1.slice(offsetMinus), arr2.slice(0, -offsetMinus), offsetPlus);
    } else {
        return medianOfTwoSortedArray(arr2.slice(offsetMinus), arr1.slice(0, -offsetMinus), offsetPlus);
    }
}

medianOfTwoSortedArray([1, 2, 3], [4, 5, 6], 3); // 3.5
medianOfTwoSortedArray([11, 23, 24], [32, 33, 450], 3); // 28
medianOfTwoSortedArray([1, 2, 3], [2, 3, 5], 3); // 2.5



function commonElements(kArray) {
    var hashmap = {},
        last, answer = [];

    for (var i = 0, kArrayLength = kArray.length; i < kArrayLength; i++) {
        var currentArray = kArray[i];
        last = null;
        for (var j = 0, currentArrayLen = currentArray.length; j < currentArrayLen; j++) {
            var currentElement = currentArray[j];
            if (last != currentElement) {
                if (!hashmap[currentElement]) {
                    hashmap[currentElement] = 1;
                } else {
                    hashmap[currentElement]++;
                }
            }
            last = currentElement;
        }
    }

    // Iterate through hashmap
    for (var prop in hashmap) {
        if (hashmap[prop] == kArray.length) {
            answer.push(parseInt(prop));
        }
    }
    return answer;
}

commonElements([
    [1, 2, 3],
    [1, 2, 3, 4],
    [1, 2]
]); // [ 1, 2 ]

[1,2,3,4,5,6,7].map(function (value){
    return value*10;
});
// [10, 20, 30, 40, 50, 60, 70]

[100,2003,10,203,333,12].filter(function (value){
    return value > 100;
});
// [2003, 203, 333]

// Reduce
var sum = [0,1,2,3,4].reduce( function (prevVal, currentVal, index, array) {
    return prevVal + currentVal;
}, 1);
console.log(sum); // prints 11

function Matrix(rows, columns)  {
    var jaggedarray = new Array(rows);
    for (var i=0; i < columns; i +=1) {
        jaggedarray[i]=new Array(rows);
    }
    return jaggedarray;
}
console.log(Matrix(3,3));

var matrix3by3 = [[1,2,3],[4,5,6],[7,8,9]];
matrix3by3[0]; // [1,2,3]
matrix3by3[1]; // [4,5,6]
matrix3by3[2]; // [7,8,9]

matrix3by3[0][0]; // 1
matrix3by3[0][1]; // 2
matrix3by3[0][2]; // 3

matrix3by3[1][0]; // 4
matrix3by3[1][1]; // 5
matrix3by3[1][2]; // 6

matrix3by3[2][0]; // 7
matrix3by3[2][1]; // 8
matrix3by3[2][2]; // 9

var M = [ [1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20]];
function spiralPrint(M) {
    var topRow = 0,
        leftCol = 0,
        btmRow = M.length - 1,
        rightCol = M[0].length - 1;

    while (topRow < btmRow && leftCol < rightCol) {
        for (var col = 0; col <= rightCol; col++) {
            console.log(M[topRow][col]);
        }
        topRow++;
        for (var row = topRow; row <= btmRow; row++) {
            console.log(M[row][rightCol]);
        }
        rightCol--;
        if (topRow <= btmRow) {
            for (var col = rightCol; col > 0; col--) {
                console.log(M[btmRow][col]);
            }
            btmRow--;
        }
        if (leftCol <= rightCol) {
            for (var row = btmRow; row > topRow; row--) {
                console.log(M[row][leftCol]);
            }
            leftCol++;
        }
    }
}
spiralPrint(M);

function checkRow ( rowArr, letter ) {
    for ( var i=0; i < 3; i++) {
        if (rowArr[i]!=letter) {
            return false;
        }
    }
    return true;
}

function checkColumn ( gameBoardMatrix, columnIndex, letter ) {
    for ( var i=0; i < 3; i++) {
        if (gameBoardMatrix[i][columnIndex]!=letter) {
            return false;
        }
    }
    return true;
}

function ticTacToeWinner ( gameBoardMatrix, letter) {

    // Check rows
    var rowWin = checkRow(gameBoardMatrix[0], letter)
        || checkRow(gameBoardMatrix[1], letter)
        || checkRow(gameBoardMatrix[2], letter);

    var colWin = checkColumn(gameBoardMatrix, 0, letter)
        || checkColumn(gameBoardMatrix, 1, letter)
        || checkColumn(gameBoardMatrix, 2, letter);

    var diagonalWinLeftToRight = (gameBoardMatrix[0][0]==letter && gameBoardMatrix[1][1]==letter && gameBoardMatrix[2][2]==letter);
    var diagonalWinRightToLeft = (gameBoardMatrix[0][2]==letter && gameBoardMatrix[1][1]==letter && gameBoardMatrix[2][0]==letter);

    return rowWin || colWin || diagonalWinLeftToRight || diagonalWinRightToLeft;
}

var board = [['O','-','X'],['-','O','-'],['-','X','O']];
ticTacToeWinner(board, 'X'); // false
ticTacToeWinner(board, 'O'); // true

var board =
    `%e%%%%%%%%%\n
%...%.%...%\n
%.%.%.%.%%%\n
%.%.......%\n
%.%%%%.%%.%\n
%.%.....%.%\n
%%%%%%%%%x%`

var rows = board.split("\n");

function generateColumnArr(arr) {
    return arr.split("");
}
var mazeMatrix = rows.map(generateColumnArr);

function findChar(char, mazeMatrix) {
    var row = mazeMatrix.length,
        column = mazeMatrix[0].length;

    for (var i = 0; i < row; i++) {
        for (var j = 0; j < column; j++) {
            if (mazeMatrix[i][j] == char) {
                return [i, j];
            }
        }
    }
}

function printMatrix(matrix) {
    var mazePrintStr = "",
        row = matrix.length,
        column = matrix[0].length;

    for (var i = 0; i < row; i++) {

        for (var j = 0; j < column; j++) {
            mazePrintStr += mazeMatrix[i][j];
        }

        mazePrintStr += "\n";

    }
    console.log(mazePrintStr);
}

function mazePathFinder(mazeMatrix) {
    var row = mazeMatrix.length,
        column = mazeMatrix[0].length,
        startPos = findChar('e', mazeMatrix),
        endPos = findChar('x', mazeMatrix);

    path(startPos[0], startPos[1]);

    function path(x, y) {
        if (x > row - 1 || y > column - 1 || x < 0 || y < 0) {
            return false;
        }
        // Found
        if (x == endPos[0] && y == endPos[1]) {
            return true;
        }
        if (mazeMatrix[x][y] == '%' || mazeMatrix[x][y] == '+') {
            return false;
        }
        // Mark the current spot
        mazeMatrix[x][y] = '+';
        printMatrix(mazeMatrix);

        if (path(x, y - 1) || path(x + 1, y) || path(x, y + 1) || path(x - 1, y)) {
            return true;
        }
        mazeMatrix[x][y] = '.';
        return false;
    }
}

mazePathFinder(mazeMatrix);

var matrix = [
    [1, 0, 1],
    [0, 0, 1],
    [1, 1, 1]
];
rotateMatrix90Left(matrix);

function rotateMatrix90Left(mat) {
    var N = mat.length;

    // Consider all squares one by one
    for (var x = 0; x < N / 2; x++) {
        // Consider elements in group of 4 in
        // current square
        for (var y = x; y < N - x - 1; y++) {
            // store current cell in temp variable
            var temp = mat[x][y];

            // move values from right to top
            mat[x][y] = mat[y][N - 1 - x];

            // move values from bottom to right
            mat[y][N - 1 - x] = mat[N - 1 - x][N - 1 - y];

            // move values from left to bottom
            mat[N - 1 - x][N - 1 - y] = mat[N - 1 - y][x];

            // assign temp to left
            mat[N - 1 - y][x] = temp;
        }
    }
}

console.log(matrix); // [[1,1,1],[0,0,1],[1,0,1]]
