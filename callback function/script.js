
function shot(long, callback) { // callback функция
console.log(`Я учу ${long}`);
callback();
}
function shool() {
    console.log('Кайф');
}
shot('JS', shool);
