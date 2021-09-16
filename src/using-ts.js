var button = document.querySelector('button');
//! is used when we are sure that this html element exists and is an InputElement
var input1 = document.getElementById('num1');
var input2 = document.getElementById('num2');
//: number is the type of received parameter
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener("click", function () {
    // + is added in front of a variable to convert it to type number
    console.log(add(+input1.value, +input2.value));
});
