//setTimeout(function (){}, *)     // АНОНИМНАЯ ФУНКЦИЯЯ КОТОРАЯ ЗАПУСКАЕТСЯ ЧЕРЕЗ УКАЗАНОЕ ВРЕМЯ В МС
//setTimeout(name function, *)     // В АРГУМЕТ НАЗВАНИЕ ФУНЦИИ ДЛЯ СТАРТА ЧЕРЕЗ ОПРЕДЕЛЕННОЕ ВРЕМЯ В МС
//clearInterval(*)                 // УДАЛЯЕТ ЗАПУСК ФУНКЦИИ С ИНТЕРВАЛОМ
//setInterval(name function,  500) // В АРГУМЕТ НАЗВАНИЕ ФУНЦИИ !ПОВТОРЯЮЩИЙ! ЗАПУСК ЧЕРЕЗ 0.5 СЕК


document.addEventListener('DOMContentLoaded',()=>{

/*1*/
    const TimeId = setTimeout(function (){             // ЗАДАЕТ ФУНЦИЮ СО СТАРТОМ 0.5 СЕК
console.log('yes')
}, 500);
/*2*/
    const TimeIds = setTimeout(function (text){        // ЗАДАЕТ ИНТЕРВАЛЬНУЮ ФУНЦИЮ С АРГУМЕТАМИ ВЫВЕДИТ 'yes2'
        console.log(text)
    }, 500, 'yes2');
/*3*/
//   const TimeIdsi = setTimeout(logger,  500);                // ЗАДАЕТСЯ В АРГУМЕТ НАЗВАНИЕ ФУНЦИИ ДЛЯ СТАРТА ЧЕРЕЗ ОПРЕДЕЛЕННОЕ ВРЕМЯ
//function logger() {
//    console.log('text')
//}
//    clearInterval(TimeIdsi);                                 // УДАЛЯЕТ ЗАПУСК ФУНКЦИИ С ИНТЕРВАЛОМ


    let TimeIdsi,
        i=0;                                                   // ИТЕРАТОР
    const btn = document.querySelector('.btn');
    btn.addEventListener('click',()=>{
//     TimeIdsi = setTimeout(logger,  500);                    // ПОСЛЕ КЛИКА ЗАПУСК logger ЧЕРЕЗ 0.5 СЕК
       TimeIdsi = setInterval(logger,  500);           //  ПОСЛЕ КЛИКА !ПОВТОРЯЮЩИЙ! ЗАПУСК logger ЧЕРЕЗ 0.5 СЕК
 });
    function logger() {
        console.log('text');
        i++;                                                   // ИНКРЕМЕНТ ДЛЯ СЧЕТА ПО  setInterval
        if(i === 3){                                           // УСЛОВИЕ ДЛЯ 3 РАЗ
            clearInterval(TimeIdsi)}                           // ОСТАНОВИТ ЦИКЛ
    }

let id = setTimeout(function  item() {                         // ПОЗВОЛЯЕТ ДОЖДАТЬСЯ ВЫПОЛНЕНИЯ ФУНКЦИИ И СТАРТОВАТЬ ПОВТОРНО.
console.log('log');
id = setTimeout(item, 500);                            // СТАРТОВАТЬ ПОВТОРНО ФУНКЦИЮ item.
}, 500);







});