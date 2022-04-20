//*СОБЫТИЯ*
//touchstart      // ПРИ КАСАНИИ ПАЛЬЦЕМ
//touchmove       // НА ДВИЖЕНИЕ ПАЛЬЦА
//touchend        // ОТОВРАТЬ ПАЛЕЦ
//touchenter      // В ПРЕДЕЛАХ ЭЛЕМЕНТА
//touchleave      // ЗА ПРЕДАЛАМИ ЭЛЕМЕНТА
//touchcancel     // НЕ ЗАРЕГИСТРИРОВАННАЯ ОБЛАСТЬ ВЕДЕНИЕ ВЫХОДА ИЗ ОБЛАСТИ БРАУЗЕРА, СЁРФИТЬ
//*СВОЙСТВА*
//touches         // КОЛИЧЕСТВО ПАЛЬЦНВ НАДАЛИ И ДЕРЖАТ В МОНИТОР В НЕ ЗАВИСИМОСТИ ОБЛАСТИ ЭКРАНА
//targetTouches   // КОЛИЧЕСТВА ПАЛЬЦЕВ В КОНКРЕТНОЙ ОБЛАСТИ
//ChangedTouches  // ПАЛЕЦ СОВЕРЖИВШИЙ ДЕЙСТВИЯ ЕСЛИ ДАЖЕ ГРУГИЕ НА ЭКРАНЕ

document.addEventListener('DOMContentLoaded', (e) => {                 // DOMContentLoaded - ОБРАБОТЧИК СОБЫТИЙ ВСЕГО DOM УЗЛОВ НА ГОТОВНОСТЬ
    const box = document.querySelector('.box');
    box.addEventListener('touchstart', (e) => {                        // СОБЫТИЕ ПРИ НАЖАНИИ В ОБЛАСТИ
        e.preventDefault();
        console.log('start');
        console.log(e.touches);                                                             // СВОЙСТВА КОТОРЫЕ ВЫВЕДИТ КОЛИЧЕСТВА ПАЛЬЦЕВ
    });
    box.addEventListener('touchmove', (e) => {                         // СОБЫТИЕ ПРИ ЗАЖАТИИ ПАЛЬЦА В ОБЛАСТЬ
        e.preventDefault();
        console.log('move');
        console.log(e.targetTouches[0].pageX);                                              // ОТСЛЕЖИВАЕТ ПЕРВОГО ПАЛЬЦА ПО КООРДЕНАТАМ
    });
    box.addEventListener('touchend', (e) => {                          // СОБЫТИЕ ПРИ ОТПУСКАНИИ ПАЛЬЦА В ОБЛАСТИ
        e.preventDefault();
        console.log('end');
    });
});
