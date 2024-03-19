// Operador lógico || é conhecido como Or;
// retorna true caso uma das operações retorne true;
// O Or retorna false apenas se as duas expressões forem falsas.

var idade = 19
var nome = 'Reis'

if(nome == 'Gustavo' || idade > 22){
    console.log('Pode entrar na aula de basquete')
} else{
    console.log('Não pode praticar nesta aula.')
}

// Vemos que somente a expressão do Or precisou ser true, para rodar no console do navegador.
if(nome == 'Gustavo' && 15 > 20 || 10 == 10){
    console.log('testando')
}

// Isolando as expressões fica mais entendivel nesse caso.
if(nome == 'Gustavo' || (15 > 20 && 10 == 10)){
    console.log('testando')
} else{
    console.log('não deu certo')
}