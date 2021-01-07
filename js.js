// callBack ф-и
function callBack (name, year) {
    console.log('Меня зовут ' + name);
    year();
}
function doneCallBack () {
    console.log('Мне 28 лет');
}
callBack('Костя', doneCallBack);

let arr = [1, 2, 3, 4, 5];
arr.pop(); //удаляет последний элемент
arr.push('5'); //добавляет последний элемент
arr.shift(); //удаляет первый элемент
arr.unshift('1'); //добавляет первый элемент
console.log(arr); 

//Перебор массива
let arrMass = ['first', 2, 3, 'four'];
arrMass.forEach(function (item, i, mass) {
    console.log(i + ': ' + item + ' (массив: ' + mass + ')');
});

//Перебор массива по ключам 
let arr1 = [1, 2, 4, 7, 8];
    for (let key in arr1) {
        console.log(key);
    }
//Перебор массива по значениям 
let arr1 = [1, 2, 4, 7, 8];
    for (let key of arr1) {
        console.log(key);
    }

//Перевод из строки в массив
let ans = prompt('', ''),
    arr = [];
arr = ans.split(', ');
console.log(arr);
//Запись из массива в одну строку
let arr = ['Кошка', 'Собака', 'Корова'];
let i = arr.join(', ');
console.log(i);

//Сортировка массива (строки)
let arr = ['Кошка', 'Собака', 'Корова'];
let i = arr.sort();
console.log(i);
//Сортировка массива (числа)
let arr = [1, 4, 6, 7];
let i = arr.sort(sortNumber);
    function sortNumber (a, b) {
        return a - b;
    }
console.log(i);