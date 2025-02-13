const fruits = [
  {
    title: "Jackfruit",
    price: 4000,
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Jackfruit_hanging.JPG/1200px-Jackfruit_hanging.JPG"
  },
  {
    title: "Breadfruit",
    price: 2500,
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKMS01WCNOYUuD3Rg4CpNdWVZ-YnvYVlLopQ&s"
  },
  {
    title: "Durian",
    price: 9000,
    photo: "https://www.foodie.com/img/gallery/what-is-durian-and-how-do-you-eat-it/intro-1703105258.jpg"
  },
  {
    title:"Pineapple",
    price: 500,
    photo: "https://upload.wikimedia.org/wikipedia/commons/7/74/%E0%B4%95%E0%B5%88%E0%B4%A4%E0%B4%9A%E0%B5%8D%E0%B4%9A%E0%B4%95%E0%B5%8D%E0%B4%95.jpg"
  },
  {
    title: "Dragonfruit",
    price: 300,
    photo: "https://media.post.rvohealth.io/wp-content/uploads/2024/01/A-pink-pitahaya-cut-it-in-half-Dragon-Fruit-header.jpg"
  },
];
  const fruitElem = fruits.map((fruit) => {
      return `<li class="fruit-item">
      <h2>${fruit.title}</h2>
      <p>${fruit.price}</p>
      <img src="${fruit.photo}" alt="${fruit.title}" />
    </li>`
    });
    console.log(fruitElem)

    const fruitList = document.querySelector(".fruit-list")

    // fruitList.innerHTML = fruitElem
    fruitList.insertAdjacentHTML("afterbegin",fruitElem)
    // другий спосіб зробити динамічну розмітку
    const fruitsList = document.querySelector("ul")
    fruits.forEach(fruit => {
      const fruitItem = document.createElement("li")
      const fruitTitle = document.createElement("h2")
      const fruitText = document.createElement("p")
      const fruitImg = document.createElement("img")

      fruitTitle.textContent = fruit.title
      fruitText.textContent = fruit.price
      fruitImg.src = fruit.photo


      fruitList.classList.add("fruits-list");
      fruitList.classList.add("fruit-item");
      fruitList.classList.add("img")

      fruitItem.append(fruitTitle, fruitText,fruitImg)
      fruitList.append(fruitItem)
    });

    const newLink = document.createElement("a")
console.log(newLink)
newLink.setAttribute('href','https://meet.google.com/nsz-zvvr-khc')
const test = newLink.hasAttribute('target')
console.log(test)
const attribute = newLink.getAttribute('href')
console.log(attribute)
newLink.setAttribute('target', '_blank')
const allAttributes = newLink.attributes
console.log(allAttributes)