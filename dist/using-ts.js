var button = document.querySelector('button');
//! is used when we are sure that this html element exists and is an InputElement
var inputA = document.getElementById('num1');
var inputB = document.getElementById('num2');
//: number is the type of received parameter
// colon after () indicates the type of return value
var add = function (num1, num2) {
    return num1 + num2;
};
button.addEventListener("click", function () {
    // + is added in front of a variable to convert it to type number
    console.log(add(+inputA.value, +inputB.value));
});
// Declaring an object
var user1 = { name: "Sak", age: 27 };
var user2 = { name: "Nid", age: 24 };
var user3 = { name: "Mon", age: 21 };
;
//interface name starts with a capital letter
// Now, we can rewrite the above objects as:
var user4 = { name: "Sak", age: 27 };
var user5 = { name: "Nid", age: 24 };
var user6 = { name: "Mon", age: 21 };
var user7 = { name: "Kon" }; // This is now a valid variable
// Now the object will be:
var user8 = {
    name: "Mon",
    age: 21,
    getMessage: function () {
        return "Hello" + " " + name;
    }
};
/*
Tip to distinguish interface is that while naming an interface,
use I prefix like IUser or write interface as postfix like UserInterface. */
//Union Type and Alias in Typescript
var username = 'alex'; //property is of type string
//If we want a property of multiple datatypes, we can use union operator
var pagename = "10";
//When the property is undefined at the declaration, we can use null type
var errorMessage = null;
// The user property can be null or of type userInterface
var user = null;
//These two will mean the same
var id;
var id;
//These two will mean the same
var popularTags = ["dragon", "coffee"];
//this is better and more readable
var popularTags = ["dragon", "coffee"];
var dragonsTag = "dragon";
//Data types: any | never | void | unknown
//void - use it for a function/property which doesn't return anything
var doSomething = function () {
    console.log("doSomething");
    //return "doSomething"; //returning anything will result in an error
};
var foo = undefined;
// foo = "hi"; //This will result in an error
//any - use it when we don't know the type. It allows all the data types. should be avoided at any cost
var foos = undefined;
foos = "hi";
foos = 10;
foos = true;
//never - it is used when we know something that will never happen
//This will result in an error
// const doSomethingNever = (): never => {
//     console.log("doSomething");
// }
//This will run without any error
var doSomethingNever = function () {
    throw "never";
};
//unknown - similar to any. however, any can be assigned as a type but unknown can't.
var vAny = 10;
var vUnknown = 10;
var s1 = vAny;
// let s2: string = vUnknown; // This will result in an error
console.log(vAny.foo());
// console.log(vUnknown.foo()); // This will also result in an error
//Type assertion - used when we need to convert one type to another
//If we want vUnknown to work as a type, we can use it as:
var s2 = vUnknown; // This is totally valid
//This can be done with any data types
var pageNumber = "1";
var numericPageNumber = pageNumber;
