// O escopo global que é iniciado em toda a aplicação
// se tivermos um código dentro de uma função, teremos um código em um escopo global.

var x = 1

var y = 3

console.log(x, y)

// essas variaveis acima estão no escopo global.

function teste() {
    var z = 0

    console.log(z)

    console.log(x)
}
// Esse exemplo acima está em um escopo local.

teste()

function testando(){
    var z = 5

    console.log(z)
}

testando ()

if() {
    var p = 1
}

console.log(p)