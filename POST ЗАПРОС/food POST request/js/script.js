document.addEventListener('DOMContentLoaded', ()=>{
    /* Создния модельного окна*/
    const open = document.querySelectorAll('[date-input]'), // кдюч аргумент
        close = document.querySelector('[date-close]'),   // крестик закрытия
        model = document.querySelector('.modal');         // блок div для отображния всплывающей информации
    open.forEach( item=>{                           // функция для перебора массива
        item.addEventListener('click', () => {  // все кнопки по событию
            model.classList.add('show');            // добавления класса со св-м display = 'block'
            document.body.style.overflow = 'hidden'           // отключить фоновую прокрутку св-м overflow = 'hidden'
        });
    });
    /*close.addEventListener('click', ()=>{      // крестик закрытия
        model.classList.remove('show');              // удаление класса, что не показывать блок div
        document.body.style.overflow = ''             // включить фоновую прокрутку св-м overflow = 'hidden'
    });
    model.addEventListener('click',(e)=>{
        console.dir(e.target);
        if (e.target === model) {                     // условия на className: "modal"
            model.classList.remove('show');   // удаление класса, что не показывать блок div
            document.body.style.overflow = ''        // включить фоновую прокрутку св-м overflow = 'hidden'
        }
            });*/

    function clossModel() {
        model.classList.remove('show');         // удаление класса, что не показывать блок div
        document.body.style.overflow = ''             // включить фоновую прокрутку св-м overflow = 'hidden'
    }
    close.addEventListener('click', (clossModel));   // крестик закрытия
    model.addEventListener('click',(e)=>{ // по фону закрытия
        console.dir(e.target);
        if (e.target === model) {                   // условия на className: "modal"
            clossModel()                            // удаление класса, что не показывать блок div
        }
    });
    document.addEventListener('keydown',(e)=>{ //событие на кнопку
        //if (e.which === 27 )    { // условия при нажании кнопки Esc
        if (e.code === "Escape" && model.classList.contains('show')) {
            // условия при нажании кнопки Esc и есть ли класс show
            clossModel()
        }
    });

    /*open[0].addEventListener('click', () => {  // 1 кнопка по событию
        model.classList.add('show');                        // добавления класса со св-м display = 'block'
        document.body.style.overflow = 'hidden'             // отключить фоновую прокрутку св-м overflow = 'hidden'
                });
    open[1].addEventListener('click', () => {  // 2 кнопка
        model.classList.add('show');
        document.body.style.overflow = 'hidden'             // отключить фоновую прокрутку св-м overflow = 'hidden'
                });
    */

    /*Появление окна через некотрое время */
    function modelTime (){
        const  modelTimes = setInterval()
    }
    close.




});