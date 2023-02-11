console.log('Hello from traversing DOM');
//traversing using querySelector that returns nodeList
// const mainSection = document.querySelector("main-section");
// console.log(mainSection);
// querySelector
const mainSection = document.querySelector('.main-section');
console.log(mainSection);
mainSection.style.backgroundColor = 'green';
// querySelectorAll
const allLi = document.querySelectorAll('ul li');
for (li of allLi) {
    li.style.color = 'white';
}
// ?converting to an array from NodeList
// const liArray = Array.from(allLi);
// console.log(liArray)
