const arr = [1, 2, 3, 4, 5, 6, 7];
const weight = 9;
const result = [];

function findSum(arr, weight) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === weight) {
                return [i, j];
            }
        }
    }
    return -1;
}

function newFindSum(arr, weight) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === weight) {
                result.push([i, j]);
            }
        }
    }
    return result.length === 0 ? -1 : result;
}

function findSumBetter(arr, weight) {
    var hashtable = {}; //객체

    for (var i = 0, arrLength = arr.length; i < arrLength; i++) {
        var currentElement = arr[i], //1, 2, 3, 4, 5
            difference = weight - currentElement; //8, 7, 6, 5, 4

        if (hashtable[currentElement] != undefined) {
            //있으면 이미 방문했다는 뜻이니까 //undefined
            return [i, hashtable[currentElement]]; //4, 3
        } else {
            hashtable[difference] = i; //{8 : 0, 7 : 1, 6 : 2, 5 : 3}
        }
    }
    return -1;
}
