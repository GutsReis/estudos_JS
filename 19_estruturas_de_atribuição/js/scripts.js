// as maneiras mais utilizadas de atribuir um valor a variavel: +=, -=, *=, /=
// forma resumidade da operação x = x + y
// em loops é comum utilizar operadores ++ ou --

var x = 3
var y = 4

// Soma
console.log(x += y)

//subtração
console.log(x -= y)

// Multiplicação
console.log(x *= y)

// Divisão
console.log(x /= y)

// Loops
console.log(x++)
console.log(x--)

while(x <= 100){
    console.log(x)
    x *= 2
}

console.log(x)

var j = 5

while(x > 0){
    console.log(x)
    x -= j
}