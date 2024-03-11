// O if quando recebe uma condição negativa, pode adicionar o else
// Quando temos o else if, obrigatoriamente temos que adicionar uma expressão nova.
// Pode adicionar quantos else if quiser
var nome = 'Gustavo'

if(nome == 'Pedro'){
    console.log('O nome é Pedro')
} else if(nome == 'Gustavo'){
    console.log('O nome é Gustavo')
} else if(nome == 'Chaves'){
    console.log('O nome é Chaves')
} else{
    console.log('Ele possui outro nome!')
}

var idade = idade > 20

if(idade >= 19){
    console.log('Ele pode entrar na festa')
} else{
    console.log('Ele não tem idade para entrar na festa')
}