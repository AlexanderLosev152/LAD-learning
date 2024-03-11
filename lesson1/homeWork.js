// 1 . Вывести в терминал строку “Hello World!”
console.log("Hello world !!!");

// 2. Создать переменную для каждого типа данных

let message = "hello"; // string
let number = 111; // number
let isTrue = true; // boolean
let user = {
  name: "Alex",
  secondName: "Losev",
  age: 38,
  work: true,
}; // object
function hello() {
  console.log("hello world !!!");
}

// 4. Вывести ее тип через оператор typeof и функцию typeof
console.log(typeof message); //string
console.log(typeof number); // number
console.log(typeof isTrue); // boolean

// 5. Попробовать изменить переменную объявленную через const

const name = "Alex";
// name = "Oleg"; // - ошибка.так делать нельзя

// 6 .Попробовать изменить переменную с типом object объявленную через const

const object = {
  name: "Alex",
  secondName: "Losev",
};
// object = 777; // - ошибка.так делать нельзя;

// 7. Попробовать изменить переменную с типом object объявленную через let
user = "Alex";
console.log(user); // Alex

// 8. Попробовать изменить переменную с типом object объявленную через var
var main = "info";
main = 777;
console.log(main); // изменять переменную обьяленную через var можно.ошибки не будет
