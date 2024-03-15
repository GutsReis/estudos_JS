// Podemos alterar o texto de qualquer elemento de forma facil com JS
// Textos no elemento

var title = document.querySelector('#title')

console.log(title)

// innerHTML
title.innerHTML = 'Testando o texto alterado!'

// textContent -> mais utilizado, recomendado
var subtitle = document.querySelector('.subtitle')

console.log(subtitle)

subtitle.textContent = 'Testando o textContent'
