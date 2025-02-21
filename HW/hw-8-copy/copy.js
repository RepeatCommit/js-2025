// Створити функцію, яка робить глибоку копію об'єкту.
// Додати перевірки на undefined, null, NaN.
//     Подумати і реалізувати логіку, в якій кінцевий об'єкт буде мати функції,які в нього були до цього моменту.

function clone(obj){
    if(obj) {
        let values = [];
        for (const objKey in obj) {  //перевіряємо чи чи є в нашому обʼєкті функція
            if (typeof obj[objKey]==='function'){ //у випадку якщо objkey еквівалентно function,робимо копію и додаємо в наш массив functions
                const functionCopy =  obj[objKey].bind({});//стоврюємо функцію bind  з пустим обʼєктом this
                values.push(functionCopy) //після того як зробили clone пушим що б він там зберігся
            }
        }
        console.log(values); //після всієї ітерації виввели functions який містить нашу функцію
        const deep = JSON.stringify(obj);
        const parse = JSON.parse(deep);
        console.log(parse);
        return parse
    }

}

clone({name:'Boss', id: 222, greeting(){}, foo() {}}); //додали функцію


let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration
//     Зробити все ВИКЛЮЧНО за допомоги інлайн конструкції

let coursesAndDurationArrayMap = coursesAndDurationArray.map((value, index) => ({id: index + 1, ...value}));
console.log(coursesAndDurationArrayMap);
console.log(coursesAndDurationArray);

