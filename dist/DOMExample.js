// Typescript working with DOM Element
//Element is the highest class in the hierarchy
var someElement = document.querySelector(".foo");
//If foo is an input element and we want the value, the following will through an error
// console.log("someElement", someElement.value);
// The following will work. However, this isn't a good fix
console.log("someElement", someElement.value);
//Better fix is to cast it to specific type such as
var someInputElement = document.querySelector('.foo');
//Now this will work
console.log("someInputElement", someInputElement.value);
//adding event listeners to HTMLElement
var someElementWithListener = document.querySelector(".foo");
someElementWithListener.addEventListener('blue', function (event) {
    // console.log('event', event.target.value); // this will throw an error as it is generic HTML element and that soesn't have a value property
    //however, we can define it like this
    var target = event.target;
    console.log('event', target.value);
});
