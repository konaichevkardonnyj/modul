
const Obj = {                                   // ПОТЕНЦИАЛЬНЫЙ ОБЪЕКТ
    a: 5,                                       // СВОЙСТВА И ЗНАЧЕНИЯ
    b: 7,
    c: {
        x: 50,
        y: 100
    }
};

const oldObj = {                                 // ПОТЕНЦИАЛЬНЫЙ ОБЪЕКТ
    z: 9,                                        // СВОЙСТВА И ЗНАЧЕНИЯ
    i: 6
};

const newObj = {... Obj, ... oldObj };
console.log(newObj);

const array = ['кефир', 'сметана', 'молоко'];    // ПОТЕНЦИАЛЬНЫЙ МАССИВ
const arr = ['мясо', 'рыба',{квас: '3 литра'}];  // ПОТЕНЦИАЛЬНЫЙ МАССИВ И ОБЪЕКТ
let newarr = [... array, ... arr, 'алкоголь'];   // НОВЫЙ ОБЪЕДИНЕННЫЙ И С ДОБАВЛЕНИЕМ ЭЛЕМЕНТА СПИСОК
console.log(newarr);
console.log(arr);
newarr.pop();                                    // УДАЛЕНИЕ ПОСЛЕДНЕГО ЭЛЕМЕНТА
console.log(newarr);

