// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let arr = [1, 2, 3, 4, 5, 'Hello', 'World', true, false, null];
console.log(arr[5]);

// Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 = {
    title: 'The Lord of the Rings',
    pageCount: 1000,
    genre: 'Fantasy'
}
let book2 = {
    title: 'The Witcher',
    pageCount: 800,
    genre: 'Scary'
}
let book3 = {
    title: 'The Hobbit',
    pageCount: 500,
    genre: 'adventure'
}
    // - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let book4 = {
    title: 'The Lord of the Rings',
    pageCount: 1000,
    genre: 'Fantasy',
    authors: [
        {name: 'J.R.R. Tolkien', age: 72}
    ]
}
let book5 = {
    title: 'The Witcher',
    pageCount: 800,
    genre: 'Scary',
    authors: [
        {name: 'Andrzej Sapkowski', age: 50}
    ]
}
let book6 = {
    title: 'The Hobbit',
    pageCount: 500,
    genre: 'adventure',
    authors: [
        {name: 'J.R.R. Tolkien', age: 72}
    ]
}
    // - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users = [
    {name: 'Vasya', username: 'vasya123', password:123},
    {name: 'Petya', username: 'petya123', password:231},
    {name: 'Kolya', username: 'kolya123', password:312},
    {name: 'Olya', username: 'olya123', password:132},
    {name: 'Ira', username: 'ira123', password:213},
    {name: 'Sasha', username: 'sasha123', password:421},
    {name: 'Masha', username: 'masha123', password:241},
    {name: 'Dasha', username: 'dasha123', password:142},
    {name: 'Vika', username: 'vika123', password:412},
    {name: 'Oksana', username: 'oksana123', password:124}
]
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);
// - описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу

// let temperature = [
//     {morning: 10, day: 20, evening: 15},
//     {morning: 15, day: 25, evening: 20},
//     {morning: 20, day: 30, evening: 25},
//     {morning: 25, day: 35, evening: 30},
//     {morning: 30, day: 40, evening: 35},
//     {morning: 35, day: 45, evening: 40},
//     {morning: 40, day: 50, evening: 45},
// ]
//     // - Є змінна х, якій ви надаєте довільне числове значення.
//     // Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
//
// let x = 1;
// if (x !== 0) {
//     console.log('Вірно');
// } else {
//     console.log('Невірно');
// }
// let a = 0;
// if (a !== 0) {
//     console.log('Вірно');
// } else {
//     console.log('Невірно');
// }
// Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = 60;
if(time >= 0 && time <= 15) {
    console.log('Перша чверть');
}else if(time >= 16 && time <= 30) {
    console.log('Друга чверть');
}else if(time >= 31 && time <= 45) {
    console.log('Третя чверть');
} else if(time >= 46 && time <= 59) {
    console.log('Четверта чверть');
}else {
    console.log('Число не входить в діапазон');
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = 15;
if (day >= 1 && day <= 10){
    console.log('Перша декада');
}else if (day >= 11 && day <= 20){
    console.log('Друга декада');
}else if (day >= 21 && day <= 31){
    console.log('Третя декада');
}else {
    console.log('Число не входить в діапазон');
}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let dayOfWeek = 6;
switch (dayOfWeek) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('There is no such day of the week');
}

// Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.

let num1 = 3;
let num2 = 10;
if(num1 > num2){
    console.log(num1);
}else if(num1 < num2){
    console.log(num2);
}else if (num1 === num2){
    console.log('Numbers are equal');
}else {
    console.log('Invalid data');
}

// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//     буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).

let x = 5
if (x === 0){
    console.log(x)
}
else{
    console.log('default')
}

// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0].monthDuration > 5){
    console.log('Супер');
}
if (coursesAndDurationArray[1].monthDuration > 5){
    console.log('Супер');
}
if (coursesAndDurationArray[2].monthDuration > 5){
    console.log('Супер');
}
if (coursesAndDurationArray[3].monthDuration > 5){
    console.log('Супер');
}
if (coursesAndDurationArray[4].monthDuration > 5){
    console.log('Супер');
}
if (coursesAndDurationArray[5].monthDuration > 5){
    console.log('Супер');
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let number1 = 0;
while (number1 < numbers.length){
    console.log(numbers[number1]);
    number1++;
}






