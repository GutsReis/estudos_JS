// null representa um valor, pode ser utilizada para iniciar a variavel com null e depois definir.
// undefined é representado uma variavel com um valor não atribuido.

// Hoisting: içamento. Todas as variaveis e funções são levadas ao topo antes do codígo ser interpretado. Estará inicializada mas não terá valor definido.
console.log(sobrenome)
console.log(numero)

var nome = null
var sobrenome = 'Reis'

console.log(nome)
console.log(sobrenome)

nome = 'Gustavo'

console.log(nome)

var numero = 5