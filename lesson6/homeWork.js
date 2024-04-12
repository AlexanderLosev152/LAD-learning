// 1 . Используя метод map() напишите код, который получает из массива строк новый массив, содержащий их длины.

// let programmingLanguages = ['javascript', 'php', 'c++', 'c#'];

// const arrLength = (arr) => arr.map((elem) => elem.length);
// console.log(arrLength(programmingLanguages));

// 2 . Имеется массив простых чисел: numbers = [2, 3, 5, 7, 11, 13, 17, 19]. Используя метод reduce() напишите функцию currentSums(numbers), которая возвращает новый массив из такого же числа элементов, в котором на каждой позиции будет находиться сумма элементов массива numbers до этой позиции включительно.

// const numbers = [2, 3, 5, 7, 11, 13, 17];

// function currentSums(numbers) {
//   let result = [];

//   numbers.reduce(function (sum, current, i) {
//     return (result[i] = sum + current);
//   }, 0);

//   console.log(result);
// }

// currentSums(numbers);

// 3 .Напишите код, который получает из массива чисел новый массив, содержащий пары чисел, которые в сумме должны быть равны семи: (0:7), (1:6) и т.д.

// const numbers = [0, 1, 2, 3, 4, 5, 6, 7];

// const sevenNum = (arr) => {
//   let res = [];
//   let obj = {};
//   arr.forEach((el) => (obj[el] = 1));
//   arr = Object.keys(obj);

//   arr.forEach((el, i) => {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (+el + +arr[j] == 7) res.push(el + ':' + arr[j]);
//     }
//   });
//   return res;
// };

// console.log(sevenNum(numbers));

// 4 . Напишите код, создающий массив, который будет состоять из первых букв слов строки str.

// const charString = (array) => {
//   let arr = array.split(' ');
//   let res = [];
//   for (let element of arr) {
//     res.push(element.slice(0, 3));
//   }
//   return res;
// };

// console.log(charString('hello'));

// 5 . Напишите код, создающий массив, который будет состоять из строк, состоящих из предыдущего, текущего и следующего символа строки str.

// const str = 'Hello world !!!';

// const stringLastPreviousСhar = (str) => {
//   return [...str].map((_, index) => {
//     const str1 = str.slice(Math.max(index - 1, 0), index + 2);
//     return str1;
//   });
// };

// console.log(stringLastPreviousСhar(str));

// 6 . Напишите код, преобразующий массив цифр, которые располагаются неупорядоченно, в массив цифр расположенных по убыванию их значений.

// const numbers = [5, 7, 2, 9, 3, 1, 8];

// let arrtNum = (arr) => arr.sort((a, b) => b - a);
// console.log(arrNum(numbers));

// 7 . Напишите код, объединяющий три массива цифр, и располагающий цифры, в полученном массиве, в порядке убывания их значений через пробел.

// const arrOne = [1, 2, 3];
// const arrTwo = [4, 5, 6];
// const arrThree = [7, 8, 9];

// const arrSort = (a, b, c) => a.concat(b, c).sort((a, b) => b - a);

// console.log(arrSort(arrOne, arrTwo, arrThree));

// 8 . Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.

// const arrayNum = [[1, 2, 3, 4, 5], [6, 7, 8], [9]];
// const sum = (arr) => arr.flat(Infinity).reduce((a, b) => a + b, 0);
// console.log(sum(arrayNum));

// 9 . Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке.

// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const revers = (a) => {
//   let result = [];
//   for (let i of a) {
//     result.unshift(i);
//   }
//   return result;
// };
// console.log(revers(num));

// 10 . Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.

const array = [1, 2, 3, 4, 5];
let num = 1;
let arrayMore = (arr) =>
  arr.reduce((sum, elem) => {
    if (sum > 10) {
      return num;
    } else {
      num++;
      return sum + elem;
    }
  });

console.log(arrayMore(array));

// 11 . Напишите функцию arrayFill, которая будет заполнять массив заданными значениями. Первым параметром функция принимает значение, которым заполнять массив, а вторым - сколько элементов должно быть в массиве. Пример: arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x'].

function arrayFill(x, count) {
  let arr = [];
  for (let i = 1; i <= count; i++) {
    arr.push(x);
  }
  return arr;
}
console.log(arrayFill('x', 5));
