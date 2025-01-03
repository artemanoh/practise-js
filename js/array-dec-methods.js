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
// Отримати масив всіх гравців онлайн
// Отримати масив всіх гравців офлайн
// Отримати масив всіх хардкорних гравців з часом більше 250
// Знайти гравця по id
// Знайти гравця по імені
// Перевірити чи всі гравці мають час більше 200
// Перевірити чи всі гравці онлайн
const players = [
    { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
    { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
    { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
    { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
    { id: "player-5", name: "Chelsy", timePlayed: 80, points: 48, online: true },
  ];
  // task 1
  const savedPlayer = players.map((player) => player.id);
  // task 2
  // const newPlayers = players.map((player) => {
  //   const newPlayer = {
  //     ...player,
  //     points: player.points + (player.points / 100 * 10)
  //   };
  //   return newPlayer;
  // });
  // console.log(...newPlayers);
  
  const newPlayers = players.map((player) => ({...player, points: player.points + (player.points / 100 * 10)}));
  console.log(newPlayers);