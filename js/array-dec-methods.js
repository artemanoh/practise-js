// синтаксис перебираючих методів
// назваМасива.назваМетода((елементМасиву, індексЕлемента, масив) => {
//     тут вказуєм що робим з кожним елемент масиву
//     return результат
// }
// )

// метод forEach є заміною цикла тобто переберає масив, робить щось з кожним
// елементом і нічого не поверта; може мутувати вихідні дані

// const friends = ["Комп'ютер", "Телефон", "Квадрокоптер", "Велосипед"]

// friends.forEach((friend, friendIdx) => {
// console.log(`Знайьомтесь це мій друг йього звати ${friend} номер ${friendIdx + 1}`)
// }
// )

// Метод map перебирає масив, витягує по черзі елементи та щось з ними робить (наприклад змінює) та закидає їх у новий масив
// task 1
// const fruits = ["apple", "banana", "peach"]

// const fruitsLength = fruits.map((fruit) => fruit.length)

// console.log(...fruitsLength)
// task 2
// Отримати масив імен всіх гравців
// Збільшити кількість поінтів кожного гравця на
// 10% (розпорошуємо старий об'єкт)
// Збільшити кількість годин гравця по id. Переписати на тернарник
// Отримати масив всіх гравців онлайнd
// Отримати масив всіх гравців офлайн
// Отримати масив всіх хардкорних гравців з часом більше 250
// Знайти гравця по id
// Знайти гравця по імені
// Перевірити чи всі гравці мають час більше 200
// Перевірити чи всі гравці онлайн
// const players = [
//   { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
//   { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
//   { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
//   { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
//   { id: "player-5", name: "Chelsy", timePlayed: 80, points: 48, online: true },
// ];
// // task 1
// const savedPlayer = players.map((player) => player.id);
// // task 2
// // const newPlayers = players.map((player) => {
// //   const newPlayer = {
// //     ...player,
// //     points: player.points + (player.points / 100 * 10)
// //   };
// //   return newPlayer;
// // });
// // console.log(newPlayers);
// // Task 4
// const onlinePlayer = players.filter(player => player.online)
// console.log(onlinePlayer)
// // Task 5
// const offlinePlayer = players.filter(players => !players.online)
// console.log(offlinePlayer)
// Task 6
// const hardPlayer = players.filter(player => player.timePlayed > 250)
// console.log(hardPlayer)
// const newPlayers = players.map((player) => ({...player, points: player.points + (player.points / 100 * 10)}));
// console.log(newPlayers);
// // Task 7
// const findId = players.find(player => player.id === "player-3")
// console.log(findId)
// // Task 8
// const findName = players.find(player => player.name === "Ajax")
// console.log(findName)
// // Task 9
// const timePlayer = players.every(player => player.timePlayed > 200 )
// console.log(timePlayer)
// Task 10
// const areOnline = players.some(player => player.online)
// console.log(areOnline)

// // filter перебирає масив елементів відберає з нього ті елементи які відповідають умові вказаній у тілі callBack

const filNum = [12, 7, 34, 3, 17, 50, 89, 48]
// відфільтруємо масив та відберемо парні числа

const evenNum = filNum.filter(num => num % 2 === 0)
console.log(evenNum)

const array1 = [1, 2, 3, 44, 4, 5, 6, 6, 7];
const array2 = [5, 12, 3, 14, 4, 5, 6, 6, 7];
// const arrayAll = [...array1, ...array2]
const merge = [...array1, ...array2].filter((number, index, array) => array.indexOf(number) === index);
console.log(merge)

// метод Reduce перебирає масив витягує з нього кожен елемент та опрацьовує йього у тілі callback; шукає той тип даних який ми вказали в акумуляторі

const array = [12, 7, 34, 3, 17, 50, 89, 48]
const sum = array.reduce((totalSum, num) => totalSum + num, 0)

console.log(sum)
const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
  { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
  { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
  { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
  { id: "player-5", name: "Chelsy", timePlayed: 80, points: 48, online: true },
];
// зробимо масив імен через метод reduce
const playersName = players.reduce((arrNames, player) => {
arrNames.push(player.name)
return arrNames
}, [])
console.log(playersName)

// відвільтруємо за поінтами (більше 50)
const filterPoint = players.reduce((arrFilterPoints, player) => {
 if (player.points > 50){
  arrFilterPoints.push(player)
 }
 return arrFilterPoints
}, [])

console.log(filterPoint)

// метод sort сортує елементи у масиві,
// та змінює оригінальний масив;
// тому перед сортуванням варто
// зробити копії масива і її сортувати

const arr = [12, 7, 34, 3, 17, 50, 89, 48];
//arr.sort() // відсортує по першому символу в числі та змінитьт оригінальний масивє
const copyArr = [...arr];
copyArr.sort((prevNum, nextNum) => {
  // return nextNum - prevNum
  return prevNum - nextNum;
});

console.log(copyArr);

const names = ["Alex", "Max", "Ajax", "Maxxim"]

names.sort((prevName, nextName) => {
//  return prevName.length - nextName.length
return prevName.localeCompare(nextName)
})
console.log(names)

// Порахувати загальну кількість товарів в кошику






const cart = [
  { label: 'Apples', price: 100, quantity: 2 },
  { label: 'Bananas', price: 120, quantity: 3 },
  { label: 'Lemons', price: 70, quantity: 4 },
];

const filteredProduct = cart.reduce((filteredByPrice, product) =>{
if (product.price > 100) {
  filteredByPrice.push(product)
}
return filteredByPrice
}, [])
console.log(filteredProduct)

const totalAmount = cart.reduce((quan, product) => {
return quan + product.quantity
}, 0)

console.log(totalAmount);

// const filteredLemons = cart.reduce((acc, product) =>{
//   if (product.label === 'Lemons') {
//     acc.push(product.label)
//   }
//   return acc
// }, [])

// console.log(...filteredLemons)

const filteredLemons = cart.reduce((acc, product) =>{
  if (product.label === 'Lemons') {
   acc = {...product}
  }
  return acc
}, {})

console.log(filteredLemons)