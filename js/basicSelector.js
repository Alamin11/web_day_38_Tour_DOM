console.log("hello from basicSelector");
/**1) Universal selector
The universal selector is denoted by * that matches all elements of any type: */
let element = document.querySelector('*');
//Selects the first element of the document
// console.log(element);

let elements = document.querySelectorAll('*');
//Selects all the elements in the document
// console.log(elements);

/**2) Type selector
To select elements by node name, you use the type selector e.g., a selects all <a> elements: */

// The following example finds the first h1 element in the document:
let firstHeading = document.querySelector('h1');
// console.log(firstHeading);
// And the following example finds all h2 elements:
let heading2 = document.querySelectorAll('h2');
// console.log(heading2);

/**3) Class selector
To find the element with a given CSS class, you use the class selector syntax: '.className' */

//The following example finds the first element with the menu-item class:
let note = document.querySelector('.menu-item');
// console.log(note);

// And the following example finds all elements with the menu class:

let notes = document.querySelectorAll('.menu-item');
// console.log(notes);

/**4) ID Selector
To select an element based on the value of its id, you use the id selector syntax: #idName*/
let logo = document.querySelector("#logo");
// console.log(logo);

// Since the id should be unique in the document, the querySelectorAll() is not relevant.

/**5) Attribute selector
To select all elements that have a given attribute, you use one of the following attribute selector syntaxes:

[attribute]
[attribute=value]
[attribute~=value]
[attribute|=value]
[attribute^=value]
[attribute$=value]
[attribute*$*=value] */

// The following example finds the first element with the attribute [autoplay] with any value:
let autoPlay = document.querySelector('[autoplay]');
// console.log(autoPlay);
// And the following example finds all elements that have [autoplay] attribute with any value:

let autoplays = document.querySelectorAll('[href]');
console.log(autoplays);

