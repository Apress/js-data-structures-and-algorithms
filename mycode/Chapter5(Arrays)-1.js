function arraySlice(array, beginIndex, endIndex) {
    if (!beginIndex && !endIndex) {
        return array;
    }

    if (!endIndex) endIndex = array.length;

    var partArray = [];

    for (var i = beginIndex; i < endIndex; i++) {
        partArray.push(array[i]);
    }
    return partArray;
}

//중앙값 : 어떤 주어진 값들을 크기 순서대로 정렬했을 때 가장 중앙에 위치하는 값
//값이 짝수개일 때에는 중앙값이 두 개가 될 수도 있다. 이 경우 두 값의 평균을 취한다
function medianOfArray(array) {
    var length = array.length;
    if (length % 2 == 1) {
        //홀수일 경우
        return array[Math.floor(length / 2)];
    } else {
        //짝수일 경우
        return (array[length / 2] + array[length / 2 - 1]) / 2;
    }
}

function commonElements(kArray) {
    var hashmap = {},
        last,
        answer = [];

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
            console.log(last);
        }
    }

    for (var prop in hashmap) {
        if (hashmap[prop] == kArray.length) {
            answer.push(parseInt(prop));
        }
    }
    return answer;
}

function newCommonElements(kArray) {
    var hashmap = {},
        answer = [];

    for (var i = 0, kArrayLength = kArray.length; i < kArrayLength; i++) {
        var currentArray = kArray[i];
        last = null;
        for (var j = 0, currentArrayLen = currentArray.length; j < currentArrayLen; j++) {
            var currentElement = currentArray[j];
            console.log(currentElement, hashmap.hasOwnProperty(currentElement));
            //currentElement 키가 없다면 값을 넣고
            if (!hashmap[currentElement]) {
                hashmap[currentElement] = 1;
                //첫번째 배열을 돌고 있다면 각 키별 값은 1을 넘을 수 없고,
                //두번째 배열을 돌고 있다면 각 키별 값은 2를 넘을 수 없다.
                //최종적으로 각 키별 값은 kArray의 길이를 넘을 수 없다.
                //앞에서 이미 currentElement가 있었을 경우 ++이 되었을 것이므로 그 경우 카운트하지 않는다.
            } else if (hashmap[currentElement] < i + 1) {
                hashmap[currentElement]++;
            }
        }
    }

    for (var prop in hashmap) {
        if (hashmap[prop] == kArray.length) {
            answer.push(parseInt(prop));
        }
    }
    return answer;
}

console.log(
    newCommonElements([
        [5, 2, 5, 10],
        [5, 5, 10, 4],
        [5, 10],
    ])
);
