// O texto de um elemento é considerado uma nó na arvore do DOM
// Temos que criar o texto do elemento também.

// Criando um novo parágrafo
var novoParagrafo = document.createElement('p')

console.log(novoParagrafo)

var texto = document.createTextNode('Este é o conteúdo do parágrafo')

novoParagrafo.appendChild(texto)

console.log(novoParagrafo)

var body = document.querySelector('body')

console.log(body)

body.appendChild(novoParagrafo)

// Inserir um container
var container = document.getElementById('container')

console.log(container)

var el = document.createElement('span')

el.appendChild(document.createTextNode('texto do span'))

console.log(el)

container.appendChild(el)