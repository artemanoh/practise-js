// const a = 5;
// console.log(a);
// const b = 100;
// console.log(b);

// setTimeout(() => {
//   console.log("test1");
// }, 1000);

// for (let i = 1; i <= 10000; i++) {
//     console.log(i)
// }

// let timer = 0;
// setInterval(() =>{
// timer += 1;
// console.log(timer);
// }, 2000);



  let a = Number(prompt('Скільки секунд рахувати?'));
  const timer = document.querySelector('.num');
  const stopButton = document.querySelector('.stop');
  const interval = setInterval(() => {
    if (a >= 0) {
      timer.textContent = a;
      a--;
    } else {
      clearInterval(interval);
    }
  }, 1000);

  stopButton.addEventListener('click', () => {
    clearInterval(interval);
  });
