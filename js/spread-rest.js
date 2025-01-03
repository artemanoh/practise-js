// операція rest допомогає зібрати елементи у масив
// Array.from перетворює псевдомасив на масив оскільки на псевдомасиві не всі методи працюють
// function sumNum() {
//   const number = Array.from(arguments);
//   let res = 0;
//   for (let i = 0; i < number.length; i++) {
//     res += number[i];
//   }
//   return res
// }
// const sumNum = (...numbers) => {
// // const number = Array.from(arguments)
// // псевдо масив arguments непрацює у стрілках
// // тому ми можем використати операцію ...rest
// let res = 0
// for(let i = 0; i < numbers.length; i++){
// res += numbers[i]
// }
// return res
// }

// console.log(sumNum(8, 2));
// console.log(sumNum(9, 4, 2));

// операція spread дозволяє з масива зробити немасив,
// тобто витягує всі елементи з масива

// const testArr = [1, 2, 3, 4, 5]

// // console.log(...testArr)
// // в консолі вийде 1 2 3 4 5(Немасив просто чяисла)

// const sumNum = (a, b, c, d, f) => a + b + c + d + f

// console.log(sumNum(...testArr))

// операція spread може обєднувати масиви та обєкти

// const oldFriends = ["bike", "pc", "phone", "drone"]
// const newFriends = ["Dima", "Boryslav", "Vanya"]
// const allFriends = [...oldFriends, ...newFriends] 

// console.log(allFriends)

// const user = {
//     userName: "GGGG", 
//     logIn: "ggggggggg",
//     age: 932
// }
// const userInfo = {
//     password: 87654321,
//     logIn: "TestBeta"
// }

// const userData = {
//     ...userInfo,
//     ...user
// }

// console.log(userData)

// операція spread може допомогти зробити копію масиву чи обєкта

// const user = {
//     userName: "GGGG", 
//     logIn: "hahaha",
//     age: 932
// }
// const userCopy = {
//     ...user
// }
// console.log(userCopy)

// const oldFriends = ["bike", "pc", "phone", "drone"]
// const copyAllFriend = [...oldFriends]
// console.log(copyAllFriend)