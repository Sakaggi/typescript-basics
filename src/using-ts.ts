const button = document.querySelector('button');
//! is used when we are sure that this html element exists and is an InputElement
const inputA = document.getElementById('num1')! as HTMLInputElement; 
const inputB = document.getElementById('num2')! as HTMLInputElement;


//: number is the type of received parameter
function add(num1: number, num2: number){
    return num1+num2;
}

button.addEventListener("click", function(){
    // + is added in front of a variable to convert it to type number
    console.log(add(+inputA.value, +inputB.value));
})
