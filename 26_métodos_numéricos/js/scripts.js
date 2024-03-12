// O objeto Number, pai dos números, contém métodos muito uteis para trabalhar com numeros em JS.
// a maioria dos tipos de dado também tem um objeto pai: String, object, Array

// parseFloat 10.0: pegamos um valor e transformamos em float(ponto flutuante)
console.log(parseFloat('12.999'))
console.log(Number.parseFloat('12.999'))

// parseInt: transforma o valor numérico em inteiro
console.log(parseInt('10'))
console.log(parseInt(16.96))

// toFixed: arredonda o número
console.log(23.60606060.toFixed(1))

// isNaN: 

console.log(isNaN('teste'))
console.log(isNaN(12))
console.log(isNaN('14'))

// MAX_VALUE e MIN_VALEU

console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)

console.log(2.7976931348623157e+308)

