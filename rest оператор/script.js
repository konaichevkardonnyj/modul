/**rest оератор для оставших элементов
 * Function Expression*/
const example = function (a, b, ...rest) {
	console.log(a, b, rest)
}
example('5', '6', 'array', 'object')
/**ответ 5 6 [ 'array', 'object' ] */

/**Параметр по умолчанию
 * Function Declaration */
function calcOrDouble(number,basis= 2) {
	// basis = basis || 2        // до стандарта ES6
	console.log(number * basis)
}
calcOrDouble (5);
/**ответ 10 */