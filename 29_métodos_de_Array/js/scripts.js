// facilita nossa vida para adicionar e remover elementos, resgatar apenas uma parte do array e etc.
// lenght: número de elementos de um array

var arr = [1,2,3,4,5]

console.log(arr.length)

// push: adiciona elementos ao array

arr.push(6)
arr.push('qualquer coisa')

console.log(arr)

// pop: remove um elemento no fim do array

arr.pop()
console.log(arr)

// unshift: adiciona no começo do array

arr.unshift(0)
arr.unshift('teste')

console.log(arr)

// shift: remover no começo do array

arr.shift()

console.log(arr)

// acessar o último elemento
console.log(arr[arr.length - 1])

// isArray: consegue verificar se é um array que estamos trabalhando
console.log(Array.isArray(5))
console.log(Array.isArray(arr))