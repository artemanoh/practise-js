// функція-це обгортка інструкцій які стосуються однієї дії; їх створюємо для повторного використання коду
// 1 спосіб створення(оголошення) функції-function declaration

// function назваФункції (параметри) {
//     тіло функції
//     return значення яке має повернути функція як результат
//  }

// виклик функції:
// назваФункції(аргументи)

// function test() {
//   console.log("Моя перша функція");
// }

// test();

// function countSum(number1, number2) {
//   const result = number1 + number2;
//   const message = `Загальна сума чисел вийшла ${result}`;
//   return message;
// }

// const sum = countSum(7, 110)

// console.log(sum)

// console.log(countSum(5, 20))

// function mul(n, m) (n, m){
//     const numberMultiply = n * m
//     const numberSum = n + m
//     const numberDifference = n - m
//     const message = `Добуток цих чисел дорівнює ${numberMultiply}, Сума цих чисел дорівнює ${numberSum}, різниця цих чисел дорівнює  ${numberDifference}`
// }

// function mul(n, m){
//     return `Добуток цих чисел дорівнює ${n * m}, Сума цих чисел дорівнює $(n + m), Різниця цих чисел дорівнює $(n - m)`; 
// }
const array = [100, 75, 81, 96]
function myAverageScore(array){
    let sum = 0
    for (let i = 0; i < array.length; i++){
        sum += array[i]
}
const quantityElements = array.length
const averge = sum / quantityElements
if (averge >= 91 && averge <= 100) {
    return "my averge Score: A"
} else if (averge >= 81 && averge <= 90) {
    return "my averge Score: B and "

}
}
myAverageScore(array)




// function назваФункції (параметри) {
    //     тіло функції
    //     return значення яке має повернути функція як результат
    //  }
    
    // виклик функції:
    // назваФункції(аргументи)
    