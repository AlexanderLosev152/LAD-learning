console.log("кот" > "код"); // true - т больше чем д
console.log("2" + 2 * "2"); // 24.сначала *.получаеться 2*2=4.потом проиходит конкатинация и получаем 24
console.log(undefined == null); // true - значения равны друг другу и не равны никаким другим значениям
console.log(undefined != null); // false - значения равны друг другу и не равны никаким другим значениям
console.log(null == 0); // false - null - пусто.0 - это число
console.log(2 > "3"); // false - "3" преобразуеться в number. 3 больше чем 2
console.log(null - false + true); // 1 - 0-0+1
console.log(1 / "l"); // Nan - number не делиться на string
console.log("2" * "3"); // 6 - значения преобразуються к типу number . 2 * 3 = 6;
console.log(4 + 5 + "O"); // 9o - 4 + 5 = 9.потом конкатенация 9о
console.log("l" + 4 + 5); // 145 - происходит конкатенация .т.к первый string
console.log("4" - 2); // 2 - str преобразуеться в number. 4 - 2 = 2
console.log("4" - "4x"); // NaN - разные типы
console.log("23" == 23); // true - 23 равно 23
console.log(null == false); // false - значения null и undefined равны == друг другу и не равны любому другому значению
console.log(" -4 " / 0 + 1); // -infinity - при делнии на -0  получаем infinity
console.log(null + 1); // 1 -  null становится 0 . 0 + 1 = 1
console.log(undefined + null); //NaN - значения приводяться к одному типу number
console.log(1 === "1"); //fasle - значения разных типов
console.log("2" > 10); // fasle- 2 преобразует в number. 2  меньше чем 10
console.log(NaN == undefined); // false - значение undefined не равно ни какому значению
