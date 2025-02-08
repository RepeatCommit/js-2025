// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

// for (let i = 0; i < 10; i++) {
//     document.write(`<div>Hola </div>`);
//
// }
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// for (let i = 0; i < 10; i++) {
//     document.write(`<div>${i}</div>`);
//
// }
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

// let i = 0;
// while (i < 20) {
//     document.write(`<h1>js</h1>`);
//     i++;
// }
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// let i = 0;
// while (i < 20) {
//     document.write(`<h1> js ${i}</h1>`);
//     i++;
// }
// Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:


// Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:

// let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//   for (const listOfItem of listOfItems) {
//       document.write(`<ul>
//         <li>${listOfItem}</li>
//          </ul>`);
//
// }

// Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон

// let products = [
//     {
//         title: 'milk',
//         price: 22,
//         image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//     },
//     {
//         title: 'juice',
//         price: 27,
//         image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//     },
//     {
//         title: 'tomato',
//         price: 47,
//         image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//     },
//     {
//         title: 'tea',
//         price: 15,
//         image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//     },
// ];
//
// for (const product of products) {
//     document.write(`<div class="product-card">
//
// <h3 class="product-title">${product.title}  Price - ${product.price} </h3>
//
// <img src="${product.image}" alt="image" class="product-image">
// </div>`)
//
// }

// за допомоги циклу вивести:
//     - користувачів зі статусом true

// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// for (const user of users) {
//
//     if (user.status){
//         document.write(`<div>${user.name}</div>`)
//     }else {
//         document.write(`<h3>${user.name}</h3>`)
//     }
// }
// for (const user of users) {
//     user.age > 30 ? document.write(`<div>${user.name}</div>`) : null;
// }


// let nembers = [1, 2, 3, 4, 5];
// let strings = ['a', 'b', 'c', 'd', 'e'];
// let items = [1, 'a', 2, 'b',true];

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let arr = [];
// arr.push('Hello');
// arr.push('World');
// arr.push('JS');
// console.log(arr);

// перебрати циклом while та вивести  числа тільки з непарним індексом

// let numbers = [2,17,13,6,22,31,45,66,100,-18];
// let i = 0;
// while (i < numbers.length) {
//     console.log(numbers[i]);
//     i++;
// }
// for (let i = 0; i < numbers.length; i++) {
//     const number = numbers[i];
//     console.log(number);
//
// }
// let i = 0;
// while (i < numbers.length) {
//     if (i % 2 !== 0) {
//         console.log(numbers[i]);
//     }
//     i++;
// }
// for (let i = 0; i < numbers.length; i++) {
//     const number = numbers[i];
//     if (i % 2 !== 0) {
//         console.log(number);
//     }
//
// }
//  перебрати циклом while та вивести  числа тільки парні  значення
// let i = 0;
// while (i < numbers.length) {
//     if (numbers[i] % 2 === 0) {
//         console.log(numbers[i]);
//     }
//     i++;
// }

// for (let i = 0; i < numbers.length; i++) {
//        const number = numbers[i];
//        if (number % 2 === 0) {
//            console.log(number);
//        }
// }

//замінити кожне число кратне 3 на слово "okten"
//  for (let i = 0; i < numbers.length; i++) {
//         const number = numbers[i];
//         if (number % 3 === 0) {
//             numbers[i] = 'okten';
//         }
//         console.log(numbers[i]);
//  }

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let numbers = [6,17,13,6,22,51,45,66,100,22];
// for (const number of numbers) {
//     console.log(number);
//
// }

// let strings = ['haha','lol','hi','hello','bye','goodbye','goodnight','goodmorning','goodafternoon','goodluck'];
// for (const string of strings) {
//     console.log(string);
//
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

// let mixTypes=[1, 'a', 2, 'b',true,56,'boom',false,78,'hello'];
// for (const mixType of mixTypes) {
//     if (typeof mixType === 'boolean') {
//         console.log(mixType);
//     }
// }
// for (const mixType of mixTypes) {
//     if (typeof mixType === 'number') {
//         console.log(mixType);
//     }
//
// }
// for (let i = 0; i < mixTypes.length; i++) {
//     const mixType = mixTypes[i];
//     if (typeof mixType === 'string') {
//         console.log(mixType);
//     }
//
// }

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let arr = [];
// arr.push('Hello');
// arr.push('World');
// arr.push('JS');
// arr.push(1);
// arr.push(2);
// arr.push(true);
// arr.push(false);
// arr.push(3);
// arr.push(4);
// arr.push('Python');
// console.log(arr);

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
//  for (let i = 1; i < 10; i++) {
//         console.log(i);
//         document.write(`<div>${i}</div>`);
//
//  }

// for (let i = 1; i < 100; i++) {
//     console.log(i);
//     document.write(`<div>${i}</div>`);
//
// }


// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
// - знайти наібльшу книжку.


let books = [
    {title: 'book1', pages: 100, authors: ['author1', 'author2', 'author33'], genres: ['genre1', 'genre2', 'genre3']},
    {title: 'book222', pages: 200, authors: ['author3'], genres: ['genre3', 'genre4', 'genre5', 'genre6']},
    {
        title: 'book3333',
        pages: 300,
        authors: ['author5', 'author6'],
        genres: ['genre54', 'genre63', 'genre7', 'genre89', 'genre90']
    },
    {title: 'book444', pages: 400, authors: ['author7'], genres: ['genre7', 'genre8', 'genre99', 'genre11']},
    {title: 'book533333', pages: 500, authors: ['author9', 'author10'], genres: ['genre9']},
    {
        title: 'book62',
        pages: 600,
        authors: ['author11', 'author12', 'author44', 'author78'],
        genres: ['genre11', 'genre12', 'genre133']
    },
    {title: 'book732', pages: 700, authors: ['author13'], genres: ['genre13', 'genre14']},
    {
        title: 'book83',
        pages: 800,
        authors: ['author15', 'author16'],
        genres: ['genre15', 'genre156', 'genre175', 'genre182', 'genre194', 'genre200']
    },
    {title: 'book92322', pages: 900, authors: ['author17', 'author18'], genres: ['genre17', 'genre168']},
    {title: 'book103', pages: 1000, authors: ['author19'], genres: ['genre19', 'genre20']},
];

// let maxBook = books[0];
// for (const book of books) {
//     if (book.pages > maxBook.pages) {
//         maxBook = book;
//     }
// }
//
// console.log(maxBook);

// let maxGenreBook = books[0];
// for (const book of books) {
//        if (book.genres.length > maxGenreBook.genres.length) {
//               maxGenreBook = book;
//        }
// }
// console.log(maxGenreBook);


// let maxBookName = books[0];
// for (const book of books) {
//     if (book.title.length > maxBookName.title.length) {
//         maxBookName = book;
//     }
//
// }
// console.log(maxBookName);

letmaxBookAuthors = book[0]

let bookWithTwoAuthors = books[0];
for (const book of books) {
    if (book.authors.length === 2) {
        bookWithTwoAuthors = book;

    }
}
console.log(bookWithTwoAuthors);








