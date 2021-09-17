import { classA } from "./classA.js";

console.log(classA.A);

// const button = document.querySelector('button');
// //! is used when we are sure that this html element exists and is an InputElement
// const inputA = document.getElementById('num1')! as HTMLInputElement; 
// const inputB = document.getElementById('num2')! as HTMLInputElement;


// //: number is the type of received parameter

// // colon after () indicates the type of return value
// const add = (num1: number, num2: number): number => {
//     return num1+num2;
// }

// button.addEventListener("click", function(){
//     // + is added in front of a variable to convert it to type number
//     console.log(add(+inputA.value, +inputB.value));
// })

// // Declaring an object

// const user1 : { name : string, age: number} = { name: "Sak", age: 27};
// const user2 : { name : string, age: number} = { name: "Nid", age: 24};
// const user3: { name : string, age: number} = { name: "Mon", age: 21};

// //So, instead of defining types for each object, we can create an interface like following:
// interface User { 
//     name : string;
//     age: number;
// };
// //interface name starts with a capital letter

// // Now, we can rewrite the above objects as:
// const user4 : User = { name: "Sak", age: 27};
// const user5 : User = { name: "Nid", age: 24};
// const user6: User = { name: "Mon", age: 21};
// // const user7: User = { name: "Kon"}; //This will raise an error as it has no age parameter. Now, if we want to make the age optional, we can define the interface as below:

// interface UserOptionalAge { 
//     name : string;
//      age?: number;
//     }
// const user7: UserOptionalAge = { name: "Kon"}; // This is now a valid variable

// //Functions in interfaces:
// interface UserWithFunction { 
//     name : string; 
//     age?: number;
//     getMessage():string;
// } //return type of getMessage function is string type.

// // Now the object will be:
// const user8: UserWithFunction = { 
//     name: "Mon", 
//     age: 21, 
//     getMessage(){ 
//         return "Hello"+" "+name;
//     }
// };

// /* 
// Tip to distinguish interface is that while naming an interface, 
// use I prefix like IUser or write interface as postfix like UserInterface. */




