const randomFruit = (fruits) => {

  const randomNumber = Math.floor(Math.random() * fruits.length)

  return fruits[randomNumber]
}
let fruits = ['grapes', 'banana', 'orange', 'apple', 'mango']
// console.log(fruits[0])
console.log(randomFruit(fruits))