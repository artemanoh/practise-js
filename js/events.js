const buttonBg = document.querySelector('button');

// buttonBg.addEventListener('click',(event) => {
//     const page = document.querySelector('body');
//     const red = Math.random() * (255 - 0) + 0;
//     const green = Math.random() * (255 - 0) + 0;
//     const blue =  Math.random() * (255 - 0) + 0;
//     page.style.backgroundColor = `rgb(${red},${green},${blue})`;
//     console.log(event.target)
// })

// console.log(buttonBg);
// додати зміну кольору фону сторінки при кліку на кнопку

const inputElement = document.querySelector('.input');
inputElement.addEventListener('input', (event) => {
    console.log(event.target.value);
})

const inputTest = document.querySelector('.form_input');
inputTest.addEventListener('change', (event) => {
    console.log(event.target.value);
})

buttonBg.addEventListener('focus', (event) => { 
    buttonBg.style.backgroundColor = 'red';
});

buttonBg.addEventListener('blur', (event) => {
    buttonBg.style.backgroundColor = 'gray';
});

inputElement.addEventListener('focus', (event) => { 
    inputElement.style.boxShadow = '3px 3px 3px 3px red';
});

inputElement.addEventListener('blur', (event) => { 
    inputElement.style.boxShadow = 'none';
});

const formElement = document.querySelector('form');
console.log(formElement);

formElement.addEventListener('submit', (event) =>{
event.preventDefault() //блокує перезавантаження сторінки
const login = event.currentTarget.elements.login.value;
const password = event.currentTarget.elements.password.value;
const userData = {
    userlogin: login,
    userpassword: password,
};
console.log(userData)
});

const divElem = document.querySelector('#test')
divElem.addEventListener('click', (event) => {
    console.log(event.target, 'це таргет')
    console.log(event.currentTarget, 'це currentтаргет')
});

// для події клавіатури ми слухач завжди додаємо на сторінку document а 
document.addEventListener('keydown', (event) => {
    if(event.code === 'keyY'){
        document.querySelector('body').style.backgroundColor = 'yellow';
    } else if(event.code === 'keyG'){
        document.querySelector('body').style.backgroundColor = 'green';
    } else if(event.code === 'keyB'){ 
        document.querySelector('body').style.backgroundColor = 'blue';
    } else if(event.code === 'keyR'){
        document.querySelector('body').style.backgroundColor = 'red';
    }
    console.log(event.code);
});

const boxMove = document.querySelector('#box');

document.addEventListener('keydown', (event) => {
    if(event.code === 'ArrowUp'){
        boxMove.style.top = `${boxMove.offsetTop - 10}px`;
    } else if(event.code === 'ArrowDown'){
        boxMove.style.top = `${boxMove.offsetTop + 10}px`;
    } else if(event.code === 'ArrowLeft'){
        boxMove.style.left = `${boxMove.offsetLeft - 10}px`;
    } else if(event.code === 'ArrowRight'){
        boxMove.style.left = `${boxMove.offsetLeft + 10}px`;
    }
});
