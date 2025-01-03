// // логічне і-(&&) шукає останнє true, але якщо зустрічає false то зупинається на ньомуї,

// console.log("0" && 1 && 2 && "" && undefined && 9)
// console.log(5 > 3 && 0 === 0 && "hi")

// // логічне або-(||) шукає перше true та вертає йього, якшо зустрічає false пропускає 

// console.log(0 || null || 2 === 3 || "" || undefined || 9)

// // логічне не-(!) робить інверсію тобто міняє true на false а false на true

// console.log(! 0)
// console.log(! 5 > 3)

// // Напиши скрипт який провіряє можлтвість відкрити чат з користувачем.
// //   Для цього користувач має бути:
// //  - другом
// //  - онлайн
// //   - без режиму не турбувати

// const isFriend = true
// const isOnline = true
// const canOpenChat = isFriend && isOnline
// console.log(canOpenChat)

// Напиши скрипт перевірки підписки користувача при доступі до контенту
//  - Є три типи підписки: free, pro та vip.
//  - Отримати доступ можуть лише користувачі pro та vip

// 1;
// const free = true
// const pro = true
// const vip = true
// const haveSub = free || pro || vip
// console.log(haveSub)

// 2;
// const isSub = prompt("Ведіть назву підписки")
// console.log(isSub)
// if (isSub === "free" || isSub === "pro" || isSub === "vip"){
//     alert("Ви авторизовані")
// } else {
//     alert("Ваш тип підписки не вілповідає для авторизації")
// }