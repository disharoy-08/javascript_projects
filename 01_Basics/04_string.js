const name = "disha"
const repoCount = 50

//console.log(name + repoCount + "roy") // old process

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`) // string interpulation method

const gameName = new String('dishahhc')

// console.log(gameName[4])
// console.log(gameName.__proto__)
// console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(3))
// console.log(gameName.indexOf('h'))

const newString = gameName.substring(1,5)
console.log(newString)

const anoString = gameName.slice(-8,4)
console.log(anoString)

const new1 = "    disha roy  "
console.log(new1)
console.log(new1.trim())

const url = "https://disha.com/disharoy20"
console.log(url)
console.log(url.replace('20','%2%0'))
console.log(url.includes('chutti'))

const newName = 'disha-roy-disha@gmail.com'

console.log(newName.split('-'))


