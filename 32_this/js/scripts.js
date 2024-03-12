// quando falamos this fora de qualquer contexto, ele apontará para o objeto global window.
// em objetos o this vai referir a instância e pode acessar propriedades

var teste = 4

console.log(this.teste)
console.log(teste)


let pessoa = {
    nome: 'Gustavo',
    idade: 22,
    falar: function(){
        console.log('Olá, tudo bem?')
    },
    dizerNome: function () {
        console.log('O meu nome é ', + this.nome)
    },
    aniversario: function() {
        this.idade += 1
    },
    saudacao: function () {
        return 'sr. ' + this.nome
    }
}

pessoa.dizerNome()

console.log(pessoa.idade)