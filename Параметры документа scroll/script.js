'use strict';

document.addEventListener('DOMContentLoaded',() =>{
const box = document.querySelector('.box'),
      btn = document.querySelector('button'),
    // width = box.clientWidth,     // выдаст ширину пиксилей без учета прокрутки
    // height = box.clientHeight;   // выдаст высоту пиксилей без учета прокрутки
    // width = box.offsetWidth,     // выдаст ширину как css  width: 400px;
    // height = box.offsetHeight;   // выдаст высоту как css  height: 350px
    //   width = box.scrollWidth,     // выдаст ширину всей длины px за минусом прокрутки
    //   height = box.scrollHeight;   // выдаст высоту всей длины px
       width = box.scrollWidth,
       height = box.scrollHeight;
btn.addEventListener('click',(e)=>

    //box.style.height = box.scrollHeight +'px'  // при клики раскрыть границу высоты всего текста
    console.log(box.scrollTop)                   // сколько элемента в px просмотрино высоты
);

console.log(box.getBoundingClientRect().top); // метод getBoundingClientRect()
    //выдаст размеры
const style = window.getComputedStyle(box); // выдаст какой тип BLOCK
    console.log(style.display);

console.log(document.documentElement.scrollTop); // выведит сразу высоту прокрутки




});