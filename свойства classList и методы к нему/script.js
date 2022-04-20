/* СВОЙСТВА classList*/

//.classList.length                  // ВЫВЕДИТ КОЛИЧЕСТВО КЛАССОВ
//.classList.item(1)                 // ВЫВЕДИТ ТОЛЬКО 1 КЛАСС МЕТОДОМ item(*) где * номер класса
//.classList.add('*','*')            // МЕТОД add('*') ДОБАВИТ КЛАСС ИЛИ КЛАССЫ
//.classList.remove('*')             // МЕТОД remove('*') УДАЛЕНИЯ КЛАССА КЛАСС
//.classList.toggle('*')             // МЕТОД toggle('*')ЕСЛИ КЛАСС ЕСТЬ УБИРАЕТ. ЕСЛИ КЛАССА НЕТ ДОБАВЛЯЕТ
//if (.classList.contains('*')){}    // МЕТОД contains('*') ПОЗВОЛЯЕТ ПОДТВЕРДИТЬ ЕСТЬ ЛИ КЛАСС НА ДАННОМ ЭЛЕМЕНТЕ

/*ДЕЛЕГИРОВАНИЯ ПОЛНОМОЧИЙ*/

/*.addEventListener('click',(e)=>{
console.dir(e.target);                                             // КЛИКАЯ ПО ЭЛЕМЕНТУ УЗНАЕМ ЕГО tagName:"*" И nodeName:"*"
if (e.target && e.target.classList.contains('red')) {}             // УСЛОВИЯ ПО РАБОТЕ ЭЛЕМЕНТА У КОГО ЕСТЬ КЛАСС ('*')
if (e.target && e.target.tagName == "BUTTON") {}                   // УСЛОВИЯ ПО РАБОТЕ ЭЛЕМЕНТА ПО ТЕГУ tagName == "*"
if (e.target && e.target.m "BUTTON") {}                   // УСЛОВИЯ ПО РАБОТЕ ЭЛЕМЕНТА ПО ТЕГУ tagName == "*"
});*/


const btn = document.querySelectorAll('button');
//console.log(btn[0].classList.length);                             // ВЫВЕДИТ КОЛИЧЕСТВО КЛАССОВ В ДАННОМ ТЕГИ (1 КНОПКА)
//console.log(btn[0].classList.item(1));                            // ВЫВЕДИТ ТОЛЬКО 1 КЛАСС МЕТОДОМ item(*) где * номер по порядку
//console.log(btn[1].classList.add('red'));                         // МЕТОД add('*') ДОБАВИТ КЛАСС
//console.log(btn[0].classList.remove('blue'));                     // МЕТОД remove('*') УДАЛЕНИЯ КЛАССА КЛАСС
//console.log(btn[0].classList.toggle('some'));                     // МЕТОД toggle('*')ЕСЛИ КЛАСС ЕСТЬ УБИРАЕТ. ЕСЛИ КЛАССА НЕТ ДОБАВЛЯЕТ
//console.log(btn[0].classList.add('white','new' ));                // МОЖНО ДОБАВИТЬ СРАЗУ НЕСКОЛЬКО КЛАССОВ
//if (btn[1].classList.contains('red')){                            // !РАБОТАЕТ ЧЕРЕЗ if! МЕТОД contains('*') ПОЗВОЛЯЕТ ПОДТВЕРДИТЬ ЕСТЬ ЛИ КЛАСС НА ДАННОМ ЭЛЕМЕНТЕ БУЛИНОВЫМ ЗНАЧЕНИЯМ
//    console.log('YES');
//}
//if (btn[0].classList.contains('red')){                            // ЕСЛИ КЛАССА НЕТ ИНФОРМАЦИЮ НЕ ВЫВЕДИТ
//    console.log('YES')
//}


btn[2].addEventListener('click', (e)=> {  // СОБЫТИЕ НА КЛИК НА 3 КНОПКУ
    btn[3].classList.toggle('red');                          // СМЕНА СТИЛЯ В 4 КНОПКИ ПРИ НАЖАТИИ 3 КНОПКИ
});

btn[5].addEventListener('click', (e)=> {  // СОБЫТИЕ НА КЛИК НА 5 КНОПКУ
   if (!btn[6].classList.contains('red')){                          // УСЛОВИЯ !ОТРИЦАНИЯ! ПРОВЕРКИ КЛАССА
       btn[6].classList.add('red');
   } else {
        btn[6].classList.remove('red');                      // СМЕНА СТИЛЯ В 6 КНОПКИ ПРИ НАЖАТИИ 5 КНОПКИ
    }
});

//function click() {
//    btn[3].addEventListener('click', (e)=> {                      // СОБЫТИЕ НА КЛИК НА 3 КНОПКУ
//        btn[6].classList.toggle('fon2');                          // СМЕНА СТИЛЯ В 4 КНОПКИ ПРИ НАЖАТИИ 3 КНОПКИ
//        btn[6].classList.toggle('fon1');
//    });
//}


function f() {
  // btn[5].addEventListener('click', (e) => {                             // СОБЫТИЕ НА КЛИК НА 5 КНОПКУ
        if (!document.body.classList.contains('fon2')) {                    // УСЛОВИЯ !ОТРИЦАНИЯ! ПРОВЕРКИ КЛАССА
            document.body.classList.remove('fon');
            document.body.classList.add('fon2');
        } else if ((document.body.classList.contains('fon2'))){             // УСЛОВИЯ !ОТРИЦАНИЯ! ПРОВЕРКИ КЛАССА
            document.body.classList.remove('fon2');                  // СМЕНА СТИЛЯ В 6 КНОПКИ ПРИ НАЖАТИИ 5 КНОПКИ
            document.body.classList.add('fon');
        }
//    });
}

//ДЕЛЕГИРОВАНИЯ ПОЛНОМОЧИЙ

const red = document.createElement('button'),
      wapper = document.querySelector('.btn-block');
red.classList.add('red');
//wapper.addEventListener('click',(e)=>{
//console.dir(e.target);
//if (e.target && e.target.tagName == "BUTTON") {                            // УСЛОВИЯ ПО РАБОТЕ ЭЛЕМЕНТА ПО ТЕГУ tagName == "BUTTON"
//    console.log('Нажатие');
//f();
//}
//});

wapper.addEventListener('click',(e)=>{
    console.dir(e.target);                                                   // КЛИКАЯ ПО ЭЛЕМЕНТУ УЗНАЕМ ЕГО tagName:"*" И nodeName:"*"
   if (e.target && e.target.classList.contains('red')) {              // УСЛОВИЯ ПО РАБОТЕ ЭЛЕМЕНТА У КОГО ЕСТЬ КЛАСС ('red')
//  if (e.target && e.target.matches("button.red")) {                        // УСЛОВИЯ ПО РАБОТЕ ЭЛЕМЕНТА ЧЕРЕЗ matches("ТЕГ.КЛАСС"))
//        f();
    }
});
wapper.append(red);                                                          // ПОМЕСТИТЬ ЭЛЕМЕНТ button В КОНЕЦ ВО ВНУТЕРЬ ТЕГА div


//document.body.id = 'id';

//const id = document.querySelector('#id');
//let q = '1.jpg';
//let w = '2.jpg';


document.body.classList.add('temp');
btn[5].addEventListener('click', (e) => {

    if(document.body.classList.contains('temp')){
        document.body.style.cssText = 'background-image:url("1.jpg")';
        document.body.classList.remove('temp');
    } else if(!document.body.classList.contains('temp')) {
        document.body.style.cssText = 'background-image:url("2.jpg")';
        document.body.classList.add('temp');
    }
});

