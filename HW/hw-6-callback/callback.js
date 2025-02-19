

// - Знайти та вивести довижину настипних стрінгових значень
//
// let string = 'hello world';
// let string1 = 'lorem ipsum';
// let string2 = 'javascript is cool';
// console.log(string.length);
// console.log(string1.length);
// console.log(string2.length);

// - Перевести до великого регістру наступні стрінгові значення
//
// let string = 'hello world';
// let string1 = 'lorem ipsum';
// let string2 = 'javascript is cool';
// console.log(string.toUpperCase());
// console.log(string1.toUpperCase());
// console.log(string2.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
//
// let string = 'hello world';
// let string1 = 'lorem ipsum';
// let string2 = 'javascript is cool';
// console.log(string.toLowerCase());
// console.log(string1.toLowerCase());
// console.log(string2.toLowerCase());

// // Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//
// let str = ' dirty string   ' ;
// console.log(str.trim());

// // - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//
// let string = 'Ревуть воли як ясла повні';
// const stringToArray = (str) => {
//    return  str.split(' ');
// }
// console.log(stringToArray(string));

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

 // let arr = [10,8,-7,55,987,-1011,0,1050,0];
 //    let arrToString = arr.map((value) => {
 //        return value.toString();
 //    });
 //    console.log(arrToString);

// - створити функцію sortNums(array,direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3]
// const sortNums = (array,direction) => {
//     if (direction === 'asc'){
//         return array.sort((a,b) => a - b);
//     }else if (direction === 'desc'){
//         return array.sort((a,b) => b - a);
//     }
//
// }
// console.log(sortNums(nums,'asc'))
// console.log(sortNums(nums,'desc'))

let coursesAndDurationArray = [
   {title: 'JavaScript Complex', monthDuration: 5},
   {title: 'Java Complex', monthDuration: 6},
   {title: 'Python Complex', monthDuration: 6},
   {title: 'QA Complex', monthDuration: 4},
   {title: 'FullStack', monthDuration: 7},
   {title: 'Frontend', monthDuration: 4}
];
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let newCourses = coursesAndDurationArray.map((value,index) => {
    return {id: index + 1, title: value.title, monthDuration: value.monthDuration};
});
console.log(newCourses);
console.log(coursesAndDurationArray);


// let filterCourse = coursesAndDurationArray.filter(value => value.monthDuration > 5);
// console.log(filterCourse);
// відсортувати його за спаданням за monthDuration

 // let sortCourses = coursesAndDurationArray.sort((a,b) => b.monthDuration - a.monthDuration);
 //    console.log(sortCourses);











