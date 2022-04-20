//document.addEventListener('DOMContentLoaded', ()=>{
/* Создния модельного окна*/
const open = document.querySelectorAll('[date-input]'), // кдюч аргумент
      close = document.querySelector('[date-close]'),   // крестик закрытия
      model = document.querySelector('.modal');         // блок div для отображния всплывающей информации

function openModel (){
   model.classList.add('show');            // добавления класса со св-м display = 'block'
   document.body.style.overflow = 'hidden';  // отключить фоновую прокрутку св-м overflow = 'hidden'
   clearInterval(modelTimeId)       // если модельное окно открыто, то интервал удален
}
open.forEach( item=>{                       // функция для перебора массива
item.addEventListener('click', () => {  // все кнопки по событию
   openModel ()
   });
});

function clossModel() {
    model.classList.remove('show');         // удаление класса, что не показывать блок div
    document.body.style.overflow = ''             // включить фоновую прокрутку св-м overflow = 'hidden'
}
close.addEventListener('click', (clossModel));     // крестик закрытия
model.addEventListener('click',(e)=>{ // по фону закрытия
    console.dir(e.target);
    if (e.target === model) {                   // условия на className: "modal" в e.target
        clossModel()                            // удаление класса, что не показывать блок div
    }
});
document.addEventListener('keydown',(e)=>{ //событие на кнопку
    if (e.code === "Escape" && model.classList.contains('show')) {
        // условия при нажании кнопки Esc и есть ли класс show
        clossModel()
    }
});
    /*Появление окна через некотрое время */
const modelTimeId = setInterval(openModel, 1500);
    /*Прокрутить до низу и откроется окно*/
    /*document.documentElement.clientHeight; //прокрутка по Y
    window.pageYOffset; // Что видет пользователь
    document.documentElement.scrollHeight; // вся высота*/
function endmodel () {
   if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
      openModel();
      window.removeEventListener('scroll', endmodel) // после выполнения удалить событие
   }
}
window.addEventListener('scroll', endmodel)  //событие  вызова на скрол endmodel()

/** Передача в Backend(Бэкент) модульного окна
 *  С ПОМОЩЬЮ FORMDATE   */
const forms = document.querySelectorAll('form');
const message = {
   loading: 'Загрузка',
   success: 'Спасибо, данные отправлены',
   failure: 'Ошибка, данные не отправлены'
};
/** Для всех form по post запросу */
forms.forEach(item =>{
   postData(item)
})
/** для */
function postData (form){     // функция для вызова нескольких form
   form.addEventListener('submit',(event) => { // submit контроль по отправлению
      event.preventDefault();
      const statusMessage = document.createElement('div'); // для добавления message
      statusMessage.classList.add('status');                       // стиль
      statusMessage.textContent = message.loading;                 // назначить текст в message
      form.append(statusMessage);                                  //в конец тега ставить

      const request = new XMLHttpRequest();                        // новый объект запроса
      request.open ('POST','server.php');               // POST ЗАПРОС
      //request.setRequestHeader('Content-type', 'multipart/form-data'); //заголовок не писать т.к. не покажет в консоль
      const formData = new FormData(form);                         // передача по объекту FormData
      request.send(formData);                                      // передача на сервер
      request.addEventListener('load',()=>{            // load по результату запоса
         if (request.status ===200) {                              // при соединении
            console.log(request.response);                         // ответ бэкента
            statusMessage.textContent = message.success; // сообщение об успехе
            form.reset();                                // сбор записи value
            setTimeout(() => {                    // интервал
               statusMessage.remove();
            }, 2000);                             // удаление сообщения после 2 секунд
         } else {
            statusMessage.textContent = message.failure; // сообщение об ошибке
         }
      })
   })
}











//});