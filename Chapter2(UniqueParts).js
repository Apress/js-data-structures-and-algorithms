
test = "sss";
console.log(test); // prints "sss"

function scope1(){
    var top = "top";
    bottom = "bottom";
    console.log(bottom);
    
    var bottom;
}
scope1(); // prints "bottom" - no error


function scope1(){
    var top = "top";
    var bottom;
    bottom = "bottom";
    console.log(bottom);
    
}
scope1(); // prints "bottom" - no error


function scope2(print) {
    if (print) {
        var insideIf = '12';
    }
    console.log(insideIf);
}
scope2(true); // prints '12' - no error

function scope2(print) {
    var insideIf;

    if (print) {
        insideIf = '12';
    }
    console.log(insideIf);
}
scope2(true); // prints '12' - no error

var a = 1;

function four() {
    if (true) {
        var a = 4;
    }
    console.log(a); // prints '4'
}
four();

function scope3(print) {
    if (print) {
        let insideIf = '12';
    }
    console.log(insideIf);
}
scope3(true); // prints ''

var is20 = false; // boolean
typeof is20; // boolean

var age = 19;
typeof age; // number

var lastName = "Bae";
typeof lastName; // string

var fruits = ["Apple", "Banana", "Kiwi"];
typeof fruits; // object

var me = {firstName:"Sammie", lastName:"Bae"};
typeof me; // object

var nullVar = null;
typeof nullVar; // object

var function1 = function(){
	console.log(1);
}
typeof function1 // function

var blank;
typeof blank; // undefined


// Truthy/falsey check
if (node) {

}

var printIfTrue = '';
if (printIfTrue) {
    console.log('truthy');
} else {
    console.log('falsey'); // prints 'falsey'
}

"5" == 5 // returns true
"5" === 5 // returns false

var o1 = {};
var o2 = {};

o1 == o2 // returns false
o1 === o2 // returns false

var o1 = {};
var o2 = o1;

o1 == o2 // returns true
o1 === o2 // returns true

function isEquivalent(a, b) {
    // arrays of property names
    var aProps = Object.getOwnPropertyNames(a);
    var bProps = Object.getOwnPropertyNames(b);

    // If their property lengths are different, they're different objects 
    if (aProps.length != bProps.length) {
        return false;
    }

    for (var i = 0; i < aProps.length; i++) {
        var propName = aProps[i];

        // If the values of the property are different, not equal
        if (a[propName] !== b[propName]) {
            return false;
        }
    }

    // If everything matched, correct
    return true;
}
isEquivalent({'hi':12},{'hi':12}); // returns true

var obj1 = {'prop1': 'test','prop2': function (){} };
var obj2 = {'prop1': 'test','prop2': function (){} };

isEquivalent(obj1,obj2); // returns false

var function1 = function(){console.log(2)};
var function2 = function(){console.log(2)};
console.log(function1 == function2); // prints 'false'

void 0 === undefined; // true
