/*АНИМАЦИЯ С КВАДРАТОМ*/
/** CSS
position: ЗНАЧЕНИЯ; (ДВИЖЕНИЕ ЭЛЕМЕНТА)
1. absolute (ИСЧЕЗАЕТ С МЕСТА)
2. relative (ОТНОСИТЕЛЬНО ЭЛЕМЕНТА КОТОРОМ БУДЕТ ИДТИ АНИМАЦИЯ)
3. tixed ( как и absolute только при прокрутки остаеться на месте)
4. static ( стандарт  )
КООРДИНАТЫ
top  (ВВЕРХ)
Left (СЛЕВА)
right (СПРАВА)
botton (НИЗ) */


// ОБЯЗАТЕЛЬНО CSS ПРОПИСАТЬ КЛАСС КОТОРЫЙ ДВИЖЕТСЯ С СВОЙСТВОМ ! position: absolute; !
// И КЛАСС ОТНОСИТЕЛЬКО КОТОРОГО БУДЕТ ДВИЖЕНИЯ СВОЙСТВА ! position: relative; !
//document.addEventListener('DOMContentloaded',()=>{

const block = document.querySelector('.box'),   // ТО ЧТО ДВИГАТЬ
      btn= document.querySelector('.btn');      // ОБЛАСТЬ ДЛЯ СОБЫТИЙ
let i = 0;                                              // ИТЕРАТОР
function myanimation() {
    const nl = setInterval(set, 10);            // ИНТЕРВАЛ ЦИКЛИЧНОГО ЗАПУСКА
    function set() {
        if (i == 300) {                                // УСЛОВИЯ ДО СКОЛЬКИ ИДЕТ ПОВТОРЕНИЕ В 300PX
            clearInterval(nl)                          // ОСТАНОВКА
        } else {
            i++;                                       // +1
            block.style.top = i + 'px';                // Отступ от верха вниз каждый раз по px (ДОБАВЛЯЕТ СВОЙСТВА И ЗНАЧЕНИЯ )
            block.style.left = i + 'px';               // Отступ слева на права каждый раз по px (ДОБАВЛЯЕТ СВОЙСТВА И ЗНАЧЕНИЯ )

        }
    }
       // function set() {
       //     block.style.top = i +'px';               // Отступ от верха вниз каждый раз по px (ДОБАВЛЯЕТ СВОЙСТВА И ЗНАЧЕНИЯ )
       //     block.style.left = i +'px';              // Отступ слева на права каждый раз по px (ДОБАВЛЯЕТ СВОЙСТВА И ЗНАЧЕНИЯ )
       //     i++;                                     // +1
       //     if (i == 300) {                          // УСЛОВИЯ ДО СКОЛЬКИ ИДЕТ ПОВТОРЕНИЕ В 300PX
       //         clearInterval(nl)                    // ОСТАНОВКА
       //     }
   // }
}
btn.addEventListener('click',myanimation);        // СОБЫТИЯ С ЗАПУСКОМ ФУНКЦИИ










//});