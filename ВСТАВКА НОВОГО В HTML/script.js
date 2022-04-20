//.append(div);            // ПОМЕЩАЕТ ВО ВНУТРЬ(РЕБЕНКА) И В КОНЕЦ СТРОКИ
//.prepend(div);           // ПОМЕЩАЕТ ВО ВНУТРЬ(РЕБЕНКА) И В НАЧАЛО СТРОКИ
//.before();               // ПОМЕШАЕТ ПЕРЕД(ВЫШЕ) СОСЕДА
//.after();                // ПОМЕШАЕТ ПОСЛЕ(НИЖЕ) СОСЕДА
/*.insertAdjacentHTML("beforebegin", '<p>Абзац</p>');
      "beforebegin" //ВСТАВЛЯЕТ КОД ПЕРЕД(ВЫШЕ) СОСЕДА ("beforebegin")
      "afterbegin"  // ВСТАВЛЯЕТ КОД ВО ВНУТАРЬ ДАННОГО ТЕГА В НАЧАЛО
      "afterend"    // ВСТАВЛЯЕТ КОД ПОСЛЕ(НИЖЕ) СОСЕДА
      "beforeend"   // ВСТАВЛЯЕТ КОД ВО ВНУТАРЬ ДАННОГО ТЕГА В САМЫЙ КОНЕЦ */
//.innerHTML = '';         // (МОЖНО += ЧТОБЫ НЕ УДАЛЯТЬ ВЕСЬ КОД) ВСТАВЛЯЕТ С ЗАМЕННОЙ ЛЮБОЙ КОДА ВНУТРИ(НИЖЕ) ТЕГА
//.innerText = "ТЕКСТ";    // <>ТЕКСТ В ЭТОМ ТЕГИ</>
//.textContent = ('');     // ПОМЕЩАЕМ ТЕКСТ МЕЖДУ ТЕГАМИ
//.remove();               // УДАЛЕНИЕ ЭЛЕМЕНТА
//.replaceWith(div)        // ЗАМЕНА ЭЛЕМЕНТА НА ЧТО В ()
//.createElement('');      // СОЗДАЕМ ТЕГ
//.classList.add('');      //ДОБАВЛЯЕТ В НАШ ТЕГ КЛАСС
//.style.cssText= '*: *';  //ИНЛАЙН





const div = document.createElement('div'),           // СОЗДАЕМ ТЕГ createElement('div')
      button = document.createElement('button'),
      h = document.createElement('h1'),
      button2 = document.createElement('button');
button2.innerText = 'КНОПКА2';
button.style.cssText = 'background: red';
button.textContent = 'ЖМИ';
div.textContent = 'УРОК';                                                  // ПОМЕЩАЕМ ТЕКСТ МЕЖДУ ТЕГАМИ
div.classList.add('black');                                                // classList.add('class') ДОБАВЛЯЕТ В НАШ ТЕГ КЛАСС
//document.body.append(div);                                               // append(div) В АРГУМЕНТЕ НАШ ТЕГ ПОМЕЩАЕТ ВО ВНУТРЬ(РЕБЕНКА) И КОНЕЦ ТЕГА body
//document.body.prepend(button2);                                          // ПОМЕЩАЕТ ВО ВНУТРЬ(РЕБЕНКА) И В НАЧАЛО ТЕГА body
const bnt = document.querySelectorAll('button');
bnt[1].before(div);                                                        // ПОМЕШАЕТ ПЕРЕД(ВЫШЕ) СОСЕДА
//bnt[1].after(button);                                                    // ПОМЕШАЕТ ПОСЛЕ(НИЖЕ) СОСЕДА
div.classList.add('black');
const heart = document.querySelectorAll(".heart");
const circle = document.querySelectorAll(".circle");
heart[2].remove();                                                         // УДАЛЕНИЕ ЭЛЕМЕНТА
//circle[1].replaceWith(div);                                              // ЗАМЕНА ЭЛЕМЕНТА circle[1] НА div

//circle[0].innerHTML = "<div 'class=black'>TTT</div>";
//document.body.innerHTML += "<h1>JAVA SCRIPT</h1>";                       // ВСТАВЛЯЕТ С ЗАМЕННОЙ ЛЮБОЙ КОДА ВНУТРИ(НИЖЕ) ТЕГА
//circle[1].before(button);

bnt.forEach((item, i)=>{
});
const  l = document.querySelector('.box');

h.textContent = 'JAVA SCRIPT';
l.before(h);
circle[1].append(button);
circle[1].insertAdjacentHTML("afterbegin", '<p>Абзац</p>');
