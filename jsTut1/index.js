console.log('Hello Behen ke lode');

let name = 'Adarsh Raj';

console.log(name);

let firstName = "adarsh";
let lastName = "raj";

console.log(firstName +" "+ lastName);

let num = 5;
console.log("Number before changing : " + num);
num  = 10;
console.log("Number after changing : "+ num);

// creating a constant variable 
const constantNum = 10;
// constantNum = 20; typeerror

// using typeof keyword in console inside web page, we can check the type of variable we declared.
// hence, javascript is a dynamic language as its variable type can be changed later.

// creating object
let person = {
    name :'vatsh', 
    age : 20
};

console.log(person);

person.name = 'adarsh';
console.log(person.name);

let arrayList = ['adarsh', 'raj', 'vatsh'];
console.log(arrayList);
arrayList[3] = 1;
console.log(arrayList);
console.log("length of array: "+arrayList.length);

function printName(firstName, lastName) {
    console.log("Name of the person is : "+firstName+ " "+lastName);
}

printName('adarsh', 'raj');
printName('grace');

function printSquare(num) {
    return num*num;
}

console.log("Square of 2 is "+printSquare(2));

let square = printSquare(5);
console.log("Square of 5 is "+square);