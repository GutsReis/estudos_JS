// Permite executar uma função depois de uma dedterminada ação

// setTimeout
console.log('Antes do setTimeout');

setTimeout(function() {
    
    console.log('Testando o setTimeout');

}, 2000);

console.log('depois do setTimeout');

// setInterval
setInterval(function() {

    console.log('testando o setInterval');

}, 1000);