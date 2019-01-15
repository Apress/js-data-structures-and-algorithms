
function linearSearch(array, n) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] == n) {
            return true;
        }
    }
    return false;
}

console.log(linearSearch([1,2,3,4], 4));
console.log(linearSearch([1,2,3,4], 5));

function binarySearch(array, n) {
    var lowIndex = 0,
        highIndex = array.length - 1;

    while (lowIndex <= highIndex) {
        var midIndex = Math.floor((highIndex + lowIndex) / 2);
        if (array[midIndex] == n) {
            return midIndex;
        } else if (n > array[midIndex]) {
            lowIndex = midIndex+1;
        } else {
            highIndex = midIndex-1;
        }
    }
    return -1;
}
console.log(binarySearch([1,2,3,4], 4));
console.log(binarySearch([1,2,3,4], 5));

function binarySearch(array, startIndex, endIndex, value) {
    if (startIndex > endIndex) {
        return false;
    }
    var middleIndex = Math.floor((startIndex + endIndex) / 2);

    if (array[middleIndex] == value) {
        return middleIndex;
    } else if (array[middleIndex] > value) {
        return binarySearch(array, startIndex, middleIndex - 1);
    } else {
        return binarySearch(array, middleIndex + 1, endIndex);
    }
}
binarySearch([-121, 2, 3, 4, 5, 71, 102], 0, 6, 4);

function sqrtIntNaive(number){
    if(number == 0 || number == 1)
        return number;      

    var index = 1, square = 1;

    while(square < number){
        if (square == number){
            return square;
        }

        index++;
        square = index*index;
    }
    return index;
}
sqrtIntNaive(9);

function sqrtInt(number) {
    if (number == 0 || number == 1) return number;

    var start = 1,
        end = number,
        ans;

    while (start <= end) {
        let mid = parseInt((start + end) / 2);

        if (mid * mid == number)
            return mid;

        if (mid * mid < number) {
            start = mid + 1; // use the upper section
            ans = mid;
        } else {
            end = mid - 1; // use the lower section
        }
    }
    return ans;
}
sqrtInt(9);

function sqrtDouble(number) {
    var threshold = 0.1;
    //9 try middle,
    var upper = number;
    var lower = 0;
    var middle;
    while (upper - lower > threshold) {
        middle = (upper + lower) / 2;
        if (middle * middle > number) {
            upper = middle;
        } else {
            lower = middle;
        }
    }
    return middle
}
sqrtDouble(9); // 3.0234375

function findTwoSum(array, sum) {
    for(let i=0, arrayLength = array.length; i<arrayLength;i++){
        for(let j=i;j<arrayLength;j++){
            if(array[j]+array[i]){
                return true;
            }
        }
    }
    return false;
}

function findTwoSum(array, sum){
    var store = {};

    for(let i=0, arrayLength = array.length; i<arrayLength;i++){
        console.log(store);
        if(store[sum-array[i]]){
            return true;
        }else{
            store[sum-array[i]] = array[i];
        }
    }
    return false;
}

console.log(findTwoSum([1,2,3],5));

function findOnlyOnce(arr, low, high) {
    if (low > high) {
        return null;
    }
    if (low == high) {
        return arr[low];
    }
    
    var mid = Math.floor((high+low)/2);
    
    if (mid%2 == 0) {
        if (arr[mid] == arr[mid+1]) {
            return findOnlyOnce(arr, mid+2, high);
        } else {
            return findOnlyOnce(arr, low, mid);
        }
    } else {
        if (arr[mid] == arr[mid-1]) {
            return findOnlyOnce(arr, mid+1, high);
        } else {
            return findOnlyOnce(arr, low, mid-1);
        }
    }
}

function findOnlyOnceHelper(arr) {
    return findOnlyOnce(arr, 0, arr.length);
}
findOnlyOnceHelper([ 1, 1, 2, 4, 4, 5, 5, 6, 6 ]);
### 4. Find the minimum element in a sorted and rotated array
function findMinRotated(arr, low, high){
    // This condition is needed to handle the case when array is not
    // rotated at all
    if (high < low)  return arr[0];

    // If there is only one element left
    if (high == low) return arr[low];

    // Find mid
    var mid = Math.floor((low+high)/2); 

    // Check if element (mid+1) is minimum element. Consider
    // the cases like {3, 4, 5, 1, 2}
    if (mid < high && arr[mid+1] < arr[mid])
       return arr[mid+1];

    // Check if mid itself is minimum element
    if (mid > low && arr[mid] < arr[mid - 1])
       return arr[mid];

    // Decide whether we need to go to left half or right half
    if (arr[high] > arr[mid])
       return findMinRotated(arr, low, mid-1);
    return findMinRotated(arr, mid+1, high);
}

function findMinRotatedHelper(arr) {
    return findMinRotated(arr, 0, arr.length-1);
}
findMinRotatedHelper([5,6,1,2,3]);
