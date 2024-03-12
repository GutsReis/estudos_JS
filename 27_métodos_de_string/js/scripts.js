// length: comprimento o uquantidade de caracteres.

var nome = 'Gustavo'

console.log(nome.length)

var obj = 'bola'

console.log(obj.length)

// indexOf: indice de tal caractere ou string que quer verificar no texto

console.log(nome[2])

var frase = 'o Rato roeu a roupa do rei de roma'

console.log(frase.indexOf('roeu'))

// slice: remove uma parte da frase

var roeu = frase.slice(7, 11)

console.log(roeu)

// replace: trocar uma frase da string.

var novaFrase = frase.replace('roeu', 'teste')

console.log(novaFrase)
