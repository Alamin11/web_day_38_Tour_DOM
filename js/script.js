console.log("ok");
/**Traversing using tagname */
const heading = document.getElementsByTagName("h1");
// heading.item;
console.log(heading[0]);
/** traversing using id  */
heading[0].innerText = 'Hello using Dom';
const h1 = document.getElementById('h1');
console.log(h1);
h1.style.color = 'yellowGreen';
// traversing by class name
const h2 = document.getElementsByClassName('h2');
h2[0].innerText = 'Change the h2 Text';

