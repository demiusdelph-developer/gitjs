// # Завдання 1. Завдання для тренування по JS

// 1. Створи змінні різних типів (number, string, boolean, object, array, null, undefined) і виведи їх у консоль разом із типом (через typeof).

let num = 42; // Number
let str = "Hello, World!"; // String
let bool = true; // Boolean
let obj = { name: "Alice", age: 30 }; // Object
let arr = [1, 2, 3, 4, 5]; // Array
let nul = null; // Null 

// 2. Напиши просту програму, яка перевіряє вік користувача (if/else) і виводить "Дорослий" або "Дитина".

let age = prompt("Введіть ваш вік:");
if (age >= 18) {
    console.log("Дорослий");
}   else {
    console.log("Дитина");
}

// або 2 варіант
let userAge = prompt("Введіть ваш вік:");
if (userAge < 18) {
    console.log('%cДитина', 'color: blue; font-weight: bold;');
} else {
    console.log('%cДорослий', 'color: blue; font-weight: bold;');
}