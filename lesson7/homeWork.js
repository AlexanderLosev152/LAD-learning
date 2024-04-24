// 1 . Что выведет функция?
// function f() {
//   alert(this);
// }

// let user = {
//   g: f.bind(null),
// };

// user.g();

//в терминале выводит  ReferenceError: alert is not defined
//в консоле браузера alert вывел [object Window]

// ===================================================================== //

// 2 . Можем ли мы изменить this дополнительным связыванием?

// function f() {
//   alert(this.name);
// }

// f = f.bind({ name: "Вася" }).bind({ name: "Петя" });

// f();

// Можно сделать новую привязку, но нельзя изменить существующую.

// ===================================================================== //

// 3 . В свойство функции записано значение. Изменится ли оно после применения bind?

// function sayHi() {
//   alert(this.name);
// }
// sayHi.test = 5;

// let bound = sayHi.bind({
//   name: "Вася",
// });

// alert(bound.test);

// Ответ: undefined.
// Результатом работы bind является другой объект. У него уже нет свойства test.

// ===================================================================== //

// 4 . Вызов askPassword() в приведённом ниже коде должен проверить пароль и затем вызвать user.loginOk/loginFail в зависимости от ответа.
// Однако, его вызов приводит к ошибке. Почему?

// function askPassword(ok, fail) {
//   let password = prompt("Password?", "");
//   if (password == "rockstar") ok();
//   else fail();
// }

// let user = {
//   name: "Вася",

//   loginOk() {
//     alert(`${this.name} logged in`);
//   },

//   loginFail() {
//     alert(`${this.name} failed to log in`);
//   },
// };

// askPassword(user.loginOk, user.loginFail);

// Ошибка происходит потому, что askPassword получает функции loginOk/loginFail без контекста.

// Когда они вызываются, то, естественно, this=undefined.

// ===================================================================== //

// 5 .  Объект user был изменён. Теперь вместо двух функций loginOk/loginFail у него есть только одна – user.login(true/false).
// Что нужно передать в вызов функции askPassword в коде ниже, чтобы она могла вызывать функцию user.login(true) как ok и функцию user.login(false) как fail?

// function askPassword(ok, fail) {
//   let password = prompt("Password?", "");
//   if (password == "rockstar") ok();
//   else fail();
// }

// let user = {
//   name: "John",

//   login(result) {
//     alert(this.name + (result ? " logged in" : " failed to log in"));
//   },
// };

// askPassword(?, ?);

// Можно использовать стрелочную функцию-обёртку:
// askPassword(() => user.login(true), () => user.login(false));

// ===================================================================== //

// 6 . Напишите в указанном месте конструкцию с методом bind() так, чтобы this внутри функции func всегда указывал на value. из переменной elem.

// const elem = { value: "Привет" };

// function func(surname, name) {
//   alert(this.value + ", " + surname + " " + name);
// }

// //Тут напишите конструкцию с bind()

// func = func.bind(elem);

// func("Иванов", "Иван"); //тут должно вывести 'привет, Иванов Иван'
// func("Петров", "Петр"); //тут должно вывести 'привет, Петров Петр'

// 7. Реализовать таймер-функцию используя замыкания. Функция принимает два  аргумента начальное значение и значение завершения. Таймер движется назад.При достижении точки завершения в консоль выводится значение таймера и сообщение о завершении работы таймера.

// function timerFunction(start, end) {
//   let stopInterval = setInterval(() => {
//     start--;
//     if (start === end) {
//       clearInterval(stopInterval);
//     }
//     console.log(start);
//   }, 1000);
// }

// timerFunction(10, 1);
