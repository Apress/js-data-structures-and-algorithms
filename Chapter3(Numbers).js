
0.1 + 0.2 === 0.3;

5/4; // 1.25

Math.floor(0.9); // 0
Math.floor(1.1); // 1

Math.round(0.49); // 0
Math.round(0.5); // 1
Math.round(2.9); // 3

Math.ceil(0.1); // 1
Math.ceil(0.9); // 1
Math.ceil(21); // 21
Math.ceil(21.01); // 22

function numberEquals(x, y) {
    return Math.abs(x - y) < Number.EPSILON;
}
0.1 + 0.2 == 0.3 // false due to little difference in floating point
numberEquals(0.1 + 0.2, 0.3); // true

Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2; // true

Number.MAX_SAFE_INTEGER + 1.111 === Number.MAX_SAFE_INTEGER + 2.022; // false

Number.MAX_VALUE + 1 === Number.MAX_VALUE + 2; // true

Number.MAX_VALUE + 1.111 === Number.MAX_VALUE + 2.022; // true

Number.MIN_SAFE_INTEGER - 1 === Number.MIN_SAFE_INTEGER - 2; // true

Number.MIN_SAFE_INTEGER - 1.111 === Number.MIN_SAFE_INTEGER - 2.022; // false

Number.MIN_VALUE - 1 == -1; // true

Infinity > Number.MAX_SAFE_INTEGER; // true
-Infinity < Number.MAX_SAFE_INTEGER // true
-Infinity -32323323 == -Infinity -1; // true

function isPrime(n) {
    if (n <= 1) {
        return false;
    }

    // check from 2 to n-1
    for (var i = 2; i < n; i++) {
        if (n % i == 0) {
            return false;
        }
    }

    return true;
}
isPrime(31);

function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;

    // This is checked so that we can skip
    // middle five numbers in below loop
    if (n % 2 == 0 || n % 3 == 0) return false;

    for (var i = 5; i * i <= n; i = i + 6) {
        if (n % i == 0 || n % (i + 2) == 0)
            return false;
    }

    return true;
}
isPrime(31);


function primeFactors(n) {
    // Print the number of 2s that divide n
    while (n % 2 == 0) {
        console.log(2);
        n = n / 2;
    }

    // n must be odd at this point. So we can skip one element (Note i = i +2)
    for (var i = 3; i * i <= n; i = i + 2) {
        // While i divides n, print i and divide n
        while (n % i == 0) {
            console.log(i);
            n = n / i;
        }
    }
    // This condition is to handle the case when n is a prime number
    // greater than 2
    if (n > 2) {
        console.log(n);
    }
}
primeFactors(10); // prints '5' and '2'

Math.random() * 100; // floats between 0 and 100
Math.random() * 25 + 5; // floats between 5 and 30
Math.random() * 10 - 100; // floats between -100 and -90

Math.floor(Math.random()) * 100; // integer between 0 and 99
Math.round(Math.random()) * 25 + 5; // integer between 5 and 30
Math.ceil(Math.random()) * 10 - 100; // integer between -100 and -90

function modularExponentiation(base, exponent, modulus) {
    return Math.pow(base, exponent) % modulus;
}
modularExponentiation(4,3,5); // 4

function modularExponentiation(base, exponent, modulus) {
    if (modulus == 1) return 0;

    var value = 1;

    for (var i = 0; i < exponent; i++) {
        value = (value * base) % modulus;
    }
    return value;
}
modularExponentiation(4,3,5); // 4

function allPrimesLessThanN(n) {
    for (var i = 0; i < n; i++) {
        if (isPrime(i)) {
            console.log(i);
        }
    }
}


allPrimesLessThanN(15);
// prints 2, 3, 5, 7, 11, 13

function maxDivide(number, divisor) {
    while (number % divisor == 0) {
        number /= divisor;
    }
    return number;
}

function isUgly(number) {
    number = maxDivide(number, 2);
    number = maxDivide(number, 3);
    number = maxDivide(number, 5);
    return number === 1;
}



function arrayNUglyNumbers(n) {
    var counter = 0,
        currentNumber = 1,
        uglyNumbers = [];

    while (counter != n) {

        if (isUgly(currentNumber)) {
            counter++;
            uglyNumbers.push(currentNumber);
        }

        currentNumber++;
    }

    return uglyNumbers;
}
arrayNUglyNumbers(12); // [ 1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 15, 16 ]
