const paragraf = document.querySelectorAll('p');
console.log(paragraf);

//const script = document.createElement('script');   // ТЕГ createElement СОЗДАЕТ ТЕГ script
//script.defer = true;                                        //  ЧТОБЫ ВСТАВИТЬ 2 АГРУМЕНТА ПОСЛЕДОВАТЕЛЬНО async И src НО ПО УМОЛЧАНИЮ АТРИБУТ async ПРИСУТСТВУЕТ
//script.src = "test.js";                                     // ВКЛЮЧИТЬ АТРИБУТ С ОТКРЫТИЕМ ДРУГОГО СКРИПТА JS
//script.async = false;
//document.body.append(script);                               // МЕДОТ append ВКЛЮЧАЕТ В КОНЕЦ В РОДИТЕЛЯ ТЕГА body

//console.log(script);

//function load(src) {
//    const script = document.createElement('script');
//    script.src = src;
//    script.async = false;
//    document.body.append(script);
//}
//load("test.js");
//load("check(проверка).js");

function script(src) {                                         // function ПОЗВОЛЯЕТ СРАЗУ НЕСКОЛЬКО ВКЛЮЧИТЬ ФАЙЛОВ JS
const script = document.createElement("script");     // ТЕГ createElement СОЗДАЕТ ТЕГ script
script.defer = true;                                          //  ЧТОБЫ ВСТАВИТЬ 2 АГРУМЕНТА ПОСЛЕДОВАТЕЛЬНО async И src НО ПО УМОЛЧАНИЮ
script.async = false;
script.src = src;                                             // ВКЛЮЧИТЬ АТРИБУТ С ОТКРЫТИЕМ ДРУГОГО СКРИПТА JS
document.head.append(script);                                 // МЕДОТ append ВКЛЮЧАЕТ В КОНЕЦ В РОДИТЕЛЯ ТЕГА body
}
script('test.js');                                       //  НАЗВАНИЕ И ПУТЬ ФАЙЛОВ JS
script('check(проверка');
