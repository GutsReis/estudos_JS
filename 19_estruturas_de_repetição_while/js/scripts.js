// Essas estruturas servem para repetir n vezes uma operação
// Pode repetir uma determinada lógica em cada elemento de um array;
// As estruturas mais utilizadas são: while e for;
// Tomar cuidado com um loop infinito. exp: i++

var x = 0

while(x <= 5){
    console.log('testando repetição ' + x)
    // incrementador
    x++
}

var arr = ['teste', 'testando', 'a', 'b']
var y = 0
while(y <= 3){
    console.log(arr[y])
    y++
}

var palavra = 'Gustavo'
var i = 0
while(i <= 7){
    console.log(palavra[i])
    i++
}