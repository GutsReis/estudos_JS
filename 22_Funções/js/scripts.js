// Blocos de códigos reutilizaveis
// Evitamos a repetição da lógica de um código em diversas partes do código
// A função precisa ser invocada para ser executada

function primeiraFuncao () {
    console.log('Hello world das funções')
}

primeiraFuncao()

function dizerNome(nome){
    console.log('O nome é: ' + nome)
}
// Pode repetir quantas vezes quiser
dizerNome('Gustavo')
dizerNome('Silva')
dizerNome('Reis')

var nomeDeBancoDeDados = 'Gustavo'

dizerNome(nomeDeBancoDeDados)

function soma (a, b){
    var soma = a + b
    return soma
}

var somaUm = soma(2,5)
console.log(somaUm)

var somaDois = soma (5,5)
console.log(somaDois)

console.log(soma(4,5))