// utilizando let e const podemos criar até instruções com IF no escopo, deixando o código mais confiavel
let x = 5 // var x = 5.

x = 12

console.log(x)

if (true) {
    let x = 20

    console.log('const ' + x)

    const y = 50

    console.log('const if ' + y)
}
// Podemos ter o escopo local em blocos também, como verificado acima.
console.log(x) 