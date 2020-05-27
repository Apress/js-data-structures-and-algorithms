var cache = {};

function fiboBest(n) {
    if (n <= 1) return n;
    if (cache[n]) return cache[n];
    return (cache[n] = fiboBest(n - 1) + fiboBest(n - 2));
}
fiboBest(10); // 55
function waysToCoverSteps(step) {
    if (step < 0) return 0;
    if (step == 0) return 1;

    return waysToCoverSteps(step - 1) + waysToCoverSteps(step - 2) + waysToCoverSteps(step - 3);
}
waysToCoverSteps(12);

function waysToCoverStepsDP(step) {
    var cache = {};
    if (step < 0) return 0;
    if (step == 0) return 1;

    // check if exists in cache
    if (cache[step]) {
        return cache[step];
    } else {
        cache[step] = waysToCoverStepsDP(step - 1) + waysToCoverStepsDP(step - 2) + waysToCoverStepsDP(step - 3);
        return cache[step];
    }
}
waysToCoverStepsDP(12);


function knapsackNaive(index, weights, values, target) {
    var result = 0;

    if (index <= -1 || target <= 0) {
        result = 0
    } else if (weights[index] > target) {
        result = knapsackNaive(index - 1, weights, values, target);
    } else {
        // Case 1:
        var current = knapsackNaive(index - 1, weights, values, target)
        // Case 2:
        var currentPlusOther = values[index] +
            knapsackNaive(index - 1, weights, values, target - weights[index]);

        result = Math.max(current, currentPlusOther);
    }
    return result;
}
var weights = [1, 2, 4, 2, 5],
    values = [5, 3, 5, 3, 2],
    target = 10;
knapsackNaive(4, weights, values, target);


function knapsackDP(index, weights, values, target, matrixDP) {
    var result = 0;

    // DP part
    if (matrixDP[index + '-' + target]) {
        return matrixDP[index + '-' + target];
    }

    if (index <= -1 || target <= 0) {
        result = 0
    } else if (weights[index] > target) {
        result = knapsackDP(index - 1, weights, values, target, matrixDP);
    } else {
        var current = knapsackDP(index - 1, weights, values, target, matrixDP),
            currentPlusOther = values[index] + knapsackDP(index - 1, weights, values, target - weights[index], matrixDP);
        result = Math.max(current, currentPlusOther);
    }
    matrixDP[index + '-' + target] = result
    return result;
}

knapsackDP(4, weights, values, target, {});



function LCSNaive(str1, str2, str1Length, str2Length) {
    if (str1Length == 0 || str2Length == 0) {
        return 0;
    }

    if (str1[str1Length - 1] == str2[str2Length - 1]) {
        return 1 + LCSNaive(str1, str2,
            str1Length - 1,
            str2Length - 1);
    } else {
        return Math.max(
            LCSNaive(str1, str2, str1Length, str2Length - 1),
            LCSNaive(str1, str2, str1Length - 1, str2Length)
        );
    }
}

function LCSNaiveWrapper(str1, str2) {
    return LCSNaive(str1, str2, str1.length, str2.length);
}
LCSNaiveWrapper('AGGTAB', 'GXTXAYB'); // 4


function longestCommonSequenceLength(str1, str2) {
	 var rowLength = str1.length,
         colLength = str2.length;

 	let matrix = new Array(str1.length + 1);

    for(let i = 0; i <= str1.length; i++){
        matrix[i] = new Array(str2.length + 1).fill(0);
    }

    for (let row = 1; row <= rowLength; row++) {
        for (let col = 1; col <= colLength; col++) {
           if ( str1[row-1] === str2[col-1] ) {
               	 matrix[row][col] = 1 + matrix[row - 1][col - 1];
           }
		   else {
                 matrix[row][col] = Math.max(matrix[row-1][col], matrix[row][col-1]);
           }
        }
    }
    return  matrix[rowLength][colLength];
}

longestCommonSequenceLength('abcd', 'bc');


// Returns the count of ways we can sum coinArr which have 
// index like: [0,...,numCoins]
function countCoinWays(coinArr, numCoins, coinValue) {
    if (coinValue == 0) {
        // if the value reached zero, then only solution is
        // to not include any coin
        return 1;
    }
    if (coinValue < 0 || (numCoins <= 0 && coinValue >= 1)) {
        // value is less than 0 means no solution
        // no coins left but coinValue left also means no solution
        return 0;
    }
    //
    return countCoinWays(coinArr, numCoins - 1, coinValue) +
        countCoinWays(coinArr, numCoins, coinValue - coinArr[numCoins - 1]);
}

function countCoinWaysWrapper(coinArr, coinValue) {
    return countCoinWays(coinArr, coinArr.length, coinValue);
}
countCoinWaysWrapper([1, 2, 3], 4);


function countCoinWaysDP(coinArr, numCoins, coinValue) {
    // creating the matrix
    var dpMatrix = [];

    for (var i = 0; i <= coinValue; i++) {
        dpMatrix[i] = [];
        for (var j = 0; j < numCoins; j++) {
            dpMatrix[i][j] = undefined;
        }
    }

    for (var i = 0; i < numCoins; i++) {
        dpMatrix[0][i] = 1;
    }

    for (var i = 1; i < coinValue + 1; i++) {
        for (var j = 0; j < numCoins; j++) {
            var temp1 = 0,
                temp2 = 0;

            if (i - coinArr[j] >= 0) {
                // solutions including coinArr[j]
                temp1 = dpMatrix[i - coinArr[j]][j];
            }

            if (j >= 1) {
                // solutions excluding coinArr[j]
                temp2 = dpMatrix[i][j - 1];
            }

            dpMatrix[i][j] = temp1 + temp2;
        }
    }
    return dpMatrix[coinValue][numCoins - 1];
}

function countCoinWaysDPWrapper(coinArr, coinValue) {
    return countCoinWaysDP(coinArr, coinArr.length, coinValue);
}
countCoinWaysDPWrapper([1, 2, 3], 4);


function editDistanceRecursive(str1, str2, length1, length2) {
    // str1 is empty. only option is insert all of str2
    if (length1 == 0) {
        return length2;
    }
    // str2 is empty. only option is insert all of str1
    if (length2 == 0) {
        return length1;
    }

    // last chars are same,
    // ignore last chars and count remaining
    if (str1[length1 - 1] == str2[length2 - 1]) {
        return editDistanceRecursive(str1, str2,
            length1 - 1, length2 - 1);
    }

    // last char is not the same
    // there are three operations: insert, remove, replace
    return 1 + Math.min(
        // insert
        editDistanceRecursive(str1, str2, length1, length2 - 1),
        // remove
        editDistanceRecursive(str1, str2, length1 - 1, length2),
        // replace
        editDistanceRecursive(str1, str2, length1 - 1, length2 - 1)
    );
}

function editDistanceRecursiveWrapper(str1, str2) {
    return editDistanceRecursive(str1, str2, str1.length, str2.length);
}

editDistanceRecursiveWrapper('sammie', 'bae');


function editDistanceDP(str1, str2, length1, length2) {
    // creating the matrix
    var dpMatrix = [];
    for (var i = 0; i < length1 + 1; i++) {
        dpMatrix[i] = [];
        for (var j = 0; j < length2 + 1; j++) {
            dpMatrix[i][j] = undefined;
        }
    }

    for (var i = 0; i < length1 + 1; i++) {
        for (var j = 0; j < length2 + 1; j++) {
            // if first str1 is empty,
            // have to insert all the chars of str2
            if (i == 0) {
                dpMatrix[i][j] = j;
            } else if (j == 0) {
                dpMatrix[i][j] = i;
            } else if (str1[i - 1] == str2[j - 1]) {
                // if the same, no additional cost
                dpMatrix[i][j] = dpMatrix[i - 1][j - 1];
            } else {
                var insertCost = dpMatrix[i][j - 1],
                    removeCost = dpMatrix[i - 1][j],
                    replaceCost = dpMatrix[i - 1][j - 1];

                dpMatrix[i][j] = 1 + Math.min(insertCost, removeCost, replaceCost);
            }
        }
    }
    return dpMatrix[length1][length2];
}

function editDistanceDPWrapper(str1, str2) {
    return editDistanceDP(str1, str2, str1.length, str2.length);
}

editDistanceDPWrapper('sammie', 'bae');
