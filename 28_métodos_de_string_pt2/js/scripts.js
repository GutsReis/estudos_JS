// pode modificar a fonte em caixa alta e baixa com JS
// toLowerCase e toUpperCase

var frase = 'Essa é a frase que vamos manipular'

var fraseCaixaAlta = frase.toUpperCase()

console.log(fraseCaixaAlta)

console.log(frase.toLowerCase())


// trim: remove os espaços do nome.

var nome = '    gustavo     '

var nomeTrim = nome.trim()

console.log(nome)
console.log(nomeTrim)

// split: transforma um texto em array

console.log(frase.split(' '))

var tags = 'PHP, JavaScript, HTML, CSS'

console.log(tags.split(','))

// lastIndexOf: encontrando a palavra chave, e a última palavra chave.

var fraseDois = 'Eu quero a ultima palavra teste dessa frase teste'

console.log(fraseDois.indexOf('teste'))

console.log(fraseDois.lastIndexOf('teste'))