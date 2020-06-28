
function memory(){
    return '';
}
var foo = {
    bar1: memory(), // 5kb
    bar2: memory() // 5kb
}

function clickEvent(){
    alert(foo.bar1[0]);
}

// DOM leak:
var one = document.getElementById("one");
var two = document.getElementById("two");
one.addEventListener('click', function(){
    two.remove();
    console.log(two); // will print the html even after deletion
});

// fix for above
var one = document.getElementById("one");
one.addEventListener('click', function(){
    var two = document.getElementById("two");
    two.remove();
});

// unregister the callback
var one = document.getElementById("one");
one.addEventListener('click', function(){
    var two = document.getElementById("two");
    two.remove();
});
one.removeEventListener('click');

var a = "apples"; //global with var
b = "oranges"; //global without var

console.log(window.a);  // prints "apples"
console.log(window.b);  // prints "oranges"

var test = {
    prop1: 'test'
}

function printProp1(test){
    console.log(test.prop1);
}

printProp1(test); //'test'

var test = {
    prop1: 'test'
}

function printProp1(prop1){
    console.log(prop1);
}

printProp1(test.prop1); //'test'

var test = {
    prop1: 'test'
}
console.log(test.prop1); // 'test'
delete test.prop1;
console.log(test.prop1); // _undefined_



// Exercises

function someLargeArray() {
    return new Array(1000000);
}

var exampleObject = {
    'prop1': someLargeArray(),
    'prop2': someLargeArray()
}

function printProperty(obj){
    console.log(obj['prop1']);
}
printProperty(exampleObject);

// --
function someLargeArray() {
    return new Array(1000000);
}

var exampleObject = {
    'prop1': someLargeArray(),
    'prop2': someLargeArray()
}

function printProperty(prop){
    console.log(prop);
}
printProperty(exampleObject['prop1']); 


// -- Question 2
var RED     = 0,
    GREEN   = 1,
    BLUE    = 2;
function redGreenBlueCount(arr) {
    var counter = new Array(3).fill(0);
    for (var i=0; i < arr.length; i++) {
        var curr = arr[i];
        if (curr == RED) {
            counter[RED]++;
        } else if (curr == GREEN) {
            counter[GREEN]++;
        } else if (curr == BLUE) {
            counter[BLUE]++;
        }
    }
    return counter;
}


function redGreenBlueCount(arr) {
    var RED     = 0,
        GREEN   = 1,
        BLUE    = 2,
        counter = new Array(3).fill(0);
    for (var i=0; i < arr.length; i++) {
        var curr = arr[i];
        if (curr == RED) {
            counter[RED]++;
        } else if (curr == GREEN) {
            counter[GREEN]++;
        } else if (curr == BLUE) {
            counter[BLUE]++;
        }
    }
    return counter;
}

//


//<button id="one">Button 1</button>
//<button id="two">Button 2</button>

// Question:
var one = document.querySelector("#one");getElementById("one");
var two = document.querySelector("#two");getElementById("two");
function callBackExample () {
    one.removeEventListener("",callBackExample);
}
one.addEventListener('click' , function(){
    two.remove();
    console.log(two); // will print the html even after deletion
});
two.addEventListener('click', function(){
    one.remove();
    console.log(one); // will print the html even after deletion
});

// answer:
var one = document.querySelector("#one");
var two = document.querySelector("#two");

function callbackOne() {
    var two = document.querySelector("#two");
    if (!two)
        return;
    two.remove();
    one.removeEventListener("hover", callbackOne);
}

function callbackTwo() {
    var one = document.querySelector("#one");
    if (!one)
        return;
    one.remove();
    two.removeEventListener("hover", callbackTwo);
}
one.addEventListener("click", callbackOne);
two.addEventListener("click", callbackTwo);

