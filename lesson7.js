// Задание 1
// Примените каждый из этих методов округления к трем числам: 5.4, 5.5, 5.6:

// Math.round(x)
// Math.ceil(x)
// Math.floor(x)
// В комментариях к каждой строке напишите, как работают эти округления.

let x1 = 5.4, x2 = 5.5, x3 = 5.6;

console.log(Math.round(x1));
console.log(Math.round(x2)); // округление числа до ближайшего целого
console.log(Math.round(x3));

console.log(Math.ceil(x1));
console.log(Math.ceil(x2)); // округляет число к большему целому
console.log(Math.ceil(x3));

console.log(Math.floor(x1));
console.log(Math.floor(x2)); // округляет число к меньшему целому
console.log(Math.floor(x3));


// Задание 2

// Выведите в консоль фразы в 2 строки:
// Сегодня 27 сентября 2022 года (здесь будет ваша дата)
// 19 часов 20 минут (здесь будет ваше время)


let date = new Date();
let 
    day = date.getDate(),
    year = date.getFullYear();
    // month = date.toLocaleDateString().slice(0,5),
    // month1 = month.substring(5,3);
    locale = "ru-ru",
    month = date.toLocaleString(locale, { month: "long" }); 

let time = new Date();
let 
    hours = time.getHours(),
    min = time.getMinutes();
console.log(`Сегодня ${day} ${month} ${year} года`);
console.log(`${hours} часов ${min} минут`);
