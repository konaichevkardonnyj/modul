/*a = 1;
b = 2;*/
/**
 * Функция делает вывод в консольпередаваемого текста
 * @param value {String} - выводимое значение
 * @return String - выводимая строка
 * */
function f(value) {
    console.log(value);
    return value;
}
/** создание энземпляра класса
 *  Для сознания множеста прямоугольников по шаблону созданным с помощью класса*/
class Rectangle {                                // прямоугольник рандомное значение
   constructor(height, width ) {                 // constructor - аналогично как функция
      this.height = height;                      // св-ва  this это создание нового квадрата. записываеться как свойства
      this.width = width;                        // св-ва  свойства для шаблона по созданию новых квадратиков.
   }
   /** Функция (метод)*/
   calcSquare() {                                // методы вычесления площадь запись как имя для function
      return this.height * this.width            // выдаст как новый квадрат с параметрами площади
   }
}
/**С наследованием класса*/
class ColorRectangleWithText extends Rectangle { // extends наследование из Rectangle
   constructor(height,width,bgColor,text) {          //backgroundColor
      super(height, width);                       // super() какие свойства наследовать
      this.bgColor = bgColor;
      this.text = text;
   }
   /** Функция (метод)*/
   howMyProps() {
      console.log(`Текст: ${this.text}, Цвет: ${this.bgColor}`)
   }
}
/** создание нового квадрата по классу */
const div = new ColorRectangleWithText (100,50,"red",'Привет');
div.howMyProps();
/**от наследователя по функции calcSquare()*/
console.log(div.calcSquare());
/** создание нового квадрата по классу */
/*
const squar = new Rectangle (10,10);
const long = new Rectangle (50,5);
console.log(squar.calcSquare());                 // квадрат squar с методам this.height * this.width
console.log(long.calcSquare());                  // квадрат squar с методам this.height * this.width*/
