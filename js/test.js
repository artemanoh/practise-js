// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];

// const combinedArray = array1.concat(array2);
// let totalSum = 0;
// for (let i = 0; i < combinedArray.length; i++) {
//     totalSum += combinedArray[i];
// }
// console.log("Сума двох масивів:", totalSum);


// const title = 'Top 10 benefits of React framework';
// const slug = title
// .toLowerCase()
// .trim()
// .replace(/ /g, '-'); 
// console.log(slug);

// const players = ["Artem", "Max", "Masha", "Natalia"]
// let playersWithNumbers = []

// for (let i = 0; i < players.length; i++) {
//     playersWithNumbers.push(`${players[i]}-${i + 1}`);
// }
// console.log(playersWithNumbers)

// додати видалити і замінити друга через splice
// Додавання
const friends = ["Artem", "Max", "Masha", "Natalia"];
friends.splice(2, 0, "Andriy");
console.log(friends);
// Видалення
friends.splice(1,1)
console.log(friends)
// Заміна
friends.splice(3,1, "Ivan")
console.log(friends)