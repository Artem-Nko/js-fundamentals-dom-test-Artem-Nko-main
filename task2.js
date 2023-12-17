// Простилізуйте елементи як показано на картинці task2.png
// Застосування стилів запишіть у функції applyStyles
// Для перевірки завдання введіть команду npm jest task2.test.js
  

function applyStyles() {
    const styledElement = document.getElementById("title");
    styledElement.style.backgroundColor = "lightgreen";

    const firstPar = document.getElementById("myDiv").children[0];
    firstPar.style.fontWeight = 700;

    const secondPar = document.getElementById("myDiv").children[1];
    secondPar.style.color = "red";

    const thirdPar = document.getElementById("myDiv").children[2];
    thirdPar.style.textDecoration = "underline";

    const fourthPar = document.getElementById("myDiv").children[3];
    fourthPar.style.fontStyle = "italic";

    const myList = document.getElementById("myList");
    myList.style.display= "flex";
    myList.style.listStyle = "none";
    
    const span =  document.getElementsByTagName("span")[0];
    span.style.display = "none";
    }
    applyStyles();
    
    // module.exports = applyStyles;