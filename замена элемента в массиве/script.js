const array = ['кефир', 'сметана', 'молоко'];       // ПОТЕНЦИАЛЬНЫЙ МАССИВ
const arr = array.slice();                          // МЕТОД slice() ПОЗВОЛЯЕТ ЗАМЕНИТЬ ЛЮБОЙ ОБЪЕКТ В МАССИВЕ
arr[2]= 'сливки';                                   // СМЕНА 'молоко' НА 'сливки'
console.log(arr);
console.log(array);