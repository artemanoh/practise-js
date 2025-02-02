// // для того щоби отримати посилання у js на елемент з html(з dom дерева)
// // використовуємо querySelector
// const boxElement = document.querySelector(".box");
// console.log(boxElement);
// boxElement.style.backgroundColor = "skyblue";

// const boxElements = document.querySelectorAll("div");
// console.log(boxElements);

// const container = document.querySelector(".container")
// container.style.backgroundColor = "green"

// boxElements.forEach((divElement) => {
//   divElement.style.boxShadow = ("2px 3px 15px 3px grey");
// });

// const titleL = boxElement.firstElementChild
// console.log(titleL)

// const lastBox = boxElement.lastElementChild
// console.log(lastBox)

// const nextBox = boxElement.nextElementSibling
// console.log(nextBox)

// const child = boxElement.children
// console.log(child)

// const photoElement = document.querySelector('img')
// console.log(photoElement)

// photoElement.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlNTFvyNC3w038j1F5beziAID-K65-x4-mTw&s'
// photoElement.alt = "fpv drone"

// const textElem = document.querySelector('h2')
// console.log(textElem)
// textElem.textContent = "Hello nefor"

// const hasText = textElem.classList.contains("tttttext")
// console.log(hasText)

// textElem.classList.add("test")
// console.log(textElem.classList.contains("test"))

// textElem.classList.remove("test")
// console.log(textElem)

// const articleElement = document.createElement('article')

// const titleArticle = document.createElement('h2')

// titleArticle.textContent = "рецепт млинців"

// const descriptionRecept = document.createElement('p')
// descriptionRecept.textContent = (
// `Молоко 2,6%	1 л
// Яйця	4 шт.
// Борошно	500 г
// Олія	2 ст. л.
// Цукор	1,5 ст. л.
// Сіль	0,5 ч. л.`)

// const imgPun = document.createElement('img')

// imgPun.src = 'https://images.unian.net/photos/2020_02/thumb_files/400_0_1581096399-5692.jpg?0.578092067896409'
// imgPun.alt = "Млинці"

// const linkNameA = document.createElement('a')
// linkNameA.href = 'https://rud.ua/consumer/recipe/desertu/milk-pancakes-71/'
// linkNameA.textContent = ("Рецепт млинців")

// articleElement.append(titleArticle, descriptionRecept, imgPun, linkNameA)

// const page = document.querySelector('body')

// page.append(articleElement)

// методи додавання елементів на сторінку DOM

const boxElement = document.querySelector(".box");
const buttonElement = document.createElement("button");
const linkElement = document.querySelector("a")
// boxElement.append(buttonElement) append додая в середину елемента boxElement  після всіх дітей ,додає кнопку
// boxElement.prepend(buttonElement) prepend додая кнопку всередину бокса перед усіма дітьми
// boxElement.after(buttonElement) додає кнопку після елемента за боксом              
// boxElement.before(buttonElement) додає кнопку перед елементом за боксом
//  boxElement.insertBefore(buttonElement, linkElement ); вставляє змінну перед другою
// console.log(boxElement.innerHTML);
// boxElement.innerHTML = `<img src="" alt="">`;
// console.log(boxElement.innerHTML);
// boxElement.innerHTML = "";
// console.log(boxElement.innerHTML);
console.log(boxElement);
const layout = `<ul class="list">
      <li class="list-element" >1</li>
      <li class="list-element" >2</li>
      <li class="list-element" >3</li>
      <li class="list-element" >4</li>
      <li class="list-element" >5</li>
    </ul>`;
boxElement.innerHTML = layout;
