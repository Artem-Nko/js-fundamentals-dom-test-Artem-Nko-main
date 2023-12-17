
// Напишіть скріпт, який за допомогою засобів DOM створить для порожньої HTML-сторінки таку структуру з тегів і їх атрибутів.
// 
//   <main class="mainClass check item">         
//      <div id="myDiv">
//          <p>First paragraph</p>           
//      </div>
//  </main> 
// 
// Цю розмітку потрібно вставити у існуючий html елемент із класом "create_elements"

// Виконання записувати у функцію applyStyles()
// Щоб перевірити правильність виконання введіть команду: npx jest test3.jest.js


function applyStyles() {
    // Знаходимо елемент з класом "create_elements"
    const containerElement = document.querySelector(".create_elements");

    // Створюємо основні елементи
    const mainElement = document.createElement("main");
    mainElement.setAttribute("class", "mainClass check item");

    const divElement = document.createElement("div");
    divElement.setAttribute("id", "myDiv");

    const paragraphElement = document.createElement("p");
    paragraphElement.textContent = "First paragraph";
    
    // Додаємо <p> до <div>
    divElement.appendChild(paragraphElement);
  
    // Додаємо <div> до <main>
    mainElement.appendChild(divElement);
   
    // Додаємо <main> до <div>-батьківського
    containerElement.appendChild(mainElement);
 
  }
    applyStyles();

//   module.exports = applyStyles;









// 4-----------------------------------------------------------------------------

// class Marker
// {
//     #color;
// #inkPercentage;


//     constructor(color) {
//         this.#color = color;
//         this.#inkPercentage = 100;
//     }

//     get color()
//     {
//         return this.#color;
//     }
//     get ink() {
//         return this.#inkPercentage;
//     }
//     set color(value)
//     {
// this._color = value;
//     }
//     print(text)
//     {
//         for (let pen of text )
//         {
//             if(this.#inkPercentage > 0 && pen !== ' ')
//             {
//                 console.log(pen);
//             }
//             this.#inkPercentage -=10;
//         }
//     }

// }
// class RefillableMarker extends Marker{
//     refill()
//     {
//         this.#inkPercentage = 100;
//     }
// }