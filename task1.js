// На HTML-сторінці є ненумерований список з id="list", який складається із 5 елементів.
// За допомогою засобів Dom доступитись до усіх елементів списку, в черговості
// перший елемент - змінна firstEl
// останній елемент - змінна lastEl
// другий елемент - змінн secondEl
// четвертний елемент - змінна fourthEl
//третій елемент - змінна thirdEl
// для перевірки завдання запустити команду npx jest task1.test.js

const firstEl = document.querySelector("#list").children[0];     //firstElementChild;
const lastEl = document.querySelector("#list").children[4];      //lastElementChild;
const secondEl = document.querySelector("#list").children[1];    //firstElementChild.nextElementSibling;
const fourthEl = document.querySelector("#list").children[3];    //lastElementChild.previousElementSibling;
const thirdEl = document.querySelector("#list").children[2];     //firstElementChild.nextElementSibling.nextElementSibling;

// module.exports = {
//   firstEl,
//   lastEl,
//   secondEl,
//   fourthEl,
//   thirdEl,
// };

//перевірка елементів
//console.log(firstEl, lastEl, secondEl, thirdEl, fourthEl);