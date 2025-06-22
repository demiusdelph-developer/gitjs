// ---
// Змінні та типи даних у JavaScript
//
// Змінна — це іменований контейнер для зберігання даних. Вона дозволяє зберігати, змінювати та використовувати значення у програмі.
// Оголошення змінної: let, const або var
//
// let a = 5; // змінна з числовим значенням (тип number)
// const name = "Dima"; // змінна з рядковим значенням (тип string)
// var flag = true; // булевий тип (true/false)
//
// Основні типи даних у JavaScript:
// - Number: числа (5, 3.14)
// - String: рядки ("Hello", 'world')
// - Boolean: логічний тип (true, false)
// - Undefined: змінна оголошена, але не має значення
// - Null: "порожнє" значення
// - Object: складна структура для зберігання даних (масиви, об'єкти)
// - Symbol, BigInt: спеціальні типи (рідко використовуються)
//
// Приклад:
// let age = 30; // Number
// let user = {name: "Anna"}; // Object
// let isActive = false; // Boolean
// let nothing = null; // Null
// let notDefined; // Undefined
//
// typeof дозволяє дізнатися тип даних:
// console.log(typeof age); // "number"
// console.log(typeof user); // "object"
// console.log(typeof isActive); // "boolean"
// ---

let a = 5;

console.log(a);


const b = {
    name: "Dima",
    year: 1992,
    proffesion: "web developer"
};

console.log(b);

const sum = (x, y) => {
    console.log('1');
    return x + y;
};

// sum(10, 15);
let test = 'test';
let keyboard = 'for physical keyboard';
// console.log(test, keyboard);