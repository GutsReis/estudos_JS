// Podemos criar um outro array a partir do array que temos
// identificar idice de um elemento específico

// splice: adiciona um elemento no meio do array

var arr = [1,2,3,4,5]

arr.splice(2, 0, 999)

console.log(arr)

arr.splice(4, 1)

console.log(arr)

// indexOf: acha o índice do elemento

console.log(arr.indexOf(5))

// join: transformando array em uma string

var arr2 = ['O', 'Rato', 'Roeu', 'a', 'roupa']

console.log(arr2.join(' '))

// reverse: inverte um array

console.log(arr2.reverse())

