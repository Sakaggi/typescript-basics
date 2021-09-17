// Typescript working with DOM Element
//Element is the highest class in the hierarchy
const someElement = document.querySelector(".foo");
 //If foo is an input element and we want the value, the following will through an error

// console.log("someElement", someElement.value);

// The following will work. However, this isn't a good fix
console.log("someElement", (someElement as any).value);

//Better fix is to cast it to specific type such as
const someInputElement = document.querySelector('.foo') as HTMLInputElement;

//Now this will work
console.log("someInputElement", someInputElement.value);

//adding event listeners to HTMLElement
const someElementWithListener = document.querySelector(".foo");
someElementWithListener.addEventListener('blue', (event) => {
    // console.log('event', event.target.value); // this will throw an error as it is generic HTML element and that soesn't have a value property

    //however, we can define it like this
    const target = event.target as HTMLInputElement;
    console.log('event', target.value);
})