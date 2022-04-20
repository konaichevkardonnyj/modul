//  =================================================================================================
//  === 1. При обычной функции: this = windows. При строгом режиме 'use strict', this= undefined  ===
//  === 2. Контекст у методов объекта - сам объект                                                ===
//  === 3. this конструкторах и классах - это новый экземпляр объекта                             ===
//  === 4. Ручное присвоение контекста к любой функции this: call, apply, bind                    ===
//  === call, apply - вызов функции на объекте, bind - создается новая функция с фиксир. this = * ===
//  =================================================================================================
/* 1. this = windows с 'use strict', this= undefined */
'use strict'; //строгом режиме
function showThis(a, b) {
   console.log(this); // this = windows с 'use strict', this= undefined */
   function sum() {
      console.log(this);
      return a + b // замыкание функции, при this.a + this.b (ошибка)
   }

   console.log(sum())
}

showThis(5, 6);

/* 2. Контекст метода внутри объекта ссылаеться на его объект*/
const obj = {
   a: 15,
   b: 25,
   num: function yes() {
      console.log(this);
   }
};
obj.num();
/* 1. this = windows с 'use strict', this= undefined */
/*const ob = {
    a: 15,
    b: 25,
    num: function yes() {
         function no() {         // это не метод это функция которая запускается внутри метода.
             console.log(this);  // this = windows с 'use strict', this= undefined
        }
        no()
    }
};
ob.num();*/

/*3. this конструкторах и классах - это новый экземпляр объекта*/
function user(name, id, floor) {
   this.name = name;   // св-ва уникальное имя
   this.id = id;       // св-ва уникальное индификатор
   this.floor = floor; // св-ва уникальное индификатор
   this.human = true;  // св-ва для всех одни
   this.hello = function () { // метод для включения функции
      console.log(`Привет ${this.name}`)  //ссылается на объект который создали ранее
   }
}

let vasya = new user('Vasya', 32, 'gay'); // новый объект со значениями
console.log(vasya);

/*4. Ручное присвоение this  любой функции */

// методы: call, apply и
function sayname() {
   console.log(this);
   console.log(this.name)
}

const users = {
   name: 'Alex'
};
sayname.call(users);  // метод call вызывает функцию sayname() на объекте users
sayname.apply(users); // эплай аналогично как и метод call (кол)
//разница в низ только в синтаксисе call(users) для дополнительных аргуметов в функции
/*function sayname(surname) {
console.log(this);
console.log(this.name + surname)
}
const users = {
    name: 'James'
};
sayname.call(users, 'Bond');  // добавления аргуметка функции surname через запятую
sayname.apply(users, ['Bond']); // аргумет функции через массив*/

/*метод bind*/
function count(num) {
   return this * num
}

const double = count.bind(2);  // создается новая функция double() с фиксированным контекстом this = 2
console.log(double(2));        // выводит 2*2 под функции count(num)
console.log(double(20));
/**
 * 
 **/