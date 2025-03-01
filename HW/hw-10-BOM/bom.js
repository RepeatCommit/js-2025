
//- Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
// let button = document.getElementsByTagName('button')[0];
// button.onclick = function() {
//     document.getElementById('text').style.display = 'none';
//
// }

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//
// let accept = document.forms.accept;
// accept.addEventListener('submit', function (event) {
//     event.preventDefault();
//     let age = accept.age;
//     if(age.value > 18){
//         console.log('Welcome');
//     }else {
//         console.log('Sorry');
//     }
// });

// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
// let createObject =  document.forms.object;
// createObject.addEventListener('submit', function (event) {
//     event.preventDefault();
//     let name = this.name.value;
//     let surname = this.surname.value;
//     let age = this.age.value;
//     let div =  document.createElement('div');
//     div.innerText = `Name: ${name}, Surname: ${surname}, Age: ${age}`;
//     document.body.appendChild(div);
//
// });

// // є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
//
// let div = document.getElementById('number');
// let numberNow = +localStorage.getItem('number')
// numberNow++;
// localStorage.setItem('number', numberNow);

// // Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessionsList зберігається інформація про дату та час відвідування сторінки. Є  сторінка sessionsListPage.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а малювати в DOM
// let newDate = new Date();
//  localStorage.setItem('sessionList', JSON.stringify(newDate));

// // створити конвертор ваги з кг в фунти. данні заповнюються через інпут. При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок
// let input = document.forms.lb;
// input.addEventListener('input', function () {
//     let kg = this.kg.value;
//     let newLb = kg * 2.20462;
//     this.lb.value = newLb;
// });

// // В localStorage зберігаються масиви. Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та додає в нього об'єкт
// // сигнатура функції -
// // addToLocalStorage(arrayName:string,objToAdd:any{}):void
// let arr = [];
// function addToLocalStorage(arrayName, objToAdd) {
//     let arr = JSON.parse(localStorage.getItem(arrayName)) || [];
//     arr.push(objToAdd);
//     localStorage.setItem(arrayName, JSON.stringify(arr));
//
// }
//  addToLocalStorage('arr', {name: 'Sanya', age: 22});

// Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.


// const table = document.getElementsByClassName('newTable')[0];
// const tableGenerate = document.forms.tableGen;
//
// tableGenerate.addEventListener('submit', function (event) {
//     event.preventDefault();
//     const linesValue = +tableGenerate.lines.value;
//     const cellsValue = +tableGenerate.cells.value;
//     const dataValue = tableGenerate.data.value;
//     console.log(linesValue, cellsValue, dataValue);
//
//     for (let i = 0; i < linesValue; i++) {
//       const tr =  document.createElement('tr');
//         for (let j = 0; j < cellsValue; j++) {
//             const td = document.createElement('td');
//             td.innerText = dataValue;
//             tr.appendChild(td);
//         }
//
//        table.appendChild(tr);
//
//
//     }
//
// })

// зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться наступні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів

 let arr = [];
for (let i = 1; i <=100; i++) {
    arr.push({name: `Name${i}`, age: i});

}
let index = 0;

let prev = document.createElement('button');
prev.classList.add('prev');
prev.innerText = 'Prev';
document.body.appendChild(prev);



let next = document.createElement('button');
next.classList.add('next');
next.innerText = 'Next';
next.onclick = function () {
    if (index + 10 < arr.length) {
        index += 10;
        console.log(arr.slice(index, index + 10));
    }
}
document.body.appendChild(next);
















