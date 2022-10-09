Задание 1

Написать функцию, которая принимает два параметра и складывает их.

Предусмотреть проверку на тип данных. Если хоть один из параметров не является числом, должно выводиться ообщение об ошибке. Также обраьботайте случай, если не было введено два параметра.

Примеры результатов вызова функции:

sum(2,4); // 6

sum('d',4); // введенные данные не являются числами

sum(1, [2]); // введенные данные не являются числами

sum(1); // введите два параметра

sum(); // введите два параметра

function sum(a,b) {
    if (typeof a != typeof 13 && typeof b != typeof 33) {
        console.log(`данные не являются числами`);
    } else if (arguments.length != 2){
        console.log(`введите два пораметра`);
    } else {
    return a + b;
    }
}


console.log(sum(2,4));


Задание 2

Измените функцию "square" так, чтобы в случае ее вызова без аргумента генерировалась консольная ошибка (console.error):
"Функция "square" не может быть вызвана без аргумента"

function square(a) {
  console.log(a * a)
}

square(10) // 100

square()
ДО: NaN
ПОСЛЕ: Uncaught Error: Функция "square" не может быть вызвана без аргумента

function square(a) {

if(arguments.length == 1){
    console.log(a * a)
} else if (arguments.length != 1) {
    console.error('Функция не может быть вызвана без аргумента');
}

}
square(10);
square();


Задание 3

Создать функцию "угадай число". Она принимает число от 1 до 10 (обязательно проверить, что число не больше 10 и не меньше 0). Генерирует рандомное число от 1 до 10 и сравнивает с заданным числом.

Если они совпали, то возвращает “Вы выиграли”, если нет - то “Вы не угадали, ваше число -  ...,  а выпало число ...”

Функция создания случайного числа уже была ранее в материалах, в задаче по созданию случайного цвета.

Написать функцию в стрелочном синтаксисе.


let guessNumber = (a) => {
    let number = getRandomInteger(1, 10);
    if (a > 0 && a <= 10) {
        if (a == number) {
            console.log(`You won`);
        } else if (a != number) {
            console.log(`You didnt win, your number is ${a} , but dropped a number ${number}`);
        }
    } else {
        console.log(`Number is not allowed`);
    }
}

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

console.log(guessNumber(100));
console.log(guessNumber(10));
console.log(guessNumber(1));


4))
Определить массив, например let arr = [5, 4, 3, 8, 0];
Создать функцию filterFor(arr, a). Функция должна вернуть новый массив из элементов arr, но в нем должны содержаться элементы, которые больше или равны (>=) значения переменной a.
Например, запуск функции filterFor(arr, 5) дает результат [5,8]
запуск функции filterFor(arr, 10) дает результат []
запуск функции filterFor(arr, 3.11) дает результат [4,5,8]

let arr = [5, 4, 3, 8, 0];
let arraychik = [1,4,7,3,7,10,444];
let filterFor = (arr,a) => {
    let array = [];
    arr.forEach(item => {
        if (item >= a) {
            array.push(item);
        }
    });
    return array;
}
console.log(filterFor(arr,5));
console.log(filterFor(arraychik,10));



5)))
Напишите функцию copyArr(arr), которая копирует массив, не изменяя оригинал. Используйте подходящий метод массива.

let arra = [5, 4, 3, 8, 0];

let copyArr = (arr) => {
    return arr.map(item => item);
}
console.log(copyArr([7,2,6,4]));
console.log(copyArr(arra));


6))
Создайте функцию sumObjectValues, которая будет суммировать все значения свойств, которые являются числами. Сумму чисел необходимо вернуть из функции.

Проверить работу функции можно на объекте:

const objectWithNumbers = {
  a: 10,
  b: 20,
  c: 'string',
  d: 12,
}

const objectWithNumbers = {
    a: 10,
    b: 20,
    c: 'string',
    d: 12
}

function sumObjectValues(obj) {
    let nums = 0;
    for (let key in obj) {
        console.log(obj[key]);
        if (typeof obj[key] == typeof 4) {
            nums += obj[key];
        }
    }
    return nums;
}
console.log(sumObjectValues(objectWithNumbers));
