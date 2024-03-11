// for tem uma sintaxe mais complexa, mas é optado pela maioria dos programadores
// a instrução fica toda em uma linha, facilitando maior controle.


for(var i = 0; i <= 10; i++){
    console.log('repetindo for: ' + i)
}

var arr = [1, 2, 3, 4]

for(var j = 0; j <= arr.length; j++){
    console.log(arr[j])
}
// Comprimento do array: Length.
console.log(arr.length)

for(var x = 5; x <= 100; x *= 3){
    console.log(x)
}
