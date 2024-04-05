// const people = {
//   'min-age': 18,
//   sayName: function () {
//     console.log(this.name)
//   },
// }

// people.name = 'Ivan'
// people.name = 'Sergey'
// people.age = 27

// const value = 'car'

// people[value] = 'bmw'

// delete people.age
// console.log(people)
// console.log(people['min-age'])
// people.sayName()

// const myFavoriteFilm = {
//   name: 'Фильм',
//   date: 1990,
//   director: 'режисеер',
//   couyntry: 'Россия',
// }

// myFavoriteFilm.num$ = 22000
// myFavoriteFilm.nameFilm = function () {
//   console.log(this.name)
// }

// delete myFavoriteFilm.date

// console.log(myFavoriteFilm)

const numberNaN = 'string'
const number = 100

console.log(Number.isFinite(number))

const generaterRandonValue = (min, max) => {
  return Math.floor((max - min + 1) * Math.random() + min)
}

console.log(generaterRandonValue(1, 4))
