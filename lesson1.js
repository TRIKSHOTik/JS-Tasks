
//1/Запросите у пользователя его имя. Выведите в окошке (с помощью функции alert) фразу: Привет, Николай! (вместо Николай должно показываться имя, которое ввел пользователь)


let user = prompt('Ваше имя');
alert('Привет, ' + user + '!');


//2/Запросите у пользователя число. Затем запросите степень, в которую нужно возвести это число. Выведите в консоль результат.

let num = prompt('Введите число,которое будем возводить в степень');
let degree = prompt('Введите степень,в которое будем возводить число');
let next = num ** degree;
alert(next);
