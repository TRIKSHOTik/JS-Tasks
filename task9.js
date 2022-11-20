// Задание 1

// Описать в html тег input и тег ul. По нажатию на клавишу в инпуте в список ul должен добавляться элемент li. Содержимое li - нажатая клавиша.

// const input = document.querySelector('input');
// const ul = document.querySelector('ul');
// input.addEventListener('keydown', () => {
    // const li = document.createElement('li');
    // li.innerText = input.value;
    // input.value = '';
//     ul.appendChild(li);
    
// })


// Задание 2

// Вставить в html теги input и div (просто предусмотреть в разметке).

// Обрабатывая событие keyup на теге input, выводить в консоль введенный текст каждый раз, как только клиент вписывает любой символ в поле (или стирает любой символ из поля). Вам понадобится считывать значение поля, это input.value

// const input = document.querySelector('.in1');
// const div = document.querySelector('div');

// input.addEventListener('keyup', () => {
    
//     console.log(input.value);
// })


// Задание 3

// Создать в html форму с инпутом и кнопкой. Также добавить в html тег ul. Когда форма отправляется, добавлять в список тег li. Его содержимое - введенный текст (input.value). После отправки формы инпут должен быть очищен (проставить пустую строку в value).

// const input = document.querySelector('.in2');
// const ul = document.querySelector('.ul1');
// const form = document.querySelector('form');
// form.addEventListener('submit', (event)=> {
//     event.preventDefault();
//     const li = document.createElement('li');
//     li.innerText = input.value;
//     input.value = '';
//     ul.append(li);
// })


// Задание 4

// Калькулятор. 
// Создать в html форму с текстовым input, тегом select, вторым текстовым input и кнопкой. Добавить в html div. Опции select - арифметические знаки. В оба инпута пользователь вводит число. Когда пользователь отправляет форму, над двумя числами выполняется действие, выбранное в select. Результат отображается в div.

// 1) решить с помощью if
    // const num1 = document.querySelector(`.calc`);
    // const num2 = document.querySelector(`.calc1`);
    // const form = document.querySelector('.form1');
    // let result;
    // const select = document.querySelector(`select`);
    // const div = document.querySelector(`.calc-div`);
    // form.addEventListener('submit',(event) => {
    //     event.preventDefault();
    //     if(select.value === `+`){
    //         result = +num1.value + +num2.value;
    //     }
    //     if(select.value === `-`){
    //         result = +num1.value - +num2.value;
    //     }
    //     if(select.value ===`/`){
    //         result = +num1.value / +num2.value;
    //     }
    //     if(select.value === `*`){
    //         result = +num1.value * +num2.value;
    //     }
    //     if(select.value === `**`){
    //         result = (+num1.value) ** +num2.value;
    //     }
    //     if(select.value === `%`){
    //         result = +num1.value % +num2.value;
    //     }
    //     div.innerHTML = '';
    //     div.append(result);
    // });

// 2) решить с помощью evel (https://developer.mozilla.org/...)

    // const num1 = document.querySelector(`.calc`);
    // const num2 = document.querySelector(`.calc1`);
    // const form = document.querySelector('.form1');
    // let result;
    // const select = document.querySelector(`select`);
    // const div = document.querySelector(`.calc-div`);
    // form.addEventListener('submit',(event) => {
    //     event.preventDefault();
    //     result = eval(`${+num1.value} ${select.value} ${+num2.value}`);
    //     div.innerHTML = '';
    //     div.append(result);
    // });


    // Задание 5

    // Вставить в разметку html тег button без js (просто предусмотреть в разметке). При наведении на кнопку изменять ее цвет каждый раз рандомным цветом. При выведении мышки за пределы кнопки, поворачивать кнопку на рандомный угол от -180 до 180градусов. Использовать обработку событий mouseenter, mouseleave на этой кнопке.

    const button = document.querySelector('.btn');
    let color;
    let degree;
    function getRandomRGB() {
        let colour = `rgb(${getRandomInteger(0,255)},${getRandomInteger(0,255)},${getRandomInteger(0,255)})`;
        return colour;
    }
    
    function getRandomInteger(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    button.addEventListener('mouseenter', (event) => {
        button.style.backgroundColor = getRandomRGB();
    });
    button.addEventListener('mouseleave', () => {
        button.style.transform =  `rotate(${getRandomInteger(-180, 180)}deg)`;
    });

    

