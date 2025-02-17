
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
//
// function square(a,b){
//     return a*b;
//
// }
// console.log(square(2,3));

// // - створити функцію яка обчислює та повертає площу кола з радіусом r
//
// function square(r){
//     return Math.PI*r*r;
// }
// console.log(square(2));

// // - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
//
// function square(r,h){
//     return 2*Math.PI * r * (r+h);
// }
// console.log(square(2,3));

// // - створити функцію яка приймає масив та виводить кожен його елемент
//
//  function array(arr){
//         for (let i = 0; i < arr.length; i++) {
//             console.log(arr[i]);
//         }
//  }
//     array([1,2,3,4,5]);

// // - створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент
//
// function create(msg){
//     document.write(`<p>${msg}</p>`);
//
// }
// create('Hello world');

// - створити функцію яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий
//
// function createUl (text) {
//     document.write(`<ul>
//      <li>${text}</li>
//      <li>${text}</li>
//      <li>${text}</li>
//      </ul>`);
// }
// createUl('Hello world');

// // - створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write
//
//  function createUl (text, num) {
//         document.write('<ul>');
//         for (let i = 0; i < num; i++) {
//             document.write(`<li>${text}</li>`);
//         }
//         document.write('</ul>');
//  }
//     createUl('Hello world', 5);

// // - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write
//
// function createValue (massiveElements) {
//     document.write(`<ul>`);
//     for (const Element of massiveElements) {
//         document.write(`<li>${Element}</li>`);
//     }
//
//     document.write(`</ul>`);
//
// }
// createValue([2,'hello', 25, 3]);

// // - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
//
// function createObjects(massiveObjects) {
//     document.write(`<div>`);
//     for (const object of massiveObjects) {
//         document.write(`<div>${object.id} ${object.age} ${object.name}</div>`);
//     }
//
//     document.write(`</div>`);
//
// }
// createObjects([{id:1, name: 'Vasya', age: 25}, {id:2, name: 'Petya', age: 30}]);

// // - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
//
// function numbers(arr){
//     let sum = 0;
//     for (const number of arr) {
//         sum = sum + number;
//     }
//     return sum;
// }
// console.log(numbers([1,2,10])) ;

// - створити функцію яка повертає найменьше число з масиву
//
// function getMinNumberFromArray(arr) {
//     let min = arr[0];
//     for (const number of arr) {
//         if (number < min) {
//             min = number;
//         }
//     }
//     return min;
// }
// console.log(getMinNumberFromArray([1,2,-10,3,4,5]));

// // створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
// // Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
//
//  function swap(arr, index1, index2) {
//         let temp = arr[index1];
//         arr[index1] = arr[index2];
//         arr[index2] = temp;
//         return arr;
//  }
// console.log(swap([11,22,33,44],0,1));



//arrow type ************************************************************

// let square = (a, b) => a * b;
// console.log(square(2, 3));

// let radiusOfSquare = (r) => Math.PI * r * r;
// console.log(radiusOfSquare(2));

// let squareOfCilinder = (r, h) => {
//     return 2 * Math.PI * r * (r + h);
// }
// console.log(squareOfCilinder(2, 3));

// let createArray = (arr) => {
//     for (const Element of arr) {
//         console.log(Element);
//
//     }
// }
//  createArray([1, 2, 3, 4, 5]);

// let paragraph = (msg) => document.write(`<p>${msg}</p>`);
// paragraph('Hello world');\

// let createUl = (text) => {
//     document.write(`<ul>`);
//     for (const i of text) {
//         document.write(`<li>${i}</li>`);
//     }
//     document.write(`</ul>`);
// }
// createUl(['Hello', 'world', 'JS']);

// let createUl = (text, num) => {
//     document.write(`<ul>`);
//     for (let i = 0; i < num; i++) {
//         document.write(`<li>${text}</li>`);
//
//     }
//     document.write(`</ul>`);
// }
// createUl('Hello world', 3);





//
// описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king'
//     color:'', // 'red','black'
// }


let cards = []
let cardSuit = ['spade', 'diamond', 'heart', 'clubs'];
let value = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
let color = ['red', 'black'];

// - вивести усі трефи від 9 та більше

for (const cardSuitElement of cardSuit) {
    for (const valueElement of value) {
            if (cardSuitElement === 'clubs' && valueElement >= '9') {
                cards.push({cardSuit: cardSuitElement, value: valueElement,});
            }
        }

}


console.log(cards);
