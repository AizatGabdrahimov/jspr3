'use strict'

// 1 
let cost = +prompt('Введите стоимость товара', '1');
let money = +prompt('Введите количество денег', '0');

if (cost < 0 || money < 0){
    alert('Неверный формат ввода');
}
else if(cost == money) {
    alert('Покупка совершена');
}

else if (cost > money) {
    alert(`Для покупки не хватает ${cost-money} p.`);
}
else if (cost < money) {
    alert(`Покупка совершена. Сдача ${money-cost} р.`);
}

// 2

let x = prompt('введите число', '1');

if(x > 0) {
    alert('1');
}
else if (x < 0) {
    alert('-1');
}
else if (x == 0) {
    alert('0');
}

// 3

let a = +prompt('Введите число 1', '1');
let b = +prompt('Введите число 2', '1');

let result = (a + b < 4) ? 'Мало' : 'Много';
alert(result)

// 4

let login = prompt('Введите должность: Сотрудник/Директор');
let message = (login == 'Сотрудник') ? 'Привет' : (login == 'Директор') ? 'Здравствуйте' : (login == '') ? 'Нет логина' : '';
alert(message);

// 5

let log = prompt('Введите логин');

if (log == 'Админ') {
    let pass = prompt('Введите пароль');
    if(pass == 'Я главный') {
        alert('Здравствуйте!');
    }
    else if (pass == null || pass == '') {
        alert('Отменено');
    }
    else {
        alert('Неверный пароль');
    }
}

else if (log == null || log == '') {
    alert('Отменено');
}

else { 
    alert('Я вас не знаю');
}
