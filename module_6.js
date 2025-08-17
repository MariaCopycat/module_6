// Задание 5.10.1

const number = prompt(`Введите число`);
let result2 = (+number) ** 2;
let result3 = (+number) ** 3;
alert(`Введенное число - ${number}
Квадрат числа - ${result2}
Куб числа - ${result3}`);

// Задание 5.10.2

const discount = prompt(`Введите промокод`);
if (discount.toLowerCase() === `скидка`) {
    alert(`Промокод применён`)
} else {
    alert (`Промокод не работает`)
}

// Задание 5.10.3

const userNameFirst  = prompt(`Введите имя`);
const userBdayFirst = +prompt(`Введите год рождения`);
const yearFirst = 2023;
const ageFirst = yearFirst - userBdayFirst;
if (isNaN(userBdayFirst)) {
    alert(`Год должен быть числом!`);
} else {
    alert(`${userNameFirst}: ${ageFirst}`);
}

// Задание 5.10.4

const userNameSecond  = prompt(`Введите имя`);
const userBdaySecond = +prompt(`Введите год рождения`);
let ageSecond;
let years;
const yearSecond = 2023;
if (isNaN(userBdaySecond)) {
    alert(`Год не число или пустое имя.`);
} else {
    ageSecond = yearSecond - userBdaySecond;
    const surplusAgeFirst = ageSecond % 10;
    // НО если возраст от 11 до 14 лет, то добавляем проверку на исключения для этих чисел
    const surplusAgeSecond = ageSecond % 100;
    if (surplusAgeSecond >= 11 && surplusAgeSecond <= 14) {
        years = `лет`;
    } else {
        switch(surplusAgeFirst) {
            case 1:
                years = `год`;
                break;
            case 2:
            case 3:
            case 4:
                years = `года`;
                break;
            default:
                years = `лет`;
        }
    }
    alert(`${userNameSecond}: ${ageSecond} ${years}`);
}

// Задание 5.10.5

// Возраст пользователя
const userAge = +prompt(`Введите ваш возраст`);
if (isNaN(userAge)) {
    alert(`Некорректный ввод`);
} else {
        let maxCredit = 0;
        if (userAge >= 18 && userAge <= 21) {
            maxCredit = 50000;
        } else if (userAge >= 22 && userAge <= 35) {
            maxCredit = 400000;
        } else if (userAge >= 36 && userAge <= 65) {
            maxCredit = 1000000;
        } else {
            alert(`Кредит недоступен`);
        }
        
        // Сумма кредита
        if (maxCredit > 0) {
            const userCredit = +prompt(`Мы можем вам выдать максимум ${maxCredit}. Введите сумму кратную 1000.`);
            if (isNaN(userCredit)) {
                alert(`Некорректный ввод`);
            } else if (userCredit < 1000) {
                alert(`Видимо вам кредит не нужен. Всего доброго!`);
            } else {
                if (userCredit % 1000 !== 0) {
                    const maxUserCredit = Math.floor(userCredit / 1000) * 1000;
                    alert(`Вы ввели значение не кратное 1000. Мы можем выдать ${maxUserCredit}.`);
                } else {
                    if (userCredit > maxCredit) {
                        alert(`Данная сумма не одобрена. Мы можем выдать максимум ${maxCredit}.`);
                    } else {
                        alert(`Мы можем Вам выдать ${userCredit}.`);
                    }
                }
            }
        }
}

// Задание 6.6.1

const word = prompt(`Введите слово`);
const lowerWord = word.toLowerCase();
let wordPalindrome = ``;
for (let i = lowerWord.length - 1; i >= 0; i -= 1) {
    wordPalindrome += lowerWord[i];
}
if (lowerWord === wordPalindrome) {
    console.log(`Слово ${word} является палиндромом`);
} else {
    console.log(`Слово ${word} не является палиндромом`);
}

// Задание 6.6.2

const arr = [1, 2, 3, 1, 5, 4, 2, 3, 5, 'they', 'don\'t', 'know', 'that', 'we', 'know', 'that', 'they', 'know' ];
const uniqueSet = new Set(arr);
const uniqueArr = Array.from(uniqueSet);
console.log(uniqueArr);

// Задание 6.6.3

const userNumber = +prompt(`Введите число`);
const numbers = [];
for (let i = 0; i <= userNumber; i += 1) {
    numbers.push(i);
}
console.log(numbers);

// Задание 6.6.4

const symbols = [`x`, `o`, `x`, `o`, `x`, `o`, `x`, `o`, `x`];
let game = ``;
for (let i = 0; i < symbols.length; i += 1) {
    if (i % 3 === 0 && i !== 0) {
        console.log(game);
        game = ``;
    }
    if (game === ``) {
        game += symbols[i];
    } else {
        game += ` ` + symbols[i];
    }
}
if (game.length > 0 && (symbols.length % 3 !== 0)) {
    console.log(game);
}

// Задание 6.6.5

const obj = {
    some: 'some',
    dom: 'text',
    arr: [1, 2, 3, 4, 5],
    tom: 'there'
};
const arrValues = [];
for (let key of Object.keys(obj)) {
    if (Array.isArray(obj[key])) {
        arrValues.push(...obj[key]);
    } else {
        arrValues.push(obj[key]);
    }
}
console.log(arrValues);