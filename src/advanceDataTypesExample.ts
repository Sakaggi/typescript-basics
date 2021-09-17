//Data types: any | never | void | unknown

//void - use it for a function/property which doesn't return anything
const doSomething = (): void => {
    console.log("doSomething");
    //return "doSomething"; //returning anything will result in an error
}

let foo: void = undefined;
// foo = "hi"; //This will result in an error

//any - use it when we don't know the type. It allows all the data types. should be avoided at any cost
let foos: any = undefined;
foos = "hi";
foos = 10;
foos = true;

//never - it is used when we know something that will never happen

//This will result in an error
// const doSomethingNever = (): never => {
//     console.log("doSomething");
// }

//This will run without any error
const doSomethingNever = (): never => {
    throw "never";
}


//unknown - similar to any. however, any can be assigned as a type but unknown can't.
let vAny: any = 10;
let vUnknown: unknown = 10;

let s1: string = vAny;
// let s2: string = vUnknown; // This will result in an error

console.log(vAny.foo());
// console.log(vUnknown.foo()); // This will also result in an error

//Type assertion - used when we need to convert one type to another
//If we want vUnknown to work as a type, we can use it as:

let s2: string = vUnknown as string; // This is totally valid

//This can be done with any data types
let pageNumber: string = "1";
let numericPageNumber: number = (pageNumber as unknown) as number;

let page: any = '1';
let pageNumberString = page as string;


