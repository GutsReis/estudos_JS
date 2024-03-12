// Os nossos dados começam a ter caracteristicas de um objeto.
// Conseguimoscriar nossos proprios objetos e inseri-los no código, a fim de alguma funcionalidade.
// sempre separe cada tópico com vírgua (,)
let pessoa = {
    nome: 'Gustavo',
    idade: 22,
    falar: function(){
        console.log('Olá, tudo bem?')
    },
    soma: function(a,b){
        return a + b
    }
}

console.log(pessoa.nome)

pessoa.falar()

var soma = pessoa.soma(2, 2)

console.log(soma)