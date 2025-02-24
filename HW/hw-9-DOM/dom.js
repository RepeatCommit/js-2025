
// // створити блок,
// //     - додати йому класи wrap, collapse, alpha, beta
// // - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// // - додати цей блок в body.
// // - клонувати його повністю, та додати клон в body.
// let main= document.getElementById('main')
// main.classList.toggle('wrap')
// main.classList.add('collapse', 'alpha', 'beta')
// main.innerHTML = 'some info'
// document.body.appendChild(main)
// let mainClone = main.cloneNode(true);
// document.body.appendChild(mainClone);

// // ['Main','Products','About us','Contacts']
// // Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

//   let strings = document.getElementsByClassName('strings')[0]
//   let items = ['Main','Products','About us','Contacts']
//   for (const item of items) {
//    let ul =  document.createElement('ul')
//     let li = document.createElement('li')
//     li.innerHTML = item
//     strings.append(ul,li)
// }

// // - Є масив
// // let coursesAndDurationArray = [
// //     {title: 'JavaScript Complex', monthDuration: 5},
// //     {title: 'Java Complex', monthDuration: 6},
// //     {title: 'Python Complex', monthDuration: 6},
// //     {title: 'QA Complex', monthDuration: 4},
// //     {title: 'FullStack', monthDuration: 7},
// //     {title: 'Frontend', monthDuration: 4}
// // ];
// // Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// // Завдання робити через цикли
// let allCourses = document.querySelector('.courses');
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// for (const Element of coursesAndDurationArray) {
//    let createDiv = document.createElement('div')
//     createDiv.innerHTML = `${Element.title} ${Element.monthDuration}`
//     allCourses.appendChild(createDiv)
//
// }

// Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

// let allItems = document.querySelector('.arrays');
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// for (const Element of coursesAndDurationArray) {
//    let createDiv = document.createElement('div');
//    createDiv.classList.add('item');
//     let createH1 = document.createElement('h1');
//     createH1.classList.add('heading');
//     createH1.innerHTML = Element.title;
//     let createP = document.createElement('p');
//     createP.classList.add('description');
//     createP.innerHTML = Element.monthDuration;
//     allItems.append(createDiv, createH1, createP);
//
// }