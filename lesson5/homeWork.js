// 1 . Преобразовать строку в массив слов. Напишите функцию stringToarray(str), которая преобразует строку в массив слов.

const stringToarray = (str) => str.split(' ')
console.log(stringToarray('hello world !!!'))

// 2. Напишите функцию deleteСharacters(str, length), которая возвращает подстроку, состоящую из указанного количества символов.

const deleteCharacters = (str, length) => str.slice(0, length)
console.log(deleteCharacters('hello world !!!', 3))

// 3 . Напишите функцию insertDash(str), которая принимает строку str в качестве аргумента и вставляет тире (-) между словами. При этом все символы строки необходимо перевести в верхний регистр.

const insertDash = (str) => str.toUpperCase().split(' ').join('-')
console.log(insertDash('hello world !!!'))

// 4 . Напишите функцию, которая принимает строку в качестве аргумента и преобразует регистр первого символа строки из нижнего регистра в верхний.

const strFirstCharacterUppercase = (str) =>
  str[0].toUpperCase() + str.slice(1).toLowerCase()
console.log(strFirstCharacterUppercase('hello world !!!'))

// 5 .Напишите функцию capitalize(str), которая возвращает строку, в которой каждое слово начинается с заглавной буквы.

const capitalize = (str) =>
  str
    .split(/\s+/)
    .map((string) => string[0].toUpperCase() + string.substring(1))
    .join(' ')

console.log(capitalize('привет мир !!!'))

// 6 . Напишите функцию changeRegister(str), которая принимает в качестве аргумента строку и и заменяет регистр каждого символа на противоположный. Например, если вводится «КаЖдЫй ОхОтНиК», то на выходе должно быть «кАжДыЙ оХоТнИк».

const changeRegister = (str) => {
  let result = str
    .split('')
    .map((el) =>
      el === el.toLowerCase() ? el.toUpperCase() : el.toLowerCase()
    )
    .join('')
  return result
}
console.log(changeRegister('КаЖдЫй ОхОтНиК'))

// 7 . Напишите функцию removeChar(str), которая возвращает строку, очищенную от всех не буквенно-цифровых символов.

const removeChar = (str) => str.replaceAll(/[^A-Z\a-z\s]/g, '')
console.log(removeChar('Hello # 123'))

// 8 . Напишите функцию zeros(num, len), которая дополняет нулями до указанной длины числовое значение с дополнительным знаком «+» или «-» в зависимости от передаваемого аргумента.

const zeros = (num, len, sign) => sign + ('' + num).padStart(len, '0')
console.log(zeros('strt', 50, '+'))

// 9. Напишите функцию comparison(str1, str2), которая сравнивает строки без учёта регистра символов.

const comparison = (str1, str2) => str1.toLowerCase() === str2.toLowerCase()
console.log(comparison('Hello', 'world'))

// 10 . Напишите функцию insensitiveSearch(str1, str2), которая осуществляет поиск подстроки str2 в строке str1 без учёта регистра символов.

const insensitiveSearch = (str1, str2) =>
  str1.toLowerCase().indexOf(str2.toLowerCase()) >= 0
    ? 'Содержит'
    : 'Не содержит'

console.log(insensitiveSearch('hello World', 'world'))

// 11 . Напишите функцию initCap(str), которая преобразует стиль написания составных слов строки в camelCase, при котором несколько слов пишутся слитно без пробелов, при этом каждое слово внутри строки пишется с заглавной буквы.

const initCap = (str) =>
  str
    .trim()
    .split(' ')
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase())
    .join('')

console.log(initCap('hello world'))

// 12 . Напишите функцию initSnake(str), которая преобразует стиль написания составных слов строки из camelCase в snake_case, при котором несколько слов разделяются символом подчеркивания (_), причём каждое слово пишется с маленькой буквы.

function initSnake(str) {
  let result = str.replace(/([A-Z])/g, ' $1')
  return result.split(' ').join('_').toLowerCase()
}

console.log(initSnake('helloWorld'))

// 13 . Напишите функцию repeatStr(str, n), которая возвращает строку повторяемую определённое количество раз.

let repeatStr = (str, n) => {
  for (let i = 1; i <= n; i++) {
    console.log(i + ' ' + str)
    // return i + ' ' + str
    // почемуто с return не работает
  }
}
// console.log(repeatStr('hello', 3))
repeatStr('hello', 3)

// 14 . Напишите функцию path(pathname), которая возвращает имя файла (подстрока после последнего символа "/" ) из полного пути к файлу.

const path = (pathname) => pathname.slice(pathname.lastIndexOf('/') + 1)
console.log(path('hello/123'))

// 15 . Создайте функцию endsWith(), который сравнивает подстроку str1 с окончанием исходной строки str и определяет заканчивается ли строка символами подстроки

const endsWith = (str, substring) => {
  let z = str.slice(-substring.length)
  let x = z === substring ? 'заканчиваеться' : 'не заканчиваеться'
  return x
}

console.log(endsWith('hello', 'lo'))

// 16 . Напишите функцию getSubstr(str, char, pos), которая возвращает часть строки, расположенную после или до указанного символа char в зависимости от параметра pos.

const getSubstr = (str, char, pos) => {
  let index = str.indexOf(char)
  return pos === 'before' ? str.slice(0, index) : str.slice(index + 1)
}

console.log(getSubstr('hello world !!!', 'w'))

// 17 . Напишите функцию insert(str, substr, pos), которая вставляет подстроку substr в указанную позицию pos строки str. По умолчанию подстрока вставляется в начало строки.

const insert = (str, ins = '', pos = 0) =>
  str.slice(0, pos) + ins + str.slice(pos)

console.log(insert('world !!!', 'hello '))

// 18 . Напишите функцию limitStr(str, n, symb), которая обрезает строку, если она длиннее указанного количества символов n. Усеченная строка должна заканчиваться троеточием «...» (если не задан параметр symb) или заданным символом symb.

const limitStr = (str, n = 0, symb = '') =>
  str.slice(0, n) + (symb ? symb : '...')

console.log(limitStr('hello world !!!', 4))

// 19 . Напишите функцию count(str, stringsearch), которая возвращает количество символов stringsearch в строке str.

const count = (str, symb) => {
  let counter = 0
  for (let char of str) {
    if (char === symb) {
      counter++
    }
  }
  return counter
}

console.log(count('hello world', 'l'))

// 20 . Напишите функцию strip(str), которая удаляет все лишние пробелы из строки str.

const strip = (str) => str.trim()
console.log(strip('   hello world !!!  '))

// 21 . Напишите функцию cutString(str, n), которая удаляет лишние слова из строки str, оставив в ней n слов.

const cutString = (str, n) => {
  return str.split(' ').splice(0, n).join(' ')
}

console.log(cutString('hello world !!!', 2))

// 22 . Напишите функцию findWord(word, str), которая проверяет, существует ли в строке str слова word.

const findWord = (word, str) => (str.includes('word') ? true : false)
console.log(findWord('word', 'hello word !!!'))
