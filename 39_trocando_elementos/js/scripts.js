// Podemos também trocar um elemento com um DOM
// Trocar um parágrafo por uma div, por exemplo.
// dar um replace

var el = document.createElement('h3')

el.classList = 'testando-classe'

var texto = document.createTextNode('Este é o texto do H3')

el.appendChild(texto)

console.log(el)

// selecionar o elemento que quero trocar
var title = document.querySelector('#title')

console.log(title)

// selecionar o pai do elemento(pai do title, body)

var pai = title.parentNode

// trocar os elementos

pai.replaceChild(el, title)