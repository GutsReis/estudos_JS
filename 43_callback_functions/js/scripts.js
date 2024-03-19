// Permite executar uma função depois de uma dedterminada ação
// Conceito fundamental para entender a parte assíncrona do JavaScript

function exibir(num) {
    console.log('a operação resultou em: ' + num)
}

function soma(a, b, callback){
    var op = a + b;
    callback(op);
}

function multiplicacao(a, b, cb) {
    var op = a * b;
    cb(op);
}

soma(2, 2, exibir);

multiplicacao(2, 4, exibir);