/*стрелочная  функция ()=>{}  не имеет возможности контекста вызова берет контекст у родителя */
/* у метода контекст ссылается на объекут*/
const btn = document.querySelector('button');
//btn.addEventListener('click',function () { // простая функция
//console.log(this);  // контекст вызова будет сам объект аналогично как объект события event.target
//    this.style.background = 'red';
//});
btn.addEventListener('click', (e)=> { // простая функция
    console.log(e.target);  // контекст вызова будет сам объект аналогично как объект события event.target
    e.target.style.background = 'black';
});
const obj = { //объект obj
    num: 5,
    sayNumber: function () {  // метод sayNumber ссылаеться на объект obj
const say = () =>{   // в стрелочной функции нет своего контекста вызова и берет у родителя
console.log(this);
};
        say()       // запуск стрелочной функции
    }
};
obj.sayNumber();    // запуск метода в объекте

/*Синтаксис стрелочной функции */
const double = (a) => {
  return a * 2
};
alert(double(2));
const three = (a) => a * 3;
alert(three(3));
const threes = (a, b) => a* b * 3;
alert(threes(3, 3));