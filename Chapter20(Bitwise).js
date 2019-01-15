function BitwiseAdd(a, b) {
    while (b != 0) {
        var carry = (a & b);
        a = a ^ b;
        b = carry << 1;
    }
    return a;
}

console.log(BitwiseAdd(4, 5)); // 9


function BitwiseNegate(a) {
    return BitwiseAdd(~a, 1);
}

console.log(BitwiseNegate(9)); // -9
// negation with itself gives back original
console.log(BitwiseNegate(BitwiseNegate(9))); // 9

function BitwiseSubtract(a, b) {
    return BitwiseAdd(a, BitwiseNegate(b));
}

console.log(BitwiseSubtract(5, 4)); // 1


function BitwiseMultiply(a, b) {
    var m = 1,
        c = 0;

    if (a < 0) {
        a = BitwiseNegate(a);
        b = BitwiseNegate(b);
    }
    while (a >= m && b) {
        if (a & m) {
            c = BitwiseAdd(b, c);
        }
        b = b << 1;
        m = m << 1;
    }
    return c;
}
console.log(BitwiseMultiply(4, 5)); // 20



function BitwiseDividePositive(a, b) {
    var c = 0;

    if (b != 0) {
        while (a >= b) {
            a = BitwiseSubtract(a, b);
            c++;
        }
    }
    return c;
}
console.log(BitwiseDividePositive(10, 2)); // 5



function BitwiseDivide(a, b) {
    var c = 0,
        isNegative = 0;

    if (a < 0) {
        a = BitwiseNegate(a); // convert to positive
        isNegative = !isNegative;
    }

    if (b < 0) {
        b = BitwiseNegate(b); // convert to positive
        isNegative = !isNegative;
    }

    if (b != 0) {
        while (a >= b) {
            a = BitwiseSubtract(a, b);
            c++;
        }
    }

    if (isNegative) {
        c = BitwiseNegate(c);
    }

    return c;
}

console.log(BitwiseDivide(10, 2)); // 5
console.log(BitwiseDivide(-10, 2)); // -5
console.log(BitwiseDivide(-200, 4)); // -50