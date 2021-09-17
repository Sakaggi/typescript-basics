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
var page = '1';
var pageNumberString = page;
