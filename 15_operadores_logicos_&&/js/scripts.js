// Auxiliam o if em uma comparação mais complexa.
// Decide o fluxo da aplicação.
// Sintaxe: && que também é conhecido como AND;
// Retorna apenas duas expressões true.
// Qualquer outro resultado o operador lógico irá retornar false.

var idade = 22
var nome = 'Gustavo'

if(nome == 'Gustavo' && idade == 22){
    console.log('O Gustavo pode ir na aula de basquete')
} else{
    console.log('Esse não é o Gustavo')
}

// Não tem limite de && ou and que pode ser utilizado. Comumente são utilizados entre 2 ou 3.
if(1== 1 && 3 > 2 && true){
    console.log('passou')
}

// Pode também isolar operações com parênteses. Valida uma operação e depois outro.
if((1== 1 && 3 > 3) && true){
    console.log('passou')
} else if(nome === 'Gustavo' && idade >=21){
    console.log('Aqui passa!')
}
