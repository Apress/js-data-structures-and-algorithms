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

function newfindSum(arr, weight) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === weight) {
        result.push([i, j]);
      }
    }
  }
  return result.length === 0 ? -1 : result;
}

console.log(findSum(arr, weight));
console.log(newfindSum(arr, weight));
