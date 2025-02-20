// Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
// let users = [
//     {id: 1, name: 'Ivan', surname: 'Ivanov', email:'dswdqdqwdqw' },
//     {id: 2, name: 'Petro', surname: 'Petrov', email: 'qwqwqwq' },
//     {id: 3, name: 'Stepan', surname: 'Stepanov', email:'wqwqwqqe' },
//     {id: 4, name: 'Vasyl', surname: 'Vasyliev', email:'gswdgdsgsdg' },
//     {id: 5, name: 'Mykola', surname: 'Mykolaychuk', email:'fdsfsffs' },
//     {id: 6, name: 'Ostap', surname: 'Ostapchuk', email:'fsddfdsfdsf' },
//     {id: 7, name: 'Oleh', surname: 'Olehov', email: 'dfsdfdsf'},
//     {id: 8, name: 'Roman', surname: 'Romanov', email: 'sdfsdfdsf'},
//     {id: 9, name: 'Taras', surname: 'Tarasov', email: 'sdfsdfdsf'},
//     {id: 10, name: 'Ihor', surname: 'Ihorov', email: 'sdfsdfdsf'}
//
// ];
// // - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//
// let filterUsers = users.filter(value => value.id % 2 === 0);
// console.log(filterUsers);
// let sortedUsers = users.sort((a, b) => a.id - b.id);
// console.log(sortedUsers);

// - створити конструктор для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

//  function Client(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//  }
//   let clients = [
//       {id: 1, name: 'Ivan', surname: 'Ivanov', email:'dswdqdqwdqw', order: ['apple', 'banana', 'orange']},
//       {id: 2, name: 'Petro', surname: 'Petrov', email: 'qwqwqwq', order: ['apple', 'banana', 'orange', 'milk']},
//       {id: 3, name: 'Stepan', surname: 'Stepanov', email:'wqwqwqqe', order: ['apple', 'banana',]},
//       {id: 4, name: 'Vasyl', surname: 'Vasyliev', email:'gswdgdsgsdg', order: ['apple', 'banana', 'orange', 'milk', 'bread']},
//       {id: 5, name: 'Mykola', surname: 'Mykolaychuk', email:'fdsfsffs', order: ['apple']},
//       {id: 6, name: 'Ostap', surname: 'Ostapchuk', email:'fsddfdsfdsf', order: ['apple', 'banana']},
//       {id: 7, name: 'Oleh', surname: 'Olehov', email: 'dfsdfdsf', order: ['apple', 'banana', 'orange','milk','bread','meat']},
//       {id: 8, name: 'Roman', surname: 'Romanov', email: 'sdfsdfdsf', order: ['apple', 'banana', 'orange','cola']},
//       {id: 9, name: 'Taras', surname: 'Tarasov', email: 'sdfsdfdsf', order: ['apple', 'banana']},
//       {id: 10, name: 'Ihor', surname: 'Ihorov', email: 'sdfsdfdsf', order: ['apple']}
//   ];
// let sortedClients = clients.sort((a, b) => a.order.length - b.order.length);
// console.log(sortedClients);


//
// Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car



function Cars(model, brand, year, maxSpeed, engine) {
    this.model = model;
    this.brand = brand;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engine = engine;

    this.drive = () => {
      console.log( `їдемо зі швидкістю ${maxSpeed} на годину`)
    };
    this.info = () => {
        console.log(`model - ${model}, brand - ${brand}, year - ${year}, maxSpeed - ${maxSpeed}, engine - ${engine}`)
    };
    this.increaseMaxSpeed = (newSpeed) => {
        this.maxSpeed += newSpeed;
    };
    this.changeYear = (newValue) => {
        this.year = newValue;
    };
    this.addDriver = (driver) => {
        this.driver = driver;
    };

}

let car = new Cars('X5', 'BMW', 2020, 250, 3.0);
car.drive();
car.info();
car.increaseMaxSpeed(100);
car.changeYear(2021);






// function Car(model,produce,year,maxSpeed,engineVolume){
//     this.model = model;
//     this.produce = produce;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engineVolume = engineVolume;
//     this.drive = function (){
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     }
//     this.info = function (){
//         for (const valueOfFields in this) {
//             console.log(valueOfFields, this[valueOfFields])
//         }
//     }
//    this.increaseMaxSpeed = function (newSpeed){
//         this.maxSpeed = this.maxSpeed + newSpeed;
//     }
//    this.changeYear = function (newValue){
//         if(newValue > 1815) this.year = newValue
//
//    }
//    this.addDriver = function (driverObject){
//         if(driverObject) this.driver = driverObject
//    };
//
// }
//
//  const car= new Car('Honda','Japan',2017,350,3.5);
// console.log(car);
// // знизу ми виводимо функції
// car.drive();
// car.info();
// car.increaseMaxSpeed(100); // додали нову швидкість 100 отримаємо 450 в суммі
// car.changeYear(2002); // змінили рік випуску
// car.addDriver()
// console.log(car);