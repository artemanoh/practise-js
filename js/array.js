// let friend = ["Krestina", "Tima", "alisa"];
// console.log(friend)
// let myFriend = friend[0]
// console.log(myFriend)
// friend[2] = "Olga"
// console.log(friend)

// let friendQuality = friend.length
// const lastIndex = friendQuality - 1
// console.log(lastIndex)

// const numbers = [1, 3, 2, 4, 8];
// let totall = 0;
// for (let i = 0; i < numbers.length; i += 1) {
//     totall += numbers[i];
//     console.log(`Число: ${numbers[i]}, Поточна сума: ${totall}`);
// }
// console.log(`Загальна сума: ${totall}`);
// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threhold = 15;
// for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] < threhold) {
//         continue;
//     }
//     console.log(`Число більше за ${threhold}: ${numbers[i]}`);
// }
// const matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
// ];

// let total = 0;

// for (let i = 0; i < matrix.length; i += 1) { // Прохід по рядках матриці
//     console.log('Підмасив матриці matrix[i]: ', matrix[i]);

//     for (let j = 0; j < matrix[i].length; j += 1) { // Прохід по елементах рядка
//         console.log('Елемент підмасивів матриці matrix[i][j]: ', matrix[i][j]);
//         total += matrix[i][j]; // Додавання значення елемента до загальної суми
//     }
// }

// console.log(total); // Вивід загальної суми


const fruits = ["apple", "banana", "grapefruit", "cherry", "orange"];
console.log("Фрукти, які у нас є:", fruits);
const oldFruit = prompt("Який фрукт ви хочете видалити?");
const newFruit = prompt("На який саме фрукт його замінити?");
const index = fruits.indexOf(oldFruit);
let newFruits;
if (index !== -1) {
  newFruits = fruits.filter((fruit, i) => {
    return fruit !== oldFruit || i !== index;
  });
  newFruits.splice(index, 0, newFruit);
  console.log("Тепер у нас є такі фрукти:", newFruits);
} else {
    console.log("Цього фрукта у нас нажаль немає:(")
}

    // const index = fruits.indexOf(oldFruit)
// if (index !== -1) {
//     fruits.splice(index, 1, newFruit)
// } else {
//     console.log("Такого фрукта у нас на жаль немає")
// }










