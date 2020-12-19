const R = require('rambda')

const reverse = (str) => str.trim().split('').reverse().join('')

const upperFirst = (str) => str[0].toUpperCase() + str.substring(1)

const addPeriod = (str) => str + (str[str.length - 1] === '.' ? '' : '.')

const reverseSentence = R.pipe(reverse, upperFirst, addPeriod)

console.log(reverse('yppah'))
// console.log(reverseSentence('yawa dna pu pu'))

module.exports = reverseSentence

// const reverseSentence = (str) => {
//   const reversed = str.trim().split('').reverse().join('')

//   return (
//     reversed[0].toUpperCase() +
//     reversed.substring(1) +
//     (reversed[reversed.length - 1] === '.' ? '' : '.')
//   )

// }

// console.log(reverseSentence('yawa dna pu pu'))

// const reverseSentence = (str) => {
//   return str.split(/\b/).reverse().join('')
// }
// console.log(reverseSentence('yawa dna pu pu'))
