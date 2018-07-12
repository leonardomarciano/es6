var numbers = [1, 2, 3, 4, 5]
//filtra os arrays com uma condição como função!
console.log(numbers.filter(n => n > 2))
//no exemplo: condição é uma função e retorna todos cujo o valor é maior que 2

//
console.log(numbers.reduce((acum, current) => acum + current))

console.log(numbers.find(n => n === 3))