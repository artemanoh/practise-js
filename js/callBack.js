// const printMessage = function (message) {
//   console.log(message);
// };

// const higherOrderFunction = function (callback) {
//   const string = "HOCs are awesome";
//   callback(string);
// };

// higherOrderFunction(printMessage);

// callback це функція яку ми передаємо в іншу функцію як аргумнт
// функція в яку ми передаємо callback називається функція вищого порядку

// function countSum(a, b) {
//   const result = a + b;
//   return result;
// }

// function makeMessage(countSumCallBack) {
//   const res = countSumCallBack(1, 3);
//   const message = `Загальний резултат вийшов ${res}`;
//   return message;
// }
// console.log(makeMessage(countSum))

// const countSum = (a, b) => a + b;
// const makeMessage = (countSumCallBack) => `Загальний резултат вийшов ${countSumCallBack(1, 3)}`;
// console.log(makeMessage(countSum));

// зробимо цю функцію для різних даних
// function countSum(a, b) {
//     const result = a + b;
//     return result;
//   }

//   function multiplyNum(a, b) {
//     const result = a * b;
//     return result;
//   }

//   function makeMessage(calculateCallBack, a, b) {
//     const res = calculateCallBack(a, b);
//     const message = `Загальний резултат вийшов ${res}`;
//     return message;
//   }

//   const countSum = (a, b) => a + b;
//   const multiplyNum = (a, b) => a * b;
//   const makeMessage = (calculateCallBack, a, b) => `Загальний резултат вийшов ${calculateCallBack(a, b)}`

//   console.log(makeMessage(countSum, 17, 31))
//   console.log(makeMessage(multiplyNum, 3, 7))

// Напиши стрілкову функцію myAverageScore , яка у якості аргументу отримує масив з оцінками, і виводить користувачу його середній результат у наступному форматі:
// Myaveragescore: A (якщо середня оцінка від 91 до 100)
// My average score: B (якщо середня оцінка від 81 до 90)
// My average score: C (якщо середня оцінка від 71 до 80)
// My average score: D (якщо середня оцінка від 70 і менше)

// const array = [91, 100, 80, 95, 93];

// const checkResult = (getaverageScore) => {
//     const resultAverageScore = getaverageScore(array)
//     if (resultAverageScore > 91 || resultAverageScore <= 100 ){
//         return `Оцінка A середній бал: ${resultAverageScore}`
//     } else if (resultAverageScore > 81 || resultAverageScore <= 90 ){
//         return `Оцінка B середній бал: ${resultAverageScore}`
//     } else if (resultAverageScore > 71 || resultAverageScore <= 80 ){
//         return `Оцінка C середній бал: ${resultAverageScore}`
//     } else if (resultAverageScore < 70 ){
//         return `Оцінка d середній бал: ${resultAverageScore}`
//     }
// }

// const myAverageScore = (arrayData) => {
//   let resultAllArray = 0;
//   // крок 1 шукаємо суму чисел
//   for (let i = 0; i < arrayData.length; i++) {
//     resultAllArray += arrayData[i];
//   }
//   // крок 2 ділимо на кількість чисел
//   const averageScore = resultAllArray / arrayData.length

//   return averageScore;
// }

// console.log(checkResult(myAverageScore))

// Напишіть стрілкову функцію hello2(),
// яка при виклику буде приймати змінну name (наприклад,
//«Василь»)
// і виводити рядок (в нашому випадку «Привіт, Василь»).

// const arr = [1, 2, 3, 4, 5];

// function multiplyArray(arr, num, callback) {
//     // код
// }

// const hello2 = (name) => alert(`Hi u name ${name}`)
// hello2("Василь")

// Знайдіть суму елементів масиву з
// використанням колбек-функції

// const arr = [1, 2, 3, 4, 5];
// function sumArray(arr, callback) {
//    // пиши код тут
// }
// sumArray(arr, cb);
// const arr = [1, 2, 3, 4, 5];
// function sumArray(array, callback) {
//     let res = 0
//     for(let i = 0; i < array.length; i++){
//         res += array[i]
//     }
//     callback(res)
//     return res
// }
// const cb = (say) => alert(say)
// sumArray(arr, cb);