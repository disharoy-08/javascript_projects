const score = 400
console.log(score)

const balance = new Number(100)

console.log(balance)
console.log(balance.toString().length)
console.log(balance.toFixed(3))

const num1 = 234.789

console.log(num1.toPrecision(4))

const num2 = 1000000
console.log(num2.toLocaleString()) //default is us standard
console.log(num2.toLocaleString('en-IN')) // Indian system


// +++++++++++++++++ Maths ++++++++++++++++++

// console.log(Math)
// console.log(Math.abs(-4))
// console.log(Math.round(9.9))
// console.log(Math.ceil(5.8))
// console.log(Math.floor(6.8))
// console.log(Math.min(3,0,9,67,-5,6))
// console.log(Math.max(3,0,9,67,-5,6))

console.log(Math.random(1,7))
console.log((Math.random(1,7)*10) + 1)
console.log((Math.floor(Math.random(1,7)*10) + 1))

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)

