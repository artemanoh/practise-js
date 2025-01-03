// математичні оператори

// const sum = 5 + 6
// console.log(sum)

// const difference = 6 - 5
// console.log(difference)

// const multiply = 7 * 8
// console.log(multiply)

// const division = 6 / 3
// console.log(division)

// ---------------------------------------------------------------------

// // математичне операція піднесення степення

// const pow = 2 ** 3
// console.log(pow)
// //  число 2 це число яке ми підносимо до степення,
// // а три це сама степпінь

// ---------------------------------------------------------------------

// // оператор остачі ділення %

// const isEvenNumber = 10 % 4
// 10 поділити на 4 = неціле число
// 9 поділити на 4 = неціле число
// 8 поділити на 4 = ціле число
// ми знайшли число яке ділиться на 4 без остачі,
// тому можем знайти остачу від ділення
// 10 - 8 = 2 тобто різниця між числами які ми ділили на 4,
// 2 це остача від ділення

// знайдемо остачу від ділення 24 / 7
// 23 / 7 не ділеться націло
// 22 / 7 не ділеться націло
// 21 / 7 ділеться націло 
// 21 / 7 = 3
// 24 - 21 = 3 - це остача від ділення

// ---------------------------------------------------------------------

// const sum = 0
// const newSum = sum + 1

// let sum = 0
// console.log(sum)
// sum = 3
// console.log(sum)
// sum = sum + 7
// console.log(sum)
// ми можемо скоротити sum = sum + 7
// sum += 7 //це те саме що sum = sum + 7
// console.log(sum)

// ---------------------------------------------------------------------

// let difference = 5
// difference -= 1
// difference -= 3

// console.log(difference)

// ---------------------------------------------------------------------

// переводимо рядковий тип даних в числовий

// console.dir(Number)
// const data = "10"
// const number = Number(data)
// console.log(number)
// console.log(Number(true))
// console.log(Number(false))
// console.log(Number(null))
// console.log(Number(undefined))
// console.log("10" + 1)
// console.log(Number("10") + 1)

// const dataNumber = Number(data)
// const multiply = dataNumber + 1

// console.log(Number("hello") + 10)
// nan not any number значить що нема будь якого числа

// const styles = "15.5px"

// const stylesNumber = Number.parseInt(styles)
// console.log(stylesNumber)
// parseInt лише цілі числа

// const stylesFloat = Number.parseFloat(styles)
// console.log(stylesFloat)
// parseFloat лише цілі числа

// ---------------------------------------------------------------------

// console.dir(Math)

// console.log(Math.max( 2, 5, 3 ,7 ,9))
// console.log(Math.min( 2, 5, 3 ,7 ,9))
// console.log(Math.pow( 2, 5, 3 ,7 ,9))
// console.log(Math.round( 2.5379))
// console.log(Math.ceil( 2.5379))
// console.log(Math.floor( 2.5379))

// const randomNumber = Math.random()

// console.log(randomNumber)

// ---------------------------------------------------------------------

// тип даних рядок

// const testMessege = "thisIsSparta";
// console.log(testMessege)

// const firstLetter = testMessege[0];
// console.log(firstLetter)

// // const lastLetter = testMessege[3];
// // console.log(lastLetter)

// // знайдемо кількість символів у рядку через lenght "довжину"
// const messegeLenght = testMessege.length;
// console.log(messegeLenght)

// // знайдемо останній індекс у даному рядку
// const lastIndex = messegeLenght - 1;

// // звернемось до останнього рядку через index
// const lastLetter = testMessege[lastIndex];
// console.log(lastLetter)

// ---------------------------------------------------------------------

// конкатенація рядків "зшивання"

// const friendName = "Krestina";
// const greeting = "hello my friend,";
// const messege = greeting + " " + friendName;
// console.log(messege)

// console.log("My best friend is " + friendName)

// // ${} - це називається інтерполяцією 
// const newMessage = `the age of ${friendName} is 12`;
// console.log(newMessage)

// ---------------------------------------------------------------------

// властивості та методи рядків

// const info = "I am Ukrainian";
// const bigInfo = info.toUpperCase();
// console.log(bigInfo)

// const smallInfo = info.toLowerCase();
// console.log(smallInfo)

// const mess = 'Привіт, я принц Абдул, це не спам, пропоную тобі мільйон!';
// const hasSpam = mess.includes("спам")
// console.log(hasSpam)

// const indexMess = mess.indexOf("спам")
// console.log(indexMess)

// const metod = " привіт це текст ";
// console.log(metod)

// const metodLenght = metod.length;
// console.log(metodLenght)

// // метод trim обрізає пробіли на початку і в кінці рядка
// const trimMessage = metod.trim();
// console.log(trimMessage)

// const trimdLenght = trimMessage.length;
// console.log(trimdLenght)

// метод partStart

// const advert = "Куплю будинок";
// console.log(advert.length)
// // метод padStart
// const StartAdvert = advert.padStart(15, ".")
// console.log(StartAdvert)
// // метод padEnd
// const endAdvert = advert.padEnd(20, "!")
// console.log(endAdvert)

// метод startsWith перевіряє чи на початку є слово яке ми вказали у змінну
// const checkStart = mess.startsWith("Привіт")
// console.log(checkStart)