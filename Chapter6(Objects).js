
var javaScriptObject = {};
var testArray = [1,2,3,4];

javaScriptObject.array = testArray;
console.log(javaScriptObject); // {array: [1,2,3,4]}

javaScriptObject.title = 'Algorithms'
console.log(javaScriptObject); // {array: [1,2,3,4], title:'Algorithms'}

function ExampleClass(){
    this.name  = "JavaScript";
    this.sayName = function(){
        console.log(this.name);
    }
}

//new object
var example1 = new ExampleClass();
example1.sayName(); //"JavaScript"

function ExampleClass(){
    this.array = [1,2,3,4,5];
    this.name  = "JavaScript";
}

//new object
var example1 = new ExampleClass();

ExampleClass.prototype.sayName = function() {
    console.log(this.name);
}

example1.sayName(); //"JavaScript"

function ExampleClass(name, size){
    this.name = name;
    this.size = size;
}

var example = new ExampleClass("Public",5); 
console.log(example); // {name:"Public", size: 5}

//accessing public variables
console.log(example.name); // "Public"
console.log(example.size); // 5

function ExampleClass(name, size) {
    var privateName = name;
    var privateSize = size;

    this.getName = function() {return privateName;}
    this.setName  = function(name) {privateName = name;}

    this.getSize = function() {return privateSize;}
    this.setSize = function(size) {privateSize = size;}
}

var example = new ExampleClass("Sammie",3);
example.setSize(12);
console.log(example.privateName); // undefined
console.log(example.getName());  // "Sammie"
console.log(example.size); // undefined 
console.log(example.getSize()); // 3


function Animal(name, animalType) {
    this.name = name;
    this.animalType = animalType;
}
Animal.prototype.sayName = function () {
    console.log(this.name);
}
Animal.prototype.sayAnimalType  = function () {
    console.log(this.animalType);
}

function Dog(name) {
    Animal.call(this, name, "Dog");
}

// copy over the methods
Dog.prototype = Object.create(Animal.prototype);
var myAnimal = new Animal("ditto", "pokemon");
myAnimal.sayName(); // "ditto"
myAnimal.sayAnimalType(); // "pokemon"
var myDog = new Dog("candy", "dog"); 
myDog.sayName(); // "candy"
myDog.sayAnimalType(); // "dog"

